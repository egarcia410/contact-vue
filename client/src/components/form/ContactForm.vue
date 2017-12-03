<template>
  <div>
    <form id="contact-form">
      <div class="form-group">
        <label for="firstname">First name</label>
        <input type="text" class="form-control" v-model="firstname" placeholder="Enter First name">
      </div>
      <div class="form-group">
        <label for="lastname">Last name</label>
        <input type="text" class="form-control" v-model="lastname" placeholder="Enter Last name">
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" v-model="email" placeholder="Enter Email">
      </div>
      <div class="form-group">
        <label for="number">Phone Number</label>
        <input type="text" class="form-control" v-model="number" placeholder="Phone number">
      </div>
      <div class="form-group">
        <label for="dob">Date of birth</label>
        <input type="text" class="form-control" v-model="dob" placeholder="MM/DD/YYYY">
      </div>
      <div class="form-group">
        <label for="email">Street Address</label>
        <input type="text" class="form-control" v-model="street" placeholder="Street Address">
      </div>
      <div class="form-group">
        <label for="city">City</label>
        <input type="text" class="form-control" v-model="city" placeholder="City">
      </div>
      <div class="form-group">
        <label for="state">State</label>
          <select class="form-control" v-model="state" name="state">
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
      </div>
      <div class="form-group">
        <label for="zipcode">Zipcode</label>
        <input type="text" class="form-control" v-model="zipcode" placeholder="Zipcode">
      </div>
      <button @click.prevent="create" type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import ContactService from '../../services/ContactService';

export default {
  data () {
    return {
      firstname: '',
      lastname: '',
      email: '',
      number: '',
      dob: '',
      street: '',
      city: '',
      state: '',
      zipcode: '',
      message: ''
    }
  },
  methods: {
    // Configure Babel, inorder to use async/await 
    // https://stackoverflow.com/questions/46389267/using-async-await-with-webpack-simple-configuration-throwing-error-regeneratorr/46734082#46734082
    async create () {
      const response = await ContactService.create({
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        number: this.number,
        dob: this.dob,
        street: this.street,
        city: this.city,
        state: this.state,
        zipcode: this.zipcode,
      });
      // Display message regarding any errors or successful create
      this.message = response.data.message;
      // Update Vuex state of contacts
      console.log(response.data)
      this.$store.dispatch('addContact', response.data)
      // Reset input fields
      this.firstname = '';
      this.lastname = '';
      this.email = '';
      this.number = '',
      this.dob = '',
      this.street = '';
      this.city = '';
      this.state = '';
      this.zipcode = '';
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