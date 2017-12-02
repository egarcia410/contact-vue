<template>
    <ul>
        <li v-for="contact in contacts">{{ contacts }}</li>
    </ul>
</template>

<script>
export default {
    computed: {
        contacts() {
            console.log('Inside ContactList');
            return this.$store.getters.contacts;
        }
    }
}
</script>

<style>

</style>
