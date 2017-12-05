<template>
    <div class="search">
        <h2 class="searchTitle">Search Contacts</h2>
        <input type="searchInput" class="form-control search" v-model="searchWord" placeholder="Search contacts by all content">
    </div>
</template>

<script>
export default {
    computed: {
        // https://vuejs.org/v2/guide/computed.html#Computed-Setter
        // Provide a setter while user types into search input field
        searchWord: {
            // the getter was required, was throwing errors
            get () {
                return;
            },
            set (value) {
                this.$store.dispatch('filterContacts', value)
            }
        }
    }
}
</script>

<style>
.search {
    margin: auto;
    width: 80%;
    text-align: center;
    margin-bottom: 10px;
}

</style>
