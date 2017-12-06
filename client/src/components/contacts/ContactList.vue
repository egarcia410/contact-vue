<template>
    <ul v-if="filteredContacts.length > 0">
        <li v-for="contact in filteredContacts" :key="contact.id">
            <div class="card" style="width: 21rem;">
                <img class="card-img-top" :src="'https://robohash.org/set_set' + contact.id + '/bgset_bg1/' + contact.email + '?size=210x200'" alt="Profile picture">
                <div class="card-body">
                    <h3 class="card-title">{{ contact.firstname }} {{ contact.lastname }}</h3>
                </div>
                <div class="title">Email</div>
                <p class="card-text">{{ contact.email }}</p>
                <div class="title">Phone</div>
                <p class="card-text">{{ contact.number }}</p>
                <div class="title">DOB</div>
                <p class="card-text">{{ formatDate(contact.dob) }}</p>
                <div class="title">Address</div>
                <p class="card-text">{{ contact.street }}</p>
                <p class="card-text">{{ contact.city }}, {{ contact.state }} {{ contact.zipcode }}</p>
                <div class="card-body">
                    <button @click="deleteContact(contact.id)" class="btn btn-danger button">Delete</button>
                    <router-link 
                        :to="{ name: 'edit', params: { id: contact.id }}" 
                        tag="button" 
                        class="btn btn-info button"
                        >Edit</router-link>
                </div>
            </div>
        </li>
    </ul>
    <h2 class="header" v-else>No Contacts! Be the first to add / </h2>
</template>

<script>
import ContactService from '../../services/ContactService';
import swal from 'sweetalert';
import moment from 'moment';


export default {
    methods: {
        async deleteContact(id) {
            let response = await ContactService.delete({id: id})
            swal(response.data.status, response.data.message, response.data.status);
            if (response.data.status === 'success'){
                this.$store.dispatch('deleteContact', id);
            }
        },
        formatDate(date) {
            return moment(date, moment.ISO_8601).format('MM/DD/YYYY')
        }
    },
    computed: {
        filteredContacts() {
            return this.$store.getters.filteredContacts;
        }
    }
}
</script>

<style scoped>
.header {
    text-align: center;
}

li {
    display: inline-block;
    vertical-align:top;
}

.card {
    background: #F3F5F6;
    border-radius: 8px;
    padding-bottom: 5px;
    margin: 5px;
    text-align: center;
}

.title {
    background-color: #F3C35F;
}

.button:hover {
    color: #9CF;
}

</style>
