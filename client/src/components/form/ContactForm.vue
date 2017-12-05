<template>
  <div>
    <form id="contact-form">
      <div class="form-group">
        <label for="firstname">First name</label>
        <input v-validate="'required'" value="firstname" name="firstname" type="text" class="form-control" v-model="firstname" placeholder="Enter First name">
        <span v-show="errors.has('firstname')" class="text-danger">{{ errors.first('firstname') }}</span>
      </div>
      <div class="form-group">
        <label for="lastname">Last name</label>
        <input v-validate="'required'" value="lastname" name="lastname" type="text" class="form-control" v-model="lastname" placeholder="Enter Last name">
        <span v-show="errors.has('lastname')" class="text-danger">{{ errors.first('lastname') }}</span>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input v-validate="'required|email'" value="email" name="email" type="email" class="form-control" v-model="email" placeholder="Enter Email">
        <span v-show="errors.has('email')" class="text-danger">{{ errors.first('email') }}</span>
      </div>
      <div class="form-group">
        <label for="number">Phone Number</label>
        <input v-validate="'required|digits: 10'" value="number" name="number" type="text" class="form-control" v-model="number" placeholder="1234567890">
        <span v-show="errors.has('number')" class="text-danger">{{ errors.first('number') }}</span>
      </div>
      <div class="form-group">
        <label for="dob">Date of birth</label>
        <input v-validate="'required|date_format:MM/DD/YYYY|before:' + currentDate" value="dob" name="dob" type="text" class="form-control" v-model="dob" placeholder="MM/DD/YYYY">
        <span v-show="errors.has('dob')" class="text-danger">{{ errors.first('dob') }}</span>
      </div>
      <div class="form-group">
        <label for="email">Street Address</label>
        <input v-validate="'required'" value="street" name="street" type="text" class="form-control" v-model="street" placeholder="Street Address">
        <span v-show="errors.has('street')" class="text-danger">{{ errors.first('street') }}</span>
      </div>
      <div class="form-group">
        <label for="city">City</label>
        <input v-validate="'required'" value="city" name="city" type="text" class="form-control" v-model="city" placeholder="City">
        <span v-show="errors.has('city')" class="text-danger">{{ errors.first('street') }}</span>
      </div>
      <div class="form-group">
        <label for="state">State</label>
          <select v-validate="'required|not_in:'" value="state" name="state" class="form-control" v-model="state">
            <option value="">-</option>
            <option value="AK">Alaska</option>
            <option value="AL">Alabama</option>
            <option value="AR">Arkansas</option>
            <option value="AZ">Arizona</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DC">District of Columbia</option>
            <option value="DE">Delaware</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="IA">Iowa</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="MA">Massachusetts</option>
            <option value="MD">Maryland</option>
            <option value="ME">Maine</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MO">Missouri</option>
            <option value="MS">Mississippi</option>
            <option value="MT">Montana</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="NE">Nebraska</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NV">Nevada</option>
            <option value="NY">New York</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="PR">Puerto Rico</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VA">Virginia</option>
            <option value="VT">Vermont</option>
            <option value="WA">Washington</option>
            <option value="WI">Wisconsin</option>
            <option value="WV">West Virginia</option>
            <option value="WY">Wyoming</option>
          </select>
          <span v-show="errors.has('state')" class="text-danger">{{ errors.first('state') }}</span>
      </div>
      <div class="form-group">
        <label for="zipcode">Zipcode</label>
        <input v-validate="'required|digits:5'" value="zipcode" name="zipcode" type="text" class="form-control" v-model="zipcode" placeholder="Zipcode">
        <span v-show="errors.has('zipcode')" class="text-danger">{{ errors.first('zipcode') }}</span>
      </div>
      <button :disabled="errors.any()" @click.prevent="validate" type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import ContactService from '../../services/ContactService';
import swal from 'sweetalert';
import moment from 'moment';

export default {
  data () {
    return {
      id: '',
      firstname: '',
      lastname: '',
      email: '',
      number: '',
      dob: '',
      street: '',
      city: '',
      state: '',
      zipcode: '',
      currentDate: moment().format('MM/DD/YYYY')
    }
  },
  mounted() {
    if (this.$route.params.id) {
      // Get contact information
      this.getContact(this.$route.params.id);
    }
  },
  methods: {
    // Configure Babel, inorder to use async/await 
    // https://stackoverflow.com/questions/46389267/using-async-await-with-webpack-simple-configuration-throwing-error-regeneratorr/46734082#46734082
    validate () {
      // Checks validity of input fields
      this.$validator.validateAll({ 
          firstname: this.firstname, 
          lastname: this.lastname,
          email: this.email,
          number: this.number,
          dob: this.dob,
          street: this.street,
          city: this.city,
          state: this.state,
          zipcode: this.zipcode
        })
        .then(result => {
          if (!result) {
            // Validation failed
            return;
          }
          // Validation successful
          // Create or Update contact information
          this.createOrUpdate(this.id);
        }).catch(error => {
          console.log('Something went wrong!', error);
        });
    },
    async createOrUpdate (id) {
      let contact = {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          number: this.number,
          dob: this.dob,
          street: this.street,
          city: this.city,
          state: this.state,
          zipcode: this.zipcode,
      }
      if (id) {
        contact['id'] = id;
      }
      let response = await ContactService.createOrUpdate(contact);
      // If response wasn't good :(
      if (response.data.status === 'info' || response.data.status === 'warning') {
        swal(response.data.status, response.data.message, response.data.status)
      }
      // Response was good, contact was either Created or Updated
      else {
        swal(response.data.status, response.data.message, response.data.status)
          .then(value => {
            // When user clicks 'ok' button, routes to list of contacts page
            this.$router.replace('/');
          });
      }
    },
    // Get one contact
    getContact(id) {
      ContactService.getContact(this.$route.params.id)
        .then(result => {
          // Contact does not exist, user was playing around with URL
          if (result.data.status === 'error') {
            swal(result.data.status, result.data.message, result.data.status)
                    .then(value => {
                      // When user clicks 'ok' button, routes to list of contacts page
                      this.$router.replace('/');
                    });
            return;
          }
          // Sets the contact's information
          this.id = result.data[0].id;
          this.firstname = result.data[0].firstname;
          this.lastname = result.data[0].lastname;
          this.email = result.data[0].email;
          this.dob = moment(result.data[0].dob, moment.ISO_8601).format('MM/DD/YYYY');
          this.number = result.data[0].number;
          this.street = result.data[0].street;
          this.city = result.data[0].city;
          this.state = result.data[0].state;
          this.zipcode = result.data[0].zipcode;
        })
    }
  }
}
</script>

<style>
#contact-form {
  margin: auto;
  width: 60%;
}
</style>