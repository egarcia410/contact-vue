<template>
    <ul>
        <li v-for="contact in contacts" :key="contact.id">
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
                <p class="card-text">{{ contact.dob }}</p>
                <div class="title">Address</div>
                <p class="card-text">{{ contact.street }}</p>
                <p class="card-text">{{ contact.city }}, {{ contact.state }} {{ contact.zipcode }}</p>
                <div class="card-body">
                    <button class="btn btn-danger delete">Delete Contact</button>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    computed: {
        contacts() {
            return this.$store.getters.contacts;
        }
    }
}
</script>

<style scoped>
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

.delete:hover {
    color: #9CF;
}

</style>
