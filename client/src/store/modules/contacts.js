import ContactService from '../../services/ContactService';

const state = {
    contacts: []
}

const mutations = {
    'SET_CONTACTS' (state, contacts) {
        state.contacts = contacts;
    },
    'ADD_CONTACT' (state, contact) {
        // create copy of old state
        let contacts = state.contacts.splice();
        // Append new contact to contacts array
        contacts.push(contact);
        // Set contacts state to the copied state
        state.contacts = contacts;
    }

}

const actions = {
    initContacts: ({commit}) => {
        ContactService.getContacts()
            .then((contacts) => {
                commit('SET_CONTACTS', contacts.data);
            })
            .catch((error) => {
                console.log(error)
            })
    },
    addContact: ({commit}, contact) => {
        commit('ADD_CONTACT', contact);
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