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
        // this.api_token = 'wjfQexJRdn9tK7Xza-UKag';
        this.api_token = '0lmlAI5Rr6BZuWdS7BCtdA';
        this.oauth2 = 'oauth2';
        this.oauth2_id = null;
        let headers = {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        };

        if (!!this.api_token) {
            headers['X-Authorization'] = this.api_token
        };

        this.client = axios.create({
            baseURL: this.base_url,
            timeout: 10000,
            headers: headers
        });

        return this.client
    }

    buildQueryString = (params) => {
        const queryString = new URLSearchParams(params).toString();
        return queryString
    }

    getAudio = (id) => {
        return this.init().get(`/audios/${id}`)
    }

    getCart = () => {
        // reset base url for test
        // this.base_url = `http://localhost:3333`;
        return this.init().get(`/cart`);
    }

    payment = (method, data) => {
        return this.init().post(`/payment/${method}`, data);
    }

    getComboPackage = () => {
        return this.init().get(`/combo_packages`)
    }

    getVipPackage = (is_sale = '') => {
        const params = { is_sale };
        const queryString = this.buildQueryString(params)
        return this.init().get(`/plans/packages?${queryString}`)
    }

    getDiscoveries = () => {
        return this.init().get(`/discoveries`)
    }

    getDiscovery = (id, page, limit = 10) => {
        const params = { page, limit };
        const queryString = this.buildQueryString(params)
        return this.init().get(`/discoveries/${id}?${queryString}`)
    }

    getDiscoveryComment = (discoveryId) => {
        return this.init().get(`/discoveries/${discoveryId}/comments`)
    }

    commentDiscovery = (discoveryId, data) => {
        return this.init().post(`/discoveries/${discoveryId}/comments`, data)
    }
    likeComment = (commentId) => {
        return this.init().post(`/comments/${commentId}/likes`)
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
        const params = { page, limit };
        const queryString = this.buildQueryString(params)

        return this.init().get(`/profiles/playlist_histories/bookmarks?${queryString}`)
    }

    getChannelBookmarks = (page, limit) => {
        const params = { page, limit };
        const queryString = this.buildQueryString(params);

        return this.init().get(`/profiles/channel_histories/bookmarks?${queryString}`);
    }

    getAudioLikes = (page, limit) => {
        const params = { page, limit };
        const queryString = this.buildQueryString(params);
        return this.init().get(`/profiles/audio_histories/likes?${queryString}`);
    }

    getListeningPlaylists = () => {
        return this.init().get(`/playlists/listenings`);
    }

    addListeningPlaylists = (audioId, lastDuration, playlistId) => {
        const data = {
            last_audio_id: audioId,
            last_duration: lastDuration,
            playlist_id: playlistId
        }
        return this.init().post(`/playlists/listenings`, data);
    }

    deleteListeningPlaylist = (id) => {
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
        return this.init().get(`/book_request`);
    }

    requestedBook = (body) => {
        return this.init().post(`/book_request`, body);
    }

    getCommonKeyword = () => {
        return this.init().get(`/keyword/recommendation`);
    }

    getPlaylistRecommendation = () => {
        return this.init().get(`/playlists/recommendation`);
    }

    getSearchResults = (type, keyword, next_offset = null, language = null, next_query_type = null, limit = 20) => {
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
        return this.init().get('/profiles/me');
    }

    getUserTransactionHistory = () => {
        return this.init().get('/profiles/orders');
    }

    updateUserInfo = (data) => {
        data.append('oauth2', this.oauth2);
        data.append('oauth2_id', this.oauth2_id);
        return this.init().put('/profiles/me', data);
    }

    ratePlaylist = (id, data) => {
        return this.init().post(`/playlists/${id}/ratings`, data);
    }
}
