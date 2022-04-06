"use strict";
exports.id = 699;
exports.ids = [699];
exports.modules = {

/***/ 9006:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e8": () => (/* binding */ setOpenLogin),
/* harmony export */   "vF": () => (/* binding */ handleCloseLogin),
/* harmony export */   "Lu": () => (/* binding */ handleOpenLogin),
/* harmony export */   "S$": () => (/* binding */ selectOpenLogin),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const openLoginSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: 'openLogin',
    initialState: {
        open: false
    },
    reducers: {
        setOpenLogin: (state, action)=>{
            state.open = action.payload;
        },
        handleCloseLogin: (state)=>{
            state.open = false;
        },
        handleOpenLogin: (state)=>{
            state.open = true;
        }
    }
});
const { setOpenLogin , handleCloseLogin , handleOpenLogin  } = openLoginSlice.actions;
const selectOpenLogin = (state)=>state.openLogin.open
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openLoginSlice.reducer);


/***/ }),

/***/ 7010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "av": () => (/* binding */ setUser),
/* harmony export */   "dy": () => (/* binding */ selectUser),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: 'user',
    initialState: {
        data: null
    },
    reducers: {
        setUser: (state, action)=>{
            state.data = action.payload;
        }
    }
});
const { setUser  } = userSlice.actions;
const selectUser = (state)=>state.user.data
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice.reducer);


/***/ })

};
;