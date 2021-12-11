import * as axios from 'axios';

import { getToken } from './authentication';

export default class API {
    constructor() {
        this.api_token = null;
        this.client = null;
        this.base_url = `${process.env.REACT_APP_API_PROTOCAL}://${process.env.REACT_APP_BASE_URL}`;
    }

    init = () => {
        this.api_token = getToken();
        let headers = {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        };

        if (!!this.api_token) {
            headers['X-Authorization'] = this.api_token
        };

        this.client = axios.create({
            baseURL: this.base_url,
            timeout: 3000,
            headers: headers
        });

        return this.client
    }

    getUser = (id) => {
        // reset base url for test
        this.base_url = `${process.env.REACT_APP_API_PROTOCAL_LOCAL}://${process.env.REACT_APP_BASE_URL_LOCAL}`;
        return this.init().get(`/accounts/${id}`)
    }

    getAudio = (id) => {
        return this.init().get(`/audios/${id}`)
    }

    getCart = () => {
        // reset base url for test
        this.base_url = `${process.env.REACT_APP_API_PROTOCAL_LOCAL}://${process.env.REACT_APP_BASE_URL_LOCAL}`;
        return this.init().get(`/cart`)
    }

    getComboPackage = () => {
        return this.init().get(`/combo_packages`)
    }

    getDiscoveries = () => {
        // reset base url for test
        this.base_url = `${process.env.REACT_APP_API_PROTOCAL_LOCAL}://${process.env.REACT_APP_BASE_URL_LOCAL}`;
        return this.init().get(`/discoveries`)
    }
}
