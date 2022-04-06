"use strict";
exports.id = 61;
exports.ids = [61];
exports.modules = {

/***/ 9061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useWindowSize)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const { 0: windowSize , 1: setWindowSize  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        width: undefined,
        height: undefined
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return ()=>window.removeEventListener("resize", handleResize)
        ;
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
};


/***/ })

};
;