// import axios from 'axios'
import Axios from 'axios'

const axios = Axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    xsrfHeaderName: "X-XSRF-TOKEN",
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
})

export default axios