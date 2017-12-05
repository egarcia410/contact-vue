import axios from 'axios'

// Creates and instance of axios, setting the base URL to link up with the backend
export default () => {
    return axios.create({
        baseURL: location.href.slice(0, location.href.length - 1)
    })
}