"use strict";
(() => {
var exports = {};
exports.id = 682;
exports.ids = [682];
exports.modules = {

/***/ 5843:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2917);
/* harmony import */ var _src_components_PlaylistDetail_PlaylistDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8465);
/* harmony import */ var _src_services_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2055);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_components_PlaylistDetail_PlaylistDetail__WEBPACK_IMPORTED_MODULE_4__]);
_src_components_PlaylistDetail_PlaylistDetail__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

// import next

// import reduc


// import components

// import service

const PlaylistDetailPage = ({ playlist  })=>{
    var ref;
    const url =  false ? 0 : '';
    return playlist ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {
        store: _src_redux_store__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: playlist === null || playlist === void 0 ? void 0 : playlist.name
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:url",
                        content: url
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:type",
                        content: "website"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:title",
                        content: playlist === null || playlist === void 0 ? void 0 : playlist.name
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:description",
                        content: playlist === null || playlist === void 0 ? void 0 : playlist.description
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image",
                        content: playlist === null || playlist === void 0 ? void 0 : (ref = playlist.avatar) === null || ref === void 0 ? void 0 : ref.original_url
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image:width",
                        content: "1200"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image:height",
                        content: "630"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_PlaylistDetail_PlaylistDetail__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                playlistFromAPI: playlist
            })
        ]
    }) : '';
};
async function getServerSideProps(context) {
    const api = new _src_services_api__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z();
    const { params  } = context;
    let playlist = null;
    try {
        const res = await api.getPlaylistDetail(params.id);
        playlist = res.data.data;
    } catch (err) {
        console.log(err.message);
    }
    return {
        props: {
            playlist
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlaylistDetailPage);

});

/***/ }),

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

/***/ 8465:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PlatlistDetail)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_payment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6204);
/* harmony import */ var _redux_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7010);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3877);
/* harmony import */ var _node_modules_swiper_react_swiper_react_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3670);
/* harmony import */ var react_show_more_text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3422);
/* harmony import */ var react_show_more_text__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_show_more_text__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8148);
/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_icons_material_ExpandLess__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6174);
/* harmony import */ var _mui_icons_material_ExpandLess__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ExpandLess__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_icons_material_VolumeMute__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6467);
/* harmony import */ var _mui_icons_material_VolumeMute__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_VolumeMute__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_icons_material_VolumeUp__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8610);
/* harmony import */ var _mui_icons_material_VolumeUp__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_VolumeUp__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6959);
/* harmony import */ var _mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6146);
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_Icons_index__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(9587);
/* harmony import */ var _components_Thumbnail_Thumbnail__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2579);
/* harmony import */ var _RateModal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(7312);
/* harmony import */ var _components_Shared_ShareModal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(9586);
/* harmony import */ var _components_Shared_InfoLabel__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(9654);
/* harmony import */ var _components_Shared_InfoValue__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(7238);
/* harmony import */ var _utils_flexStyle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(8210);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(7426);
/* harmony import */ var _utils_useWindowSize__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(9061);
/* harmony import */ var _utils_convertSecondsToReadableString__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(2083);
/* harmony import */ var _utils_formatPrice__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(4243);
/* harmony import */ var _utils_formatDuration__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(994);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(2055);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_node_modules_swiper_react_swiper_react_js__WEBPACK_IMPORTED_MODULE_8__, swiper__WEBPACK_IMPORTED_MODULE_7__]);
([_node_modules_swiper_react_swiper_react_js__WEBPACK_IMPORTED_MODULE_8__, swiper__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);

// import react

// import next link

// import next router

// import redux

// import reducer, actions


// import swiper



// import MUI components







// import icons

// import other components





// import utils






// import service

const ShowTextBtn = (content)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Button, {
        endIcon: content === 'Xem th\xeam' ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_11___default()), {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ExpandLess__WEBPACK_IMPORTED_MODULE_12___default()), {}),
        sx: {
            color: _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .COLORS.second */ .DM.second,
            ..._utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .TEXT_STYLE.VZ_Caption_2 */ .gN.VZ_Caption_2,
            textTransform: 'none',
            ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_26__/* .flexStyle */ .X)('center', 'center'),
            width: '100%'
        },
        children: content
    })
;
swiper__WEBPACK_IMPORTED_MODULE_7__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_7__.Navigation
]);
function PlatlistDetail({ playlistFromAPI  }) {
    var ref6, ref1;
    const api = new _services_api__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z();
    const windowSize = (0,_utils_useWindowSize__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const cart = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_redux_payment__WEBPACK_IMPORTED_MODULE_5__/* .selectCart */ .KY);
    const { 0: url , 1: setUrl  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: id1 , 1: setId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: playlist , 1: setPlaylist  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: playlistInfo1 , 1: setPlaylistInfo  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: playlistAudios , 1: setPlaylistAudios  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: recommendedPlaylist , 1: setRecommendedPlaylist  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: audioTrailerUrl , 1: setAudioTrailerUrl  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: audio , 1: setAudio  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(typeof Audio !== "undefined" ? new Audio(audioTrailerUrl) : undefined);
    const { 0: paused , 1: setPaused  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: openRateModal , 1: setOpenRateModal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: openAfterRateModal , 1: setOpenAfterRateModal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: openShareModal , 1: setOpenShareModal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: contentRating , 1: setContentRating  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: voiceRating , 1: setVoiceRating  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: rateContent , 1: setRateContent  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: addToCartError , 1: setAddToCartError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: playAudioError , 1: setPlayAudioError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: openSnackbar , 1: setOpenSnackbar  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: errorMessage , 1: setErrorMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: afterRateContent , 1: setAfterRateContent  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('Cảm ơn đ\xe1nh gi\xe1 của bạn. Bạn c\xf3 thể thay đổi điểm đ\xe1nh gi\xe1  bất cứ l\xfac n\xe0o.');
    const { 0: addToCartErrorMessage , 1: setAddToCartErrorMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const isSm = windowSize.width > _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .SCREEN_BREAKPOINTS.sm */ .nN.sm ? false : true;
    const coverImgHeight = isSm ? 182 : 380;
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        async function fetchPlaylist() {
            setPlaylist(playlistFromAPI);
            const playlistTrailer = playlistFromAPI.playlist_trailers.length > 0 ? playlistFromAPI.playlist_trailers[0]['file_url'] : '';
            setContentRating(playlistFromAPI.playlist_rating.content_stars);
            setAudioTrailerUrl(playlistTrailer);
        }
        async function fetchRecommendedPlaylist() {
            const res = await api.getPlaylistAnalyses();
            const data = res.data.data;
            setRecommendedPlaylist(data);
        }
        async function fetchPlaylistAudios() {
            const res = await api.getPlaylistAudios(id1);
            const data = res.data.data;
            setPlaylistAudios(data);
        }
        if (id1) {
            setUrl(window.location.href);
            fetchPlaylist();
            fetchRecommendedPlaylist();
            fetchPlaylistAudios();
            setPlaylistInfo(createPlaylistInfo());
        }
    }, [
        id1
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const { id  } = router.query;
        setId(id);
    }, [
        router.query
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const p = createPlaylistInfo();
        setPlaylistInfo(p);
    }, [
        playlist
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setAudio(new Audio(audioTrailerUrl));
    }, [
        audioTrailerUrl
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        !paused ? audio.play() : audio.pause();
    }, [
        paused
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        audio.addEventListener('ended', ()=>setPaused(true)
        );
        return ()=>{
            audio.removeEventListener('ended', ()=>setPaused(true)
            );
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setPaused(true);
    }, []);
    const handleBookmark = ()=>{
        async function bookmarkPlaylist() {
            try {
                const res = await api.bookmarkPlaylist(playlist.id);
                const data = await res.data;
                if (data.error) {
                    setOpenSnackbar(true);
                    setErrorMessage('Đ\xe1nh dấu playlist kh\xf4ng th\xe0nh c\xf4ng!');
                    return;
                }
                const playlistToBookmark = {
                    ...playlist
                };
                playlistToBookmark['is_bookmark'] = !playlist.is_bookmark;
                setPlaylist({
                    ...playlistToBookmark
                });
            } catch (err) {
                setErrorMessage('Đ\xe1nh dấu playlist kh\xf4ng th\xe0nh c\xf4ng!');
                setOpenSnackbar(true);
            }
        }
        bookmarkPlaylist();
    };
    const onPlayClick = ()=>{
        setPaused(!paused);
    };
    const createPlaylistInfo = ()=>{
        if (Object.keys(playlist).length > 0) {
            var ref, ref2, ref3, ref4, ref5;
            const playlistInfo = [
                {
                    label: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Shared_InfoLabel__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                        title: "T\xe1c giả"
                    }),
                    value: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: `/authors/${(ref = playlist === null || playlist === void 0 ? void 0 : playlist.authors[0]) === null || ref === void 0 ? void 0 : ref.id}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Box, {
                            sx: {
                                cursor: 'pointer'
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Shared_InfoValue__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                value: playlist === null || playlist === void 0 ? void 0 : playlist.author_string
                            })
                        })
                    })
                },
                {
                    label: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Shared_InfoLabel__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                        title: "Thời lượng"
                    }),
                    value: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Typography, {
                        sx: {
                            ..._utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .TEXT_STYLE.content2 */ .gN.content2,
                            color: _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .COLORS.VZ_Text_content */ .DM.VZ_Text_content
                        },
                        children: (0,_utils_convertSecondsToReadableString__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z)(playlist === null || playlist === void 0 ? void 0 : playlist.total_duration)
                    })
                },
                {
                    label: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Shared_InfoLabel__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                        title: "K\xeanh"
                    }),
                    value: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: `/channels/${playlist === null || playlist === void 0 ? void 0 : (ref2 = playlist.channel) === null || ref2 === void 0 ? void 0 : ref2.id}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Box, {
                            sx: {
                                cursor: 'pointer'
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Shared_InfoValue__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                value: playlist === null || playlist === void 0 ? void 0 : (ref3 = playlist.channel) === null || ref3 === void 0 ? void 0 : ref3.name
                            })
                        })
                    })
                },
                {
                    label: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Shared_InfoLabel__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                        title: "Người đọc"
                    }),
                    value: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Shared_InfoValue__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                        value: playlist === null || playlist === void 0 ? void 0 : playlist.voicers.map((i)=>i.name
                        ).join(', ')
                    })
                },
                {
                    label: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Shared_InfoLabel__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                        title: "Gi\xe1 b\xe1n lẻ"
                    }),
                    value: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Box, {
                        sx: {
                            ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_26__/* .flexStyle */ .X)('flex-start', 'center'),
                            columnGap: '6px'
                        },
                        children: [
                            (playlist === null || playlist === void 0 ? void 0 : playlist.sale_coin_price) < (playlist === null || playlist === void 0 ? void 0 : playlist.coin_price) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Typography, {
                                sx: {
                                    ..._utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .TEXT_STYLE.content2 */ .gN.content2,
                                    color: _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .COLORS.VZ_Text_content */ .DM.VZ_Text_content,
                                    textDecoration: 'line-through'
                                },
                                children: (0,_utils_formatPrice__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z)(playlist === null || playlist === void 0 ? void 0 : playlist.sale_coin_price)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Typography, {
                                sx: {
                                    ..._utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .TEXT_STYLE.content2 */ .gN.content2,
                                    color: _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .COLORS.white */ .DM.white
                                },
                                children: (0,_utils_formatPrice__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z)(playlist === null || playlist === void 0 ? void 0 : playlist.coin_price)
                            })
                        ]
                    })
                },
                {
                    label: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Shared_InfoLabel__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                        title: "Đ\xe1nh gi\xe1"
                    }),
                    value: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Box, {
                        sx: {
                            ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_26__/* .flexStyle */ .X)('flex-start', 'center'),
                            columnGap: '2px'
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Typography, {
                                sx: {
                                    ..._utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .TEXT_STYLE.content2 */ .gN.content2,
                                    color: _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .COLORS.VZ_Text_content */ .DM.VZ_Text_content
                                },
                                children: playlist === null || playlist === void 0 ? void 0 : (ref4 = playlist.playlist_counter) === null || ref4 === void 0 ? void 0 : ref4.content_avg
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                width: "14",
                                height: "13",
                                viewBox: "0 0 14 13",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z",
                                    fill: "#754ADA"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Typography, {
                                sx: {
                                    ..._utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .TEXT_STYLE.content2 */ .gN.content2,
                                    color: _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .COLORS.VZ_Text_content */ .DM.VZ_Text_content
                                },
                                children: [
                                    "(",
                                    playlist === null || playlist === void 0 ? void 0 : (ref5 = playlist.playlist_counter) === null || ref5 === void 0 ? void 0 : ref5.ratings_count,
                                    ")"
                                ]
                            })
                        ]
                    })
                }
            ];
            return playlistInfo;
        }
        return [];
    };
    const handleOpenRateModal = ()=>{
        setOpenRateModal(true);
    };
    const handleOpenShareModal = ()=>{
        setOpenShareModal(true);
    };
    const handleRatePlaylist = async (cb)=>{
        try {
            const res = await api.ratePlaylist(id1, {
                content_stars: contentRating,
                voice_stars: voiceRating,
                content: rateContent
            });
            const result = await res.data;
            if (result.code === 0) {
                setAfterRateContent('Đ\xe3 xảy ra lỗi khi đ\xe1nh gi\xe1 playlist, bạn h\xe3y thử lại nh\xe9!');
                return;
            }
            const data = result.data;
            const tmpPlaylist = {
                ...playlist
            };
            tmpPlaylist['playlist_counter'] = data.playlist_counter;
            tmpPlaylist['playlist_rating'] = data.playlist_rating;
            setPlaylist({
                ...tmpPlaylist
            });
            cb();
        } catch (err) {
            setAfterRateContent('Đ\xe3 xảy ra lỗi khi đ\xe1nh gi\xe1 playlist, bạn h\xe3y thử lại nh\xe9!');
        }
    };
    const handleAddToCart = async ()=>{
        // add to cart store
        const isItemExists = cart.length > 0 && cart.some((i)=>i.id === playlist.id
        );
        if (!isItemExists) {
            try {
                const res = await api.addToCart(playlist.id);
                const result = await res.data;
                if (result.code === 0) {
                    setAddToCartError(true);
                    setAddToCartErrorMessage(result.error);
                    setTimeout(()=>{
                        setAddToCartError(false);
                    }, 1500);
                    return;
                }
                const tmpCart = [
                    ...cart,
                    playlist
                ];
                dispatch((0,_redux_payment__WEBPACK_IMPORTED_MODULE_5__/* .setCart */ .RV)(tmpCart));
                dispatch((0,_redux_payment__WEBPACK_IMPORTED_MODULE_5__/* .setAddToCartFlag */ .ES)(1));
            } catch (err) {
                const errList = err.response.data.error;
                if (errList instanceof Object) {
                    let errMessage = '';
                    for(let e in errList){
                        const key = Object.keys(errList[e])[0];
                        const value = errList[e][key];
                        errMessage += `${value} \n`;
                    }
                    setAddToCartErrorMessage(errMessage || 'Đ\xe3 xảy ra lỗi, vui l\xf2ng thử lại!');
                    setAddToCartError(true);
                    setTimeout(()=>{
                        setAddToCartError(false);
                    }, 1500);
                    return;
                }
                setAddToCartErrorMessage(errList);
                setAddToCartError(true);
                setTimeout(()=>{
                    setAddToCartError(false);
                }, 1500);
            }
            return;
        }
        setAddToCartErrorMessage('Sản phẩm đ\xe3 được th\xeam v\xe0o.\n Vui l\xf2ng kiểm tra lại giỏ h\xe0ng!');
        setAddToCartError(true);
        setTimeout(()=>{
            setAddToCartError(false);
        }, 1500);
    };
    const handlePlayAudio = async (audioId)=>{
        try {
            var res = await api.getAudioFile(audioId);
        } catch (err) {
            console.log(err);
        }
    };
    const handleClickPlayAll = async (e)=>{
        e.preventDefault();
        if (playlistAudios) {
            return;
        }
        try {
            var res = await api.getAudioFile(playlistAudios[0].id);
        } catch (err) {
            console.log(err);
        }
    };
    const getImgWidth = ()=>{
        const leftPane = document.querySelector('#left-pane');
        const { clientWidth  } = leftPane;
        const sidePadding = isSm ? 0 : 32;
        return (clientWidth - sidePadding * 2) / 3 - 3.5;
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Box, {
        sx: {
            ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_26__/* .flexStyle */ .X)('center', 'center'),
            flexDirection: 'column',
            position: 'relative'
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Box, {
                sx: {
                    position: 'absolute',
                    height: `${coverImgHeight}px`,
                    width: '100%',
                    top: 0
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    style: {
                        width: '100%',
                        height: '100%',
                        left: 0
                    },
                    alt: "cover img alt",
                    src: playlist === null || playlist === void 0 ? void 0 : (ref6 = playlist.avatar) === null || ref6 === void 0 ? void 0 : ref6.original_url
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Box, {
                sx: {
                    width: '100%',
                    position: 'relative',
                    marginTop: `${coverImgHeight}px`
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Box, {
                    sx: {
                        backgroundColor: _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .COLORS.bg2 */ .DM.bg2,
                        ...!isSm && {
                            height: '180px'
                        }
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Box, {
                        sx: {
                            padding: '20px',
                            ...isSm ? {
                                ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_26__/* .flexStyle */ .X)('center', 'flex-start'),
                                flexDirection: 'column'
                            } : {
                                ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_26__/* .flexStyle */ .X)('flex-start', 'center')
                            }
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Box, {
                            sx: {
                                ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_26__/* .flexStyle */ .X)('flex-start', 'center'),
                                width: '100%',
                                flexDirection: 'column'
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Box, {
                                    sx: {
                                        ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_26__/* .flexStyle */ .X)('flex-start', 'flex-start'),
                                        width: '100%'
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Box, {
                                            sx: {
                                                width: isSm ? '40%' : '30%',
                                                minWidth: isSm ? '136px' : '250px',
                                                transform: 'translateY(-50%)'
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Avatar, {
                                                sx: {
                                                    width: isSm ? '136px' : '250px',
                                                    height: isSm ? '136px' : '250px'
                                                },
                                                alt: "Remy Sharp",
                                                src: playlist === null || playlist === void 0 ? void 0 : (ref1 = playlist.avatar) === null || ref1 === void 0 ? void 0 : ref1.thumb_url,
                                                variant: "rounded"
                                            })
                                        }),
                                        !isSm && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Box, {
                                            sx: {
                                                ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_26__/* .flexStyle */ .X)('center', 'flex-start'),
                                                flexDirection: 'column',
                                                rowGap: isSm ? '16px' : '25px',
                                                margin: '0 40px',
                                                width: '50%'
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Typography, {
                                                    sx: {
                                                        ...isSm ? _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .TEXT_STYLE.h3 */ .gN.h3 : _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .TEXT_STYLE.h1 */ .gN.h1,
                                                        color: _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .COLORS.white */ .DM.white,
                                                        display: '-webkit-box',
                                                        textOverflow: 'ellipsis',
                                                        WebkitLineClamp: 1,
                                                        WebkitBoxOrient: 'vertical',
                                                        overflow: 'hidden'
                                                    },
                                                    children: playlist === null || playlist === void 0 ? void 0 : playlist.name
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Box, {
                                                    onClick: handleOpenRateModal,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Rating, {
                                                        sx: {
                                                            columnGap: '24px',
                                                            '& .MuiRating-iconEmpty': {
                                                                color: _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .COLORS.contentIcon */ .DM.contentIcon
                                                            }
                                                        },
                                                        name: "playlist-rate",
                                                        value: contentRating,
                                                        precision: 1,
                                                        readOnly: true
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Box, {
                                            sx: {
                                                width: isSm ? '60%' : '20%',
                                                ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_26__/* .flexStyle */ .X)('center', 'center'),
                                                columnGap: isSm ? '24px' : '35px'
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Box, {
                                                    onClick: handleOpenShareModal,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icons_index__WEBPACK_IMPORTED_MODULE_17__/* .Share */ .mB, {
                                                        bgfill: "#373944",
                                                        stroke: "none",
                                                        fill: "white"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Shared_ShareModal__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                                                    url: url,
                                                    isSm: isSm,
                                                    open: openShareModal,
                                                    setOpen: setOpenShareModal
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RateModal__WEBPACK_IMPORTED_MODULE_19__/* .RateModal */ .N, {
                                                    isSm: isSm,
                                                    open: openRateModal,
                                                    setOpen: setOpenRateModal,
                                                    setOpenAfterRate: setOpenAfterRateModal,
                                                    handleRatePlaylist: handleRatePlaylist,
                                                    setContentRating: setContentRating,
                                                    setVoiceRating: setVoiceRating,
                                                    contentRating: contentRating,
                                                    voiceRating: voiceRating,
                                                    rateContent: rateContent,
                                                    setRateContent: setRateContent
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RateModal__WEBPACK_IMPORTED_MODULE_19__/* .AfterRateModal */ .D, {
                                                    content: afterRateContent,
                                                    isSm: isSm,
                                                    open: openAfterRateModal,
                                                    setOpen: setOpenAfterRateModal
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Button, {
                                                    onClick: handleBookmark,
                                                    sx: {
                                                        ..._utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .TEXT_STYLE.title1 */ .gN.title1,
                                                        color: _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .COLORS.white */ .DM.white,
                                                        borderRadius: '22px',
                                                        height: isSm ? '28px' : '48px',
                                                        width: 'max-content',
                                                        minWidth: 'auto',
                                                        whiteSpace: 'nowrap',
                                                        textTransform: 'none',
                                                        bgcolor: (playlist === null || playlist === void 0 ? void 0 : playlist.is_bookmark) ? _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .COLORS.bg3 */ .DM.bg3 : _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .COLORS.main */ .DM.main,
                                                        pl: '14px',
                                                        pr: '14px',
                                                        ':hover': {
                                                            bgcolor: (playlist === null || playlist === void 0 ? void 0 : playlist.is_bookmark) ? _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .COLORS.bg3 */ .DM.bg3 : _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .COLORS.main */ .DM.main
                                                        }
                                                    },
                                                    startIcon: (playlist === null || playlist === void 0 ? void 0 : playlist.is_bookmark) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_15___default()), {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_16___default()), {}),
                                                    children: (playlist === null || playlist === void 0 ? void 0 : playlist.is_bookmark) ? 'Hủy đ\xe1nh dấu' : 'Đ\xe1nh dấu'
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Snackbar, {
                                                    open: openSnackbar,
                                                    autoHideDuration: 6000,
                                                    onClose: ()=>{
                                                        setOpenSnackbar(false);
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Alert, {
                                                        onClose: ()=>{
                                                            setOpenSnackbar(false);
                                                        },
                                                        severity: "error",
                                                        sx: {
                                                            width: '100%'
                                                        },
                                                        children: errorMessage
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                isSm && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Box, {
                                    sx: {
                                        ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_26__/* .flexStyle */ .X)('center', 'center'),
                                        flexDirection: 'column',
                                        rowGap: isSm ? '16px' : '25px',
                                        marginTop: '-50px',
                                        width: '70%'
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Typography, {
                                            sx: {
                                                ...isSm ? _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .TEXT_STYLE.h3 */ .gN.h3 : _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .TEXT_STYLE.h2 */ .gN.h2,
                                                color: _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .COLORS.white */ .DM.white
                                            },
                                            children: playlist === null || playlist === void 0 ? void 0 : playlist.name
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Box, {
                                            onClick: handleOpenRateModal,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Rating, {
                                                sx: {
                                                    columnGap: '24px'
                                                },
                                                name: "playlist-rate",
                                                value: contentRating,
                                                precision: 1,
                                                readOnly: true
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            }),
            isSm && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Box, {
                sx: {
                    ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_26__/* .flexStyle */ .X)('center', 'center'),
                    columnGap: '16px',
                    width: '100%',
                    padding: '16px',
                    boxSizing: 'border-box',
                    bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .COLORS.bg2 */ .DM.bg2,
                    borderRadius: '10px',
                    margin: '16px 0'
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Button, {
                        onClick: handlePlayAudio,
                        sx: {
                            bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .COLORS.main */ .DM.main,
                            width: '50%',
                            borderRadius: '6px',
                            ..._utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .TEXT_STYLE.title1 */ .gN.title1,
                            color: _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .COLORS.white */ .DM.white,
                            textTransform: 'none',
                            height: '48px'
                        },
                        startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icons_index__WEBPACK_IMPORTED_MODULE_17__/* .Play */ .sh, {}),
                        children: "Ph\xe1t tất cả"
                    }),
                    !!audioTrailerUrl && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Button, {
                        sx: {
                            bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .COLORS.second */ .DM.second,
                            width: '50%',
                            borderRadius: '6px',
                            ..._utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .TEXT_STYLE.title1 */ .gN.title1,
                            color: _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .COLORS.white */ .DM.white,
                            textTransform: 'none',
                            height: '48px',
                            ':hover': {
                                bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .COLORS.second */ .DM.second
                            }
                        },
                        startIcon: paused ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_VolumeMute__WEBPACK_IMPORTED_MODULE_13___default()), {
                            sx: {
                                color: _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .COLORS.white */ .DM.white
                            }
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_VolumeUp__WEBPACK_IMPORTED_MODULE_14___default()), {
                            sx: {
                                color: _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .COLORS.white */ .DM.white
                            }
                        }),
                        onClick: onPlayClick,
                        children: "Nghe thử"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Box, {
                sx: {
                    ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_26__/* .flexStyle */ .X)('center', 'flex-start'),
                    width: '100%',
                    columnGap: '32px',
                    padding: isSm ? 0 : '48px',
                    boxSizing: 'border-box',
                    ...isSm && {
                        flexDirection: 'column'
                    }
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Box, {
                        sx: {
                            width: isSm ? '100%' : '35%',
                            bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .COLORS.bg2 */ .DM.bg2,
                            padding: isSm ? '26px 0 0 15px' : '26px 32px',
                            borderRadius: '10px'
                        },
                        id: "left-pane",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Typography, {
                                sx: {
                                    ...isSm ? _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .TEXT_STYLE.h3 */ .gN.h3 : _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .TEXT_STYLE.h2 */ .gN.h2,
                                    color: _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .COLORS.white */ .DM.white,
                                    marginBottom: isSm ? '30px' : '38px'
                                },
                                children: "Giới thiệu"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Box, {
                                sx: {
                                    ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_26__/* .flexStyle */ .X)('flex-start', 'center'),
                                    columnGap: '20px'
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.TableContainer, {
                                    sx: {
                                        width: '100%',
                                        bgcolor: 'transparent',
                                        boxShadow: 'none'
                                    },
                                    component: _mui_material__WEBPACK_IMPORTED_MODULE_10__.Paper,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Table, {
                                        "aria-label": "playlist info tbl",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.TableBody, {
                                            children: playlistInfo1.map((row, idx)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.TableRow, {
                                                    sx: {
                                                        '&:last-child td, &:last-child th': {
                                                            border: 0
                                                        }
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.TableCell, {
                                                            sx: {
                                                                borderBottom: 'none',
                                                                padding: '0 0 21px 0'
                                                            },
                                                            component: "th",
                                                            scope: "row",
                                                            children: row.label
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.TableCell, {
                                                            sx: {
                                                                borderBottom: 'none',
                                                                padding: '0 0 21px 0',
                                                                textAlign: 'left'
                                                            },
                                                            align: "right",
                                                            children: row.value
                                                        })
                                                    ]
                                                }, idx)
                                            )
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Box, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Typography, {
                                        sx: {
                                            ..._utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .TEXT_STYLE.title2 */ .gN.title2,
                                            color: _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .COLORS.white */ .DM.white,
                                            marginBottom: '8px'
                                        },
                                        children: "Lời tựa"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_show_more_text__WEBPACK_IMPORTED_MODULE_9___default()), {
                                        lines: 3,
                                        more: ShowTextBtn('Xem th\xeam'),
                                        less: ShowTextBtn('Thu gọn'),
                                        className: "truncated-text",
                                        anchorClass: "my-anchor-css-class",
                                        expanded: false,
                                        width: isSm ? 390 : 1000,
                                        truncatedEndingComponent: "... ",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Typography, {
                                            sx: {
                                                ..._utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .TEXT_STYLE.content2 */ .gN.content2,
                                                color: _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .COLORS.VZ_Text_content */ .DM.VZ_Text_content,
                                                marginBottom: '16px',
                                                maxWidth: '90%'
                                            },
                                            children: playlist === null || playlist === void 0 ? void 0 : playlist.description
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Box, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Typography, {
                                        sx: {
                                            ..._utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .TEXT_STYLE.title2 */ .gN.title2,
                                            color: _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .COLORS.white */ .DM.white,
                                            marginBottom: '15px',
                                            marginTop: isSm ? '26px' : '16px'
                                        },
                                        children: "C\xf3 thể bạn muốn nghe"
                                    }),
                                    !isSm && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Box, {
                                        sx: {
                                            ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_26__/* .flexStyle */ .X)('flex-start', 'center'),
                                            flexWrap: 'wrap',
                                            columnGap: '5px',
                                            rowGap: '5px'
                                        },
                                        children: recommendedPlaylist.map((item, idx)=>{
                                            var ref;
                                            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                href: '/playlists/[id]',
                                                as: `/playlists/${item === null || item === void 0 ? void 0 : item.id}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Box, {
                                                    sx: {
                                                        width: 'calc(100% / 3 - 3.5px)'
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Thumbnail_Thumbnail__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                                        style: {
                                                            width: '100%',
                                                            height: `${getImgWidth()}px`
                                                        },
                                                        avtSrc: item === null || item === void 0 ? void 0 : (ref = item.avatar) === null || ref === void 0 ? void 0 : ref.thumb_url,
                                                        alt: item.alt
                                                    })
                                                })
                                            }, idx));
                                        })
                                    }),
                                    isSm && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_node_modules_swiper_react_swiper_react_js__WEBPACK_IMPORTED_MODULE_8__/* .Swiper */ .t, {
                                        slidesPerView: "auto",
                                        spaceBetween: 10,
                                        children: recommendedPlaylist.map((item, idx)=>{
                                            var ref;
                                            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_node_modules_swiper_react_swiper_react_js__WEBPACK_IMPORTED_MODULE_8__/* .SwiperSlide */ .o, {
                                                style: {
                                                    width: 'auto'
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                    href: '/playlists/[id]',
                                                    as: `/playlists/${item === null || item === void 0 ? void 0 : item.id}`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Box, {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Thumbnail_Thumbnail__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                                            style: {
                                                                width: '96px',
                                                                height: '96px'
                                                            },
                                                            avtSrc: item === null || item === void 0 ? void 0 : (ref = item.avatar) === null || ref === void 0 ? void 0 : ref.thumb_url,
                                                            alt: item.alt
                                                        }, idx)
                                                    })
                                                }, idx)
                                            }, idx));
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Box, {
                        sx: {
                            width: isSm ? '100%' : '65%',
                            ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_26__/* .flexStyle */ .X)('center', 'center'),
                            flexDirection: 'column',
                            rowGap: '32px',
                            height: '100%',
                            marginTop: isSm ? '16px' : 0
                        },
                        children: [
                            !isSm && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Box, {
                                sx: {
                                    ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_26__/* .flexStyle */ .X)('center', 'center'),
                                    columnGap: '24px',
                                    width: '100%',
                                    padding: '31px 24px',
                                    boxSizing: 'border-box',
                                    bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .COLORS.bg2 */ .DM.bg2,
                                    borderRadius: '10px'
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Button, {
                                        onClick: handleClickPlayAll,
                                        sx: {
                                            bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .COLORS.main */ .DM.main,
                                            width: '100%',
                                            borderRadius: '6px',
                                            ..._utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .TEXT_STYLE.title1 */ .gN.title1,
                                            color: _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .COLORS.white */ .DM.white,
                                            textTransform: 'none',
                                            height: '48px',
                                            ':hover': {
                                                bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .COLORS.main */ .DM.main
                                            }
                                        },
                                        startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icons_index__WEBPACK_IMPORTED_MODULE_17__/* .Play */ .sh, {}),
                                        children: "Ph\xe1t tất cả"
                                    }),
                                    !!audioTrailerUrl && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Button, {
                                        sx: {
                                            bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .COLORS.second */ .DM.second,
                                            width: '50%',
                                            borderRadius: '6px',
                                            ..._utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .TEXT_STYLE.title1 */ .gN.title1,
                                            color: _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .COLORS.white */ .DM.white,
                                            textTransform: 'none',
                                            height: '48px'
                                        },
                                        startIcon: paused ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_VolumeMute__WEBPACK_IMPORTED_MODULE_13___default()), {
                                            sx: {
                                                color: _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .COLORS.white */ .DM.white
                                            }
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_VolumeUp__WEBPACK_IMPORTED_MODULE_14___default()), {
                                            sx: {
                                                color: _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .COLORS.white */ .DM.white
                                            }
                                        }),
                                        onClick: onPlayClick,
                                        children: "Nghe thử"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Box, {
                                sx: {
                                    bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .COLORS.bg2 */ .DM.bg2,
                                    width: '100%',
                                    padding: isSm ? '26px 15px 0 15px' : '26px 32px 0 26px',
                                    boxSizing: 'border-box',
                                    borderRadius: '10px'
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Typography, {
                                        sx: {
                                            ...isSm ? _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .TEXT_STYLE.h3 */ .gN.h3 : _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .TEXT_STYLE.h2 */ .gN.h2,
                                            color: _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .COLORS.white */ .DM.white,
                                            marginBottom: isSm ? '26px' : '32px'
                                        },
                                        children: "Danh s\xe1ch audios"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Box, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.List, {
                                            sx: {
                                                width: '100%'
                                            },
                                            children: playlistAudios.map((value, idx)=>{
                                                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.ListItem, {
                                                    onClick: ()=>{
                                                        handlePlayAudio(value === null || value === void 0 ? void 0 : value.id);
                                                    },
                                                    sx: {
                                                        paddingLeft: 0,
                                                        paddingRight: '20px',
                                                        borderTop: `.5px solid ${_utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .COLORS.placeHolder */ .DM.placeHolder}`,
                                                        height: '72px'
                                                    },
                                                    secondaryAction: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Typography, {
                                                        sx: {
                                                            ..._utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .TEXT_STYLE.content2 */ .gN.content2,
                                                            color: _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .COLORS.bg4 */ .DM.bg4
                                                        },
                                                        children: (0,_utils_formatDuration__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z)(value.duration)
                                                    }),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.ListItemButton, {
                                                        role: undefined,
                                                        onClick: ()=>1
                                                        ,
                                                        dense: true,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.ListItemText, {
                                                            sx: {
                                                                'span': {
                                                                    ...isSm ? _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .TEXT_STYLE.title2 */ .gN.title2 : _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .TEXT_STYLE.title1 */ .gN.title1,
                                                                    color: _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .COLORS.white */ .DM.white,
                                                                    display: '-webkit-box',
                                                                    textOverflow: 'ellipsis',
                                                                    WebkitLineClamp: 2,
                                                                    WebkitBoxOrient: 'vertical',
                                                                    overflow: 'hidden'
                                                                }
                                                            },
                                                            id: `label-${value.id}`,
                                                            primary: value.name
                                                        })
                                                    })
                                                }, value.id));
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Box, {
                sx: {
                    bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .COLORS.bg2 */ .DM.bg2,
                    width: '100%',
                    padding: isSm ? '16px' : '26px 0',
                    boxSizing: 'border-box',
                    ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_26__/* .flexStyle */ .X)('center', 'center'),
                    columnGap: '24px'
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Tooltip, {
                        open: addToCartError,
                        title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                whiteSpace: 'pre-line',
                                color: _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .COLORS.error */ .DM.error
                            },
                            children: addToCartErrorMessage
                        }),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Button, {
                            onClick: handleAddToCart,
                            sx: {
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                width: isSm ? '50%' : '20%',
                                borderRadius: '6px',
                                ..._utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .TEXT_STYLE.title1 */ .gN.title1,
                                color: _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .COLORS.white */ .DM.white,
                                textTransform: 'none',
                                height: '48px'
                            },
                            variant: "outlined",
                            children: "Th\xeam v\xe0o giỏ h\xe0ng"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/up-vip/",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Box, {
                            sx: {
                                width: isSm ? '50%' : '20%'
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Button, {
                                sx: {
                                    bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .COLORS.main */ .DM.main,
                                    borderRadius: '6px',
                                    width: '100%',
                                    ..._utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .TEXT_STYLE.title1 */ .gN.title1,
                                    color: _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .COLORS.white */ .DM.white,
                                    textTransform: 'none',
                                    height: '48px'
                                },
                                children: "Mua g\xf3i VIP"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Dialog, {
                open: playAudioError,
                onClose: ()=>{
                    setPlayAudioError(false);
                },
                sx: {
                    '& .MuiPaper-root': {
                        bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .COLORS.bg1 */ .DM.bg1,
                        p: '40px 56px',
                        boxSizing: 'border-box',
                        borderRadius: isSm ? '10px' : '30px',
                        ...isSm && {
                            m: '0 16px'
                        }
                    }
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.DialogContent, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.DialogContentText, {
                            sx: {
                                ..._utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .TEXT_STYLE.content1 */ .gN.content1,
                                color: _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .COLORS.contentIcon */ .DM.contentIcon,
                                textAlign: 'center',
                                whiteSpace: 'pre-line'
                            },
                            children: "Vui l\xf2ng đăng nhập t\xe0i khoản VIP hoặc n\xe2ng cấp t\xe0i khoản để được nghe!"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.DialogActions, {
                        sx: {
                            ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_26__/* .flexStyle */ .X)('center', 'center'),
                            columnGap: '16px'
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            href: `/up-vip`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Box, {
                                sx: {
                                    maxWidth: '192px',
                                    width: 'calc(50% - 8px)'
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Button, {
                                    sx: {
                                        ..._utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .TEXT_STYLE.title1 */ .gN.title1,
                                        color: _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .COLORS.white */ .DM.white,
                                        textTransform: 'none',
                                        borderRadius: '8px',
                                        width: '100%',
                                        height: '48px',
                                        bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_23__/* .COLORS.main */ .DM.main
                                    },
                                    autoFocus: true,
                                    children: "UP VIP"
                                })
                            })
                        })
                    })
                ]
            })
        ]
    }));
};

});

/***/ }),

/***/ 7312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ RateModal),
/* harmony export */   "D": () => (/* binding */ AfterRateModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CustomDisabledButton_CustomDisabledButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8247);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7426);
/* harmony import */ var _utils_flexStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8210);

// import react

// import MUI components

// import others component

// import utils


function RateModal(props) {
    const { contentRating , voiceRating , rateContent , setContentRating , setVoiceRating , setRateContent  } = props;
    const { 0: isFormValid , 1: setIsFormValid  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { open , setOpen , setOpenAfterRate , handleRatePlaylist , isSm  } = props;
    const handleClose = ()=>{
        setOpen(false);
    };
    const handleSubmit = ()=>{
        handleClose();
        handleRatePlaylist(handleOpenAfterRateModal);
    };
    const handleOpenAfterRateModal = ()=>{
        setOpenAfterRate(true);
    };
    const onShareContentChange = (e)=>{
        if (e.target.value === '') {
            setIsFormValid(false);
        } else {
            setIsFormValid(true);
        }
        setRateContent(e.target.value);
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
        sx: {
            '& .MuiDialog-paper': {
                bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.bg1 */ .DM.bg1,
                padding: isSm ? '16px' : '56px',
                boxSizing: 'border-box',
                borderRadius: isSm ? '10px' : '30px',
                ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_5__/* .flexStyle */ .X)('flex-start', 'center'),
                width: isSm ? '95%' : '512px',
                margin: 0
            }
        },
        onClose: handleClose,
        open: open,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                    sx: {
                        ...isSm ? _utils_constants__WEBPACK_IMPORTED_MODULE_4__/* .TEXT_STYLE.h3 */ .gN.h3 : _utils_constants__WEBPACK_IMPORTED_MODULE_4__/* .TEXT_STYLE.h1 */ .gN.h1,
                        color: _utils_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.white */ .DM.white,
                        textAlign: 'center',
                        marginBottom: isSm ? '8px' : '32px'
                    },
                    children: "Voiz FM"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                    sx: {
                        ...isSm ? _utils_constants__WEBPACK_IMPORTED_MODULE_4__/* .TEXT_STYLE.title2 */ .gN.title2 : _utils_constants__WEBPACK_IMPORTED_MODULE_4__/* .TEXT_STYLE.title1 */ .gN.title1,
                        color: _utils_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.white */ .DM.white,
                        textAlign: 'center'
                    },
                    children: "Bạn muốn chia sẻ cụ thể với Voiz kh\xf4ng?"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    sx: {
                        ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_5__/* .flexStyle */ .X)('flex-start', 'center'),
                        flexDirection: 'column',
                        rowGap: '32px',
                        margin: `${isSm ? '16px' : '48px'} 0`
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            sx: {
                                width: '100%',
                                ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_5__/* .flexStyle */ .X)('flex-start', 'center'),
                                columnGap: '15px'
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                    sx: {
                                        ...isSm ? _utils_constants__WEBPACK_IMPORTED_MODULE_4__/* .TEXT_STYLE.title3 */ .gN.title3 : _utils_constants__WEBPACK_IMPORTED_MODULE_4__/* .TEXT_STYLE.content2 */ .gN.content2,
                                        color: _utils_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.white */ .DM.white
                                    },
                                    children: "Nội dung"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Rating, {
                                    sx: {
                                        '& .MuiRating-iconEmpty': {
                                            color: _utils_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.contentIcon */ .DM.contentIcon
                                        }
                                    },
                                    onChange: (event, newValue)=>{
                                        setContentRating(newValue);
                                    },
                                    name: "playlist-rate",
                                    value: contentRating,
                                    precision: 1
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            sx: {
                                width: '100%',
                                ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_5__/* .flexStyle */ .X)('flex-start', 'center'),
                                columnGap: '15px'
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                    sx: {
                                        ...isSm ? _utils_constants__WEBPACK_IMPORTED_MODULE_4__/* .TEXT_STYLE.title3 */ .gN.title3 : _utils_constants__WEBPACK_IMPORTED_MODULE_4__/* .TEXT_STYLE.content2 */ .gN.content2,
                                        color: _utils_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.white */ .DM.white
                                    },
                                    children: "Giọng đọc"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Rating, {
                                    sx: {
                                        '& .MuiRating-iconEmpty': {
                                            color: _utils_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.contentIcon */ .DM.contentIcon
                                        }
                                    },
                                    onChange: (event, newValue)=>{
                                        setVoiceRating(newValue);
                                    },
                                    name: "playlist-rate",
                                    value: voiceRating,
                                    precision: 1
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                    sx: {
                        width: '100%',
                        '& .MuiOutlinedInput-input': {
                            color: _utils_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.placeHolder */ .DM.placeHolder,
                            bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.bg1 */ .DM.bg1,
                            ..._utils_constants__WEBPACK_IMPORTED_MODULE_4__/* .TEXT_STYLE.content2 */ .gN.content2
                        },
                        '& .MuiOutlinedInput-root': {
                            bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.bg1 */ .DM.bg1,
                            border: `1px solid ${_utils_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.blackStroker */ .DM.blackStroker}`
                        }
                    },
                    value: rateContent,
                    onChange: onShareContentChange,
                    id: "share text area",
                    placeholder: "Những đ\xf3ng g\xf3p kh\xe1c, v\xed dụ: Cảm nhận nội dung, g\xf3p \xfd nhạc nền, thắc mắc về s\xe1ch,...",
                    multiline: true,
                    rows: 5,
                    variant: "outlined"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    sx: {
                        ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_5__/* .flexStyle */ .X)('center', 'center'),
                        columnGap: '16px',
                        width: '100%',
                        marginTop: '32px'
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                            onClick: handleClose,
                            sx: {
                                width: '50%',
                                bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.bg3 */ .DM.bg3,
                                ..._utils_constants__WEBPACK_IMPORTED_MODULE_4__/* .TEXT_STYLE.title1 */ .gN.title1,
                                textTransform: 'none',
                                color: _utils_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.white */ .DM.white,
                                height: '48px',
                                borderRadius: '8px'
                            },
                            children: "Bỏ qua"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomDisabledButton_CustomDisabledButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            onClick: handleSubmit,
                            disabled: !isFormValid,
                            content: "Gửi",
                            style: {
                                width: '50%',
                                bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.main */ .DM.main,
                                ..._utils_constants__WEBPACK_IMPORTED_MODULE_4__/* .TEXT_STYLE.title1 */ .gN.title1,
                                textTransform: 'none',
                                color: _utils_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.white */ .DM.white,
                                height: '48px',
                                borderRadius: '8px'
                            }
                        })
                    ]
                })
            ]
        })
    }));
}
function AfterRateModal(props) {
    const { open , setOpen , isSm , content  } = props;
    const handleClose = ()=>{
        setOpen(false);
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
        onClose: handleClose,
        open: open,
        sx: {
            '& .MuiDialog-paper': {
                bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.bg1 */ .DM.bg1,
                borderRadius: isSm ? '10px' : '30px',
                ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_5__/* .flexStyle */ .X)('center', 'center'),
                width: isSm ? '95%' : '512px',
                margin: 0
            }
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
            sx: {
                ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_5__/* .flexStyle */ .X)('center', 'center'),
                flexDirection: 'column',
                width: '70%',
                padding: '40px 0',
                boxSizing: 'border-box'
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                    sx: {
                        ..._utils_constants__WEBPACK_IMPORTED_MODULE_4__/* .TEXT_STYLE.h1 */ .gN.h1,
                        color: _utils_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.white */ .DM.white
                    },
                    children: "Voiz FM"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                    sx: {
                        ..._utils_constants__WEBPACK_IMPORTED_MODULE_4__/* .TEXT_STYLE.content1 */ .gN.content1,
                        color: _utils_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.contentIcon */ .DM.contentIcon,
                        marginTop: '32px',
                        marginBottom: '40px',
                        textAlign: 'center'
                    },
                    children: content
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                    onClick: handleClose,
                    sx: {
                        width: '50%',
                        bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.main */ .DM.main,
                        ..._utils_constants__WEBPACK_IMPORTED_MODULE_4__/* .TEXT_STYLE.title1 */ .gN.title1,
                        textTransform: 'none',
                        color: _utils_constants__WEBPACK_IMPORTED_MODULE_4__/* .COLORS.white */ .DM.white,
                        height: '48px',
                        borderRadius: '8px'
                    },
                    children: "OK"
                })
            ]
        })
    }));
}



/***/ }),

/***/ 994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ formatDuration)
/* harmony export */ });
function formatDuration(value) {
    const hour = Math.floor(value / 3600);
    const minute = Math.floor((value - hour * 3600) / 60);
    const secondLeft = value - (minute * 60 + hour * 3600);
    return `${hour > 0 ? `${hour}:` : ''}${minute}:${secondLeft < 9 ? `0${secondLeft}` : secondLeft}`;
};


/***/ }),

/***/ 4243:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FormatPrice)
/* harmony export */ });
function FormatPrice(number) {
    return new Intl.NumberFormat('de-DE').format(number);
};


/***/ }),

/***/ 8308:
/***/ ((module) => {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ 6146:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Add");

/***/ }),

/***/ 6959:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Check");

/***/ }),

/***/ 6174:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ExpandLess");

/***/ }),

/***/ 8148:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ExpandMore");

/***/ }),

/***/ 6467:
/***/ ((module) => {

module.exports = require("@mui/icons-material/VolumeMute");

/***/ }),

/***/ 8610:
/***/ ((module) => {

module.exports = require("@mui/icons-material/VolumeUp");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 8356:
/***/ ((module) => {

module.exports = require("@mui/material/SvgIcon");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 6120:
/***/ ((module) => {

module.exports = require("js-sha256");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 3860:
/***/ ((module) => {

module.exports = require("qrcode.react");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 6158:
/***/ ((module) => {

module.exports = require("react-share");

/***/ }),

/***/ 3422:
/***/ ((module) => {

module.exports = require("react-show-more-text");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3877:
/***/ ((module) => {

module.exports = import("swiper");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,670,691,609,587,579,917,586,580], () => (__webpack_exec__(5843)));
module.exports = __webpack_exports__;

})();