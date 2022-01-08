import * as axios from 'axios';

import { getToken } from './authentication';

export default class API {
    constructor() {
        this.api_token = null;
        this.client = null;
        this.base_url = `${process.env.REACT_APP_API_PROTOCAL}://${process.env.REACT_APP_BASE_URL}`;
    }

    init = () => {
        // this.api_token = getToken();
        // Hardcode
        this.api_token = 'wjfQexJRdn9tK7Xza-UKag';
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
        this.base_url = `https://stoplight.io/mocks/wewe-jsc/voiz-api/26913954`;
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
        this.base_url = 'https://stoplight.io/mocks/wewe-jsc/voiz-api/26913954';
        const params = { page, limit };
        const queryString = this.buildQueryString(params);
        return this.init().get(`/profiles/audio_histories/likes?${queryString}`);
    }
    getListeningPlaylists = () => {
        this.base_url = 'https://stoplight.io/mocks/wewe-jsc/voiz-api/26913954';
        return this.init().get(`/playlists/listenings`);
    }
    deleteListeningPlaylist = (id) => {
        this.base_url = 'https://stoplight.io/mocks/wewe-jsc/voiz-api/26913954';
        return this.init().delete(`/playlists/listenings`, { id });
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
        const queryString = this.buildQueryString(params);
        return this.init().get(`/playlists/analyses?${queryString}`);
    }
    getPlaylistAudios = (id) => {
        return this.init().get(`/playlists/${id}/audios`);
    }
    getRequestedBook = () => {
        // Hardcode api for testing
        this.base_url = `https://stoplight.io/mocks/wewe-jsc/voiz-api/26913954`;
        return this.init().get(`/book_request`);
    }
    requestedBook = (body) => {
        // Hardcode api for testing
        this.base_url = `https://stoplight.io/mocks/wewe-jsc/voiz-api/26913954`;
        return this.init().post(`/book_request`, body);
    }
    getCommonKeyword = () => {
        return this.init().get(`/keyword/recommendation`);
    }
    getPlaylistRecommendation = () => {
        return this.init().get(`/playlists/recommendation`);
    }
    getSearchResults = (type, keyword, limit = 20, next_offset = 1, language = '', next_query_type = '') => {
        const params = { keyword, limit, next_offset, language, next_query_type };
        const queryString = this.buildQueryString(params)
        return this.init().get(`/search/${type}?${queryString}`);
    }
    getAuthor = (id) => {
        return this.init().get(`/authors/${id}`);
    }
    getFeaturedAuthors = (page = 1, limit = 6) => {
        return this.init().get(`/authors/featured`);
    }
    getAuthorPlaylists = (id, page = 1, limit = 10) => {
        const params = { limit, page };
        const queryString = this.buildQueryString(params)
        return this.init().get(`/authors/${id}/playlists?${queryString}`);
    }
    getPlaylistRanking = (type, code) => {
        const params = { ranking_type: type, code };
        const queryString = this.buildQueryString(params)
        return this.init().get(`/playlists/rankings?${queryString}`);
    }
    getHomeNewContent = (limit = 10) => {
        const params = { limit };
        const queryString = this.buildQueryString(params)
        return this.init().get(`/playlists/new_contents?${queryString}`);
    }
    getRecommendedChannels = (page = 1, limit = 6) => {
        const params = { page, limit };
        const queryString = this.buildQueryString(params)
        return this.init().get(`/channels/recommend?${queryString}`);
    }
    bookmarkChannel = (id) => {
        return this.init().post(`/channels/${id}/bookmarks`);
    }
    bookmarkPlaylist = (id) => {
        return this.init().post(`/playlists/${id}/bookmarks`);
    }
    likeAudio = (id) => {
        this.base_url = `https://stoplight.io/mocks/wewe-jsc/voiz-api/26913954`;
        return this.init().post(`/audios/${id}/likes`);
    }
    getChannel = (id) => {
        return this.init().get(`/channels/${id}`);
    }
    getChannelPlaylists = (id, page = 1, limit = 5) => {
        const params = { page, limit };
        const queryString = this.buildQueryString(params)
        return this.init().get(`/channels/${id}/playlists?${queryString}`);
    }
    getChannelAudio = (id, page = 1, limit = 10) => {
        const params = { page, limit };
        const queryString = this.buildQueryString(params)
        return this.init().get(`/channels/${id}/audios?${queryString}`);
    }
    getUserInfo = () => {
        this.base_url = `https://stoplight.io/mocks/wewe-jsc/voiz-api/26913954`;
        return this.init().get('/profiles/me');
    }
    getUserTransactionHistory = () => {
        this.base_url = `https://stoplight.io/mocks/wewe-jsc/voiz-api/26913954`;
        return this.init().get('/profiles/orders');
    }
    updateUserInfo = (data) => {
        this.base_url = `https://stoplight.io/mocks/wewe-jsc/voiz-api/26913954`;
        return this.init().put('/profiles/me', data);
    }
    ratePlaylist = (id, data) => {
        this.base_url = `https://stoplight.io/mocks/wewe-jsc/voiz-api/26913954`;
        return this.init().post(`/playlists/${id}/ratings`, data);
    }
}
