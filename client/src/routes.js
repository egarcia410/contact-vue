import Form from './components/form/ContactForm.vue';
// import EditForm from './components/form/EditContactForm.vue';
import Contacts from './components/contacts/Contacts.vue'

export const routes = [
    { path: '/', component: Contacts },
    { path: '/add-contact', component: Form },
    { path: '/edit-contact/:id', name: 'edit', component: Form }
]