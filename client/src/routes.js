import Form from './components/form/ContactForm.vue';
import Contacts from './components/contacts/Contacts.vue'

export const routes = [
    { path: '/', component: Contacts },
    { path: '/add-contact', component: Form }
]