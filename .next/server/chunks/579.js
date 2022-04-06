"use strict";
exports.id = 579;
exports.ids = [579];
exports.modules = {

/***/ 2579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Thumbnail)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_useWindowSize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9061);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7426);




function Thumbnail(props) {
    const { style , avtSrc , alt , promotion  } = props;
    const windowSize = (0,_utils_useWindowSize__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const isSm = windowSize.width <= _utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .SCREEN_BREAKPOINTS.sm */ .nN.sm ? true : false;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        sx: {
            position: 'relative',
            height: '100%',
            borderRadius: '3px',
            ...promotion && {
                '&::before': {
                    content: promotion.includes('vip') ? "url('/images/dvip.png')" : promotion === 'coin' ? "url('/images/dcoin.png')" : "url('/images/dfree.png')",
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    zIndex: 8
                }
            }
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            style: {
                ...style
            },
            src: avtSrc,
            alt: alt,
            loading: "lazy"
        })
    }));
};


/***/ })

};
;