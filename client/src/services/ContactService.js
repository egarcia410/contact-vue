import Api from './Api'

// Endpoints for the backend
export default {
    createOrUpdate(contact) {
        return Api().post('create-or-update', contact);
    },
    getContacts() {
        return Api().get('get-contacts');
    },
    delete(id) {
        return Api().post('delete-contact', id);
    },
    getContact(id) {
        return Api().get('get-contact/' + id);
    }
}