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
    getPlaylistBookmarks = (page, limit) => {
        this.base_url = `${process.env.REACT_APP_API_PROTOCAL_LOCAL}://${process.env.REACT_APP_BASE_URL_LOCAL}`;
        const params = { page, limit };
        const queryString = this.buildQueryString(params)

        return this.init().get(`/playlist_bookmarks?${queryString}`)
    }
    getChannelBookmarks = (page, limit) => {
        this.base_url = `${process.env.REACT_APP_API_PROTOCAL_LOCAL}://${process.env.REACT_APP_BASE_URL_LOCAL}`;
        const params = { page, limit };
        const queryString = this.buildQueryString(params);

        return this.init().get(`/channel_bookmarks?${queryString}`);
    }
    getAudioLikes = (page, limit) => {
        this.base_url = `${process.env.REACT_APP_API_PROTOCAL_LOCAL}://${process.env.REACT_APP_BASE_URL_LOCAL}`;
        const params = { page, limit };
        const queryString = this.buildQueryString(params);

        return this.init().get(`/audio_likes?${queryString}`);
    }
    getCategories = (code, type) => {
        const params = { code, type };
        const queryString = this.buildQueryString(params);
        return this.init().get(`/categories?${queryString}`);
    }
    getCategoryPlaylists = (code, limit = 10, ignore_ids = '', sort = 'latest', have_author = 0) => {
        const params = { limit, ignore_ids, sort, have_author };
        const queryString = this.buildQueryString(params);
        return this.init().get(`/categories/${code}/playlists?${queryString}`);
    }
    getPlaylistsRandom = (limit = 10) => {
        const params = { limit };
        const queryString = this.buildQueryString(params);
        return this.init().get(`/playlists/random?${queryString}`);
    }
    getPlaylistDetail = (id) => {
        return this.init().get(`/playlists/${id}`)
    }
    getPlaylistAnalyses = (type = 'MostListenWeek') => {
        const params = { type };
        const queryString = this.buildQueryString(params)
        return this.init().get(`/playlists/analyses?${queryString}`);
    }
    getPlaylistAudios = (id) => {
        return this.init().get(`/playlists/${id}/audios`);
    }
    ratePlaylist = (id, body) => {
        return this.init().post(`/playlists/${id}/ratings`, body);
    }
}
