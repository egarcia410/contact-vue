import Api from './Api'

export default {
    create(contact) {
        return Api().post('create', contact)
    },
    getContacts() {
        return Api().get('get-contacts');
    }
}