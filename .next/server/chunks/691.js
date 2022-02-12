"use strict";
exports.id = 691;
exports.ids = [691];
exports.modules = {

/***/ 7691:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o4": () => (/* binding */ setToken),
/* harmony export */   "rK": () => (/* binding */ selectToken),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports saveToken, removeToken */
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


/***/ })

};
;