"use strict";
exports.id = 973;
exports.ids = [973];
exports.modules = {

/***/ 7691:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o4": () => (/* binding */ setToken),
/* harmony export */   "gy": () => (/* binding */ removeToken),
/* harmony export */   "rK": () => (/* binding */ selectToken),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export saveToken */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_authentication__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(134);
// Import redux toolkit

// import service

const tokenSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: 'token',
    initialState: {
        token: _services_authentication__WEBPACK_IMPORTED_MODULE_1__/* .getToken */ .LP()
    },
    reducers: {
        setToken: (state, action)=>{
            state.token = action.payload;
            _services_authentication__WEBPACK_IMPORTED_MODULE_1__/* .saveToken */ .Fr(action.payload);
        },
        saveToken: ()=>{
            _services_authentication__WEBPACK_IMPORTED_MODULE_1__/* .saveToken */ .Fr();
        },
        removeToken: ()=>{
            _services_authentication__WEBPACK_IMPORTED_MODULE_1__/* .removeToken */ .gy();
        }
    }
});
const { setToken , saveToken , removeToken  } = tokenSlice.actions;
const selectToken = (state)=>state.token.token
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tokenSlice.reducer);


/***/ }),

/***/ 2055:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ API)
});

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
// EXTERNAL MODULE: ./src/services/authentication.js
var authentication = __webpack_require__(134);
// EXTERNAL MODULE: external "js-sha256"
var external_js_sha256_ = __webpack_require__(6120);
;// CONCATENATED MODULE: ./src/utils/sha256.js

function Sha256Encrypt(content) {
    const secretKey = "58c/BEG+qZyJU6fU5atuEkWWN2s=";
    return external_js_sha256_.sha256.hmac(secretKey, content);
};

// EXTERNAL MODULE: ./src/redux/token.js
var token = __webpack_require__(7691);
;// CONCATENATED MODULE: ./src/services/api.js




class API {
    constructor(){
        this.api_token = (0,authentication/* getToken */.LP)();
        this.client = null;
        this.base_url = `${"https"}://${"stg-api-nd.voiz.vn/v1"}`;
    }
    init = (token1, xSignature)=>{
        this.api_token = token1 || (0,authentication/* getToken */.LP)();
        this.oauth2 = 'oauth2';
        this.oauth2_id = null;
        this.xSignature = xSignature;
        let headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Credentials': true
        };
        if (!!this.api_token) {
            headers['X-Authorization'] = this.api_token;
        }
        ;
        if (!!this.xSignature) {
            headers['X-Signature'] = this.xSignature;
        }
        ;
        this.client = external_axios_.create({
            baseURL: this.base_url,
            timeout: 10000,
            headers: headers
        });
        return this.client;
    };
    buildQueryString = (params)=>{
        const queryString = new URLSearchParams(params).toString();
        return queryString;
    };
    getAudio = (id)=>{
        return this.init().get(`/audios/${id}`);
    };
    getAudioFile = (id)=>{
        let content = `audio_id=${id}`;
        if (this.api_token) {
            content += `&access_token=${this.api_token}`;
        }
        const xSignature = Sha256Encrypt(content);
        return this.init(null, xSignature).get(`/web/audios/${id}/files`);
    };
    getAudioHls = (url)=>{
        return this.init().get(url);
    };
    getCart = ()=>{
        return this.init().get('/web/carts');
    };
    getNumItemsInCart = ()=>{
        return this.init().get('/web/carts/badge');
    };
    addToCart = (playlistId)=>{
        const data = {
            playlist_id: playlistId
        };
        return this.init().post('/web/carts', data);
    };
    removeCartItem = (playlistId)=>{
        return this.init().delete(`web/carts/${playlistId}`);
    };
    payment = (method, data)=>{
        return this.init().post(`/web/payment/${method}`, data);
    };
    getComboPackage = ()=>{
        return this.init().get(`/combo_packages`);
    };
    getVipPackage = ()=>{
        return this.init().get(`/web/plan_packages`);
    };
    getDiscoveries = ()=>{
        return this.init().get(`/discoveries`);
    };
    getDiscovery = (id, page, limit = 10)=>{
        const params = {
            page,
            limit
        };
        const queryString = this.buildQueryString(params);
        return this.init().get(`/discoveries/${id}?${queryString}`);
    };
    getDiscoveryComment = (discoveryId, page, limit = 4)=>{
        return this.init().get(`/discoveries/${discoveryId}/comments?limit=${limit}&page=${page}`);
    };
    commentDiscovery = (discoveryId, data)=>{
        return this.init().post(`/discoveries/${discoveryId}/comments`, data);
    };
    likeComment = (commentId)=>{
        return this.init().post(`/comments/${commentId}/likes`);
    };
    likeDiscovery = (discoveryId)=>{
        return this.init().post(`/discoveries/${discoveryId}/likes`);
    };
    getPlaylistHistory = (page = 1, limit = 99999)=>{
        const params = {
            page,
            limit
        };
        const queryString = this.buildQueryString(params);
        return this.init().get(`/profiles/playlist_histories?${queryString}`);
    };
    getAudioHistory = (page = 1, limit = 99999)=>{
        const params = {
            page,
            limit
        };
        const queryString = this.buildQueryString(params);
        return this.init().get(`/profiles/audio_histories?${queryString}`);
    };
    getPlaylistOrders = (page = 1, limit = 99999)=>{
        const params = {
            page,
            limit
        };
        const queryString = this.buildQueryString(params);
        return this.init().get(`/profiles/playlist_orders?${queryString}`);
    };
    getPlaylistBookmarks = (page, limit)=>{
        const params = {
            page,
            limit
        };
        const queryString = this.buildQueryString(params);
        return this.init().get(`/profiles/playlist_histories/bookmarks?${queryString}`);
    };
    getChannelBookmarks = (page, limit)=>{
        const params = {
            page,
            limit
        };
        const queryString = this.buildQueryString(params);
        return this.init().get(`/profiles/channel_histories/bookmarks?${queryString}`);
    };
    getAudioLikes = (page, limit)=>{
        const params = {
            page,
            limit
        };
        const queryString = this.buildQueryString(params);
        return this.init().get(`/profiles/audio_histories/likes?${queryString}`);
    };
    getListeningPlaylists = ()=>{
        return this.init().get(`/playlists/listenings`);
    };
    addListeningPlaylists = (audioId, lastDuration, playlistId)=>{
        const data = {
            last_audio_id: audioId,
            last_duration: lastDuration,
            playlist_id: playlistId
        };
        return this.init().post(`/playlists/listenings`, data);
    };
    deleteListeningPlaylist = (id)=>{
        return this.init().delete(`/playlists/listenings/${id}`);
    };
    getCategories = (code)=>{
        const params = {
            code
        };
        const queryString = this.buildQueryString(params);
        return this.init().get(`/categories?${queryString}`);
    };
    getCategoryPlaylists = (code, limit = 10, ignore_ids = '', sort = 'latest', have_author = 0)=>{
        const params = {
            limit,
            ignore_ids,
            sort,
            have_author
        };
        const queryString = this.buildQueryString(params);
        return this.init().get(`/categories/${code}/playlists?${queryString}`);
    };
    getPlaylistsRandom = (limit = 10)=>{
        const params = {
            limit
        };
        const queryString = this.buildQueryString(params);
        return this.init().get(`/playlists/random?${queryString}`);
    };
    getPlaylistDetail = (id)=>{
        return this.init().get(`/playlists/${id}`);
    };
    getPlaylistAnalyses = (type = 'MostListenWeek')=>{
        const params = {
            type
        };
        const queryString = this.buildQueryString(params);
        return this.init().get(`/playlists/analyses?${queryString}`);
    };
    getPlaylistAudios = (id)=>{
        return this.init().get(`/playlists/${id}/audios`);
    };
    getRequestedBook = ()=>{
        return this.init().get(`/book_request`);
    };
    requestedBook = (body)=>{
        return this.init().post(`/book_request`, body);
    };
    getCommonKeyword = ()=>{
        return this.init().get(`/keyword/recommendation`);
    };
    getPlaylistRecommendation = ()=>{
        return this.init().get(`/playlists/recommendation`);
    };
    getSearchResults = (type, keyword, next_offset = null, language = null, next_query_type = null)=>{
        const params = {
            keyword,
            next_offset,
            language,
            next_query_type
        };
        const queryString = this.buildQueryString(params);
        return this.init().get(`/search/${type}?${queryString}`);
    };
    getAuthor = (id)=>{
        return this.init().get(`/authors/${id}`);
    };
    getFeaturedAuthors = (page = 1, limit = 6)=>{
        return this.init().get(`/authors/featured`);
    };
    getAuthorPlaylists = (id, page = 1, limit = 10)=>{
        const params = {
            limit,
            page
        };
        const queryString = this.buildQueryString(params);
        return this.init().get(`/authors/${id}/playlists?${queryString}`);
    };
    getPlaylistRanking = (type, code)=>{
        const params = {
            ranking_type: type,
            code
        };
        const queryString = this.buildQueryString(params);
        return this.init().get(`/playlists/rankings?${queryString}`);
    };
    getHomeNewContent = (limit = 10)=>{
        const params = {
            limit
        };
        const queryString = this.buildQueryString(params);
        return this.init().get(`/playlists/new_contents?${queryString}`);
    };
    getRecommendedChannels = (page = 1, limit = 6)=>{
        const params = {
            page,
            limit
        };
        const queryString = this.buildQueryString(params);
        return this.init().get(`/channels/recommend?${queryString}`);
    };
    bookmarkChannel = (id)=>{
        return this.init().post(`/channels/${id}/bookmarks`);
    };
    bookmarkPlaylist = (id)=>{
        return this.init().post(`/playlists/${id}/bookmarks`);
    };
    likeAudio = (id)=>{
        return this.init().post(`/audios/${id}/likes`);
    };
    unLikeMultiAudio = (ids)=>{
        return this.init().delete(`/audios/likes`, {
            audio_ids: ids
        });
    };
    getChannel = (id)=>{
        return this.init().get(`/channels/${id}`);
    };
    getChannelPlaylists = (id, page = 1, limit = 5)=>{
        const params = {
            page,
            limit
        };
        const queryString = this.buildQueryString(params);
        return this.init().get(`/channels/${id}/playlists?${queryString}`);
    };
    getChannelAudio = (id, page = 1, limit = 10)=>{
        const params = {
            page,
            limit
        };
        const queryString = this.buildQueryString(params);
        return this.init().get(`/channels/${id}/audios?${queryString}`);
    };
    getUserInfo = ()=>{
        return this.init().get('/profiles/me');
    };
    getUserTransactionHistory = ()=>{
        return this.init().get('/profiles/orders');
    };
    updateUserInfo = (data)=>{
        data.append('oauth2', this.oauth2);
        data.append('oauth2_id', this.oauth2_id);
        return this.init().put('/profiles/me', data);
    };
    ratePlaylist = (id, data)=>{
        return this.init().post(`/playlists/${id}/ratings`, data);
    };
    getOTP = (phoneNumber, countryCode)=>{
        const data = {
            phone_number: phoneNumber,
            country_code: countryCode
        };
        return this.init().post(`/auth/otps`, data);
    };
    getOTPOnUpdateProfile = (phoneNumber, countryCode)=>{
        const data = {
            phone_number: phoneNumber,
            country_code: countryCode
        };
        return this.init().post(`/profiles/otps`, data);
    };
    updatePhoneNumber = (phoneNumber, countryCode, otp)=>{
        const data = {
            phone_number: phoneNumber,
            country_code: countryCode,
            otp: otp
        };
        return this.init().put(`/profiles/phone_number`, data);
    };
    loginByPhone = (phoneNumber, countryCode, otp)=>{
        const data = {
            phone_number: phoneNumber,
            country_code: countryCode,
            otp
        };
        return this.init().post(`/web/auth/phone_number`, data);
    };
    createProfile = (data, accessToken)=>{
        return this.init(accessToken).post(`/auth/profiles`, data);
    };
    beCreator = (data)=>{
        return this.init().post(`/web/creators`, data);
    };
    getBannerImages = (category_code = '', display_on = '', page = 1, limit = 10)=>{
        const params = {
            category_code,
            display_on,
            page,
            limit
        };
        const queryString = this.buildQueryString(params);
        return this.init().get(`/banners?${queryString}`);
    };
    checkBillingStatus = (data)=>{
        return this.init().post(`/web/payment/shopee/checking`, data);
    };
    loginGoogle = (data)=>{
        return this.init().post('web/auth/google', data);
    };
    loginFacebook = (data)=>{
        return this.init().post('web/auth/facebook', data);
    };
    getVoicerPlaylists = (id)=>{
        return this.init().get(`/voicers/${id}/playlists?limit=9999`);
    };
    getVersion = ()=>{
        return this.init().get('/versions?platform=website');
    };
    trackingAudio = (data)=>{
        return this.init().post('/audios/listening', {
            audio_listenings: data
        });
    };
};


/***/ }),

/***/ 134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LP": () => (/* binding */ getToken),
/* harmony export */   "gy": () => (/* binding */ removeToken),
/* harmony export */   "Fr": () => (/* binding */ saveToken)
/* harmony export */ });
const ISSERVER = "undefined" === "undefined";
const getToken = ()=>{
    if (!ISSERVER) {
        return localStorage.getItem('token');
    }
};
const removeToken = ()=>{
    if (!ISSERVER) {
        localStorage.removeItem('token');
    }
};
const saveToken = (token)=>{
    if (!ISSERVER) {
        localStorage.setItem('token', token);
    }
};


/***/ }),

/***/ 7426:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DM": () => (/* binding */ COLORS),
/* harmony export */   "gN": () => (/* binding */ TEXT_STYLE),
/* harmony export */   "ut": () => (/* binding */ FONT_FAMILY),
/* harmony export */   "eS": () => (/* binding */ FONT_COLOR),
/* harmony export */   "Mz": () => (/* binding */ HEADER_HEIGHT),
/* harmony export */   "pG": () => (/* binding */ DRAWER_WIDTH),
/* harmony export */   "nN": () => (/* binding */ SCREEN_BREAKPOINTS),
/* harmony export */   "hX": () => (/* binding */ HEADER_HEIGHT_MB),
/* harmony export */   "Qd": () => (/* binding */ COUNTRY_CODES)
/* harmony export */ });
/* unused harmony export REQUIRE_LOGIN */
const COLORS = {
    stroker: '#D6D6D6',
    title: '#525252',
    bg1: '#1F2129',
    bg2: '#292B32',
    bg3: '#373944',
    bg4: '#BDBDBD',
    blackStroker: '#353535',
    contentIcon: '#ACACAC',
    placeHolder: '#595959',
    main: '#754ADA',
    second: '#F68C2D',
    success: '#00B967',
    error: '#FF554B',
    white: '#FFFFFF',
    VZ_Text_content: '#B8B8B8',
    gray2: '#C6C6C6'
};
const TEXT_STYLE = {
    h1: {
        fontSize: '28px',
        lineHeight: '33px',
        fontWeight: 'bold',
        fontFamily: 'SF UI Display'
    },
    h2: {
        fontSize: '24px',
        lineHeight: '26px',
        fontWeight: 'bold',
        fontFamily: 'SF UI Display'
    },
    h3: {
        fontSize: '18px',
        lineHeight: '25px',
        fontWeight: 'bold',
        fontFamily: 'SF UI Display'
    },
    title0: {
        fontSize: '40px',
        lineHeight: '48px',
        fontWeight: '700',
        fontFamily: 'SF UI Display'
    },
    title1: {
        fontSize: '16px',
        lineHeight: '20px',
        fontWeight: 'bold',
        fontFamily: 'SF UI Display'
    },
    title4: {
        fontSize: '20px',
        lineHeight: '28px',
        fontWeight: 700,
        fontFamily: 'SF UI Display'
    },
    content1: {
        fontSize: '16px',
        lineHeight: '20px',
        fontWeight: 500,
        fontFamily: 'SF UI Display'
    },
    title2: {
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: 'bold',
        fontFamily: 'SF UI Display'
    },
    content2: {
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: 500,
        fontFamily: 'SF UI Display'
    },
    content3: {
        fontSize: '12px',
        lineHeight: '17px',
        fontWeight: 500,
        fontFamily: 'SF UI Display'
    },
    title3: {
        fontSize: '12px',
        lineHeight: '16px',
        fontWeight: 'bold',
        fontFamily: 'SF UI Display'
    },
    caption12: {
        fontSize: '12px',
        lineHeight: '14px',
        fontWeight: 300,
        fontFamily: 'SF UI Display'
    },
    caption10Bold: {
        fontSize: '10px',
        lineHeight: '13px',
        fontWeight: 'bold',
        fontFamily: 'SF UI Display'
    },
    caption10Regular: {
        fontSize: '10px',
        lineHeight: '15px',
        fontWeight: 500,
        fontFamily: 'SF UI Display'
    },
    VZ_Caption_2: {
        fontSize: '12px',
        lineHeight: '16.8px',
        fontWeight: 500,
        fontFamily: 'SF UI Display'
    }
};
const SCREEN_BREAKPOINTS = {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536
};
const FONT_FAMILY = 'SF UI Display';
const FONT_COLOR = '#ACACAC';
const DRAWER_WIDTH = 250;
const HEADER_HEIGHT = '104px';
const HEADER_HEIGHT_MB = '80px';
const REQUIRE_LOGIN = (/* unused pure expression or super */ null && ([
    /\/library/,
    /\/account/
]));
const COUNTRY_CODES = [
    '93',
    '355',
    '213',
    '1-684',
    '376',
    '244',
    '1-264',
    '672',
    '1-268',
    '54',
    '374',
    '297',
    '61',
    '43',
    '994',
    '1-242',
    '973',
    '880',
    '1-246',
    '375',
    '32',
    '501',
    '229',
    '1-441',
    '975',
    '591',
    '387',
    '267',
    '55',
    '673',
    '359',
    '226',
    '257',
    '855',
    '237',
    '1',
    '238',
    '1-345',
    '236',
    '235',
    '56',
    '86',
    '53',
    '61',
    '57',
    '269',
    '243',
    '242',
    '682',
    '506',
    '225',
    '385',
    '53',
    '357',
    '420',
    '45',
    '253',
    '1-767',
    '1-809',
    '1-829',
    '670',
    '593',
    '20',
    '503',
    '240',
    '291',
    '372',
    '251',
    '500',
    '298',
    '679',
    '358',
    '33',
    '594',
    '689',
    '241',
    '220',
    '995',
    '49',
    '233',
    '350',
    '30',
    '299',
    '1-473',
    '590',
    '1-671',
    '502',
    '224',
    '245',
    '592',
    '509',
    '504',
    '852',
    '36',
    '354',
    '91',
    '62',
    '98',
    '964',
    '353',
    '972',
    '39',
    '1-876',
    '81',
    '962',
    '7',
    '254',
    '686',
    '850',
    '82',
    '965',
    '996',
    '856',
    '371',
    '961',
    '266',
    '231',
    '218',
    '423',
    '370',
    '352',
    '853',
    '389',
    '261',
    '265',
    '60',
    '960',
    '223',
    '356',
    '692',
    '596',
    '222',
    '230',
    '269',
    '52',
    '691',
    '373',
    '377',
    '976',
    '1-664',
    '212',
    '258',
    '95',
    '264',
    '674',
    '977',
    '31',
    '599',
    '687',
    '64',
    '505',
    '227',
    '234',
    '683',
    '672',
    '1-670',
    '47',
    '968',
    '92',
    '680',
    '970',
    '507',
    '675',
    '595',
    '51',
    '63',
    '48',
    '351',
    '1-787',
    '1-939',
    '974',
    '262',
    '40',
    '7',
    '250',
    '290',
    '1-869',
    '1-758',
    '508',
    '1-784',
    '685',
    '378',
    '239',
    '966',
    '221',
    '248',
    '232',
    '65',
    '421',
    '386',
    '677',
    '252',
    '27',
    '34',
    '94',
    '249',
    '597',
    '268',
    '46',
    '41',
    '963',
    '886',
    '992',
    '255',
    '66',
    '690',
    '676',
    '1-868',
    '216',
    '90',
    '993',
    '1-649',
    '688',
    '256',
    '380',
    '971',
    '44',
    '1',
    '598',
    '998',
    '678',
    '418',
    '58',
    '84',
    '1-284',
    '1-340',
    '681',
    '967',
    '260',
    '263'
];



/***/ }),

/***/ 8210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ flexStyle)
/* harmony export */ });
const flexStyle = (justifyContent, alignItems)=>{
    return {
        display: 'flex',
        justifyContent: justifyContent,
        alignItems: alignItems
    };
};


/***/ })

};
;