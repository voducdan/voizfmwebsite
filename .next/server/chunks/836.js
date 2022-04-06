"use strict";
exports.id = 836;
exports.ids = [836];
exports.modules = {

/***/ 3307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bt": () => (/* binding */ setAudioData),
/* harmony export */   "a$": () => (/* binding */ selectAudioData),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const audioSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: 'audio',
    initialState: {
        data: {}
    },
    reducers: {
        setAudioData: (state, action)=>{
            state.data = action.payload;
        }
    }
});
const { setAudioData  } = audioSlice.actions;
const selectAudioData = (state)=>state.audio.data
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (audioSlice.reducer);


/***/ }),

/***/ 4317:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "iG": () => (/* binding */ setFooter),
/* harmony export */   "iZ": () => (/* binding */ selectIncludeFooter),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const footerSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: 'footer',
    initialState: {
        includeFooter: true
    },
    reducers: {
        setFooter: (state, action)=>{
            state.includeFooter = action.payload;
        }
    }
});
const { setFooter  } = footerSlice.actions;
const selectIncludeFooter = (state)=>state.footer.includeFooter
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footerSlice.reducer);


/***/ }),

/***/ 6204:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U7": () => (/* binding */ setItems),
/* harmony export */   "RV": () => (/* binding */ setCart),
/* harmony export */   "Pj": () => (/* binding */ setPaymentInfo),
/* harmony export */   "ES": () => (/* binding */ setAddToCartFlag),
/* harmony export */   "ht": () => (/* binding */ selectPaymentData),
/* harmony export */   "KY": () => (/* binding */ selectCart),
/* harmony export */   "cy": () => (/* binding */ selectPaymentInfo),
/* harmony export */   "kC": () => (/* binding */ selectAddToCartFlag),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const paymentSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: 'payment',
    initialState: {
        data: {
            selectedItem: [],
            discountCode: '',
            totalPrice: 0,
            finalPrice: 0
        },
        cart: [],
        paymentInfo: null,
        addToCartFlag: 0,
        billingInfo: null
    },
    reducers: {
        setItems: (state, action)=>{
            state.data = {
                ...action.payload
            };
        },
        setCart: (state, action)=>{
            state.cart = [
                ...action.payload
            ];
        },
        setPaymentInfo: (state, action)=>{
            state.paymentInfo = {
                ...action.payload
            };
        },
        setAddToCartFlag: (state, action)=>{
            state.addToCartFlag = action.payload;
        }
    }
});
const { setItems , setCart , setPaymentInfo , setAddToCartFlag  } = paymentSlice.actions;
const selectPaymentData = (state)=>state.payment.data
;
const selectCart = (state)=>state.payment.cart
;
const selectPaymentInfo = (state)=>state.payment.paymentInfo
;
const selectAddToCartFlag = (state)=>state.payment.addToCartFlag
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (paymentSlice.reducer);


/***/ }),

/***/ 7348:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ez": () => (/* binding */ togglePlayAudio),
/* harmony export */   "IS": () => (/* binding */ setAudioHls),
/* harmony export */   "Nn": () => (/* binding */ setOpenPlayBar),
/* harmony export */   "og": () => (/* binding */ setOpenAudioDetail),
/* harmony export */   "Jt": () => (/* binding */ setOpenExpandMoreAudio),
/* harmony export */   "jc": () => (/* binding */ selectPlayAudio),
/* harmony export */   "fr": () => (/* binding */ selectAudioHls),
/* harmony export */   "vx": () => (/* binding */ selectOpenAudioDetail),
/* harmony export */   "O3": () => (/* binding */ selectOpenPlayBar),
/* harmony export */   "cf": () => (/* binding */ selectOpenExpandMoreAudio),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports pauseAudio, selectUrl */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const playAudioSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: 'playAudio',
    initialState: {
        playing: true,
        openPlayBar: false,
        openAudioDetail: false,
        openExpandMoreAudio: false,
        audioHls: null,
        url: ''
    },
    reducers: {
        togglePlayAudio: (state)=>{
            state.playing = !state.playing;
        },
        pauseAudio: (state)=>{
            state.playing = false;
        },
        setAudioHls: (state, action)=>{
            state.audioHls = action.payload;
        },
        setOpenPlayBar: (state, action)=>{
            state.openPlayBar = action.payload;
        },
        setOpenAudioDetail: (state, action)=>{
            state.openAudioDetail = action.payload;
        },
        setOpenExpandMoreAudio: (state, action)=>{
            state.openExpandMoreAudio = action.payload;
        }
    }
});
const { togglePlayAudio , pauseAudio , setAudioHls , setOpenPlayBar , setOpenAudioDetail , setOpenExpandMoreAudio  } = playAudioSlice.actions;
const selectPlayAudio = (state)=>state.playAudio.playing
;
const selectUrl = (state)=>state.playAudio.url
;
const selectAudioHls = (state)=>state.playAudio.audioHls
;
const selectOpenAudioDetail = (state)=>state.playAudio.openAudioDetail
;
const selectOpenPlayBar = (state)=>state.playAudio.openPlayBar
;
const selectOpenExpandMoreAudio = (state)=>state.playAudio.openExpandMoreAudio
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (playAudioSlice.reducer);


/***/ })

};
;