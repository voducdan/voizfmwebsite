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


function Thumbnail(props) {
    const { style , avtSrc , alt , promotion  } = props;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        sx: {
            position: 'relative',
            height: '100%',
            '&::before': {
                content: `'${promotion ? promotion.toUpperCase() : ''}'`,
                background: promotion === 'vip' ? '#F68C2D' : 'white',
                fontFamily: "'fs-ui-display-medium', 'sans-serif'",
                fontWeight: 'bold',
                color: promotion === 'vip' ? '#ffffff' : '#343BBE',
                fontStyle: 'italic',
                position: 'absolute',
                right: 0,
                bottom: 0,
                zIndex: 8,
                fontSize: '10px',
                borderTopLeftRadius: '20px',
                borderBottomRightRadius: '9px',
                padding: ' 2px 0',
                border: '1px solid #FDB561',
                width: '42px',
                textAlign: 'center'
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