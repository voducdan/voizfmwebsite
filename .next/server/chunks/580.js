"use strict";
exports.id = 580;
exports.ids = [580];
exports.modules = {

/***/ 9654:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ InfoLabel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7426);



function InfoLabel(props) {
    const { title  } = props;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
        sx: {
            ..._utils_constants__WEBPACK_IMPORTED_MODULE_2__/* .TEXT_STYLE.title2 */ .gN.title2,
            color: _utils_constants__WEBPACK_IMPORTED_MODULE_2__/* .COLORS.white */ .DM.white
        },
        children: title
    }));
};


/***/ }),

/***/ 7238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ InfoValue)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7426);



function InfoValue(props) {
    const { value  } = props;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        sx: {
            bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_2__/* .COLORS.bg3 */ .DM.bg3,
            borderRadius: '20px',
            padding: '4px 16px',
            width: 'fit-content'
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
            sx: {
                ..._utils_constants__WEBPACK_IMPORTED_MODULE_2__/* .TEXT_STYLE.content2 */ .gN.content2,
                color: _utils_constants__WEBPACK_IMPORTED_MODULE_2__/* .COLORS.VZ_Text_content */ .DM.VZ_Text_content
            },
            children: value
        })
    }));
};


/***/ }),

/***/ 2083:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ convertSecondsToReadableString)
/* harmony export */ });
function convertSecondsToReadableString(seconds) {
    seconds = seconds || 0;
    seconds = Number(seconds);
    seconds = Math.abs(seconds);
    const d = Math.floor(seconds / (3600 * 24));
    const h = Math.floor(seconds % (3600 * 24) / 3600);
    const m = Math.floor(seconds % 3600 / 60);
    const s = Math.floor(seconds % 60);
    const parts = [];
    if (d > 0) {
        parts.push(d + ' ng\xe0y');
    }
    if (h > 0) {
        parts.push(h + ' giờ');
    }
    if (m > 0) {
        parts.push(m + ' ph\xfat');
    }
    if (s > 0) {
        parts.push(s + ' gi\xe2y');
    }
    return parts.join(', ');
};


/***/ })

};
;