"use strict";
exports.id = 121;
exports.ids = [121];
exports.modules = {

/***/ 8247:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7426);




const styles = (theme)=>({
        button: {
            "&:disabled": {
                backgroundColor: _utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .COLORS.bg3 */ .DM.bg3,
                color: _utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .COLORS.placeHolder */ .DM.placeHolder
            },
            backgroundColor: _utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .COLORS.main */ .DM.main,
            color: _utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .COLORS.white */ .DM.white
        }
    })
;
function CustomDisabledButton(props) {
    const { classes  } = props;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
        sx: {
            ...props.style
        },
        disabled: props.disabled,
        className: classes.button,
        onClick: props.onClick,
        children: props.content
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.withStyles)(styles)(CustomDisabledButton));


/***/ }),

/***/ 4050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ validatePhoneNumber),
/* harmony export */   "g": () => (/* binding */ validateOTP)
/* harmony export */ });
const validatePhoneNumber = (str)=>{
    const re = RegExp('^([3|5|7|8|9])[0-9]{8}\\b');
    return re.test(str);
};
const validateOTP = (str)=>{
    const re = RegExp('[0-9]{6}\\b');
    return re.test(str);
};


/***/ })

};
;