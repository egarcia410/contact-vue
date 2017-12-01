const state = {
    contacts: []
}

const mutations = {
    'SET_CONTACTS' (state, contacts) {
        state.contacts = contacts;
    },
    // 'ADD_CONTACT'
    // 'REMOVE_CONTACT'
}

const actions = {
    initContacts: ({commit}, contacts) => {
        commit('SET_CONACTS', contacts);
    },
    addContact: ({commit}, contact) => {
        commit('ADD_CONTACT', contact);
    },
    removeContact: ({commit}, contact) => {
        commit('REMOVE_CONTACT', contact);
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