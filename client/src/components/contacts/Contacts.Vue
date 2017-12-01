<template>
    <div>
        <app-search />
        <app-list />
    </div>
</template>

<script>
import SearchBar from './SearchBar.vue';
import ContactList from './ContactList.vue';

export default {
    components: {
        appSearch: SearchBar,
        appList: ContactList
    }
}
</script>

<style>

</style>

