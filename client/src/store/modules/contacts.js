import ContactService from '../../services/ContactService';
import _ from 'lodash';

const state = {
    contacts: []
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
    }
}

const getters = {
    contacts: state => {
        return state.contacts;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
