"use strict";
exports.id = 53;
exports.ids = [53];
exports.modules = {

/***/ 3281:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ HomeCarousel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3877);
/* harmony import */ var _node_modules_swiper_react_swiper_react_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3670);
/* harmony import */ var _components_Icons_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5273);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7426);
/* harmony import */ var _utils_useWindowSize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9061);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2055);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_3__, _node_modules_swiper_react_swiper_react_js__WEBPACK_IMPORTED_MODULE_4__]);
([swiper__WEBPACK_IMPORTED_MODULE_3__, _node_modules_swiper_react_swiper_react_js__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

// import react

// import MUI components

// import swiper


// import icons

// import utils


// import services

swiper__WEBPACK_IMPORTED_MODULE_3__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_3__.Autoplay,
    swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation
]);
function HomeCarousel() {
    const api = new _services_api__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z();
    const windowSize = (0,_utils_useWindowSize__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const isSm1 = windowSize.width <= _utils_constants__WEBPACK_IMPORTED_MODULE_6__/* .SCREEN_BREAKPOINTS.sm */ .nN.sm ? true : false;
    const { 0: current , 1: setCurrent  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: images , 1: setImages  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: showNavigationBtn , 1: setShowNavigationBtn  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const navigationBannerPrevRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const navigationBannerNextRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const SwiperBtnNext = (props)=>{
        const { isSm  } = props;
        return {
            position: 'absolute',
            transform: 'translateX(-15px)',
            zIndex: 2,
            cursor: 'pointer',
            ...(isSm || !showNavigationBtn) && {
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
            cursor: 'pointer',
            ...(isSm || !showNavigationBtn) && {
                display: 'none'
            }
        };
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        async function fetchBannerImages() {
            const res = await api.getBannerImages();
            const data = await res.data.data;
            const imagesList = data.map((i)=>i.image
            );
            setImages([
                ...imagesList,
                ...imagesList
            ]);
        }
        fetchBannerImages();
    }, []);
    const handleChangeSliceClick = (isNext)=>{
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
    const handleBannerSlideChange = (e)=>{
        const realIndex = Number(e.realIndex);
        setCurrent(realIndex);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
        onMouseOver: ()=>{
            setShowNavigationBtn(true);
        },
        onMouseOut: ()=>{
            setShowNavigationBtn(false);
        },
        sx: {
            height: isSm1 ? '280px' : '420px',
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
                            objectFit: 'fill',
                            width: '100%',
                            position: 'absolute',
                            height: '100%',
                            left: 0
                        },
                        alt: image.id,
                        src: image.original_url
                    }, idx)
                )
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                sx: {
                    position: 'absolute',
                    width: isSm1 ? '80%' : '30%',
                    minWidth: isSm1 ? '288px' : '452px',
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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_node_modules_swiper_react_swiper_react_js__WEBPACK_IMPORTED_MODULE_4__/* .Swiper */ .t, {
                        autoplay: {
                            delay: 5000,
                            disableOnInteraction: false
                        },
                        navigation: {
                            prevEl: navigationBannerPrevRef.current,
                            nextEl: navigationBannerNextRef.current
                        },
                        onBeforeInit: (swiper)=>{
                            swiper.params.navigation.prevEl = navigationBannerPrevRef.current;
                            swiper.params.navigation.nextEl = navigationBannerNextRef.current;
                        },
                        onSlideChange: handleBannerSlideChange,
                        slidesPerView: 4,
                        children: images.map((image, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_node_modules_swiper_react_swiper_react_js__WEBPACK_IMPORTED_MODULE_4__/* .SwiperSlide */ .o, {
                                onClick: handleClickThumbnail,
                                id: idx,
                                style: {
                                    flexShrink: 'unset'
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    style: {
                                        width: isSm1 ? 65 : 95,
                                        height: isSm1 ? 35 : 45,
                                        marginLeft: '16px',
                                        ...idx === 0 && {
                                            marginLeft: 0
                                        },
                                        borderRadius: '6px',
                                        cursor: 'pointer',
                                        ...idx === current && {
                                            border: '2px solid white'
                                        }
                                    },
                                    alt: image.id,
                                    src: image.thumb_url
                                })
                            }, idx)
                        )
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        onClick: ()=>{
                            handleChangeSliceClick(false);
                        },
                        style: {
                            ...SwiperBtnPrev({
                                isSm: isSm1
                            })
                        },
                        ref: navigationBannerPrevRef,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icons_index__WEBPACK_IMPORTED_MODULE_5__/* .CarouselPrev */ .X$, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        onClick: ()=>{
                            handleChangeSliceClick(true);
                        },
                        style: {
                            ...SwiperBtnNext({
                                isSm: isSm1
                            })
                        },
                        ref: navigationBannerNextRef,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icons_index__WEBPACK_IMPORTED_MODULE_5__/* .CarouselNext */ .Pz, {})
                    })
                ]
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6600:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
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
/* harmony import */ var _components_Icons_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5273);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7426);
/* harmony import */ var _utils_flexStyle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8210);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_3__, _node_modules_swiper_react_swiper_react_js__WEBPACK_IMPORTED_MODULE_4__]);
([swiper__WEBPACK_IMPORTED_MODULE_3__, _node_modules_swiper_react_swiper_react_js__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

// import react

// import MUI components

// import swiper


// import others components

// import icons

// import utils


swiper__WEBPACK_IMPORTED_MODULE_3__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_3__.Pagination
]);
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
const CustomPaginationBullet = ({ numOfBullets , activePaginationBullet , handleClickPaginationBullet  })=>{
    const ids = Array.from(Array(numOfBullets).keys());
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        sx: {
            position: 'absolute',
            top: '32px',
            right: '48px',
            ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_8__/* .flexStyle */ .X)('center', 'center'),
            columnGap: '16px'
        },
        children: ids.map((idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                onClick: handleClickPaginationBullet,
                id: idx,
                sx: {
                    width: '14px',
                    height: '14px',
                    bgcolor: activePaginationBullet === idx ? _utils_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.second */ .DM.second : _utils_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.placeHolder */ .DM.placeHolder,
                    borderRadius: '50%',
                    cursor: 'pointer'
                }
            }, idx)
        )
    }));
};
function PublisherComponent(props1) {
    const { isSm: isSm1  } = props1;
    const publishers = [
        {
            url: 'https://voiz-nxb.s3.cloud.cmctelecom.vn/1.png',
            id: 1
        },
        {
            url: 'https://voiz-nxb.s3.cloud.cmctelecom.vn/2.png',
            id: 2
        },
        {
            url: 'https://voiz-nxb.s3.cloud.cmctelecom.vn/3.png',
            id: 3
        },
        {
            url: 'https://voiz-nxb.s3.cloud.cmctelecom.vn/4.png',
            id: 4
        },
        {
            url: 'https://voiz-nxb.s3.cloud.cmctelecom.vn/5.png',
            id: 5
        },
        {
            url: 'https://voiz-nxb.s3.cloud.cmctelecom.vn/6.png',
            id: 6
        },
        {
            url: 'https://voiz-nxb.s3.cloud.cmctelecom.vn/7.png',
            id: 7
        },
        {
            url: 'https://voiz-nxb.s3.cloud.cmctelecom.vn/8.png',
            id: 8
        },
        {
            url: 'https://voiz-nxb.s3.cloud.cmctelecom.vn/9.png',
            id: 9
        },
        {
            url: 'https://voiz-nxb.s3.cloud.cmctelecom.vn/10.png',
            id: 10
        },
        {
            url: 'https://voiz-nxb.s3.cloud.cmctelecom.vn/11.png',
            id: 11
        },
        {
            url: 'https://voiz-nxb.s3.cloud.cmctelecom.vn/12.png',
            id: 12
        },
        {
            url: 'https://voiz-nxb.s3.cloud.cmctelecom.vn/13.png',
            id: 13
        },
        {
            url: 'https://voiz-nxb.s3.cloud.cmctelecom.vn/14.png',
            id: 14
        },
        {
            url: 'https://voiz-nxb.s3.cloud.cmctelecom.vn/15.png',
            id: 15
        },
        {
            url: 'https://voiz-nxb.s3.cloud.cmctelecom.vn/16.png',
            id: 16
        },
        {
            url: 'https://voiz-nxb.s3.cloud.cmctelecom.vn/17.png',
            id: 17
        },
        {
            url: 'https://voiz-nxb.s3.cloud.cmctelecom.vn/18.png',
            id: 18
        },
        {
            url: 'https://voiz-nxb.s3.cloud.cmctelecom.vn/19.png',
            id: 19
        },
        {
            url: 'https://voiz-nxb.s3.cloud.cmctelecom.vn/20.png',
            id: 20
        },
        {
            url: 'https://voiz-nxb.s3.cloud.cmctelecom.vn/21.png',
            id: 21
        },
        {
            url: 'https://voiz-nxb.s3.cloud.cmctelecom.vn/22.png',
            id: 22
        }
    ];
    const num_items_per_line = !isSm1 ? 5 : 2.5;
    const { 0: activePublisherPagination , 1: setActivePublisherPagination  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: showNavigationBtn , 1: setShowNavigationBtn  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const navigationPublisherPrevRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const navigationPublisherNextRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const swiperPagination = {
        clickable: true,
        renderBullet: function(index, className) {
            return `<span id="publisher-pagination-${index}" class="${className}" style="visibility:hidden">${index + 2}</span>`;
        }
    };
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
            cursor: 'pointer',
            ...(isSm || !showNavigationBtn) && {
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
            cursor: 'pointer',
            ...(isSm || !showNavigationBtn) && {
                display: 'none'
            }
        };
    };
    const handleClickPublisherPaginationBullet = (e)=>{
        const id = Number(e.target.id);
        const actualPaginationBullet = document.querySelector(`#publisher-pagination-${id}`);
        actualPaginationBullet.click();
        setActivePublisherPagination(id);
    };
    const handleSlideChange = (e)=>{
        const realIndex = e.realIndex;
        const id = Math.ceil(realIndex / 5);
        setActivePublisherPagination(id);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        onMouseOver: ()=>{
            setShowNavigationBtn(true);
        },
        onMouseOut: ()=>{
            setShowNavigationBtn(false);
        },
        sx: {
            padding: isSm1 ? '32px 15px 23px 15px' : '32px 48px 23px 48px',
            backgroundColor: _utils_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.bg2 */ .DM.bg2,
            position: 'relative'
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomPaginationBullet, {
                numOfBullets: 5,
                activePaginationBullet: activePublisherPagination,
                handleClickPaginationBullet: handleClickPublisherPaginationBullet
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                content: "Nh\xe0 xuất bản",
                isSm: isSm1
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_node_modules_swiper_react_swiper_react_js__WEBPACK_IMPORTED_MODULE_4__/* .Swiper */ .t, {
                onSlideChange: handleSlideChange,
                pagination: swiperPagination,
                navigation: {
                    prevEl: navigationPublisherPrevRef.current,
                    nextEl: navigationPublisherNextRef.current
                },
                onBeforeInit: (swiper)=>{
                    swiper.params.navigation.prevEl = navigationPublisherPrevRef.current;
                    swiper.params.navigation.nextEl = navigationPublisherNextRef.current;
                },
                slidesPerGroup: 5,
                slidesPerView: num_items_per_line,
                spaceBetween: isSm1 ? 8 : 20,
                children: publishers.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_node_modules_swiper_react_swiper_react_js__WEBPACK_IMPORTED_MODULE_4__/* .SwiperSlide */ .o, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Thumbnail_Thumbnail__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                style: {
                                    borderRadius: '6px',
                                    width: '100%',
                                    height: isSm1 ? '81px' : '112px'
                                },
                                avtSrc: item.url,
                                alt: `images ${item.id}`
                            })
                        })
                    }, item.id)
                )
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    ...SwiperBtnPrev({
                        isSm: isSm1
                    })
                },
                ref: navigationPublisherPrevRef,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icons_index__WEBPACK_IMPORTED_MODULE_6__/* .CarouselPrev */ .X$, {})
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    ...SwiperBtnNext({
                        isSm: isSm1
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

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;