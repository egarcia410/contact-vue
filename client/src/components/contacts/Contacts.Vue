<template>
    <div>
        <!-- <app-search /> -->
        <app-contact-list />
    </div>
</template>

<script>
import SearchBar from './SearchBar.vue';
import ContactList from './ContactList.vue';

export default {
    components: {
        appSearchBar: SearchBar,
        appContactList: ContactList
    },
    mounted() {
        this.$store.dispatch('initContacts');
    }
}
</script>

<style>

</style>

