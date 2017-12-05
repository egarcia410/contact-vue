import ContactService from '../../services/ContactService';
import _ from 'lodash';

const state = {
    contacts: [],
    filteredContacts: null
}

const mutations = {
    'SET_CONTACTS' (state, contacts) {
        state.contacts = contacts;
    },
    'DELETE_CONTACT' (state, id) {
        // Create a copy of original state contacts using lodash
        let contacts = _.cloneDeep(state.contacts);
        // Remove contact based off of the contact's id
        let result = contacts.filter(contact => {
            return contact.id !== id;
        });
        // Set the contacts state to the altered copy of the orignal state
        state.contacts = result;
    },
    'FILTER_CONTACTS' (state, word) {
        state.filteredContacts = state.contacts.filter(contact => {
            return contact.firstname.toLowerCase().includes(word.trim().toLowerCase()) ||
                    contact.lastname.toLowerCase().includes(word.trim().toLowerCase()) ||
                    contact.dob.includes(word.trim()) ||
                    contact.street.toLowerCase().includes(word.trim().toLowerCase()) ||
                    contact.city.toLowerCase().includes(word.trim().toLowerCase()) ||
                    contact.state.toLowerCase().includes(word.trim().toLowerCase()) ||
                    contact.zipcode.includes(word.trim()) ||
                    contact.number.includes(word.trim()) ||
                    contact.email.toLowerCase().includes(word.trim().toLowerCase())
        })
    }
}

const actions = {
    initContacts: ({commit}) => {
        ContactService.getContacts()
            .then((contacts) => {
                if (contacts) {
                    commit('SET_CONTACTS', contacts.data);
                }
            })
            .catch((error) => {
                console.log(error)
            })
    },
    deleteContact: ({commit}, id) => {
        commit('DELETE_CONTACT', id);
    },
    filterContacts: ({commit}, word) => {
        commit('FILTER_CONTACTS', word);
    }
}

const getters = {
    filteredContacts: state => {
        // filtered contacts does not exist, reverts to state.contacts
        return state.filteredContacts || state.contacts;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
