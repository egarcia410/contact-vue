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
        let contacts = _.cloneDeep(state.contacts);
        let result = contacts.filter(contact => {
            return contact.id !== id;
        });
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
