import * as axios from 'axios';

import { getToken } from './authentication';

export default class API {
    constructor() {
        this.api_token = null;
        this.client = null;
        this.base_url = `https://${process.env.REACT_APP_BASE_URL}`;
    }

    init = () => {
        this.api_token = getToken();
        let headers = {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        };

        if (!!this.api_token) {
            headers['Authorization'] = `Bearer ${this.api_token}`
        };

        this.client = axios.create({
            baseURL: this.base_url,
            timeout: 3000,
            headers: headers
        });

        return this.client
    }

    getUser = (id) => {
        return this.init().get(`/accounts/${id}`)
    }

    getAudio = (id) => {
        return this.init().get(`/audios/${id}`)
    }
}
