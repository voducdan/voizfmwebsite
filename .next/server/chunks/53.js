"use strict";
exports.id = 53;
exports.ids = [53];
exports.modules = {

/***/ 3281:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ HomeCarousel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_swiper_react_swiper_react_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3670);
/* harmony import */ var _components_Icons_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9587);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_node_modules_swiper_react_swiper_react_js__WEBPACK_IMPORTED_MODULE_3__]);
_node_modules_swiper_react_swiper_react_js__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

// import react

// import MUI components

// import swiper

// import icons

const SwiperBtnNext = (props)=>{
    const { isSm  } = props;
    return {
        position: 'absolute',
        transform: 'translateX(10px)',
        zIndex: 2,
        ...isSm && {
            display: 'none'
        }
    };
};
const SwiperBtnPrev = (props)=>{
    const { isSm  } = props;
    return {
        position: 'absolute',
        left: 0,
        transform: 'translateX(-15px)',
        zIndex: 2,
        ...isSm && {
            display: 'none'
        }
    };
};
function HomeCarousel(props) {
    const { isSm  } = props;
    const { 0: current , 1: setCurrent  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const navigationNewContentPrevRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const navigationNewContentNextRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const images = [
        {
            imgSrc: 'https://picsum.photos/1190/420?img=1',
            thumbnailSrc: 'https://picsum.photos/1190/420?img=1',
            alt: "image 1"
        },
        {
            imgSrc: 'https://picsum.photos/1190/420?img=2',
            thumbnailSrc: 'https://picsum.photos/1190/420?img=2',
            alt: "image 1"
        },
        {
            imgSrc: 'https://picsum.photos/1190/420?img=3',
            thumbnailSrc: 'https://picsum.photos/1190/420?img=2',
            alt: "image 1"
        },
        {
            imgSrc: 'https://picsum.photos/1190/420?img=4',
            thumbnailSrc: 'https://picsum.photos/1190/420?img=2',
            alt: "image 1"
        },
        {
            imgSrc: 'https://picsum.photos/1190/420?img=5',
            thumbnailSrc: 'https://picsum.photos/1190/420?img=2',
            alt: "image 1"
        },
        {
            imgSrc: 'https://picsum.photos/1190/420?img=6',
            thumbnailSrc: 'https://picsum.photos/1190/420?img=2',
            alt: "image 1"
        },
        {
            imgSrc: 'https://picsum.photos/1190/420?img=7',
            thumbnailSrc: 'https://picsum.photos/1190/420?img=2',
            alt: "image 1"
        }
    ];
    const handleChangeSlideClick = (isNext)=>{
        let newCurrent = null;
        if (isNext) {
            newCurrent = current < images.length - 1 ? current + 1 : current;
        } else {
            newCurrent = current > 0 ? current - 1 : current;
        }
        setCurrent(newCurrent);
    };
    const handleClickThumbnail = (e)=>{
        const id = Number(e.currentTarget.id);
        setCurrent(id);
        e.stopPropagation();
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
        sx: {
            height: isSm ? '280px' : '420px',
            position: 'relative',
            width: '100%'
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    height: '100%',
                    width: '100%'
                },
                children: images.map((image, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        style: {
                            ...idx !== current && {
                                display: 'none'
                            },
                            objectFit: 'cover',
                            width: `100%`,
                            position: 'absolute',
                            height: '100%',
                            left: 0
                        },
                        alt: image.alt,
                        src: image.imgSrc
                    }, idx)
                )
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                sx: {
                    position: 'absolute',
                    width: isSm ? '80%' : '30%',
                    minWidth: isSm ? '288px' : '452px',
                    bottom: 33,
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    right: {
                        sm: 48,
                        xs: 0
                    }
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_node_modules_swiper_react_swiper_react_js__WEBPACK_IMPORTED_MODULE_3__/* .Swiper */ .t, {
                        navigation: {
                            prevEl: navigationNewContentPrevRef.current,
                            nextEl: navigationNewContentNextRef.current
                        },
                        onBeforeInit: (swiper)=>{
                            swiper.params.navigation.prevEl = navigationNewContentPrevRef.current;
                            swiper.params.navigation.nextEl = navigationNewContentNextRef.current;
                        },
                        slidesPerView: 4,
                        children: images.map((image, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_node_modules_swiper_react_swiper_react_js__WEBPACK_IMPORTED_MODULE_3__/* .SwiperSlide */ .o, {
                                onClick: handleClickThumbnail,
                                id: idx,
                                style: {
                                    flexShrink: 'unset'
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    style: {
                                        width: isSm ? 65 : 95,
                                        height: isSm ? 35 : 45,
                                        marginLeft: '16px',
                                        ...idx === 0 && {
                                            marginLeft: 0
                                        },
                                        borderRadius: '6px',
                                        ...idx === current && {
                                            border: '2px solid white'
                                        }
                                    },
                                    alt: image.alt,
                                    src: image.imgSrc
                                }, idx)
                            }, idx)
                        )
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        onClick: ()=>{
                            handleChangeSlideClick(false);
                        },
                        style: {
                            ...SwiperBtnPrev({
                                isSm
                            })
                        },
                        ref: navigationNewContentPrevRef,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icons_index__WEBPACK_IMPORTED_MODULE_4__/* .CarouselPrev */ .X$, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        onClick: ()=>{
                            handleChangeSlideClick(true);
                        },
                        style: {
                            ...SwiperBtnNext({
                                isSm
                            })
                        },
                        ref: navigationNewContentNextRef,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icons_index__WEBPACK_IMPORTED_MODULE_4__/* .CarouselNext */ .Pz, {})
                    })
                ]
            })
        ]
    }));
};

});

/***/ }),

/***/ 6600:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PublisherComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3877);
/* harmony import */ var _node_modules_swiper_react_swiper_react_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3670);
/* harmony import */ var _components_Thumbnail_Thumbnail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2579);
/* harmony import */ var _components_Icons_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9587);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7426);
/* harmony import */ var _utils_flexStyle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8210);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_node_modules_swiper_react_swiper_react_js__WEBPACK_IMPORTED_MODULE_4__, swiper__WEBPACK_IMPORTED_MODULE_3__]);
([_node_modules_swiper_react_swiper_react_js__WEBPACK_IMPORTED_MODULE_4__, swiper__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);

// import react

// import MUI components

// import swiper


// import others components

// import icons

// import utils


swiper__WEBPACK_IMPORTED_MODULE_3__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation
]);
const SwiperBtnNext = (props)=>{
    const { isSm  } = props;
    return {
        position: 'absolute',
        right: 0,
        width: '24px',
        height: '24px',
        top: '50%',
        transform: 'translate(-40px, 70%)',
        zIndex: 2,
        ...isSm && {
            display: 'none'
        }
    };
};
const SwiperBtnPrev = (props)=>{
    const { isSm  } = props;
    return {
        position: 'absolute',
        left: 0,
        width: '24px',
        height: '24px',
        top: '50%',
        transform: 'translate(28px, 70%)',
        zIndex: 2,
        ...isSm && {
            display: 'none'
        }
    };
};
const Title = (props)=>{
    const { isSm , content  } = props;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        sx: {
            ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_8__/* .flexStyle */ .X)('flex-start', 'center'),
            marginBottom: '24px'
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                sx: {
                    ...isSm ? _utils_constants__WEBPACK_IMPORTED_MODULE_7__/* .TEXT_STYLE.h3 */ .gN.h3 : _utils_constants__WEBPACK_IMPORTED_MODULE_7__/* .TEXT_STYLE.h2 */ .gN.h2,
                    fontFamily: _utils_constants__WEBPACK_IMPORTED_MODULE_7__/* .FONT_FAMILY */ .ut,
                    color: _utils_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.white */ .DM.white
                },
                children: content
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                sx: {
                    marginLeft: '11.3px',
                    marginTop: '6px'
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icons_index__WEBPACK_IMPORTED_MODULE_6__/* .RightArrow */ .UV, {
                    fill: _utils_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.white */ .DM.white
                })
            })
        ]
    }));
};
function PublisherComponent(props) {
    const { isSm  } = props;
    const newContent = [];
    const num_items_per_line = !isSm ? 5 : 2.5;
    const navigationPublisherPrevRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const navigationPublisherNextRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        sx: {
            padding: isSm ? '32px 15px 23px 15px' : '32px 48px 23px 48px',
            backgroundColor: _utils_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.bg2 */ .DM.bg2,
            position: 'relative'
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                content: "Nh\xe0 xuất bản",
                isSm: isSm
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_node_modules_swiper_react_swiper_react_js__WEBPACK_IMPORTED_MODULE_4__/* .Swiper */ .t, {
                navigation: {
                    prevEl: navigationPublisherPrevRef.current,
                    nextEl: navigationPublisherNextRef.current
                },
                onBeforeInit: (swiper)=>{
                    swiper.params.navigation.prevEl = navigationPublisherPrevRef.current;
                    swiper.params.navigation.nextEl = navigationPublisherNextRef.current;
                },
                slidesPerView: num_items_per_line,
                spaceBetween: isSm ? 8 : 20,
                children: newContent.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_node_modules_swiper_react_swiper_react_js__WEBPACK_IMPORTED_MODULE_4__/* .SwiperSlide */ .o, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Thumbnail_Thumbnail__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                style: {
                                    borderRadius: '6px',
                                    width: '100%',
                                    height: isSm ? '81px' : '112px'
                                },
                                avtSrc: item.avtSrc,
                                alt: `images ${item.id}`
                            })
                        })
                    }, item.id)
                )
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    ...SwiperBtnPrev({
                        isSm
                    })
                },
                ref: navigationPublisherPrevRef,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icons_index__WEBPACK_IMPORTED_MODULE_6__/* .CarouselPrev */ .X$, {})
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    ...SwiperBtnNext({
                        isSm
                    })
                },
                ref: navigationPublisherNextRef,
                children: [
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icons_index__WEBPACK_IMPORTED_MODULE_6__/* .CarouselNext */ .Pz, {})
                ]
            })
        ]
    }));
};

});

/***/ })

};
;