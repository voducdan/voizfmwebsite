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

    buildQueryString = (params) => {
        const queryString = new URLSearchParams(params).toString();
        return queryString
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
    getDiscovery = (id, page, limit = 10) => {
        // reset base url for test
        this.base_url = `${process.env.REACT_APP_API_PROTOCAL_LOCAL}://${process.env.REACT_APP_BASE_URL_LOCAL}`;

        const params = { page, limit };
        const queryString = this.buildQueryString(params)
        // return this.init().get(`/discoveries/${id}?${queryString}`)
        return this.init().get(`/discoveryDetail/${id}?${queryString}`)
    }
    getDiscoveryComment = (discoveryId) => {
        return this.init().get(`/discoveries/${discoveryId}/comments`)
    }
    getPlaylistHistory = () => {
        return this.init().get(`/profiles/playlist_histories`)
    }
    getAudioHistory = () => {
        return this.init().get(`/profiles/audio_histories`)
    }
    getPlaylistOrders = () => {
        return this.init().get(`/profiles/playlist_orders`)
    }
}
