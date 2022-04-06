"use strict";
exports.id = 760;
exports.ids = [760];
exports.modules = {

/***/ 7760:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CategoryBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3877);
/* harmony import */ var _node_modules_swiper_react_swiper_react_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3670);
/* harmony import */ var _components_Icons_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5273);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7426);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_3__, _node_modules_swiper_react_swiper_react_js__WEBPACK_IMPORTED_MODULE_4__]);
([swiper__WEBPACK_IMPORTED_MODULE_3__, _node_modules_swiper_react_swiper_react_js__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

//import react 

// import MUI components

// import swiper


// import icons

// import utils

swiper__WEBPACK_IMPORTED_MODULE_3__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation
]);
function CategoryBar(props) {
    const { parent , categoryList , isSm , onSelectCategory , hasNavigation  } = props;
    const { 0: activeCategory , 1: setActiveCategory  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(parent);
    const { 0: showNavigationBtn , 1: setShowNavigationBtn  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const newCategoryList = [
        {
            code: parent,
            name: "Tất cả",
            sub_name: null
        },
        ...categoryList
    ];
    const navigationNewContentPrevRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const navigationNewContentNextRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const SwiperBtnNext = {
        position: 'absolute',
        right: '-18px',
        width: '24px',
        height: '24px',
        top: '2px',
        zIndex: 2,
        cursor: 'pointer',
        ...(isSm || !showNavigationBtn) && {
            display: 'none'
        }
    };
    const SwiperBtnPrev = {
        position: 'absolute',
        left: '-18px',
        width: '24px',
        height: '24px',
        top: '2px',
        zIndex: 2,
        cursor: 'pointer',
        ...(isSm || !showNavigationBtn) && {
            display: 'none'
        }
    };
    const handleSelectCategory = (e)=>{
        const channeId = e.currentTarget.id;
        setActiveCategory(channeId);
        onSelectCategory(parent, channeId);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        onMouseOver: ()=>{
            setShowNavigationBtn(true);
        },
        onMouseOut: ()=>{
            setShowNavigationBtn(false);
        },
        sx: {
            position: 'relative'
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_node_modules_swiper_react_swiper_react_js__WEBPACK_IMPORTED_MODULE_4__/* .Swiper */ .t, {
                navigation: {
                    prevEl: navigationNewContentPrevRef.current,
                    nextEl: navigationNewContentNextRef.current
                },
                onBeforeInit: (swiper)=>{
                    swiper.params.navigation.prevEl = navigationNewContentPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNewContentNextRef.current;
                },
                slidesPerView: "auto",
                spaceBetween: isSm ? 20 : 40,
                style: {
                    marginTop: isSm ? 20 : 35
                },
                children: newCategoryList.map((item)=>{
                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_node_modules_swiper_react_swiper_react_js__WEBPACK_IMPORTED_MODULE_4__/* .SwiperSlide */ .o, {
                        style: {
                            width: 'auto'
                        },
                        children: [
                            String(item === null || item === void 0 ? void 0 : item.code) !== activeCategory && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                id: item === null || item === void 0 ? void 0 : item.code,
                                onClick: handleSelectCategory,
                                sx: {
                                    ...isSm ? _utils_constants__WEBPACK_IMPORTED_MODULE_6__/* .TEXT_STYLE.title2 */ .gN.title2 : _utils_constants__WEBPACK_IMPORTED_MODULE_6__/* .TEXT_STYLE.title1 */ .gN.title1,
                                    color: _utils_constants__WEBPACK_IMPORTED_MODULE_6__/* .COLORS.VZ_Text_content */ .DM.VZ_Text_content,
                                    whiteSpace: 'nowrap',
                                    cursor: 'pointer'
                                },
                                children: item.name
                            }, item === null || item === void 0 ? void 0 : item.code),
                            String(item === null || item === void 0 ? void 0 : item.code) === activeCategory && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                id: item.code,
                                onClick: handleSelectCategory,
                                sx: {
                                    ...isSm ? _utils_constants__WEBPACK_IMPORTED_MODULE_6__/* .TEXT_STYLE.title2 */ .gN.title2 : _utils_constants__WEBPACK_IMPORTED_MODULE_6__/* .TEXT_STYLE.title1 */ .gN.title1,
                                    color: _utils_constants__WEBPACK_IMPORTED_MODULE_6__/* .COLORS.white */ .DM.white,
                                    bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_6__/* .COLORS.bg3 */ .DM.bg3,
                                    whiteSpace: 'nowrap',
                                    cursor: 'pointer',
                                    padding: '5px 15px',
                                    borderRadius: '25px',
                                    boxSizing: 'border-box',
                                    '&:hover': {
                                        bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_6__/* .COLORS.bg3 */ .DM.bg3
                                    }
                                },
                                children: item.name
                            })
                        ]
                    }, item === null || item === void 0 ? void 0 : item.code);
                })
            }),
            hasNavigation && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    ...SwiperBtnPrev
                },
                ref: navigationNewContentPrevRef,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icons_index__WEBPACK_IMPORTED_MODULE_5__/* .CarouselPrev */ .X$, {})
            }),
            hasNavigation && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    ...SwiperBtnNext
                },
                ref: navigationNewContentNextRef,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icons_index__WEBPACK_IMPORTED_MODULE_5__/* .CarouselNext */ .Pz, {})
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;