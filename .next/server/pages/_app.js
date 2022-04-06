"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2583:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ firebase)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4873);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(401);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_database__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_database__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const config = {
    apiKey: "AIzaSyCdlNAO-BtLKRfOmxAWc-vtyluME1TK9-w",
    authDomain: `${"wewe-jsc"}.firebaseapp.com`,
    databaseURL: `https://${"wewe-jsc"}.firebaseio.com`,
    projectId: "wewe-jsc",
    appId: "1:1070814418454:web:4c4c478b34ec8a020dc737",
    measurementId: "G-Y90JDBYKJM",
    messagingSenderId: "1070814418454",
    storageBucket: `${"wewe-jsc"}.appspot.com`
};
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(config, 'website-voiz');
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)(app);
(0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithEmailAndPassword)(auth, "dan.vo@wewe.vn", "voizfm@123").then((userCredential)=>{}).catch((error)=>{
    console.log(error);
});
const firebase = (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.getDatabase)(app);


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8510:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4776);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__]);
_src_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






 // core Swiper
 // Navigation module


function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            ...pageProps
        })
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4239:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AudioList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7010);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4173);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_GraphicEq__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3042);
/* harmony import */ var _mui_icons_material_GraphicEq__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_GraphicEq__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Shared_handlePlayAudio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5210);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7426);
/* harmony import */ var _utils_useWindowSize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9061);
/* harmony import */ var _utils_flexStyle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8210);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2055);

// import redux


// import MUI components



// import others components

// import utils



// import services

function AudioList(props) {
    const api = new _services_api__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z();
    const { anchorAudioList , onCloseAudioList , audioId: audioId1 , playlistId , promotion , audiosList , setErrorMessage , setOpenUpdateRequiredModal , setOpenUnauthorizedModal , setOpenSnackbar  } = props;
    const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_redux_user__WEBPACK_IMPORTED_MODULE_2__/* .selectUser */ .dy);
    const open = Boolean(anchorAudioList);
    const windowSize = (0,_utils_useWindowSize__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    const isSm = windowSize.width <= _utils_constants__WEBPACK_IMPORTED_MODULE_7__/* .SCREEN_BREAKPOINTS.sm */ .nN.sm ? true : false;
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    const handlePlayOneAudio = async (audioId)=>{
        (0,_components_Shared_handlePlayAudio__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(dispatch, user, audioId, playlistId, promotion, setErrorMessage, setOpenUpdateRequiredModal, setOpenUnauthorizedModal, setOpenSnackbar);
    };
    const handleSelectAudio = (id)=>{
        handlePlayOneAudio(id);
        onCloseAudioList();
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Popover, {
        anchorEl: anchorAudioList,
        open: open,
        onClose: onCloseAudioList,
        anchorReference: "anchorPosition",
        anchorPosition: {
            top: isSm ? windowSize.height - 67 : windowSize.height - 105,
            left: isSm ? 0 : windowSize.width - windowSize.width / 4
        },
        anchorOrigin: {
            vertical: 'top',
            horizontal: 'center'
        },
        transformOrigin: {
            vertical: 'bottom',
            horizontal: 'center'
        },
        sx: {
            '& .MuiPopover-paper': {
                bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.bg2 */ .DM.bg2,
                maxWidth: isSm ? '90%' : '632px',
                maxHeight: isSm ? '70%' : 'calc(100% - 210px)',
                overflow: isSm ? 'auto' : 'hidden',
                scrollbarGutter: 'stable',
                '::-webkit-scrollbar': {
                    width: '4px'
                },
                '::-webkit-scrollbar-button': {
                    height: '10px'
                },
                '::-webkit-scrollbar-track': {
                    borderRadius: '5px'
                },
                '::-webkit-scrollbar-thumb': {
                    background: _utils_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.bg3 */ .DM.bg3,
                    borderRadius: '5px'
                },
                ':hover': {
                    overflowY: 'auto'
                }
            }
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
            sx: {
                bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.bg2 */ .DM.bg2,
                width: '100%',
                height: '100%',
                padding: isSm ? '26px 15px 0 15px' : '26px 32px 0 26px',
                boxSizing: 'border-box',
                borderRadius: '10px'
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                    sx: {
                        ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_10__/* .flexStyle */ .X)('space-between', 'flex-start'),
                        width: '100%'
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                            sx: {
                                ...isSm ? _utils_constants__WEBPACK_IMPORTED_MODULE_7__/* .TEXT_STYLE.h3 */ .gN.h3 : _utils_constants__WEBPACK_IMPORTED_MODULE_7__/* .TEXT_STYLE.h2 */ .gN.h2,
                                color: _utils_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.white */ .DM.white,
                                marginBottom: isSm ? '26px' : '32px'
                            },
                            children: "Danh s\xe1ch audios"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
                            "aria-label": "close",
                            onClick: onCloseAudioList,
                            sx: {
                                p: 0,
                                color: _utils_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.white */ .DM.white,
                                bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.bg2 */ .DM.bg2
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_4___default()), {})
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.List, {
                        sx: {
                            width: '100%'
                        },
                        children: audiosList.map((value)=>{
                            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ListItem, {
                                sx: {
                                    paddingLeft: 0,
                                    paddingRight: '20px',
                                    borderTop: `.5px solid ${_utils_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.placeHolder */ .DM.placeHolder}`,
                                    height: '72px',
                                    ...value.id === audioId1 && {
                                        bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.bg3 */ .DM.bg3,
                                        borderRadius: '6px',
                                        borderTop: 'none'
                                    },
                                    ...value.id === audioId1 + 1 && {
                                        borderTop: 'none'
                                    }
                                },
                                secondaryAction: value.id === audioId1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
                                    edge: "end",
                                    "aria-label": "delete",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_GraphicEq__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        sx: {
                                            color: _utils_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.contentIcon */ .DM.contentIcon
                                        }
                                    })
                                }),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ListItemButton, {
                                    role: undefined,
                                    onClick: ()=>{
                                        handleSelectAudio(value.id);
                                    },
                                    dense: true,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ListItemText, {
                                        sx: {
                                            'span': {
                                                ...isSm ? _utils_constants__WEBPACK_IMPORTED_MODULE_7__/* .TEXT_STYLE.title2 */ .gN.title2 : _utils_constants__WEBPACK_IMPORTED_MODULE_7__/* .TEXT_STYLE.title1 */ .gN.title1,
                                                color: _utils_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.white */ .DM.white,
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
    }));
};


/***/ }),

/***/ 4702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AudioPlay)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_playAudio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7348);
/* harmony import */ var _redux_openSidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7542);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8148);
/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_icons_material_GraphicEq__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3042);
/* harmony import */ var _mui_icons_material_GraphicEq__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_GraphicEq__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Shared_InfoLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9654);
/* harmony import */ var _components_Shared_ShareModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9586);
/* harmony import */ var _components_Icons_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5273);
/* harmony import */ var _utils_flexStyle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8210);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7426);
/* harmony import */ var _utils_useWindowSize__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9061);
/* harmony import */ var _utils_convertSecondsToReadableString__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2083);

// import react

// import redux




// import MUI components



// import others components


// import icons

// import utils




function AudioPlay({ audioFromApi  }) {
    var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8;
    const playing = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_playAudio__WEBPACK_IMPORTED_MODULE_3__/* .selectPlayAudio */ .jc);
    const openSidebar = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_openSidebar__WEBPACK_IMPORTED_MODULE_4__/* .selectOpenSidebar */ .yG);
    const { 0: id1 , 1: setId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: url , 1: setUrl  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: audio , 1: setAudio  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: openShareModal , 1: setOpenShareModal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    const windowSize = (0,_utils_useWindowSize__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)();
    const isSm = windowSize.width <= _utils_constants__WEBPACK_IMPORTED_MODULE_11__/* .SCREEN_BREAKPOINTS.sm */ .nN.sm ? true : false;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (audioFromApi) {
            setAudio(audioFromApi);
        }
    }, [
        audioFromApi
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (id1) {
            setUrl(`${window.location.href}?audioId=${id1}`);
        }
    }, [
        id1
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (audio) {
            const { id  } = audio;
            setId(id);
        }
    }, [
        audio
    ]);
    const handleOpenShareModal = ()=>{
        setOpenShareModal(true);
    };
    const handleExpandLessAudioPlay = ()=>{
        dispatch((0,_redux_playAudio__WEBPACK_IMPORTED_MODULE_3__/* .setOpenAudioDetail */ .og)(false));
        dispatch((0,_redux_playAudio__WEBPACK_IMPORTED_MODULE_3__/* .setOpenExpandMoreAudio */ .Jt)(true));
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
        sx: {
            ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_13__/* .flexStyle */ .X)('flex-start', 'center'),
            flexDirection: 'column',
            position: 'fixed',
            width: openSidebar ? `calc(100% - ${_utils_constants__WEBPACK_IMPORTED_MODULE_11__/* .DRAWER_WIDTH */ .pG}px)` : '100%',
            height: `calc(100vh - ${isSm ? _utils_constants__WEBPACK_IMPORTED_MODULE_11__/* .HEADER_HEIGHT_MB */ .hX : _utils_constants__WEBPACK_IMPORTED_MODULE_11__/* .HEADER_HEIGHT */ .Mz} - ${isSm ? '299px' : '100px'})`,
            top: 0,
            overflowY: isSm ? 'scroll' : 'hidden',
            boxSizing: 'border-box',
            p: isSm ? '24px 36px' : '24px 48px',
            margin: `${isSm ? _utils_constants__WEBPACK_IMPORTED_MODULE_11__/* .HEADER_HEIGHT_MB */ .hX : _utils_constants__WEBPACK_IMPORTED_MODULE_11__/* .HEADER_HEIGHT */ .Mz} auto ${isSm ? 'auto' : '100px'} auto`,
            ...openSidebar && !isSm && {
                marginLeft: `${_utils_constants__WEBPACK_IMPORTED_MODULE_11__/* .DRAWER_WIDTH */ .pG}px`
            },
            scrollbarGutter: 'stable',
            '::-webkit-scrollbar': {
                width: '4px'
            },
            '::-webkit-scrollbar-button': {
                height: '10px'
            },
            '::-webkit-scrollbar-track': {
                borderRadius: '5px'
            },
            '::-webkit-scrollbar-thumb': {
                background: _utils_constants__WEBPACK_IMPORTED_MODULE_11__/* .COLORS.bg3 */ .DM.bg3,
                borderRadius: '5px'
            },
            ':hover': {
                overflowY: 'auto'
            },
            '&::before': {
                content: "''",
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: "url('/images/audioplaybg.png')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                opacity: 0.4,
                zIndex: 1
            }
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                sx: {
                    ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_13__/* .flexStyle */ .X)('flex-end', 'center'),
                    columnGap: '36px',
                    width: '100%',
                    boxSizing: 'border-box',
                    pb: isSm ? '60px' : '76px',
                    zIndex: 2
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                        sx: {
                            cursor: 'pointer'
                        },
                        onClick: handleOpenShareModal,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icons_index__WEBPACK_IMPORTED_MODULE_10__/* .Share */ .mB, {
                            bgfill: "none",
                            fill: "none",
                            stroke: _utils_constants__WEBPACK_IMPORTED_MODULE_11__/* .COLORS.contentIcon */ .DM.contentIcon
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Shared_ShareModal__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        url: url,
                        isSm: isSm,
                        open: openShareModal,
                        setOpen: setOpenShareModal
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_6___default()), {
                        onClick: handleExpandLessAudioPlay,
                        sx: {
                            color: _utils_constants__WEBPACK_IMPORTED_MODULE_11__/* .COLORS.contentIcon */ .DM.contentIcon,
                            cursor: 'pointer'
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                sx: {
                    ...isSm ? (0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_13__/* .flexStyle */ .X)('center', 'center') : (0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_13__/* .flexStyle */ .X)('center', 'flex-start'),
                    ...isSm && {
                        flexDirection: 'column',
                        rowGap: '32px'
                    },
                    width: '100%',
                    ...!isSm && {
                        height: 'calc(100% - 106px)'
                    },
                    boxSizing: 'border-box',
                    columnGap: '75px'
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                        sx: {
                            width: isSm ? '70%' : '45%',
                            height: '100%',
                            ...isSm ? (0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_13__/* .flexStyle */ .X)('center', 'flex-start') : (0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_13__/* .flexStyle */ .X)('flex-end', 'flex-start')
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            style: {
                                width: '100%',
                                height: '100%',
                                maxWidth: isSm ? '224px' : '320px',
                                maxHeight: isSm ? '224px' : '320px',
                                borderRadius: '15px',
                                'img': {
                                    objectFit: 'fill'
                                }
                            },
                            // variant="rounded"
                            alt: "playlist avt",
                            src: (audio === null || audio === void 0 ? void 0 : (ref = audio.avatar) === null || ref === void 0 ? void 0 : ref.original_url) || (audio === null || audio === void 0 ? void 0 : (ref1 = audio.playlist) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.avatar) === null || ref2 === void 0 ? void 0 : ref2.original_url)
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                        sx: {
                            width: isSm ? '100%' : '55%'
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                sx: {
                                    ...isSm ? _utils_constants__WEBPACK_IMPORTED_MODULE_11__/* .TEXT_STYLE.h3 */ .gN.h3 : _utils_constants__WEBPACK_IMPORTED_MODULE_11__/* .TEXT_STYLE.h1 */ .gN.h1,
                                    color: _utils_constants__WEBPACK_IMPORTED_MODULE_11__/* .COLORS.white */ .DM.white,
                                    marginBottom: '25px',
                                    ...isSm && {
                                        textAlign: 'center'
                                    }
                                },
                                children: audio === null || audio === void 0 ? void 0 : audio.name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableContainer, {
                                sx: {
                                    width: '100%',
                                    bgcolor: 'transparent',
                                    boxShadow: 'none'
                                },
                                component: _mui_material__WEBPACK_IMPORTED_MODULE_5__.Paper,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Table, {
                                    "aria-label": "playlist info tbl",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableBody, {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableRow, {
                                                sx: {
                                                    '&:last-child td, &:last-child th': {
                                                        border: 0
                                                    }
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {
                                                        sx: {
                                                            width: isSm ? '50%' : '25%',
                                                            borderBottom: 'none',
                                                            padding: '0 0 21px 0'
                                                        },
                                                        component: "th",
                                                        scope: "row",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Shared_InfoLabel__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                            title: "T\xe1c giả"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {
                                                        sx: {
                                                            borderBottom: 'none',
                                                            padding: '0 0 21px 0',
                                                            textAlign: 'left'
                                                        },
                                                        align: "right",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                                            sx: {
                                                                ..._utils_constants__WEBPACK_IMPORTED_MODULE_11__/* .TEXT_STYLE.content2 */ .gN.content2,
                                                                color: _utils_constants__WEBPACK_IMPORTED_MODULE_11__/* .COLORS.VZ_Text_content */ .DM.VZ_Text_content
                                                            },
                                                            children: audio === null || audio === void 0 ? void 0 : (ref3 = audio.author) === null || ref3 === void 0 ? void 0 : ref3.name
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableRow, {
                                                sx: {
                                                    '&:last-child td, &:last-child th': {
                                                        border: 0
                                                    }
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {
                                                        sx: {
                                                            width: isSm ? '50%' : '25%',
                                                            borderBottom: 'none',
                                                            padding: '0 0 21px 0'
                                                        },
                                                        component: "th",
                                                        scope: "row",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Shared_InfoLabel__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                            title: "Thời lượng"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {
                                                        sx: {
                                                            borderBottom: 'none',
                                                            padding: '0 0 21px 0',
                                                            textAlign: 'left'
                                                        },
                                                        align: "right",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                                            sx: {
                                                                ..._utils_constants__WEBPACK_IMPORTED_MODULE_11__/* .TEXT_STYLE.content2 */ .gN.content2,
                                                                color: _utils_constants__WEBPACK_IMPORTED_MODULE_11__/* .COLORS.VZ_Text_content */ .DM.VZ_Text_content
                                                            },
                                                            children: (0,_utils_convertSecondsToReadableString__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(audio === null || audio === void 0 ? void 0 : (ref4 = audio.playlist) === null || ref4 === void 0 ? void 0 : ref4.total_duration)
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableRow, {
                                                sx: {
                                                    '&:last-child td, &:last-child th': {
                                                        border: 0
                                                    }
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {
                                                        sx: {
                                                            width: isSm ? '50%' : '25%',
                                                            borderBottom: 'none',
                                                            padding: '0 0 21px 0'
                                                        },
                                                        component: "th",
                                                        scope: "row",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Shared_InfoLabel__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                            title: "K\xeanh"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {
                                                        sx: {
                                                            borderBottom: 'none',
                                                            padding: '0 0 21px 0',
                                                            textAlign: 'left'
                                                        },
                                                        align: "right",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                                            sx: {
                                                                ..._utils_constants__WEBPACK_IMPORTED_MODULE_11__/* .TEXT_STYLE.content2 */ .gN.content2,
                                                                color: _utils_constants__WEBPACK_IMPORTED_MODULE_11__/* .COLORS.VZ_Text_content */ .DM.VZ_Text_content
                                                            },
                                                            children: audio === null || audio === void 0 ? void 0 : (ref5 = audio.playlist) === null || ref5 === void 0 ? void 0 : (ref6 = ref5.channel) === null || ref6 === void 0 ? void 0 : ref6.name
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableRow, {
                                                sx: {
                                                    '&:last-child td, &:last-child th': {
                                                        border: 0
                                                    }
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {
                                                        sx: {
                                                            width: isSm ? '50%' : '25%',
                                                            borderBottom: 'none',
                                                            padding: '0 0 21px 0'
                                                        },
                                                        component: "th",
                                                        scope: "row",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Shared_InfoLabel__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                            title: "Người đọc"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {
                                                        sx: {
                                                            borderBottom: 'none',
                                                            padding: '0 0 21px 0',
                                                            textAlign: 'left'
                                                        },
                                                        align: "right",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                                            sx: {
                                                                ..._utils_constants__WEBPACK_IMPORTED_MODULE_11__/* .TEXT_STYLE.content2 */ .gN.content2,
                                                                color: _utils_constants__WEBPACK_IMPORTED_MODULE_11__/* .COLORS.VZ_Text_content */ .DM.VZ_Text_content
                                                            },
                                                            children: (ref8 = audio === null || audio === void 0 ? void 0 : (ref7 = audio.playlist) === null || ref7 === void 0 ? void 0 : ref7.voicers[0]) === null || ref8 === void 0 ? void 0 : ref8.name
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {
                                sx: {
                                    ..._utils_constants__WEBPACK_IMPORTED_MODULE_11__/* .TEXT_STYLE.title1 */ .gN.title1,
                                    color: _utils_constants__WEBPACK_IMPORTED_MODULE_11__/* .COLORS.white */ .DM.white,
                                    textTransform: 'none',
                                    width: '280px',
                                    height: '48px',
                                    border: `1px solid ${_utils_constants__WEBPACK_IMPORTED_MODULE_11__/* .COLORS.blackStroker */ .DM.blackStroker}`,
                                    borderRadius: '6px',
                                    marginTop: '40px',
                                    cursor: 'text',
                                    ...(playing || isSm) && {
                                        display: 'none'
                                    }
                                },
                                variant: "outlined",
                                endIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_GraphicEq__WEBPACK_IMPORTED_MODULE_7___default()), {}),
                                children: "Đang ph\xe1t"
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 2282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/redux/openSidebar.js
var redux_openSidebar = __webpack_require__(7542);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
;// CONCATENATED MODULE: external "@mui/material/Typography"
const Typography_namespaceObject = require("@mui/material/Typography");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_namespaceObject);
// EXTERNAL MODULE: ./src/components/Icons/index.js + 62 modules
var Icons = __webpack_require__(5273);
// EXTERNAL MODULE: ./src/utils/constants.js
var constants = __webpack_require__(7426);
;// CONCATENATED MODULE: ./src/components/Footer/Footer.js







const socials = [
    Icons/* Facebook */.s1,
    Icons/* Instagram */.mr,
    Icons/* Tiktok */.yA
];
const infoStyle = {
    color: constants/* COLORS.gray2 */.DM.gray2,
    ...constants/* TEXT_STYLE.content2 */.gN.content2
};
const flexStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};
const infoBox = (icon, content)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        sx: {
            ...flexStyle,
            columnGap: '13px'
        },
        children: [
            icon(),
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                sx: infoStyle,
                children: content
            })
        ]
    })
;
function Footer({ isSm  }) {
    const openSidebar = (0,external_react_redux_.useSelector)(redux_openSidebar/* selectOpenSidebar */.yG);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        sx: {
            width: openSidebar ? `calc(100% - ${constants/* DRAWER_WIDTH */.pG}px)` : '100%',
            ...openSidebar && !isSm && {
                marginLeft: `${constants/* DRAWER_WIDTH */.pG}px`
            },
            marginTop: '80px'
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                sx: {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    mb: '32px',
                    ...isSm && {
                        justifyContent: 'center'
                    }
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "/images/logofooter.png",
                    alt: "voizfm logo",
                    loading: "lazy"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                sx: {
                    color: constants/* COLORS.bg4 */.DM.bg4,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    columnGap: '30px'
                },
                children: socials.map((item, idx)=>/*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                        children: item()
                    }, idx)
                )
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                sx: {
                    ...flexStyle,
                    flexDirection: 'column',
                    rowGap: '20px',
                    marginTop: '35px',
                    marginBottom: '70px'
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        sx: {
                            ...constants/* TEXT_STYLE.title1 */.gN.title1,
                            color: constants/* COLORS.white */.DM.white
                        },
                        children: "C\xf4ng Ty Cổ phần C\xf4ng nghệ WeWe"
                    }),
                    infoBox(Icons/* Phone */.LP, '0946 110 993'),
                    infoBox(Icons/* Email */.GT, 'support@wewe.vn'),
                    infoBox(Icons/* Location */.Ye, '44 L\xea Văn Duyệt, P1, Q. B\xecnh Thạnh, TP. HCM')
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 9836:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Header_Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/redux/openSidebar.js
var redux_openSidebar = __webpack_require__(7542);
// EXTERNAL MODULE: ./src/redux/openLogin.js
var openLogin = __webpack_require__(9006);
// EXTERNAL MODULE: ./src/redux/OpenSearch.js
var OpenSearch = __webpack_require__(93);
// EXTERNAL MODULE: ./src/redux/payment.js
var payment = __webpack_require__(6204);
// EXTERNAL MODULE: ./src/redux/user.js
var redux_user = __webpack_require__(7010);
// EXTERNAL MODULE: ./src/redux/token.js
var redux_token = __webpack_require__(7691);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: external "@mui/icons-material/AccountCircle"
const AccountCircle_namespaceObject = require("@mui/icons-material/AccountCircle");
var AccountCircle_default = /*#__PURE__*/__webpack_require__.n(AccountCircle_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Menu"
const Menu_namespaceObject = require("@mui/icons-material/Menu");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/AppBar"
const AppBar_namespaceObject = require("@mui/material/AppBar");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_namespaceObject);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: external "@mui/icons-material/Search"
const Search_namespaceObject = require("@mui/icons-material/Search");
var Search_default = /*#__PURE__*/__webpack_require__.n(Search_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Clear"
const Clear_namespaceObject = require("@mui/icons-material/Clear");
var Clear_default = /*#__PURE__*/__webpack_require__.n(Clear_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/ShoppingCartOutlined"
const ShoppingCartOutlined_namespaceObject = require("@mui/icons-material/ShoppingCartOutlined");
var ShoppingCartOutlined_default = /*#__PURE__*/__webpack_require__.n(ShoppingCartOutlined_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Logout"
const Logout_namespaceObject = require("@mui/icons-material/Logout");
var Logout_default = /*#__PURE__*/__webpack_require__.n(Logout_namespaceObject);
// EXTERNAL MODULE: ./src/utils/constants.js
var constants = __webpack_require__(7426);
// EXTERNAL MODULE: ./src/utils/useWindowSize.js
var useWindowSize = __webpack_require__(9061);
// EXTERNAL MODULE: ./src/components/Icons/index.js + 62 modules
var Icons = __webpack_require__(5273);
;// CONCATENATED MODULE: external "lodash/debounce"
const debounce_namespaceObject = require("lodash/debounce");
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce_namespaceObject);
// EXTERNAL MODULE: ./src/services/api.js + 1 modules
var services_api = __webpack_require__(2055);
// EXTERNAL MODULE: ./src/utils/flexStyle.js
var flexStyle = __webpack_require__(8210);
;// CONCATENATED MODULE: ./src/components/Header/Header.js

// Import react module

// import redux

// Import redux reducer, actions






// import next router

// import next link

// Import MUI component









// Import utils


// Import icons

// import lodash

// import service


const SearchBtn = (idx)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
        "aria-label": "search",
        sx: {
            p: 0
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx((Search_default()), {
            sx: {
                color: constants/* COLORS.contentIcon */.DM.contentIcon
            }
        })
    }, idx));
};
const ClearBtn = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
        "aria-label": "clear-search",
        children: /*#__PURE__*/ jsx_runtime_.jsx((Clear_default()), {
            sx: {
                color: constants/* COLORS.white */.DM.white
            }
        })
    }));
};
const BookmarkIcon = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(material_.SvgIcon, {
        children: (0,Icons/* Bookmark */.rp)()
    }, props.idx));
};
const CartIcon = (props)=>{
    const { handleCloseSidebarWhenClickAccountIcon , numItemsInCart , idx , addToCartFlag  } = props;
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        onClick: handleCloseSidebarWhenClickAccountIcon,
        href: `/cart`,
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Tooltip, {
            open: Boolean(addToCartFlag),
            title: "Th\xeam v\xe0o giỏ h\xe0ng th\xe0nh c\xf4ng!",
            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Badge, {
                badgeContent: numItemsInCart || 0,
                color: "error",
                children: /*#__PURE__*/ jsx_runtime_.jsx((ShoppingCartOutlined_default()), {
                    sx: {
                        color: constants/* COLORS.contentIcon */.DM.contentIcon
                    }
                })
            })
        })
    }, idx));
};
const userAvt = (props)=>{
    const { avtSrc , idx , onOpenLogin , handleCloseSidebarWhenClickAccountIcon  } = props;
    if (avtSrc) {
        return(/*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
            onClick: handleCloseSidebarWhenClickAccountIcon,
            sx: {
                textDecoration: 'none',
                cursor: 'pointer'
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                alt: "Remy Sharp",
                src: avtSrc,
                sx: {
                    width: 40,
                    height: 40
                }
            })
        }, idx));
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx((AccountCircle_default()), {
        sx: {
            width: 40,
            height: 40,
            cursor: 'pointer'
        },
        onClick: ()=>{
            onOpenLogin();
        }
    }, idx));
};
const AppBar = (0,styles_.styled)((AppBar_default()), {
    shouldForwardProp: (prop)=>prop !== 'open'
})(({ windowwidth , open  })=>({
        height: windowwidth > constants/* SCREEN_BREAKPOINTS.sm */.nN.sm ? constants/* HEADER_HEIGHT */.Mz : constants/* HEADER_HEIGHT_MB */.hX,
        backgroundColor: constants/* COLORS.bg1 */.DM.bg1,
        justifyContent: 'center',
        ...windowwidth > constants/* SCREEN_BREAKPOINTS.sm */.nN.sm && {
            width: `calc(100% - ${constants/* DRAWER_WIDTH */.pG}px)`,
            marginLeft: `${constants/* DRAWER_WIDTH */.pG}px`
        },
        ...windowwidth <= constants/* SCREEN_BREAKPOINTS.sm */.nN.sm && {
            width: '100%'
        },
        ...!open && {
            width: '100%'
        }
    })
);
function Header({ router  }) {
    const api = new services_api/* default */.Z();
    const windowSize = (0,useWindowSize/* default */.Z)();
    const pathname = router.pathname;
    const search = router.search;
    const isSm = windowSize.width <= constants/* SCREEN_BREAKPOINTS.sm */.nN.sm ? true : false;
    const navigate = (0,router_.useRouter)();
    const openSidebar = (0,external_react_redux_.useSelector)(redux_openSidebar/* selectOpenSidebar */.yG);
    const cart = (0,external_react_redux_.useSelector)(payment/* selectCart */.KY);
    const token = (0,external_react_redux_.useSelector)(redux_token/* selectToken */.rK);
    const addToCartFlag = (0,external_react_redux_.useSelector)(payment/* selectAddToCartFlag */.kC);
    const user = (0,external_react_redux_.useSelector)(redux_user/* selectUser */.dy);
    const { 0: avtSrc , 1: setAvtSrc  } = (0,external_react_.useState)(null);
    const { 0: numItemsInCart , 1: setNumItemsInCart  } = (0,external_react_.useState)(0);
    const { 0: searchKeyword , 1: setSearchKeyword  } = (0,external_react_.useState)('');
    const { 0: searchOnMb , 1: setSearchOnMb  } = (0,external_react_.useState)(false);
    const { 0: searchOnPC , 1: setSearchOnPC  } = (0,external_react_.useState)(false);
    const { 0: showHeaderItems , 1: setShowHeaderItems  } = (0,external_react_.useState)(true);
    const { 0: userPaneAnchorEl , 1: setUserPaneAnchorEl  } = (0,external_react_.useState)(null);
    const openUserPane = Boolean(userPaneAnchorEl);
    const headerItems = [
        BookmarkIcon,
        CartIcon,
        userAvt
    ];
    const dispatch = (0,external_react_redux_.useDispatch)();
    (0,external_react_.useEffect)(()=>{
        if (token) {
            fetchNumItemsInCart();
        }
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (user) {
            setAvtSrc(user.avatar.thumb_url);
        }
    }, [
        user
    ]);
    (0,external_react_.useEffect)(()=>{
        if (token && !user) {
            fetchUserInfo();
            return;
        }
        setAvtSrc(null);
        dispatch((0,redux_user/* setUser */.av)(null));
    }, [
        token
    ]);
    (0,external_react_.useEffect)(()=>{
        setSearchStatus();
    }, [
        isSm
    ]);
    (0,external_react_.useEffect)(()=>{
        if (token) {
            fetchNumItemsInCart();
        }
    }, [
        cart
    ]);
    (0,external_react_.useEffect)(()=>{
        if (addToCartFlag === 1) {
            setTimeout(()=>{
                dispatch((0,payment/* setAddToCartFlag */.ES)(0));
            }, 1000);
        }
    }, [
        addToCartFlag
    ]);
    (0,external_react_.useEffect)(()=>{
        setShowHeaderItems(true);
        setSearchStatus();
    }, [
        pathname,
        search
    ]);
    const handleCloseUserPane = ()=>{
        setUserPaneAnchorEl(null);
    };
    const fetchNumItemsInCart = async ()=>{
        try {
            const res = await api.getNumItemsInCart();
            const data = await res.data.data;
            if (!data.error) {
                setNumItemsInCart(data.badge);
            }
        } catch (err) {
            setNumItemsInCart(0);
        }
    };
    function setSearchStatus() {
        if (isSm) {
            setSearchOnMb(true);
            setSearchOnPC(false);
        } else {
            setSearchOnMb(false);
            setSearchOnPC(true);
        }
    }
    const fetchUserInfo = async ()=>{
        var ref;
        const res = await api.getUserInfo();
        const data = await res.data.data;
        if (data.error) {
            return;
        }
        setAvtSrc(data === null || data === void 0 ? void 0 : (ref = data.avatar) === null || ref === void 0 ? void 0 : ref.thumb_url);
        dispatch((0,redux_user/* setUser */.av)(data));
    };
    const onOpenLogin = (e)=>{
        dispatch((0,openLogin/* handleOpenLogin */.Lu)());
    };
    const onOpenSearch = (e)=>{
        const anchor = e.currentTarget;
        const anchorId = anchor.id;
        dispatch((0,OpenSearch/* setAnchorEl */.cq)(anchorId));
    };
    const onSearchInput = (e)=>{
        const { value  } = e.target;
        setSearchKeyword(value);
        if (value === '') {
            dispatch((0,OpenSearch/* handleStopSearch */.KU)());
        } else {
            debounceOnSearch('playlists', value);
            dispatch((0,OpenSearch/* handleStartSearch */.po)());
        }
    };
    const handleSearchKeyUp = (e)=>{
        const { keyCode  } = e;
        if (keyCode === 13) {
            if (!searchKeyword.trim()) {
                return;
            }
            setShowHeaderItems(true);
            setSearchStatus();
            navigate.push({
                pathname: '/search',
                query: {
                    searchKey: searchKeyword
                }
            });
        }
    };
    const handleClickSearchBtn = ()=>{
        if (!searchKeyword.trim()) {
            return;
        }
        setShowHeaderItems(true);
        setSearchStatus();
        navigate.push({
            pathname: '/search',
            query: {
                searchKey: searchKeyword
            }
        });
    };
    const handleClearSearchKeyword = ()=>{
        setSearchKeyword('');
        dispatch((0,OpenSearch/* handleStopSearch */.KU)());
        dispatch((0,OpenSearch/* setAnchorEl */.cq)('input-search'));
    };
    const handleSearchOnMB = ()=>{
        setShowHeaderItems(false);
        setSearchOnPC(true);
        setSearchOnMb(false);
        setTimeout(()=>{
            const el = document.getElementById('input-search');
            el.focus();
        });
    };
    const handleDrawerToggle = ()=>{
        dispatch((0,redux_openSidebar/* setOpen */.A_)(!openSidebar));
    };
    const showToogleIcon = (open)=>{
        if (open && !isSm) {
            return false;
        } else if (open && isSm) {
            return true;
        } else if (!open) {
            return true;
        }
    };
    const debounceOnSearch = (0,external_react_.useCallback)(debounce_default()(async (type, keyword)=>{
        const res = await api.getSearchResults(type, keyword);
        const data = await res.data.data;
        dispatch((0,OpenSearch/* setPlaylistResult */.mQ)(data));
    }, 100), []);
    const handleCloseSidebarWhenClickAccountIcon = (e)=>{
        dispatch((0,redux_openSidebar/* setOpen */.A_)(false));
        setUserPaneAnchorEl(e.currentTarget);
    };
    const handleGoToAccountPage = ()=>{
        setUserPaneAnchorEl(null);
        router.push('/account');
    };
    const handleLogout = ()=>{
        dispatch((0,redux_token/* removeToken */.gy)());
        setUserPaneAnchorEl(null);
        window.location.href = '/';
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(AppBar, {
        position: "fixed",
        open: openSidebar,
        windowwidth: windowSize.width,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Popover, {
                open: openUserPane,
                anchorEl: userPaneAnchorEl,
                onClose: handleCloseUserPane,
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'right'
                },
                transformOrigin: {
                    vertical: 'top',
                    horizontal: 'right'
                },
                sx: {
                    '& .MuiPopover-paper': {
                        bgcolor: constants/* COLORS.bg2 */.DM.bg2
                    }
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                    sx: {
                        bgcolor: constants/* COLORS.bg2 */.DM.bg2,
                        p: '25px 25px 16px 25px',
                        borderRadius: '6px'
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                            sx: {
                                ...(0,flexStyle/* flexStyle */.X)('flex-start', 'flex-start'),
                                columnGap: '15px',
                                mb: '25px',
                                borderTop: `1px solid ${constants/* COLORS.bg3 */.DM.bg3}`,
                                borderRadius: '6px',
                                width: '360px',
                                boxSizing: 'border-box'
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                                        alt: "user avatar",
                                        src: avtSrc,
                                        sx: {
                                            width: 60,
                                            height: 60
                                        }
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                    sx: {
                                        height: '60px',
                                        ...(0,flexStyle/* flexStyle */.X)('center', 'flex-start'),
                                        flexDirection: 'column'
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                            sx: {
                                                color: constants/* COLORS.white */.DM.white,
                                                ...constants/* TEXT_STYLE.title1 */.gN.title1
                                            },
                                            children: `${user === null || user === void 0 ? void 0 : user.first_name} ${user === null || user === void 0 ? void 0 : user.last_name}`
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                            onClick: handleGoToAccountPage,
                                            sx: {
                                                ...constants/* TEXT_STYLE.content2 */.gN.content2,
                                                color: constants/* COLORS.contentIcon */.DM.contentIcon,
                                                cursor: 'pointer'
                                            },
                                            children: "Xem trang c\xe1 nh\xe2n của bạn"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {
                            sx: {
                                bgcolor: constants/* COLORS.bg3 */.DM.bg3,
                                margin: '0 25px'
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                            sx: {
                                ...(0,flexStyle/* flexStyle */.X)('flex-start', 'center'),
                                columnGap: '15px',
                                pt: '15px'
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Logout_default()), {
                                        sx: {
                                            width: '32px',
                                            height: '32px',
                                            bgcolor: constants/* COLORS.bg3 */.DM.bg3,
                                            borderRadius: '50%',
                                            p: '8px',
                                            boxSizing: 'border-box',
                                            color: constants/* COLORS.white */.DM.white
                                        }
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                    onClick: handleLogout,
                                    sx: {
                                        color: constants/* COLORS.white */.DM.white,
                                        ...constants/* TEXT_STYLE.content2 */.gN.content2,
                                        cursor: 'pointer'
                                    },
                                    children: "Đăng xuất"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Toolbar, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                        color: "inherit",
                        "aria-label": "open drawer",
                        onClick: handleDrawerToggle,
                        edge: "start",
                        sx: {
                            mr: 2,
                            ...!showToogleIcon(openSidebar) && {
                                display: 'none'
                            }
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                        sx: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                            ...isSm && {
                                justifyContent: 'flex-end'
                            }
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.FormControl, {
                                variant: "standard",
                                sx: {
                                    width: isSm ? '100%' : '60%',
                                    ...!isSm && {
                                        borderRight: `1px solid ${constants/* COLORS.blackStroker */.DM.blackStroker}`
                                    }
                                },
                                children: [
                                    searchOnPC && /*#__PURE__*/ jsx_runtime_.jsx(material_.Input, {
                                        onFocus: onOpenSearch,
                                        onChange: onSearchInput,
                                        onKeyUp: handleSearchKeyUp,
                                        id: "input-search",
                                        placeholder: "T\xecm kiếm",
                                        value: searchKeyword,
                                        sx: {
                                            color: constants/* COLORS.white */.DM.white,
                                            ...constants/* TEXT_STYLE.content1 */.gN.content1
                                        },
                                        disableUnderline: true,
                                        startAdornment: /*#__PURE__*/ jsx_runtime_.jsx(material_.InputAdornment, {
                                            position: "start",
                                            onClick: handleClickSearchBtn,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(SearchBtn, {})
                                        }),
                                        endAdornment: searchKeyword !== '' && /*#__PURE__*/ jsx_runtime_.jsx(material_.InputAdornment, {
                                            position: "end",
                                            onClick: handleClearSearchKeyword,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(ClearBtn, {})
                                        })
                                    }),
                                    searchOnMb && /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                        onClick: handleSearchOnMB,
                                        sx: {
                                            mr: '41px'
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(SearchBtn, {})
                                    })
                                ]
                            }),
                            showHeaderItems && /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                sx: {
                                    width: '30%',
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    alignItems: 'center',
                                    marginRight: '13px',
                                    columnGap: '35px',
                                    ...isSm && {
                                        marginRight: '6px'
                                    }
                                },
                                children: headerItems.map((item, idx)=>item({
                                        numItemsInCart,
                                        idx,
                                        avtSrc,
                                        addToCartFlag,
                                        onOpenLogin,
                                        handleCloseSidebarWhenClickAccountIcon
                                    })
                                )
                            })
                        ]
                    })
                ]
            })
        ]
    }));
}
/* harmony default export */ const Header_Header = ((0,router_.withRouter)(Header));


/***/ }),

/***/ 4776:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_openSidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7542);
/* harmony import */ var _redux_OpenSearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93);
/* harmony import */ var _redux_audio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3307);
/* harmony import */ var _redux_playAudio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7348);
/* harmony import */ var _redux_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4317);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_SidebarMenu_SidebarMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1208);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9836);
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2282);
/* harmony import */ var _components_Login_Login__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4935);
/* harmony import */ var _components_PlayBar_PlayBar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8961);
/* harmony import */ var _components_Search_SearchModal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9007);
/* harmony import */ var _components_AudioPlay_AudioPlay__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(4702);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2917);
/* harmony import */ var _utils_useWindowSize__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(9061);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(7426);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_PlayBar_PlayBar__WEBPACK_IMPORTED_MODULE_14__]);
_components_PlayBar_PlayBar__WEBPACK_IMPORTED_MODULE_14__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





















function Layout(props) {
    const { children  } = props;
    const location = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    let windowSize = (0,_utils_useWindowSize__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)();
    const isSm = windowSize.width > _utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .SCREEN_BREAKPOINTS.sm */ .nN.sm ? false : true;
    const openSidebar = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_openSidebar__WEBPACK_IMPORTED_MODULE_3__/* .selectOpenSidebar */ .yG);
    const includeFooter = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_footer__WEBPACK_IMPORTED_MODULE_7__/* .selectIncludeFooter */ .iZ);
    const { 0: anchorEl , 1: setAnchorEl  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const anchorSearchElId = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_OpenSearch__WEBPACK_IMPORTED_MODULE_4__/* .selectAnchorEl */ .Ud);
    const audio = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_audio__WEBPACK_IMPORTED_MODULE_5__/* .selectAudioData */ .a$);
    const openPlaybar = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_playAudio__WEBPACK_IMPORTED_MODULE_6__/* .selectOpenPlayBar */ .O3);
    const openAudioDetail = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_playAudio__WEBPACK_IMPORTED_MODULE_6__/* .selectOpenAudioDetail */ .vx);
    const openSearchModal = Boolean(anchorEl);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (Object.keys(audio).length > 0) {
            dispatch((0,_redux_playAudio__WEBPACK_IMPORTED_MODULE_6__/* .setOpenAudioDetail */ .og)(true));
            dispatch((0,_redux_playAudio__WEBPACK_IMPORTED_MODULE_6__/* .setOpenPlayBar */ .Nn)(true));
        }
    }, [
        audio
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!isSm && !openSidebar) {
            dispatch((0,_redux_openSidebar__WEBPACK_IMPORTED_MODULE_3__/* .setOpen */ .A_)(true));
        }
    }, [
        isSm,
        openSidebar
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        dispatch((0,_redux_footer__WEBPACK_IMPORTED_MODULE_7__/* .setFooter */ .iG)(true));
        dispatch((0,_redux_OpenSearch__WEBPACK_IMPORTED_MODULE_4__/* .handleCloseSearch */ .wF)());
        dispatch((0,_redux_playAudio__WEBPACK_IMPORTED_MODULE_6__/* .setOpenAudioDetail */ .og)(false));
    }, [
        location.asPath
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getSearchAnchorEl();
    }, [
        anchorSearchElId
    ]);
    const getSearchAnchorEl = ()=>{
        const el = document.getElementById(anchorSearchElId);
        setAnchorEl(el);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_9___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Login_Login__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}),
            openSearchModal && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Search_SearchModal__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SidebarMenu_SidebarMenu__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_9___default()), {
                sx: {
                    flexGrow: 1,
                    height: `calc(100% - ${_utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .HEADER_HEIGHT */ .Mz})`,
                    marginTop: !isSm ? _utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .HEADER_HEIGHT */ .Mz : _utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .HEADER_HEIGHT_MB */ .hX,
                    width: openSidebar ? `calc(100% - ${_utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .DRAWER_WIDTH */ .pG}px)` : '100%',
                    ...openSidebar && !isSm && {
                        marginLeft: `${_utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .DRAWER_WIDTH */ .pG}px`
                    }
                },
                children: children
            }),
            openPlaybar && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PlayBar_PlayBar__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {}),
            openAudioDetail && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_AudioPlay_AudioPlay__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                audioFromApi: audio
            }),
            includeFooter && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                isSm: isSm
            })
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ children  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {
        store: _redux_store__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Layout, {
            children: children
        })
    }));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Login)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/redux/openLogin.js
var redux_openLogin = __webpack_require__(9006);
// EXTERNAL MODULE: ./src/redux/token.js
var token = __webpack_require__(7691);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/icons-material/Close"
var Close_ = __webpack_require__(4173);
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_);
;// CONCATENATED MODULE: external "react-facebook-login/dist/facebook-login-render-props"
const facebook_login_render_props_namespaceObject = require("react-facebook-login/dist/facebook-login-render-props");
var facebook_login_render_props_default = /*#__PURE__*/__webpack_require__.n(facebook_login_render_props_namespaceObject);
;// CONCATENATED MODULE: external "react-google-login"
const external_react_google_login_namespaceObject = require("react-google-login");
var external_react_google_login_default = /*#__PURE__*/__webpack_require__.n(external_react_google_login_namespaceObject);
// EXTERNAL MODULE: ./src/components/CustomDisabledButton/CustomDisabledButton.js
var CustomDisabledButton = __webpack_require__(8247);
// EXTERNAL MODULE: ./src/components/Icons/index.js + 62 modules
var Icons = __webpack_require__(5273);
// EXTERNAL MODULE: ./src/utils/constants.js
var constants = __webpack_require__(7426);
// EXTERNAL MODULE: ./src/utils/useWindowSize.js
var useWindowSize = __webpack_require__(9061);
// EXTERNAL MODULE: ./src/utils/validate.js
var validate = __webpack_require__(4050);
// EXTERNAL MODULE: ./src/utils/flexStyle.js
var flexStyle = __webpack_require__(8210);
// EXTERNAL MODULE: ./src/services/api.js + 1 modules
var services_api = __webpack_require__(2055);
;// CONCATENATED MODULE: ./src/components/Login/Login.js

// import react module

// import next router

// import redux reducer, actions



// import MUI component


// import login third party


// import others components

// import icons

// import utils




// import services

const flexCenter = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};
const loginInfo = (content)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        sx: {
            ...flexCenter,
            columnGap: '9px'
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Icons/* GreenTick */.K7, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                sx: {
                    ...constants/* TEXT_STYLE.caption12 */.gN.caption12,
                    color: constants/* COLORS.contentIcon */.DM.contentIcon
                },
                children: content
            })
        ]
    }, content)
;
const textFieldStyle = {
    width: '100%',
    '& .MuiOutlinedInput-input': {
        bgcolor: constants/* COLORS.bg2 */.DM.bg2,
        color: constants/* COLORS.white */.DM.white,
        ...constants/* TEXT_STYLE.content1 */.gN.content1,
        height: '50px',
        boxSizing: 'border-box'
    },
    '& .MuiOutlinedInput-root': {
        bgcolor: constants/* COLORS.bg2 */.DM.bg2,
        borderRadius: '4px',
        border: `1px solid ${constants/* COLORS.blackStroker */.DM.blackStroker}`
    }
};
// List steps
// 1. Login by phone
// 2. Enter opt for phone login
// 3. Update user info when login by phone
// 4. Login by phone success
// 5. Update phone number when login social
function Login() {
    const api = new services_api/* default */.Z();
    const navigate = (0,router_.useRouter)();
    let windowSize = (0,useWindowSize/* default */.Z)();
    const isSm = windowSize.width > constants/* SCREEN_BREAKPOINTS.sm */.nN.sm ? false : true;
    const openLogin = (0,external_react_redux_.useSelector)(redux_openLogin/* selectOpenLogin */.S$);
    const { 0: isPhoneValid , 1: setIsPhoneValid  } = (0,external_react_.useState)(false);
    const { 0: isOTPValid , 1: setIsOTPValid  } = (0,external_react_.useState)(false);
    const { 0: step , 1: setStep  } = (0,external_react_.useState)(1);
    const { 0: countryCode , 1: setCountryCode  } = (0,external_react_.useState)('84');
    const { 0: phoneNumber , 1: setPhoneNumber  } = (0,external_react_.useState)('');
    const { 0: otp , 1: setOtp  } = (0,external_react_.useState)('');
    const { 0: hasError , 1: setHasError  } = (0,external_react_.useState)(false);
    const { 0: error , 1: setError  } = (0,external_react_.useState)('');
    const { 0: userInfo , 1: setUserInfo  } = (0,external_react_.useState)({});
    const { 0: accessToken1 , 1: setAccessToken  } = (0,external_react_.useState)(null);
    const { 0: isGoogle , 1: setIsGoogle  } = (0,external_react_.useState)(false);
    const { 0: isFacebook , 1: setIsFacebook  } = (0,external_react_.useState)(false);
    const { 0: otpCountDown , 1: setOtpCountDown  } = (0,external_react_.useState)('');
    const { 0: isOTPWrong , 1: setIsOTPWrong  } = (0,external_react_.useState)(false);
    const { 0: otpRetries , 1: setOtpRetries  } = (0,external_react_.useState)(0);
    const { 0: intervalId , 1: setIntervalId  } = (0,external_react_.useState)(0);
    const { 0: isUserInforValidated , 1: setIsUserInforValidated  } = (0,external_react_.useState)(false);
    const { 0: isWaitFormRenewOtp , 1: setIsWaitFormRenewOtp  } = (0,external_react_.useState)(false);
    const dispatch = (0,external_react_redux_.useDispatch)();
    const phonePrefixList = constants/* COUNTRY_CODES */.Qd;
    (0,external_react_.useEffect)(()=>{
        if (!userInfo['email'] || !userInfo['first_name'] || !userInfo['last_name']) {
            setIsUserInforValidated(false);
            return;
        }
        setIsUserInforValidated(true);
    }, [
        userInfo
    ]);
    const onClose = ()=>{
        dispatch((0,redux_openLogin/* handleCloseLogin */.vF)());
        setIsPhoneValid(false);
        setIsOTPValid(false);
        setStep(1);
    };
    const onPhoneChange = (event)=>{
        const value = event.target.value;
        if ((0,validate/* validatePhoneNumber */.Y)(value)) {
            setIsPhoneValid(true);
            setPhoneNumber(value);
        } else {
            setIsPhoneValid(false);
        }
    };
    const onOTPChange = (event)=>{
        if ((0,validate/* validateOTP */.g)(event.target.value)) {
            setIsOTPValid(true);
            setOtp(event.target.value);
        } else {
            setIsOTPValid(false);
        }
    };
    const onEnterPhone = async ()=>{
        // Post phone to server here
        setIsWaitFormRenewOtp(false);
        try {
            const res = await api.getOTP(phoneNumber, countryCode);
            const data = await res.data;
            if (data.error) {
                setHasError(true);
                setError(data.error);
                return;
            }
            setStep(2);
            let start = 59;
            const x = setInterval(()=>{
                setOtpCountDown(`00:${start < 10 ? '0' + start : start}`);
                start -= 1;
                if (start === -1) {
                    setIsOTPWrong(false);
                    setOtpRetries(0);
                    clearInterval(x);
                    setOtpCountDown('');
                    setIsWaitFormRenewOtp(true);
                }
            }, 1000);
            setIntervalId(x);
        } catch (err) {
            setHasError(true);
            setError(err.message);
        }
    };
    const onEnterOTP = async ()=>{
        try {
            const res = await api.loginByPhone(phoneNumber, countryCode, otp);
            const data = await res.data;
            if (data.error) {
                setHasError(true);
                setError(data.error);
                return;
            }
            const user = {
                "first_name": null,
                "last_name": null,
                "birthday": null,
                "avatar_url": null,
                "oauth2": data.data.oauth2,
                "email": null,
                "oauth2_id": data.data.oauth2_id
            };
            const accessToken = data.data.access_token;
            setUserInfo({
                ...user
            });
            setAccessToken(accessToken);
            if (data.data['verification']) {
                dispatch((0,token/* setToken */.o4)(accessToken));
                setStep(4);
                return;
            }
            if (isGoogle || isFacebook) {
                handleSkipPhone();
                return;
            }
            setStep(3);
        } catch (err) {
            setIsOTPWrong(true);
            setOtpRetries(otpRetries + 1);
            if (otpRetries === 2) {
                dispatch((0,redux_openLogin/* setOpenLogin */.e8)(false));
                setStep(1);
                setIsOTPWrong(false);
                setOtpRetries(0);
                setOtpCountDown('');
                clearInterval(intervalId);
            }
        }
    };
    const handleChangeCountryCode = (e)=>{
        setCountryCode(e.target.value);
    };
    const onUpdateProfile = async ()=>{
        try {
            const res = await api.createProfile(userInfo, accessToken1);
            const data = await res.data;
            if (data.error) {
                setHasError(true);
                setError(data.error);
                return;
            }
            setStep(4);
            dispatch((0,token/* setToken */.o4)(accessToken1));
        } catch (err) {
            setHasError(true);
            const errList = err.response.data.error;
            if (errList instanceof Object) {
                let errMessage = '';
                for(let e in errList){
                    const key = Object.keys(errList[e])[0];
                    const value = errList[e][key];
                    errMessage += `${value} \n`;
                }
                setError(errMessage || 'Đ\xe3 xảy ra lỗi, vui l\xf2ng thử lại!');
                return;
            }
            setError(errList);
        }
    };
    const handleChangeUserInfo = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        let user = {
            ...userInfo
        };
        user[name] = value;
        setUserInfo({
            ...user
        });
    };
    const handleCloseErrorDialog = ()=>{
        setHasError(false);
        setError('');
    };
    const responseFacebook = async (response)=>{
        try {
            const { name  } = response;
            const splitedName = name.split(' ');
            const payload = {
                "first_name": splitedName.slice(0, 1).join(),
                "last_name": splitedName.slice(1).join(' '),
                "email": response.email,
                "birthday": response.birthday || null,
                "oauth2_id": response.userID,
                "avatar_url": response.picture.data.url
            };
            const res = await api.loginFacebook(payload);
            const data = await res.data;
            setAccessToken(data.data.access_token);
            setStep(5);
            setIsFacebook(true);
        } catch (err) {
            setHasError(true);
            setError('Đ\xe3 xảy ra lỗi khi đăng nhập bằng Facebook, vui l\xf2ng thử lại sau!');
            return;
        }
    };
    const responseGoogleSuccess = async (response)=>{
        try {
            const { profileObj , tokenId  } = response;
            const payload = {
                "first_name": profileObj.givenName,
                "last_name": profileObj.familyName,
                "email": profileObj.email,
                "birthday": profileObj.birthday || null,
                "oauth2_id": tokenId,
                "avatar_url": profileObj.imageUrl
            };
            const res = await api.loginGoogle(payload);
            const data = await res.data;
            setAccessToken(data.data.access_token);
            setStep(5);
            setIsGoogle(true);
        } catch (err) {
            const errList = err.response.data.error || '';
            if (errList instanceof Object) {
                let errMessage = '';
                for(let e in errList){
                    const key = Object.keys(errList[e])[0];
                    const value = errList[e][key];
                    errMessage += `${value} \n`;
                }
                setHasError(true);
                setError(errMessage);
                return;
            }
            setHasError(true);
            setError(errList);
        }
    };
    const responseGoogleFalure = (err)=>{
        console.log(err);
        setHasError(true);
        setError('Đ\xe3 xảy ra lỗi khi đăng nhập bằng google, vui l\xf2ng thử lại sau!');
        return;
    };
    const handleSkipPhone = ()=>{
        dispatch((0,token/* setToken */.o4)(accessToken1));
        setStep(null);
        dispatch((0,redux_openLogin/* handleCloseLogin */.vF)());
    };
    const handleReviewOtp = ()=>{
        onEnterPhone();
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Dialog, {
            open: openLogin,
            onClose: onClose,
            PaperProps: {
                style: {
                    backgroundColor: constants/* COLORS.bg1 */.DM.bg1,
                    boxShadow: 'none',
                    borderRadius: '30px',
                    margin: 0,
                    width: !isSm ? '512px' : '100%',
                    paddingTop: isSm ? '51px' : '40px',
                    paddingBottom: isSm ? '65px' : '58px',
                    boxSizing: 'border-box',
                    display: flexCenter.display,
                    alignItems: flexCenter.alignItems,
                    scrollbarGutter: 'stable'
                }
            },
            sx: {
                '& .MuiDialog-container': {
                    alignItems: isSm ? 'flex-end' : 'center'
                },
                '& .MuiDialog-paper': {
                    '::-webkit-scrollbar': {
                        width: '4px'
                    },
                    '::-webkit-scrollbar-button': {
                        height: '10px'
                    },
                    '::-webkit-scrollbar-track': {
                        borderRadius: '5px'
                    },
                    '::-webkit-scrollbar-thumb': {
                        background: constants/* COLORS.bg3 */.DM.bg3,
                        borderRadius: '5px'
                    },
                    ':hover': {
                        overflowY: 'auto'
                    }
                }
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                    "aria-label": "close",
                    onClick: onClose,
                    sx: {
                        position: 'absolute',
                        right: 8,
                        top: 0,
                        color: constants/* COLORS.white */.DM.white
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {})
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.FormControl, {
                    sx: {
                        backgroundColor: constants/* COLORS.bg1 */.DM.bg1,
                        width: '100%',
                        height: '100%',
                        border: 'none',
                        ...flexCenter
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                            sx: {
                                ...flexCenter,
                                flexDirection: 'column',
                                width: '80%',
                                ...step > 2 && {
                                    display: 'none'
                                }
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                    sx: {
                                        ...!isSm ? constants/* TEXT_STYLE.h1 */.gN.h1 : constants/* TEXT_STYLE.h2 */.gN.h2,
                                        color: constants/* COLORS.white */.DM.white
                                    },
                                    children: "Đăng nhập hoặc đăng k\xfd"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                    sx: {
                                        display: flexCenter.display,
                                        alignItems: 'flex-start',
                                        justifyContent: flexCenter.justifyContent,
                                        rowGap: '10px',
                                        flexDirection: 'column',
                                        marginTop: '24px',
                                        marginBottom: '26px'
                                    },
                                    children: [
                                        'Tr\xe1nh gặp vấn đề về t\xe0i khoản khi đổi điện thoại',
                                        'Gợi \xfd ri\xeang những nội dung ph\xf9 hợp với sở th\xedch nghe',
                                        'Đồng bộ t\xe0i khoản, đăng nhập tr\xean tất cả c\xe1c thiết bị'
                                    ].map((content)=>loginInfo(content)
                                    )
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {
                                    sx: {
                                        backgroundColor: constants/* COLORS.blackStroker */.DM.blackStroker,
                                        width: '100%'
                                    }
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                    sx: {
                                        display: step === 1 ? flexCenter.display : 'none',
                                        alignItems: flexCenter.alignItems,
                                        flexDirection: 'column'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                            sx: {
                                                marginTop: '32px',
                                                width: '100%',
                                                ...flexCenter,
                                                flexDirection: 'column',
                                                rowGap: '24px',
                                                marginBottom: '24px'
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                    sx: {
                                                        ...constants/* TEXT_STYLE.title1 */.gN.title1,
                                                        color: constants/* COLORS.white */.DM.white
                                                    },
                                                    children: "Nhập số điện thoại của bạn để tiếp tục"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                    sx: {
                                                        width: '100%',
                                                        display: flexCenter.display,
                                                        columnGap: '16px',
                                                        height: '49px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Select, {
                                                            id: "select-phone-prefix",
                                                            value: countryCode,
                                                            onChange: handleChangeCountryCode,
                                                            label: "countryCode",
                                                            sx: {
                                                                border: '1px solid #353535',
                                                                borderRadius: '4px',
                                                                color: constants/* COLORS.white */.DM.white,
                                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                                    border: "none"
                                                                },
                                                                '& .MuiSelect-icon': {
                                                                    color: constants/* COLORS.white */.DM.white
                                                                }
                                                            },
                                                            children: phonePrefixList.map((prefix, idx)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.MenuItem, {
                                                                    value: prefix,
                                                                    children: [
                                                                        "+",
                                                                        prefix
                                                                    ]
                                                                }, idx)
                                                            )
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.TextField, {
                                                            sx: {
                                                                borderRadius: '4px',
                                                                border: '1px solid #353535',
                                                                justifyContent: 'center',
                                                                height: '100%',
                                                                '& .MuiOutlinedInput-root': {
                                                                    height: '100%'
                                                                },
                                                                '& .MuiOutlinedInput-input': {
                                                                    color: constants/* COLORS.white */.DM.white,
                                                                    ...!isSm ? constants/* TEXT_STYLE.h2 */.gN.h2 : constants/* TEXT_STYLE.h3 */.gN.h3
                                                                }
                                                            },
                                                            id: "phone-number",
                                                            placeholder: "987654321",
                                                            variant: "outlined",
                                                            onChange: onPhoneChange
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(CustomDisabledButton/* default */.Z, {
                                                    disabled: !isPhoneValid,
                                                    onClick: onEnterPhone,
                                                    style: {
                                                        width: '100%',
                                                        textTransform: 'none',
                                                        marginBottom: !isSm ? '20px' : '30px',
                                                        height: '48px',
                                                        ...!isSm ? constants/* TEXT_STYLE.title1 */.gN.title1 : constants/* TEXT_STYLE.title2 */.gN.title2
                                                    },
                                                    content: 'Tiếp tục'
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                            sx: {
                                                ...constants/* TEXT_STYLE.title1 */.gN.title1,
                                                color: constants/* COLORS.white */.DM.white,
                                                marginBottom: '24px'
                                            },
                                            children: "hoặc tiếp tục với"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Stack, {
                                            sx: {
                                                width: '100%'
                                            },
                                            spacing: 3,
                                            direction: "column",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((facebook_login_render_props_default()), {
                                                    render: (renderProps)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                                            onClick: renderProps.onClick,
                                                            sx: {
                                                                textTransform: 'none',
                                                                height: '48px'
                                                            },
                                                            variant: "contained",
                                                            color: "primary",
                                                            startIcon: /*#__PURE__*/ jsx_runtime_.jsx(Icons/* FacebookButtonIcon */.$R, {}),
                                                            children: "Facebook"
                                                        })
                                                    ,
                                                    appId: `${"2746448429009176"}`,
                                                    autoLoad: false,
                                                    fields: "name,email,picture",
                                                    callback: responseFacebook
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((external_react_google_login_default()), {
                                                    render: (renderProps)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                                            onClick: renderProps.onClick,
                                                            disabled: renderProps.disabled,
                                                            sx: {
                                                                textTransform: 'none',
                                                                height: '48px'
                                                            },
                                                            variant: "contained",
                                                            color: "error",
                                                            startIcon: /*#__PURE__*/ jsx_runtime_.jsx(Icons/* GoogleButtonIcon */.tb, {}),
                                                            children: "Google"
                                                        })
                                                    ,
                                                    cookiePolicy: 'single_host_origin',
                                                    clientId: `${"1070814418454-gi0mavfejdkj79l5h643beei3rs9fr0j.apps.googleusercontent.com"}`,
                                                    buttonText: "Google",
                                                    onSuccess: responseGoogleSuccess,
                                                    onFailure: responseGoogleFalure
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                    sx: {
                                        display: step === 2 ? flexCenter.display : 'none',
                                        alignItems: flexCenter.alignItems,
                                        flexDirection: 'column'
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                            sx: {
                                                ...constants/* TEXT_STYLE.title1 */.gN.title1,
                                                color: constants/* COLORS.white */.DM.white,
                                                mt: '32px',
                                                mb: '25px'
                                            },
                                            children: "Nhập m\xe3 số gồm 6 chữ số đ\xe3 gửi tới"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.TextField, {
                                            sx: {
                                                borderRadius: '4px',
                                                border: '1px solid #353535',
                                                justifyContent: 'center',
                                                height: '49px',
                                                ...isOTPWrong && {
                                                    '& .Mui-focused': {
                                                        border: `1px solid ${constants/* COLORS.error */.DM.error}`
                                                    }
                                                },
                                                '& .MuiOutlinedInput-root': {
                                                    height: '100%'
                                                },
                                                '& .MuiOutlinedInput-input': {
                                                    color: constants/* COLORS.white */.DM.white,
                                                    ...!isSm ? constants/* TEXT_STYLE.h2 */.gN.h2 : constants/* TEXT_STYLE.h3 */.gN.h3,
                                                    textAlign: 'center'
                                                }
                                            },
                                            id: "phone-number",
                                            placeholder: "123456",
                                            variant: "outlined",
                                            onChange: onOTPChange
                                        }),
                                        isOTPWrong && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                            sx: {
                                                ...constants/* TEXT_STYLE.content2 */.gN.content2,
                                                mt: '6px',
                                                color: constants/* COLORS.error */.DM.error
                                            },
                                            children: [
                                                "M\xe3 kh\xf4ng đ\xfang, bạn c\xf2n ",
                                                3 - otpRetries,
                                                " lần thử"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                            onClick: handleReviewOtp,
                                            sx: {
                                                ...constants/* TEXT_STYLE.title2 */.gN.title2,
                                                mt: isOTPWrong ? '12px' : '40px',
                                                color: constants/* COLORS.bg4 */.DM.bg4,
                                                cursor: 'pointer'
                                            },
                                            children: isWaitFormRenewOtp ? 'Y\xeau cầu m\xe3 mới' : otpCountDown ? `Yêu cầu mã mới trong ${otpCountDown}` : ''
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(CustomDisabledButton/* default */.Z, {
                                            disabled: !isOTPValid,
                                            onClick: onEnterOTP,
                                            style: {
                                                width: '100%',
                                                textTransform: 'none',
                                                marginBottom: !isSm ? '50px' : '40px',
                                                height: '48px',
                                                mt: '16px'
                                            },
                                            content: 'Tiếp tục'
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                            sx: {
                                display: step === 4 ? flexCenter.display : 'none',
                                alignItems: flexCenter.alignItems,
                                flexDirection: 'column',
                                rowGap: '25px'
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/images/login_success.png",
                                    alt: "login success img"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                    sx: {
                                        ...!isSm ? constants/* TEXT_STYLE.h2 */.gN.h2 : constants/* TEXT_STYLE.h3 */.gN.h3,
                                        color: constants/* COLORS.white */.DM.white
                                    },
                                    children: "Ch\xfac mừng bạn!"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                    sx: {
                                        ...!isSm ? constants/* TEXT_STYLE.content1 */.gN.content1 : constants/* TEXT_STYLE.content2 */.gN.content2,
                                        color: constants/* COLORS.contentIcon */.DM.contentIcon,
                                        textAlign: 'center',
                                        width: '277px'
                                    },
                                    children: "Bạn đ\xe3 đăng nhập th\xe0nh c\xf4ng, h\xe3y trải nghiệm ứng dụng ngay b\xe2y giờ "
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.FormControl, {
                    sx: {
                        display: step === 3 ? flexCenter.display : 'none',
                        width: '100%',
                        ...(0,flexStyle/* flexStyle */.X)('center', 'center')
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                        sx: {
                            display: step === 3 ? flexCenter.display : 'none',
                            alignItems: flexCenter.alignItems,
                            flexDirection: 'column',
                            p: isSm ? '46px 38px 64px 38px' : '51px 56px 58px 56px',
                            width: '100%',
                            boxSizing: 'border-box'
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                sx: {
                                    width: '100%',
                                    ...flexCenter,
                                    flexDirection: 'column'
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                        sx: {
                                            ...constants/* TEXT_STYLE.title1 */.gN.title1,
                                            color: constants/* COLORS.white */.DM.white,
                                            textAlign: 'center'
                                        },
                                        children: [
                                            "Bạn đ\xe3 đăng k\xfd t\xe0i khoản th\xe0nh c\xf4ng!",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            "Điền th\xf4ng tin để ho\xe0n tất"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                        sx: {
                                            width: '100%',
                                            ...(0,flexStyle/* flexStyle */.X)('center', 'center'),
                                            flexDirection: 'column',
                                            rowGap: '23px',
                                            mt: '32px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                sx: {
                                                    ...(0,flexStyle/* flexStyle */.X)('center', 'center'),
                                                    columnGap: isSm ? '8px' : '16px',
                                                    width: '100%'
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.TextField, {
                                                        sx: {
                                                            ...textFieldStyle
                                                        },
                                                        InputProps: {
                                                            startAdornment: /*#__PURE__*/ jsx_runtime_.jsx(material_.InputAdornment, {
                                                                position: "start",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Icons/* Account */.mR, {})
                                                            })
                                                        },
                                                        name: "first_name",
                                                        onChange: handleChangeUserInfo,
                                                        value: userInfo.first_name || '',
                                                        placeholder: "Họ",
                                                        variant: "outlined"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.TextField, {
                                                        sx: {
                                                            ...textFieldStyle
                                                        },
                                                        name: "last_name",
                                                        onChange: handleChangeUserInfo,
                                                        value: userInfo.last_name || '',
                                                        placeholder: "T\xean",
                                                        variant: "outlined"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                sx: {
                                                    ...(0,flexStyle/* flexStyle */.X)('center', 'center'),
                                                    width: '100%'
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.TextField, {
                                                    sx: {
                                                        width: '100%',
                                                        ...textFieldStyle
                                                    },
                                                    InputProps: {
                                                        startAdornment: /*#__PURE__*/ jsx_runtime_.jsx(material_.InputAdornment, {
                                                            position: "start",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Icons/* Email */.GT, {})
                                                        })
                                                    },
                                                    name: "email",
                                                    onChange: handleChangeUserInfo,
                                                    value: userInfo.email || '',
                                                    placeholder: "Địa chỉ email",
                                                    variant: "outlined"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(CustomDisabledButton/* default */.Z, {
                                        onClick: onUpdateProfile,
                                        disabled: !isUserInforValidated,
                                        style: {
                                            width: '100%',
                                            textTransform: 'none',
                                            ...constants/* TEXT_STYLE.title1 */.gN.title1,
                                            color: constants/* COLORS.white */.DM.white,
                                            bgcolor: constants/* COLORS.main */.DM.main,
                                            height: '48px',
                                            borderRadius: '8px',
                                            mt: '24px',
                                            mb: '8px'
                                        },
                                        content: "Tiếp tục"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                sx: {
                                    ...constants/* TEXT_STYLE.content3 */.gN.content3,
                                    color: '#DEDEDE'
                                },
                                children: [
                                    "Tham khảo ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        target: "_blank",
                                        href: "https://voiz.vn/chinh-sach-bao-mat",
                                        style: {
                                            color: '#DEDEDE'
                                        },
                                        children: "ch\xednh s\xe1ch bảo mật \xa0"
                                    }),
                                    "của ch\xfang t\xf4i"
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                sx: {
                                    ...constants/* TEXT_STYLE.title1 */.gN.title1,
                                    color: constants/* COLORS.white */.DM.white,
                                    mb: '24px',
                                    mt: '25px'
                                },
                                children: "hoặc tiếp tục với"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Stack, {
                                sx: {
                                    width: '100%'
                                },
                                spacing: 3,
                                direction: "column",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((facebook_login_render_props_default()), {
                                        render: (renderProps)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                                onClick: renderProps.onClick,
                                                sx: {
                                                    textTransform: 'none',
                                                    height: '48px'
                                                },
                                                variant: "contained",
                                                color: "primary",
                                                startIcon: /*#__PURE__*/ jsx_runtime_.jsx(Icons/* FacebookButtonIcon */.$R, {}),
                                                children: "Facebook"
                                            })
                                        ,
                                        appId: `${"2746448429009176"}`,
                                        autoLoad: false,
                                        fields: "name,email,picture",
                                        callback: responseFacebook
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((external_react_google_login_default()), {
                                        render: (renderProps)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                                onClick: renderProps.onClick,
                                                disabled: renderProps.disabled,
                                                sx: {
                                                    textTransform: 'none',
                                                    height: '48px'
                                                },
                                                variant: "contained",
                                                color: "error",
                                                startIcon: /*#__PURE__*/ jsx_runtime_.jsx(Icons/* GoogleButtonIcon */.tb, {}),
                                                children: "Google"
                                            })
                                        ,
                                        cookiePolicy: 'single_host_origin',
                                        clientId: `${"1070814418454-gi0mavfejdkj79l5h643beei3rs9fr0j.apps.googleusercontent.com"}`,
                                        buttonText: "Google",
                                        onSuccess: responseGoogleSuccess,
                                        onFailure: responseGoogleFalure
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Dialog, {
                    open: hasError,
                    onClose: handleCloseErrorDialog,
                    PaperProps: {
                        style: {
                            backgroundColor: constants/* COLORS.bg1 */.DM.bg1
                        }
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.DialogContent, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.DialogContentText, {
                                sx: {
                                    color: constants/* COLORS.white */.DM.white
                                },
                                children: error
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.DialogActions, {
                            sx: {
                                ...(0,flexStyle/* flexStyle */.X)('center', 'center'),
                                'whiteSpace': 'pre-line'
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                onClick: handleCloseErrorDialog,
                                autoFocus: true,
                                children: "Đ\xf3ng"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Dialog, {
                    open: step === 5,
                    onClose: handleSkipPhone,
                    sx: {
                        '& .MuiDialog-paper': {
                            backgroundColor: constants/* COLORS.bg1 */.DM.bg1,
                            ...(0,flexStyle/* flexStyle */.X)('center', 'center'),
                            borderRadius: isSm ? 0 : '30px',
                            width: isSm ? '100%' : '512px',
                            margin: 0,
                            position: 'relative',
                            p: isSm ? '0 38px' : '0 56px',
                            boxSizing: 'border-box'
                        }
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                            "aria-label": "close",
                            onClick: handleSkipPhone,
                            sx: {
                                position: 'absolute',
                                right: 8,
                                top: 0,
                                color: constants/* COLORS.white */.DM.white
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.DialogContent, {
                            sx: {
                                width: '100%',
                                ...(0,flexStyle/* flexStyle */.X)('center', 'center'),
                                p: 0
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                sx: {
                                    marginTop: '32px',
                                    width: '100%',
                                    ...(0,flexStyle/* flexStyle */.X)('center', 'center'),
                                    flexDirection: 'column',
                                    marginBottom: '24px'
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                        sx: {
                                            ...constants/* TEXT_STYLE.title1 */.gN.title1,
                                            color: constants/* COLORS.white */.DM.white
                                        },
                                        children: "Nhập số điện thoại của bạn để tiếp tục"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                        sx: {
                                            ...(0,flexStyle/* flexStyle */.X)('flex-start', 'center'),
                                            columnGap: '11px',
                                            mt: '24px',
                                            mb: '34px'
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(Icons/* GreenTick */.K7, {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                sx: {
                                                    ...constants/* TEXT_STYLE.caption12 */.gN.caption12,
                                                    color: constants/* COLORS.contentIcon */.DM.contentIcon
                                                },
                                                children: "Tr\xe1nh gặp vấn đề về t\xe0i khoản khi đổi điện thoại"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                        sx: {
                                            width: '100%',
                                            ...(0,flexStyle/* flexStyle */.X)('center', 'center'),
                                            columnGap: '16px',
                                            height: '49px'
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Select, {
                                                id: "select-phone-prefix",
                                                value: countryCode,
                                                onChange: handleChangeCountryCode,
                                                label: "countryCode",
                                                sx: {
                                                    border: '1px solid #353535',
                                                    borderRadius: '4px',
                                                    color: constants/* COLORS.white */.DM.white,
                                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                        border: "none"
                                                    },
                                                    '& .MuiSelect-icon': {
                                                        color: constants/* COLORS.white */.DM.white
                                                    }
                                                },
                                                children: phonePrefixList.map((prefix, idx)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.MenuItem, {
                                                        value: prefix,
                                                        children: [
                                                            "+",
                                                            prefix
                                                        ]
                                                    }, idx)
                                                )
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.TextField, {
                                                sx: {
                                                    borderRadius: '4px',
                                                    border: '1px solid #353535',
                                                    justifyContent: 'center',
                                                    height: '100%',
                                                    '& .MuiOutlinedInput-root': {
                                                        height: '100%'
                                                    },
                                                    '& .MuiOutlinedInput-input': {
                                                        color: constants/* COLORS.white */.DM.white,
                                                        ...!isSm ? constants/* TEXT_STYLE.h2 */.gN.h2 : constants/* TEXT_STYLE.h3 */.gN.h3
                                                    }
                                                },
                                                id: "phone-number",
                                                placeholder: "987654321",
                                                variant: "outlined",
                                                onChange: onPhoneChange
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.DialogActions, {
                            sx: {
                                'whiteSpace': 'pre-line',
                                ...(0,flexStyle/* flexStyle */.X)('center', 'center'),
                                flexDirection: 'column',
                                width: '100%',
                                p: 0
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(CustomDisabledButton/* default */.Z, {
                                    disabled: !isPhoneValid,
                                    onClick: onEnterPhone,
                                    style: {
                                        width: '100%',
                                        textTransform: 'none',
                                        marginBottom: !isSm ? '20px' : '30px',
                                        height: '48px',
                                        ...!isSm ? constants/* TEXT_STYLE.title1 */.gN.title1 : constants/* TEXT_STYLE.title2 */.gN.title2,
                                        borderRadius: '8px'
                                    },
                                    content: 'Tiếp tục'
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                    onClick: handleSkipPhone,
                                    sx: {
                                        ...constants/* TEXT_STYLE.content1 */.gN.content1,
                                        color: constants/* COLORS.contentIcon */.DM.contentIcon,
                                        textTransform: 'none',
                                        mb: '39px'
                                    },
                                    children: "Bỏ qua"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};


/***/ }),

/***/ 1048:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Control)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7010);
/* harmony import */ var _redux_playAudio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7348);
/* harmony import */ var _redux_audio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3307);
/* harmony import */ var _redux_token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7691);
/* harmony import */ var _redux_payment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6204);
/* harmony import */ var _redux_audioListening__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2616);
/* harmony import */ var hls_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2621);
/* harmony import */ var hls_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(hls_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2583);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4873);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_icons_material_Pause__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8996);
/* harmony import */ var _mui_icons_material_Pause__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Pause__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _mui_icons_material_PlayArrow__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9272);
/* harmony import */ var _mui_icons_material_PlayArrow__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_PlayArrow__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _mui_icons_material_SkipNext__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(4613);
/* harmony import */ var _mui_icons_material_SkipNext__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_SkipNext__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _mui_icons_material_SkipPrevious__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(7089);
/* harmony import */ var _mui_icons_material_SkipPrevious__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_SkipPrevious__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(7426);
/* harmony import */ var _utils_flexStyle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(8210);
/* harmony import */ var _utils_formatDuration__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(994);
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(5273);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(2055);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_config__WEBPACK_IMPORTED_MODULE_11__, firebase_database__WEBPACK_IMPORTED_MODULE_12__]);
([_firebase_config__WEBPACK_IMPORTED_MODULE_11__, firebase_database__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

// import react

// import redux







// import hls

// import date-fns

// import firebase


// import MUI component










// import services

const WallPaper = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_13__.styled)('div')({
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    overflow: 'hidden'
});
const Widget = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_13__.styled)('div')(({ theme  })=>({
        width: '100%',
        margin: 'auto',
        position: 'relative',
        ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_22__/* .flexStyle */ .X)('center', 'center'),
        flexDirection: 'column',
        rowGap: '20px'
    })
);
const TinyText = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_13__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Typography)({
    ..._utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .TEXT_STYLE.content2 */ .gN.content2,
    color: _utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.white */ .DM.white
});
const StyledBadge = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_13__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Badge)(({ theme  })=>({
        '& .MuiBadge-badge': {
            backgroundColor: _utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.bg4 */ .DM.bg4,
            width: 'auto',
            minWidth: '9px',
            height: '7px',
            padding: '2px',
            fontSize: '5px',
            top: '4px',
            right: '3.5px',
            color: 'black',
            borderRadius: '5px',
            fontWeight: 700,
            boxSizing: 'unset'
        }
    })
);
function Control(props) {
    const api = new _services_api__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z();
    const { audioData , audio , nextAudioId , prevAudioId , isSm  } = props;
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_13__.useTheme)();
    const playBtn = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_user__WEBPACK_IMPORTED_MODULE_3__/* .selectUser */ .dy);
    const audioUrl = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_playAudio__WEBPACK_IMPORTED_MODULE_4__/* .selectAudioHls */ .fr);
    const token = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_token__WEBPACK_IMPORTED_MODULE_6__/* .selectToken */ .rK);
    const { 0: position , 1: setPosition  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: paused , 1: setPaused  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: timer , 1: setTimer  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: intervalId , 1: setIntervalId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: countDownTimerStr , 1: setCountDownTimer  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: openTimer , 1: setOpenTimer  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: openSpeed , 1: setOpenSpeed  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: currentTimer , 1: setCurrentTimer  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: currentSpeed , 1: setCurrentSpeed  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(2);
    const { 0: errorMessage , 1: setErrorMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: openSnackbar , 1: setOpenSnackbar  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: openUpdateRequiredModal , 1: setOpenUpdateRequiredModal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: openUnauthorizedModal , 1: setOpenUnauthorizedModal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: audioListenings , 1: setAudioListeningsState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const media = audio.current;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const userRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_12__.ref)(_firebase_config__WEBPACK_IMPORTED_MODULE_11__/* .firebase */ .w, `/users/${user === null || user === void 0 ? void 0 : user.uuid}`);
        (0,firebase_database__WEBPACK_IMPORTED_MODULE_12__.onValue)(userRef, (snapshot)=>{
            const changedVal = snapshot.val();
            if (!changedVal) {
                return;
            }
            const tokenPlaying = changedVal.token_playing;
            if (!paused && !tokenPlaying.startsWith(user === null || user === void 0 ? void 0 : user.uuid)) {
                setPaused(true);
            }
        });
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!audioUrl) {
            return;
        }
        if (hls_js__WEBPACK_IMPORTED_MODULE_9___default().isSupported()) {
            const hls = new (hls_js__WEBPACK_IMPORTED_MODULE_9___default())();
            hls.attachMedia(media);
            hls.on((hls_js__WEBPACK_IMPORTED_MODULE_9___default().Events.MEDIA_ATTACHED), function() {
                hls.loadSource(audioUrl);
                hls.on((hls_js__WEBPACK_IMPORTED_MODULE_9___default().Events.MANIFEST_PARSED), function() {
                    media.muted = true;
                    const promise = media.play();
                    if (promise !== undefined) {
                        promise.then((_)=>{
                            media.muted = false;
                        }).catch((error)=>{
                            dispatch((0,_redux_playAudio__WEBPACK_IMPORTED_MODULE_4__/* .togglePlayAudio */ .ez)());
                            setPaused(true);
                        });
                    }
                });
            });
            ;
        } else if (media.canPlayType('application/vnd.apple.mpegurl')) {
            media.src = audioUrl;
            media.addEventListener('loadedmetadata', function() {
                media.play();
            });
        }
        media.addEventListener('timeupdate', (e)=>{
            const currentTime = Math.floor(e.target.currentTime);
            setPosition(currentTime);
            if (currentTime === audioData.duration) {
                fetchAudioUrl(nextAudioId);
            }
            let distinctAudioId = audioListenings.map((i)=>i.audio_id
            );
            let audioIdx = distinctAudioId.indexOf(audioData.id);
            console.log(audioListenings);
            if (audioIdx !== -1) {
                const copiedAudioListennings = JSON.parse(JSON.stringify([
                    ...audioListenings
                ]));
                copiedAudioListennings[audioIdx]['duration_listening'] = currentTime;
                setAudioListeningsState([
                    ...copiedAudioListennings
                ]);
                dispatch((0,_redux_audioListening__WEBPACK_IMPORTED_MODULE_8__/* .setAudioListenings */ .hr)(copiedAudioListennings));
                return;
            }
            const audioListenning = {
                "audio_id": audioData.id,
                "duration_listening": currentTime,
                "listen_at": (0,date_fns__WEBPACK_IMPORTED_MODULE_10__.format)(new Date(), 'yyyy-MM-dd hh:mm:ss'),
                "listen_from": "website"
            };
            setAudioListeningsState([
                ...audioListenings,
                audioListenning
            ]);
            dispatch((0,_redux_audioListening__WEBPACK_IMPORTED_MODULE_8__/* .setAudioListenings */ .hr)([
                ...audioListenings,
                audioListenning
            ]));
        });
    }, [
        audioUrl
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (paused) {
            if (token) {
                addAudioToListening(audioData.id, position, audioData.playlist.id);
            }
            media.pause();
        } else {
            // if (media.paused) {
            //     media.play();
            //     const audioListenning = {
            //         "audio_id": audioData.id,
            //         "duration_listening": 0,
            //         "listen_at": format(new Date(), 'yyyy-MM-dd hh:mm:ss'),
            //         "listen_from": "website"
            //     }
            //     setAudioListeningsState([...audioListenings, audioListenning]);
            // }
            media.muted = false;
        }
    }, [
        paused
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (timer === 0) {
            return;
        }
        if (!paused) {
            setPaused(true);
        }
        setTimeout(()=>{
            setPaused(false);
        }, timer * 1000 * 60);
        countDownTimer();
    }, [
        timer
    ]);
    const handleAddToCart = async (moveToCart = false)=>{
        // add to cart store
        const isItemExists = cart.length > 0 && cart.some((i)=>i.id === playlist.id
        );
        if (isItemExists && moveToCart) {
            router.push('/cart');
        }
        if (!isItemExists) {
            try {
                const res = await api.addToCart(playlist.id);
                const result = await res.data;
                if (result.code === 0) {
                    setErrorMessage(result.error);
                    setOpenSnackbar(true);
                    setTimeout(()=>{
                        setOpenSnackbar(false);
                    }, 1500);
                    return;
                }
                const tmpCart = [
                    ...cart,
                    playlist
                ];
                dispatch((0,_redux_payment__WEBPACK_IMPORTED_MODULE_7__/* .setCart */ .RV)(tmpCart));
                dispatch((0,_redux_payment__WEBPACK_IMPORTED_MODULE_7__/* .setAddToCartFlag */ .ES)(1));
                if (moveToCart) {
                    router.push('/cart');
                }
            } catch (err) {
                const { status  } = err.response;
                if (status === 401) {
                    dispatch(setOpenLogin(true));
                    return;
                }
                const errList = err.response.data.error;
                if (errList instanceof Object) {
                    let errMessage = '';
                    for(let e in errList){
                        const key = Object.keys(errList[e])[0];
                        const value = errList[e][key];
                        errMessage += `${key} ${value} \n`;
                    }
                    setErrorMessage(errMessage || 'Đ\xe3 xảy ra lỗi, vui l\xf2ng thử lại!');
                    setOpenSnackbar(true);
                    setTimeout(()=>{
                        setOpenSnackbar(false);
                    }, 1500);
                    return;
                }
                setErrorMessage(errList || 'Đ\xe3 xảy ra lỗi, vui l\xf2ng thử lại!');
                setOpenSnackbar(true);
                setTimeout(()=>{
                    setOpenSnackbar(false);
                }, 1500);
            }
            return;
        }
        setErrorMessage('Sản phẩm đ\xe3 được th\xeam v\xe0o.\n Vui l\xf2ng kiểm tra lại giỏ h\xe0ng!');
        setOpenSnackbar(true);
        setTimeout(()=>{
            setOpenSnackbar(false);
        }, 1500);
    };
    const handleBuyPlaylist = ()=>{
        handleAddToCart(true);
    };
    const fetchAudioUrl = async (id)=>{
        if (!id) {
            return;
        }
        try {
            const resAudioFile = await api.getAudioFile(id);
            const data = await resAudioFile.data.data;
            const resAudio = await api.getAudio(id);
            const audioDataFromApi = await resAudio.data.data;
            dispatch((0,_redux_playAudio__WEBPACK_IMPORTED_MODULE_4__/* .setAudioHls */ .IS)(data.url));
            dispatch((0,_redux_audio__WEBPACK_IMPORTED_MODULE_5__/* .setAudioData */ .Bt)(audioDataFromApi));
        } catch (err) {
            var ref1;
            console.log(err);
            const status = err === null || err === void 0 ? void 0 : (ref1 = err.response) === null || ref1 === void 0 ? void 0 : ref1.status;
            if (status === 400) {
                setErrorMessage('Qu\xfd kh\xe1ch chưa đăng k\xfd dịch vụ th\xe0nh c\xf4ng. Vui l\xf2ng kiểm tra lại');
                setOpenUpdateRequiredModal(true);
                return;
            }
            if (status === 401) {
                setErrorMessage('Bạn chưa c\xf3 quyền truy cập audio n\xe0y.');
                setOpenUnauthorizedModal(true);
                return;
            }
            setErrorMessage('Đ\xe3 c\xf3 lỗi xảy ra, vui l\xf2ng thử lại sau!');
            setOpenSnackbar(true);
        }
    };
    const countDownTimer = ()=>{
        let eslapseTime = 0;
        const x = setInterval(function() {
            eslapseTime++;
            const timerInSecond = timer * 60 - eslapseTime;
            if (timerInSecond < 0) {
                clearInterval(x);
                setCountDownTimer('');
                return;
            }
            setCountDownTimer((0,_utils_formatDuration__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z)(timerInSecond));
        }, 1000);
        setIntervalId(x);
    };
    const onPlayClick = ()=>{
        setPaused(!paused);
        dispatch((0,_redux_playAudio__WEBPACK_IMPORTED_MODULE_4__/* .togglePlayAudio */ .ez)());
        if (paused && user) {
            const updates = {};
            const uniqueToken = user.uuid + new Date().getTime();
            const userKey = '/users/' + user.uuid;
            const postData = {
                token_playing: uniqueToken
            };
            updates[userKey] = postData;
            (0,firebase_database__WEBPACK_IMPORTED_MODULE_12__.update)((0,firebase_database__WEBPACK_IMPORTED_MODULE_12__.ref)(_firebase_config__WEBPACK_IMPORTED_MODULE_11__/* .firebase */ .w), updates).then((val)=>console.log(val)
            ).catch((err)=>console.log(err)
            );
        }
    };
    const handleTimerClick = ()=>{
        setOpenTimer(true);
    };
    const handleTimerClose = ()=>{
        setOpenTimer(false);
    };
    const handleSpeedClose = ()=>{
        setOpenSpeed(false);
    };
    const handleSelectTimer = ()=>{
        if (intervalId) {
            clearInterval(intervalId);
        }
        const selectedTimer = timerItems[currentTimer]['time'];
        setCountDownTimer('');
        setTimer(selectedTimer);
        setOpenTimer(false);
    };
    const addAudioToListening = async ()=>{
        try {
            const res = await api.addListeningPlaylists(audioData.id, position, audioData.playlist.id);
            const data = await res.data;
            if (data.error) {
                console.log(data.error);
                return;
            }
        } catch (err) {
            console.log(err);
        }
    };
    const onChangeAudioPosition = (value)=>{
        setPosition(value);
        media.currentTime = value;
    };
    const handleChangeSpeedAudio = ()=>{
        setOpenSpeed(true);
    };
    const handleToggleSpeed = (idx)=>{
        setCurrentSpeed(idx);
    };
    const handleSelectSpeed = ()=>{
        media.playbackRate = speedItems[currentSpeed]['speed'];
        setOpenSpeed(false);
    };
    const handleChangeAudio = (type)=>{
        if (type === 'next' && nextAudioId) {
            fetchAudioUrl(nextAudioId);
        }
        if (type === 'prev' && prevAudioId) {
            fetchAudioUrl(prevAudioId);
        }
    };
    const handleToggleTimer = (idx)=>{
        setCurrentTimer(idx);
    };
    const mainIconColor = _utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.white */ .DM.white;
    const timerItems = [
        {
            time: 0,
            text: 'kh\xf4ng hẹn giờ'
        },
        {
            time: 5,
            text: '5 ph\xfat'
        },
        {
            time: 10,
            text: '10 ph\xfat'
        },
        {
            time: 20,
            text: '20 ph\xfat'
        },
        {
            time: 30,
            text: '30 ph\xfat'
        },
        {
            time: 60,
            text: '60 ph\xfat'
        }, 
    ];
    const speedItems = [
        {
            speed: 0.5
        },
        {
            speed: 0.75
        },
        {
            speed: 1
        },
        {
            speed: 1.25
        },
        {
            speed: 1.75
        },
        {
            speed: 2
        }, 
    ];
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Box, {
        sx: {
            width: '100%',
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Widget, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Box, {
                        sx: {
                            ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_22__/* .flexStyle */ .X)('center', 'center'),
                            columnGap: '36px',
                            width: '100%'
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Box, {
                                onClick: handleChangeSpeedAudio,
                                sx: {
                                    textAlign: 'center',
                                    cursor: 'pointer'
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledBadge, {
                                        badgeContent: `X${speedItems[currentSpeed]['speed']}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icons__WEBPACK_IMPORTED_MODULE_20__/* .Speed */ .fD, {})
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Typography, {
                                        sx: {
                                            ..._utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .TEXT_STYLE.caption10Regular */ .gN.caption10Regular,
                                            color: _utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.contentIcon */ .DM.contentIcon,
                                            whiteSpace: 'nowrap',
                                            marginTop: '4px'
                                        },
                                        children: "Tốc độ"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Dialog, {
                                open: openSpeed,
                                onClose: handleSpeedClose,
                                sx: {
                                    '& .MuiDialog-paper': {
                                        borderRadius: '30px',
                                        bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.bg1 */ .DM.bg1,
                                        width: '512px',
                                        p: '36px 27px 32px 27px',
                                        boxSizing: 'border-box',
                                        ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_22__/* .flexStyle */ .X)('center', 'center'),
                                        overflow: isSm ? 'auto' : 'hidden',
                                        scrollbarGutter: 'stable',
                                        '::-webkit-scrollbar': {
                                            width: '4px'
                                        },
                                        '::-webkit-scrollbar-button': {
                                            height: '10px'
                                        },
                                        '::-webkit-scrollbar-track': {
                                            borderRadius: '5px'
                                        },
                                        '::-webkit-scrollbar-thumb': {
                                            background: _utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.bg3 */ .DM.bg3,
                                            borderRadius: '5px'
                                        },
                                        ':hover': {
                                            overflowY: 'auto'
                                        }
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Typography, {
                                        sx: {
                                            ..._utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .TEXT_STYLE.h1 */ .gN.h1,
                                            color: _utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.white */ .DM.white,
                                            mb: '46px'
                                        },
                                        children: "Chọn tốc độ"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.List, {
                                        dense: true,
                                        sx: {
                                            width: '100%',
                                            height: '100%'
                                        },
                                        children: speedItems.map((value, idx)=>{
                                            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.ListItem, {
                                                secondaryAction: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Radio, {
                                                    checked: idx === currentSpeed,
                                                    onChange: ()=>{
                                                        handleToggleSpeed(idx);
                                                    },
                                                    value: value.time,
                                                    sx: {
                                                        color: '#DADADA',
                                                        pl: 0,
                                                        '&.Mui-checked': {
                                                            color: _utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.main */ .DM.main
                                                        }
                                                    }
                                                }),
                                                sx: {
                                                    p: 0,
                                                    ...idx > 0 && {
                                                        borderTop: `1px solid ${_utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.blackStroker */ .DM.blackStroker}`,
                                                        p: '22px 0'
                                                    },
                                                    ...idx === 0 && {
                                                        pb: '22px'
                                                    }
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.ListItemText, {
                                                    value: idx,
                                                    primary: `X${value.speed}`,
                                                    sx: {
                                                        ..._utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .TEXT_STYLE.h3 */ .gN.h3,
                                                        color: _utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.bg4 */ .DM.bg4
                                                    }
                                                })
                                            }, idx));
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Box, {
                                        sx: {
                                            ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_22__/* .flexStyle */ .X)('center', 'center'),
                                            columnGap: '16px',
                                            width: '100%',
                                            mt: '44px'
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Button, {
                                                onClick: handleSpeedClose,
                                                sx: {
                                                    borderRadius: '8px',
                                                    textTransform: 'none',
                                                    width: '50%',
                                                    height: '48px',
                                                    bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.bg3 */ .DM.bg3,
                                                    ..._utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .TEXT_STYLE.title1 */ .gN.title1,
                                                    color: _utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.white */ .DM.white,
                                                    ':hover': {
                                                        bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.bg3 */ .DM.bg3
                                                    }
                                                },
                                                variant: "contained",
                                                children: "Huỷ"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Button, {
                                                onClick: handleSelectSpeed,
                                                sx: {
                                                    textTransform: 'none',
                                                    borderRadius: '8px',
                                                    width: '50%',
                                                    height: '48px',
                                                    bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.main */ .DM.main,
                                                    ..._utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .TEXT_STYLE.title1 */ .gN.title1,
                                                    color: _utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.white */ .DM.white
                                                },
                                                variant: "contained",
                                                children: "Tiếp tục"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.IconButton, {
                                "aria-label": "previous song",
                                onClick: ()=>{
                                    handleChangeAudio('prev');
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_SkipPrevious__WEBPACK_IMPORTED_MODULE_18___default()), {
                                    sx: {
                                        width: '24px',
                                        height: '24px'
                                    },
                                    htmlColor: mainIconColor
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.IconButton, {
                                sx: {
                                    border: `1px solid ${_utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.white */ .DM.white}`
                                },
                                "aria-label": paused ? 'play' : 'pause',
                                onClick: onPlayClick,
                                ref: playBtn,
                                children: paused ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_PlayArrow__WEBPACK_IMPORTED_MODULE_16___default()), {
                                    sx: {
                                        width: '24px',
                                        height: '24px'
                                    },
                                    htmlColor: mainIconColor
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Pause__WEBPACK_IMPORTED_MODULE_15___default()), {
                                    sx: {
                                        width: '24px',
                                        height: '24px'
                                    },
                                    htmlColor: mainIconColor
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.IconButton, {
                                "aria-label": "next song",
                                onClick: ()=>{
                                    handleChangeAudio('next');
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_SkipNext__WEBPACK_IMPORTED_MODULE_17___default()), {
                                    sx: {
                                        width: '24px',
                                        height: '24px'
                                    },
                                    htmlColor: mainIconColor
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Box, {
                                onClick: handleTimerClick,
                                sx: {
                                    textAlign: 'center',
                                    cursor: 'pointer'
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icons__WEBPACK_IMPORTED_MODULE_20__/* .Clock */ .SU, {
                                        fill: _utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.bg4 */ .DM.bg4,
                                        bgcolor: "none"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Typography, {
                                        sx: {
                                            ..._utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .TEXT_STYLE.caption10Regular */ .gN.caption10Regular,
                                            color: _utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.contentIcon */ .DM.contentIcon,
                                            whiteSpace: 'nowrap',
                                            marginTop: '4px'
                                        },
                                        children: timer === 0 || countDownTimerStr === '' ? 'Hẹn giờ' : `${countDownTimerStr}`
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Dialog, {
                                open: openTimer,
                                onClose: handleTimerClose,
                                sx: {
                                    '& .MuiDialog-paper': {
                                        borderRadius: '30px',
                                        bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.bg1 */ .DM.bg1,
                                        width: '512px',
                                        p: '36px 27px 32px 27px',
                                        boxSizing: 'border-box',
                                        ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_22__/* .flexStyle */ .X)('center', 'center'),
                                        overflow: isSm ? 'auto' : 'hidden',
                                        scrollbarGutter: 'stable',
                                        '::-webkit-scrollbar': {
                                            width: '4px'
                                        },
                                        '::-webkit-scrollbar-button': {
                                            height: '10px'
                                        },
                                        '::-webkit-scrollbar-track': {
                                            borderRadius: '5px'
                                        },
                                        '::-webkit-scrollbar-thumb': {
                                            background: _utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.bg3 */ .DM.bg3,
                                            borderRadius: '5px'
                                        },
                                        ':hover': {
                                            overflowY: 'auto'
                                        }
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Typography, {
                                        sx: {
                                            ..._utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .TEXT_STYLE.h1 */ .gN.h1,
                                            color: _utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.white */ .DM.white,
                                            mb: '46px'
                                        },
                                        children: "Hẹn giờ"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.List, {
                                        dense: true,
                                        sx: {
                                            width: '100%',
                                            height: '100%'
                                        },
                                        children: timerItems.map((value, idx)=>{
                                            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.ListItem, {
                                                secondaryAction: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Radio, {
                                                    checked: idx === currentTimer,
                                                    onChange: ()=>{
                                                        handleToggleTimer(idx);
                                                    },
                                                    value: value.time,
                                                    sx: {
                                                        color: '#DADADA',
                                                        pl: 0,
                                                        '&.Mui-checked': {
                                                            color: _utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.main */ .DM.main
                                                        }
                                                    }
                                                }),
                                                sx: {
                                                    p: 0,
                                                    ...idx > 0 && {
                                                        borderTop: `1px solid ${_utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.blackStroker */ .DM.blackStroker}`,
                                                        p: '22px 0'
                                                    },
                                                    ...idx === 0 && {
                                                        pb: '22px'
                                                    }
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.ListItemText, {
                                                    value: idx,
                                                    primary: value.text,
                                                    sx: {
                                                        ..._utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .TEXT_STYLE.h3 */ .gN.h3,
                                                        color: _utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.bg4 */ .DM.bg4
                                                    }
                                                })
                                            }, idx));
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Box, {
                                        sx: {
                                            ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_22__/* .flexStyle */ .X)('center', 'center'),
                                            columnGap: '16px',
                                            width: '100%',
                                            mt: '44px'
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Button, {
                                                onClick: handleTimerClose,
                                                sx: {
                                                    borderRadius: '8px',
                                                    textTransform: 'none',
                                                    width: '50%',
                                                    height: '48px',
                                                    bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.bg3 */ .DM.bg3,
                                                    ..._utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .TEXT_STYLE.title1 */ .gN.title1,
                                                    color: _utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.white */ .DM.white,
                                                    ':hover': {
                                                        bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.bg3 */ .DM.bg3
                                                    }
                                                },
                                                variant: "contained",
                                                children: "Huỷ"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Button, {
                                                onClick: handleSelectTimer,
                                                sx: {
                                                    textTransform: 'none',
                                                    borderRadius: '8px',
                                                    width: '50%',
                                                    height: '48px',
                                                    bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.main */ .DM.main,
                                                    ..._utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .TEXT_STYLE.title1 */ .gN.title1,
                                                    color: _utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.white */ .DM.white
                                                },
                                                variant: "contained",
                                                children: "Tiếp tục"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Box, {
                        sx: {
                            ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_22__/* .flexStyle */ .X)('center', 'center'),
                            columnGap: '10px',
                            width: '100%',
                            mt: -2,
                            p: '0 25px',
                            boxSizing: 'border-box'
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TinyText, {
                                children: (0,_utils_formatDuration__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z)(position)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Slider, {
                                "aria-label": "time-indicator",
                                size: "small",
                                value: position,
                                min: 0,
                                step: 1,
                                max: audioData === null || audioData === void 0 ? void 0 : audioData.duration,
                                onChange: (_, value)=>{
                                    onChangeAudioPosition(value);
                                },
                                sx: {
                                    height: 3,
                                    color: '#CFD1E9',
                                    '& .MuiSlider-track': {
                                        color: '#754ADA'
                                    },
                                    '& .MuiSlider-thumb': {
                                        width: 12,
                                        height: 12,
                                        color: _utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.white */ .DM.white,
                                        transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                                        '&:before': {
                                            boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)'
                                        },
                                        '&:hover, &.Mui-focusVisible': {
                                            boxShadow: `0px 0px 0px 8px ${theme.palette.mode === 'dark' ? 'rgb(255 255 255 / 16%)' : 'rgb(0 0 0 / 16%)'}`
                                        },
                                        '&.Mui-active': {
                                            width: 15,
                                            height: 15
                                        }
                                    },
                                    '& .MuiSlider-rail': {
                                        opacity: 1
                                    }
                                }
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(TinyText, {
                                children: [
                                    "-",
                                    (0,_utils_formatDuration__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z)(audioData === null || audioData === void 0 ? void 0 : audioData.duration)
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WallPaper, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Snackbar, {
                open: openSnackbar,
                autoHideDuration: 6000,
                onClose: ()=>{
                    setOpenSnackbar(false);
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Alert, {
                    onClose: ()=>{
                        setOpenSnackbar(false);
                    },
                    severity: "error",
                    sx: {
                        width: '100%'
                    },
                    children: errorMessage
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Dialog, {
                open: openUnauthorizedModal,
                onClose: ()=>{
                    setOpenUnauthorizedModal(false);
                },
                sx: {
                    '& .MuiPaper-root': {
                        width: isSm ? '95%' : '512px',
                        bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.bg1 */ .DM.bg1,
                        m: 0,
                        p: '40px 56px',
                        boxSizing: 'border-box',
                        borderRadius: isSm ? '10px' : '30px',
                        ...isSm && {
                            m: '0 16px'
                        }
                    }
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__.DialogContent, {
                        sx: {
                            p: 0
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.DialogContentText, {
                                sx: {
                                    ...isSm ? _utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .TEXT_STYLE.h3 */ .gN.h3 : _utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .TEXT_STYLE.h1 */ .gN.h1,
                                    color: _utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.white */ .DM.white,
                                    textAlign: 'center',
                                    mb: isSm ? '24px' : '32px',
                                    p: 0
                                },
                                children: "Voiz FM"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.DialogContentText, {
                                sx: {
                                    ..._utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .TEXT_STYLE.content1 */ .gN.content1,
                                    color: _utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.contentIcon */ .DM.contentIcon,
                                    textAlign: 'center',
                                    whiteSpace: 'pre-line',
                                    mb: '32px'
                                },
                                children: errorMessage
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.DialogActions, {
                        sx: {
                            ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_22__/* .flexStyle */ .X)('center', 'center')
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Box, {
                            sx: {
                                ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_22__/* .flexStyle */ .X)('center', 'center'),
                                flexDirection: 'column',
                                rowGap: '24px'
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Button, {
                                    onClick: handleBuyPlaylist,
                                    sx: {
                                        ..._utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .TEXT_STYLE.title1 */ .gN.title1,
                                        color: _utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.white */ .DM.white,
                                        textTransform: 'none',
                                        borderRadius: '8px',
                                        width: isSm ? '168px' : '192px',
                                        height: '48px',
                                        bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.main */ .DM.main
                                    },
                                    autoFocus: true,
                                    children: "Mua lẻ s\xe1ch"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Button, {
                                    onClick: ()=>{
                                        setOpenUnauthorizedModal(false);
                                    },
                                    sx: {
                                        ..._utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .TEXT_STYLE.content1 */ .gN.content1,
                                        color: _utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.contentIcon */ .DM.contentIcon,
                                        textTransform: 'none'
                                    },
                                    children: "Bỏ qua"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Dialog, {
                open: openUpdateRequiredModal,
                onClose: ()=>{
                    setOpenUpdateRequiredModal(false);
                },
                sx: {
                    '& .MuiPaper-root': {
                        width: isSm ? '95%' : '512px',
                        bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.bg1 */ .DM.bg1,
                        m: 0,
                        p: '40px 56px',
                        boxSizing: 'border-box',
                        borderRadius: isSm ? '10px' : '30px',
                        ...isSm && {
                            m: '0 16px'
                        }
                    }
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Box, {
                        sx: {
                            width: '100%',
                            ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_22__/* .flexStyle */ .X)('center', 'center'),
                            mb: isSm ? '24px' : '32px'
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            style: {
                                width: isSm ? '134px' : '108px',
                                height: isSm ? '134px' : '108px'
                            },
                            src: "/images/upgrade.png",
                            alt: "upgrade img"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__.DialogContent, {
                        sx: {
                            p: 0
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.DialogContentText, {
                                sx: {
                                    ...isSm ? _utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .TEXT_STYLE.h3 */ .gN.h3 : _utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .TEXT_STYLE.h1 */ .gN.h1,
                                    color: _utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.white */ .DM.white,
                                    textAlign: 'center',
                                    mb: '24px',
                                    p: 0
                                },
                                children: "N\xe2ng cấp ngay"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.DialogContentText, {
                                sx: {
                                    ..._utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .TEXT_STYLE.content1 */ .gN.content1,
                                    color: _utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.contentIcon */ .DM.contentIcon,
                                    textAlign: 'center',
                                    whiteSpace: 'pre-line',
                                    mb: '32px'
                                },
                                children: errorMessage
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.DialogActions, {
                        sx: {
                            ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_22__/* .flexStyle */ .X)('center', 'center')
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Box, {
                            sx: {
                                ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_22__/* .flexStyle */ .X)('center', 'center'),
                                flexDirection: 'column',
                                rowGap: '24px',
                                width: '100%'
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Box, {
                                    sx: {
                                        width: '100%',
                                        ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_22__/* .flexStyle */ .X)('center', 'center'),
                                        columnGap: '16px'
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Button, {
                                            onClick: handleBuyPlaylist,
                                            sx: {
                                                ..._utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .TEXT_STYLE.title1 */ .gN.title1,
                                                color: _utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.white */ .DM.white,
                                                textTransform: 'none',
                                                borderRadius: '8px',
                                                width: isSm ? '168px' : '192px',
                                                height: '48px',
                                                bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.bg1 */ .DM.bg1,
                                                border: `1px solid ${_utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.blackStroker */ .DM.blackStroker}`,
                                                width: '50%'
                                            },
                                            autoFocus: true,
                                            children: "Mua lẻ s\xe1ch"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Button, {
                                            onClick: ()=>{
                                                router.push('/up-vip');
                                            },
                                            sx: {
                                                ..._utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .TEXT_STYLE.title1 */ .gN.title1,
                                                color: _utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.white */ .DM.white,
                                                textTransform: 'none',
                                                borderRadius: '8px',
                                                width: isSm ? '168px' : '192px',
                                                height: '48px',
                                                bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.main */ .DM.main,
                                                width: '50%'
                                            },
                                            autoFocus: true,
                                            children: "Đăng k\xfd g\xf3i"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Button, {
                                    onClick: ()=>{
                                        setOpenUpdateRequiredModal(false);
                                    },
                                    sx: {
                                        ..._utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .TEXT_STYLE.content1 */ .gN.content1,
                                        color: _utils_constants__WEBPACK_IMPORTED_MODULE_19__/* .COLORS.contentIcon */ .DM.contentIcon,
                                        textTransform: 'none'
                                    },
                                    children: "Bỏ qua"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8961:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PlayBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_playAudio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7348);
/* harmony import */ var _redux_payment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6204);
/* harmony import */ var _redux_audio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3307);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_icons_material_VolumeUp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8610);
/* harmony import */ var _mui_icons_material_VolumeUp__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_VolumeUp__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_icons_material_VolumeOff__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9726);
/* harmony import */ var _mui_icons_material_VolumeOff__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_VolumeOff__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7372);
/* harmony import */ var _mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_icons_material_FavoriteBorder__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6910);
/* harmony import */ var _mui_icons_material_FavoriteBorder__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_FavoriteBorder__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_icons_material_FilterList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3866);
/* harmony import */ var _mui_icons_material_FilterList__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_FilterList__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_icons_material_ExpandLess__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6174);
/* harmony import */ var _mui_icons_material_ExpandLess__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ExpandLess__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Control__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1048);
/* harmony import */ var _components_AudioPlay_AudioListModals__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(4239);
/* harmony import */ var _components_Shared_handleAddToCart__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2482);
/* harmony import */ var _utils_flexStyle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(8210);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(7426);
/* harmony import */ var _utils_useWindowSize__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(9061);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(2055);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Control__WEBPACK_IMPORTED_MODULE_14__]);
_Control__WEBPACK_IMPORTED_MODULE_14__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

// import react

// import redux

// import reducer, actions



// import next router

// import MUI components







// import others components



// import utils



// import services

function PlayBar() {
    var ref7, ref1, ref2, ref3, ref4, ref5, ref6;
    const api = new _services_api__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z();
    const windowSize = (0,_utils_useWindowSize__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)();
    const isSm = windowSize.width <= _utils_constants__WEBPACK_IMPORTED_MODULE_17__/* .SCREEN_BREAKPOINTS.sm */ .nN.sm ? true : false;
    const audio = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const openExpandMoreAudio = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_playAudio__WEBPACK_IMPORTED_MODULE_3__/* .selectOpenExpandMoreAudio */ .cf);
    const audioData = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_audio__WEBPACK_IMPORTED_MODULE_5__/* .selectAudioData */ .a$);
    const cart = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_payment__WEBPACK_IMPORTED_MODULE_4__/* .selectCart */ .KY);
    const { 0: volume , 1: setVolume  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(60);
    const { 0: anchorAudioList , 1: setAnchorAudioList  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: isLiked , 1: setIsLiked  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(audioData === null || audioData === void 0 ? void 0 : (ref7 = audioData.meta_data) === null || ref7 === void 0 ? void 0 : ref7.is_liked);
    const { 0: audiosList , 1: setAudiosList  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: openSnackbar , 1: setOpenSnackbar  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: nextAudioId , 1: setNextAudioId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
    const { 0: prevAudioId , 1: setPrevAudioId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
    const { 0: openUpdateRequiredModal , 1: setOpenUpdateRequiredModal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: openUnauthorizedModal , 1: setOpenUnauthorizedModal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: errorMessage , 1: setErrorMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        var ref8;
        function compare(a, b) {
            if (a.position < b.position) {
                return -1;
            }
            if (a.position > b.position) {
                return 1;
            }
            return 0;
        }
        async function fetchPlaylistAudios() {
            var ref;
            const res = await api.getPlaylistAudios(audioData === null || audioData === void 0 ? void 0 : (ref = audioData.playlist) === null || ref === void 0 ? void 0 : ref.id);
            const data = res.data.data;
            data.sort(compare);
            setAudiosList(data);
        }
        ;
        audio.current.volume = volume / 100;
        if (audioData === null || audioData === void 0 ? void 0 : (ref8 = audioData.playlist) === null || ref8 === void 0 ? void 0 : ref8.id) {
            fetchPlaylistAudios();
        }
    }, [
        audioData
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (audiosList.length > 0) {
            assignAudioId();
        }
    }, [
        router.asPath,
        audiosList
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        audio.current.volume = volume / 100;
    }, [
        volume
    ]);
    const assignAudioId = ()=>{
        if (audiosList.length === 1) {
            setNextAudioId(null);
            setPrevAudioId(null);
            return;
        }
        const audioIdx = audiosList.findIndex((i)=>i.id === Number(audioData.id)
        );
        const nextIdx = audioIdx + 1;
        const prevIdx = audioIdx - 1;
        const nextId = nextIdx < audiosList.length ? audiosList[nextIdx].id : null;
        const prevId = prevIdx >= 0 ? audiosList[prevIdx].id : null;
        setNextAudioId(nextId);
        setPrevAudioId(prevId);
    };
    const openAudioList = (event)=>{
        setAnchorAudioList(event.currentTarget);
    };
    const onCloseAudioList = ()=>{
        setAnchorAudioList(null);
    };
    const handleLikeAudio = ()=>{
        async function likeAudio() {
            try {
                const audioId = audioData.id;
                const res = await api.likeAudio(audioId);
                const data = await res.data;
                if (!data.error) {
                    setIsLiked(data.data['is_liked']);
                }
            } catch (err) {
                console.log(err);
                setOpenSnackbar(true);
            }
        }
        likeAudio();
    };
    const handleChangeVolumn = (value)=>{
        setVolume(value);
        audio.current.volume = value / 100;
    };
    const handleExpandAudioDetail = ()=>{
        dispatch((0,_redux_playAudio__WEBPACK_IMPORTED_MODULE_3__/* .setOpenAudioDetail */ .og)(true));
        dispatch((0,_redux_playAudio__WEBPACK_IMPORTED_MODULE_3__/* .setOpenExpandMoreAudio */ .Jt)(false));
    };
    const handleBuyPlaylist = ()=>{
        (0,_components_Shared_handleAddToCart__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)(dispatch, router, cart, audioData === null || audioData === void 0 ? void 0 : audioData.playlist, true, setErrorMessage, setOpenSnackbar);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
        id: "play-audio-bar",
        sx: {
            bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_17__/* .COLORS.bg1 */ .DM.bg1,
            ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_20__/* .flexStyle */ .X)('center', 'center'),
            columnGap: '3%',
            boxSizing: 'border-box',
            padding: isSm ? '24px 25px' : 0,
            width: '100%',
            zIndex: 1201,
            position: 'fixed',
            bottom: 0,
            borderTop: `1px solid ${_utils_constants__WEBPACK_IMPORTED_MODULE_17__/* .COLORS.blackStroker */ .DM.blackStroker}`,
            height: isSm ? 'auto' : '100px',
            ...isSm && {
                flexDirection: 'column-reverse',
                rowGap: '16px'
            }
        },
        children: [
            openExpandMoreAudio && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                onClick: handleExpandAudioDetail,
                sx: {
                    position: 'absolute',
                    width: '56px',
                    height: '28px',
                    right: isSm ? '24px' : '48px',
                    top: '-30px',
                    ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_20__/* .flexStyle */ .X)('center', 'center'),
                    p: 0,
                    borderTopLeftRadius: '29px',
                    borderTopRightRadius: '29px',
                    borderTop: `1px solid ${_utils_constants__WEBPACK_IMPORTED_MODULE_17__/* .COLORS.blackStroker */ .DM.blackStroker}`,
                    color: _utils_constants__WEBPACK_IMPORTED_MODULE_17__/* .COLORS.contentIcon */ .DM.contentIcon,
                    bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_17__/* .COLORS.bg1 */ .DM.bg1,
                    cursor: 'pointer'
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ExpandLess__WEBPACK_IMPORTED_MODULE_13___default()), {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("audio", {
                id: "audio",
                hidden: true,
                preload: "auto",
                ref: audio
            }),
            isSm && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Button, {
                sx: {
                    bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_17__/* .COLORS.bg2 */ .DM.bg2,
                    ..._utils_constants__WEBPACK_IMPORTED_MODULE_17__/* .TEXT_STYLE.content2 */ .gN.content2,
                    color: _utils_constants__WEBPACK_IMPORTED_MODULE_17__/* .COLORS.contentIcon */ .DM.contentIcon,
                    textTransform: 'none',
                    width: isSm ? '100%' : '157px',
                    ...!isSm && {
                        maxWidth: '50%'
                    },
                    height: '36px',
                    borderRadius: '4px'
                },
                startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_FilterList__WEBPACK_IMPORTED_MODULE_12___default()), {}),
                onClick: openAudioList,
                children: "Danh s\xe1ch audio"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                sx: {
                    width: isSm ? '100%' : '30%',
                    ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_20__/* .flexStyle */ .X)('flex-start', 'center'),
                    columnGap: '15px'
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Avatar, {
                        sx: {
                            width: isSm ? '65px' : '65px',
                            height: isSm ? '65px' : '65px'
                        },
                        alt: "audio avt",
                        src: (audioData === null || audioData === void 0 ? void 0 : (ref1 = audioData.avatar) === null || ref1 === void 0 ? void 0 : ref1.original_url) || (audioData === null || audioData === void 0 ? void 0 : (ref2 = audioData.playlist) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.avatar) === null || ref3 === void 0 ? void 0 : ref3.original_url)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                        sx: {
                            ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_20__/* .flexStyle */ .X)('center', 'flex-start'),
                            columnGap: '28px'
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                        sx: {
                                            ...isSm ? _utils_constants__WEBPACK_IMPORTED_MODULE_17__/* .TEXT_STYLE.title2 */ .gN.title2 : _utils_constants__WEBPACK_IMPORTED_MODULE_17__/* .TEXT_STYLE.title1 */ .gN.title1,
                                            color: _utils_constants__WEBPACK_IMPORTED_MODULE_17__/* .COLORS.white */ .DM.white,
                                            marginBottom: `${isSm ? 4 : 8}px`,
                                            display: '-webkit-box',
                                            textOverflow: 'ellipsis',
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden'
                                        },
                                        children: audioData === null || audioData === void 0 ? void 0 : audioData.name
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                        sx: {
                                            ..._utils_constants__WEBPACK_IMPORTED_MODULE_17__/* .TEXT_STYLE.content3 */ .gN.content3,
                                            color: _utils_constants__WEBPACK_IMPORTED_MODULE_17__/* .COLORS.contentIcon */ .DM.contentIcon
                                        },
                                        children: [
                                            "T\xe1c giả: ",
                                            audioData === null || audioData === void 0 ? void 0 : (ref4 = audioData.author) === null || ref4 === void 0 ? void 0 : ref4.name
                                        ]
                                    })
                                ]
                            }),
                            isLiked && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_10___default()), {
                                onClick: handleLikeAudio,
                                sx: {
                                    color: _utils_constants__WEBPACK_IMPORTED_MODULE_17__/* .COLORS.main */ .DM.main
                                }
                            }),
                            !isLiked && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_FavoriteBorder__WEBPACK_IMPORTED_MODULE_11___default()), {
                                sx: {
                                    color: _utils_constants__WEBPACK_IMPORTED_MODULE_17__/* .COLORS.contentIcon */ .DM.contentIcon
                                },
                                onClick: handleLikeAudio
                            })
                        ]
                    })
                ]
            }),
            isSm && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Divider, {
                sx: {
                    borderColor: _utils_constants__WEBPACK_IMPORTED_MODULE_17__/* .COLORS.blackStroker */ .DM.blackStroker,
                    margin: '5px 0',
                    width: '100%',
                    borderWidth: '1px'
                }
            }),
            Object.keys(audioData).length > 0 && nextAudioId !== undefined && prevAudioId !== undefined && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                sx: {
                    width: isSm ? '100%' : '40%'
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Control__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                    audioData: audioData,
                    audio: audio,
                    nextAudioId: nextAudioId,
                    prevAudioId: prevAudioId,
                    isSm: isSm
                })
            }),
            !isSm && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                sx: {
                    width: '30%',
                    ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_20__/* .flexStyle */ .X)('center', 'flex-end')
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Button, {
                        sx: {
                            bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_17__/* .COLORS.bg2 */ .DM.bg2,
                            ..._utils_constants__WEBPACK_IMPORTED_MODULE_17__/* .TEXT_STYLE.content2 */ .gN.content2,
                            color: _utils_constants__WEBPACK_IMPORTED_MODULE_17__/* .COLORS.contentIcon */ .DM.contentIcon,
                            textTransform: 'none',
                            width: '157px',
                            maxWidth: '50%',
                            height: '36px',
                            borderRadius: '4px'
                        },
                        startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_FilterList__WEBPACK_IMPORTED_MODULE_12___default()), {}),
                        onClick: openAudioList,
                        children: "Danh s\xe1ch audio"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Divider, {
                        sx: {
                            color: _utils_constants__WEBPACK_IMPORTED_MODULE_17__/* .COLORS.blackStroker */ .DM.blackStroker,
                            margin: '0 24px'
                        },
                        orientation: "vertical",
                        flexItem: true
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Stack, {
                        spacing: 2,
                        direction: "row",
                        sx: {
                            mb: 1,
                            width: '50%'
                        },
                        alignItems: "center",
                        justifyContent: "flex-start",
                        children: [
                            volume > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_VolumeUp__WEBPACK_IMPORTED_MODULE_8___default()), {
                                onClick: ()=>{
                                    setVolume(0);
                                },
                                sx: {
                                    color: _utils_constants__WEBPACK_IMPORTED_MODULE_17__/* .COLORS.contentIcon */ .DM.contentIcon
                                }
                            }),
                            volume === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_VolumeOff__WEBPACK_IMPORTED_MODULE_9___default()), {
                                onClick: ()=>{
                                    setVolume(60);
                                },
                                sx: {
                                    color: _utils_constants__WEBPACK_IMPORTED_MODULE_17__/* .COLORS.contentIcon */ .DM.contentIcon
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Slider, {
                                sx: {
                                    height: 2,
                                    width: '100px',
                                    maxWidth: '100%',
                                    color: _utils_constants__WEBPACK_IMPORTED_MODULE_17__/* .COLORS.blackStroker */ .DM.blackStroker,
                                    '& .MuiSlider-track': {
                                        color: _utils_constants__WEBPACK_IMPORTED_MODULE_17__/* .COLORS.white */ .DM.white
                                    },
                                    '& .MuiSlider-thumb': {
                                        width: 12,
                                        height: 12,
                                        color: _utils_constants__WEBPACK_IMPORTED_MODULE_17__/* .COLORS.white */ .DM.white,
                                        '&.Mui-active': {
                                            width: 15,
                                            height: 15
                                        }
                                    },
                                    '& .MuiSlider-rail': {
                                        opacity: 1
                                    }
                                },
                                "aria-label": "Volume",
                                value: volume,
                                onChange: (_, value)=>handleChangeVolumn(value)
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Snackbar, {
                open: openSnackbar,
                autoHideDuration: 6000,
                onClose: ()=>{
                    setOpenSnackbar(false);
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Alert, {
                    onClose: ()=>{
                        setOpenSnackbar(false);
                    },
                    severity: "error",
                    sx: {
                        width: '100%'
                    },
                    children: "Th\xedch audio kh\xf4ng th\xe0nh c\xf4ng, vui l\xf2ng thử lại sau!"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_AudioPlay_AudioListModals__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                anchorAudioList: anchorAudioList,
                dispatch: dispatch,
                onCloseAudioList: onCloseAudioList,
                playlistId: audioData === null || audioData === void 0 ? void 0 : (ref5 = audioData.playlist) === null || ref5 === void 0 ? void 0 : ref5.id,
                promotion: audioData === null || audioData === void 0 ? void 0 : (ref6 = audioData.playlist) === null || ref6 === void 0 ? void 0 : ref6.promotion,
                audioId: Number(audioData.id),
                audiosList: audiosList,
                setErrorMessage: setErrorMessage,
                setOpenUpdateRequiredModal: setOpenUpdateRequiredModal,
                setOpenUnauthorizedModal: setOpenUnauthorizedModal,
                setOpenSnackbar: setOpenSnackbar
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Dialog, {
                open: openUnauthorizedModal,
                onClose: ()=>{
                    setOpenUnauthorizedModal(false);
                },
                sx: {
                    '& .MuiPaper-root': {
                        width: isSm ? '95%' : '512px',
                        bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_17__/* .COLORS.bg1 */ .DM.bg1,
                        m: 0,
                        p: '40px 56px',
                        boxSizing: 'border-box',
                        borderRadius: isSm ? '10px' : '30px',
                        ...isSm && {
                            m: '0 16px'
                        }
                    }
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.DialogContent, {
                        sx: {
                            p: 0
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.DialogContentText, {
                                sx: {
                                    ...isSm ? _utils_constants__WEBPACK_IMPORTED_MODULE_17__/* .TEXT_STYLE.h3 */ .gN.h3 : _utils_constants__WEBPACK_IMPORTED_MODULE_17__/* .TEXT_STYLE.h1 */ .gN.h1,
                                    color: _utils_constants__WEBPACK_IMPORTED_MODULE_17__/* .COLORS.white */ .DM.white,
                                    textAlign: 'center',
                                    mb: isSm ? '24px' : '32px',
                                    p: 0
                                },
                                children: "Voiz FM"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.DialogContentText, {
                                sx: {
                                    ..._utils_constants__WEBPACK_IMPORTED_MODULE_17__/* .TEXT_STYLE.content1 */ .gN.content1,
                                    color: _utils_constants__WEBPACK_IMPORTED_MODULE_17__/* .COLORS.contentIcon */ .DM.contentIcon,
                                    textAlign: 'center',
                                    whiteSpace: 'pre-line',
                                    mb: '32px'
                                },
                                children: errorMessage
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.DialogActions, {
                        sx: {
                            ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_20__/* .flexStyle */ .X)('center', 'center')
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                            sx: {
                                ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_20__/* .flexStyle */ .X)('center', 'center'),
                                flexDirection: 'column',
                                rowGap: '24px'
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Button, {
                                    onClick: handleBuyPlaylist,
                                    sx: {
                                        ..._utils_constants__WEBPACK_IMPORTED_MODULE_17__/* .TEXT_STYLE.title1 */ .gN.title1,
                                        color: _utils_constants__WEBPACK_IMPORTED_MODULE_17__/* .COLORS.white */ .DM.white,
                                        textTransform: 'none',
                                        borderRadius: '8px',
                                        width: isSm ? '168px' : '192px',
                                        height: '48px',
                                        bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_17__/* .COLORS.main */ .DM.main
                                    },
                                    autoFocus: true,
                                    children: "Mua lẻ s\xe1ch"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Button, {
                                    onClick: ()=>{
                                        setOpenUnauthorizedModal(false);
                                    },
                                    sx: {
                                        ..._utils_constants__WEBPACK_IMPORTED_MODULE_17__/* .TEXT_STYLE.content1 */ .gN.content1,
                                        color: _utils_constants__WEBPACK_IMPORTED_MODULE_17__/* .COLORS.contentIcon */ .DM.contentIcon,
                                        textTransform: 'none'
                                    },
                                    children: "Bỏ qua"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Dialog, {
                open: openUpdateRequiredModal,
                onClose: ()=>{
                    setOpenUpdateRequiredModal(false);
                },
                sx: {
                    '& .MuiPaper-root': {
                        width: isSm ? '95%' : '512px',
                        bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_17__/* .COLORS.bg1 */ .DM.bg1,
                        m: 0,
                        p: '40px 56px',
                        boxSizing: 'border-box',
                        borderRadius: isSm ? '10px' : '30px',
                        ...isSm && {
                            m: '0 16px'
                        }
                    }
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                        sx: {
                            width: '100%',
                            ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_20__/* .flexStyle */ .X)('center', 'center'),
                            mb: isSm ? '24px' : '32px'
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            style: {
                                width: isSm ? '134px' : '108px',
                                height: isSm ? '134px' : '108px'
                            },
                            src: "/images/upgrade.png",
                            alt: "upgrade img"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.DialogContent, {
                        sx: {
                            p: 0
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.DialogContentText, {
                                sx: {
                                    ...isSm ? _utils_constants__WEBPACK_IMPORTED_MODULE_17__/* .TEXT_STYLE.h3 */ .gN.h3 : _utils_constants__WEBPACK_IMPORTED_MODULE_17__/* .TEXT_STYLE.h1 */ .gN.h1,
                                    color: _utils_constants__WEBPACK_IMPORTED_MODULE_17__/* .COLORS.white */ .DM.white,
                                    textAlign: 'center',
                                    mb: '24px',
                                    p: 0
                                },
                                children: "N\xe2ng cấp ngay"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.DialogContentText, {
                                sx: {
                                    ..._utils_constants__WEBPACK_IMPORTED_MODULE_17__/* .TEXT_STYLE.content1 */ .gN.content1,
                                    color: _utils_constants__WEBPACK_IMPORTED_MODULE_17__/* .COLORS.contentIcon */ .DM.contentIcon,
                                    textAlign: 'center',
                                    whiteSpace: 'pre-line',
                                    mb: '32px'
                                },
                                children: errorMessage
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.DialogActions, {
                        sx: {
                            ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_20__/* .flexStyle */ .X)('center', 'center')
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                            sx: {
                                ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_20__/* .flexStyle */ .X)('center', 'center'),
                                flexDirection: 'column',
                                rowGap: '24px',
                                width: '100%'
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                                    sx: {
                                        width: '100%',
                                        ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_20__/* .flexStyle */ .X)('center', 'center'),
                                        columnGap: '16px'
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Button, {
                                            onClick: handleBuyPlaylist,
                                            sx: {
                                                ..._utils_constants__WEBPACK_IMPORTED_MODULE_17__/* .TEXT_STYLE.title1 */ .gN.title1,
                                                color: _utils_constants__WEBPACK_IMPORTED_MODULE_17__/* .COLORS.white */ .DM.white,
                                                textTransform: 'none',
                                                borderRadius: '8px',
                                                width: isSm ? '168px' : '192px',
                                                height: '48px',
                                                bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_17__/* .COLORS.bg1 */ .DM.bg1,
                                                border: `1px solid ${_utils_constants__WEBPACK_IMPORTED_MODULE_17__/* .COLORS.blackStroker */ .DM.blackStroker}`,
                                                width: '50%'
                                            },
                                            autoFocus: true,
                                            children: "Mua lẻ s\xe1ch"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Button, {
                                            onClick: ()=>{
                                                router.push('/up-vip');
                                            },
                                            sx: {
                                                ..._utils_constants__WEBPACK_IMPORTED_MODULE_17__/* .TEXT_STYLE.title1 */ .gN.title1,
                                                color: _utils_constants__WEBPACK_IMPORTED_MODULE_17__/* .COLORS.white */ .DM.white,
                                                textTransform: 'none',
                                                borderRadius: '8px',
                                                width: isSm ? '168px' : '192px',
                                                height: '48px',
                                                bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_17__/* .COLORS.main */ .DM.main,
                                                width: '50%'
                                            },
                                            autoFocus: true,
                                            children: "Đăng k\xfd g\xf3i"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Button, {
                                    onClick: ()=>{
                                        setOpenUpdateRequiredModal(false);
                                    },
                                    sx: {
                                        ..._utils_constants__WEBPACK_IMPORTED_MODULE_17__/* .TEXT_STYLE.content1 */ .gN.content1,
                                        color: _utils_constants__WEBPACK_IMPORTED_MODULE_17__/* .COLORS.contentIcon */ .DM.contentIcon,
                                        textTransform: 'none'
                                    },
                                    children: "Bỏ qua"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9007:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Search)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_OpenSearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Thumbnail_Thumbnail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2579);
/* harmony import */ var _components_Icons_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5273);
/* harmony import */ var _utils_flexStyle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8210);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7426);
/* harmony import */ var _utils_useWindowSize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9061);
/* harmony import */ var _utils_getRecentlyKeywordsFromLocal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6507);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2055);

// import react

// import redux


// import next link

// import MUI components

// import others components


// import utils




// import service

function useOutsideAlerter(ref) {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target) && event.target.id !== 'input-search') {
                dispatch((0,_redux_OpenSearch__WEBPACK_IMPORTED_MODULE_3__/* .handleCloseSearch */ .wF)());
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [
        ref
    ]);
}
function Search() {
    const api = new _services_api__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z();
    const windowSize = (0,_utils_useWindowSize__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    const isSm = windowSize.width <= _utils_constants__WEBPACK_IMPORTED_MODULE_8__/* .SCREEN_BREAKPOINTS.sm */ .nN.sm ? true : false;
    const wrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    useOutsideAlerter(wrapperRef);
    const { 0: commonKeywords , 1: setCommonKeywords  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: recentlyKeywords , 1: setRecentlyKeywords  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: playlistRecommendation , 1: setPlaylistRecommendation  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const searchStatus = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_OpenSearch__WEBPACK_IMPORTED_MODULE_3__/* .selectSearchStatus */ .ui);
    const playlistResults = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_OpenSearch__WEBPACK_IMPORTED_MODULE_3__/* .selectPlaylistResults */ .rN);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        async function fetchCommonKeywords() {
            const res = await api.getCommonKeyword();
            const data = await res.data.data;
            setCommonKeywords(data);
        }
        async function fetchPlaylistRecommendation() {
            const res = await api.getPlaylistRecommendation();
            const data = await res.data.data;
            setPlaylistRecommendation(data);
        }
        function fetchRecentlyKeywork() {
            const keywords = (0,_utils_getRecentlyKeywordsFromLocal__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)();
            if (keywords) {
                setRecentlyKeywords(keywords);
            }
        }
        fetchRecentlyKeywork();
        fetchPlaylistRecommendation();
        fetchCommonKeywords();
    }, []);
    const getPlaylistImgWidth = (spaceBetween)=>{
        const numItemPerLine = isSm ? 3 : 5;
        const width = wrapperRef.current.clientWidth;
        let innerWidth = width - 48;
        const spaceToBeSubstrcted = (numItemPerLine - 1) * spaceBetween / numItemPerLine;
        return innerWidth / numItemPerLine - spaceToBeSubstrcted;
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
        ref: wrapperRef,
        sx: {
            bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.bg2 */ .DM.bg2,
            width: isSm ? '100%' : `calc((60 * (100% - ${_utils_constants__WEBPACK_IMPORTED_MODULE_8__/* .DRAWER_WIDTH */ .pG}px - 48px)) / 100)`,
            maxHeight: isSm ? `calc(100vh - ${_utils_constants__WEBPACK_IMPORTED_MODULE_8__/* .HEADER_HEIGHT_MB */ .hX})` : `calc(100vh - ${_utils_constants__WEBPACK_IMPORTED_MODULE_8__/* .HEADER_HEIGHT */ .Mz})`,
            borderRadius: '4px',
            position: 'fixed',
            top: '70px',
            p: isSm ? '32px 0' : '32px 0',
            left: isSm ? 0 : `${_utils_constants__WEBPACK_IMPORTED_MODULE_8__/* .DRAWER_WIDTH */ .pG + 24}px`,
            zIndex: '1300',
            overflow: isSm ? 'scroll' : 'auto',
            boxSizing: 'border-box',
            '::-webkit-scrollbar': {
                width: '6px'
            },
            '::-webkit-scrollbar-track': {
                borderRadius: '5px'
            },
            '::-webkit-scrollbar-thumb': {
                background: _utils_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.bg3 */ .DM.bg3,
                borderRadius: '5px'
            },
            ':hover': {
                overflowY: 'auto'
            }
        },
        children: [
            !searchStatus && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                sx: {
                    width: '100%'
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                        sx: {
                            ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_12__/* .flexStyle */ .X)('center', 'flex-start'),
                            flexDirection: 'column',
                            rowGap: '16px',
                            width: '100%'
                        },
                        children: recentlyKeywords.map((i, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                href: `/search?searchKey=${i}`,
                                style: {
                                    textDecoration: 'none'
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                                    sx: {
                                        ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_12__/* .flexStyle */ .X)('flex-start', 'center'),
                                        columnGap: '8px',
                                        width: '100%',
                                        p: isSm ? '0 23px' : '0 32px',
                                        boxSizing: 'border-box',
                                        cursor: 'pointer'
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icons_index__WEBPACK_IMPORTED_MODULE_7__/* .AccessTime */ .Z2, {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                            sx: {
                                                ..._utils_constants__WEBPACK_IMPORTED_MODULE_8__/* .TEXT_STYLE.content2 */ .gN.content2,
                                                color: _utils_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.white */ .DM.white,
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis'
                                            },
                                            children: i
                                        })
                                    ]
                                })
                            }, idx)
                        )
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Divider, {
                        sx: {
                            borderBottomColor: _utils_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.placeHolder */ .DM.placeHolder,
                            m: '32px 0 '
                        }
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                        sx: {
                            p: isSm ? '0 15px ' : '0 32px',
                            boxSizing: 'border-box'
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                sx: {
                                    ..._utils_constants__WEBPACK_IMPORTED_MODULE_8__/* .TEXT_STYLE.title1 */ .gN.title1,
                                    color: _utils_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.white */ .DM.white,
                                    mb: '16px'
                                },
                                children: "Từ kh\xf3a phổ biến"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                                sx: {
                                    ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_12__/* .flexStyle */ .X)('flex-start', 'center'),
                                    flexWrap: 'wrap',
                                    columnGap: '8px',
                                    rowGap: '8px'
                                },
                                children: commonKeywords.map((i, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                        href: `/search?searchKey=${i.name}`,
                                        style: {
                                            textDecoration: 'none'
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Chip, {
                                            label: i.name,
                                            sx: {
                                                bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.bg3 */ .DM.bg3,
                                                color: _utils_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.VZ_Text_content */ .DM.VZ_Text_content,
                                                ..._utils_constants__WEBPACK_IMPORTED_MODULE_8__/* .TEXT_STYLE.content2 */ .gN.content2
                                            }
                                        })
                                    }, idx)
                                )
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                        sx: {
                            width: '100%',
                            mt: '32px',
                            p: isSm ? '0 15px ' : '0 32px',
                            boxSizing: 'border-box'
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                sx: {
                                    ..._utils_constants__WEBPACK_IMPORTED_MODULE_8__/* .TEXT_STYLE.title1 */ .gN.title1,
                                    color: _utils_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.white */ .DM.white,
                                    mb: '16px'
                                },
                                children: "C\xf3 thể bạn muốn nghe"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                                sx: {
                                    ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_12__/* .flexStyle */ .X)('flex-start', 'center'),
                                    width: '100%',
                                    flexWrap: 'wrap',
                                    columnGap: '8px',
                                    rowGap: '8px'
                                },
                                children: playlistRecommendation.map((i)=>{
                                    var ref;
                                    /*#__PURE__*/ return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                        className: "playlist-recommendation-item",
                                        href: `/playlists/${i === null || i === void 0 ? void 0 : i.id}`,
                                        style: {
                                            textDecoration: 'none'
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                                            sx: {
                                                width: isSm ? 'calc(100% / 3 - 6.4px)' : 'calc(100% / 5 - 6.4px)'
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Thumbnail_Thumbnail__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                style: {
                                                    width: '100%',
                                                    height: `${getPlaylistImgWidth(8)}px`,
                                                    borderRadius: 3
                                                },
                                                promotion: (i === null || i === void 0 ? void 0 : i.promotion) || '',
                                                avtSrc: i === null || i === void 0 ? void 0 : (ref = i.avatar) === null || ref === void 0 ? void 0 : ref.thumb_url,
                                                alt: `images ${i === null || i === void 0 ? void 0 : i.id}`
                                            })
                                        })
                                    }, i.id);
                                })
                            })
                        ]
                    })
                ]
            }),
            searchStatus && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                sx: {
                    width: '100%',
                    ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_12__/* .flexStyle */ .X)('center', 'flex-start'),
                    flexDirection: 'column',
                    rowGap: '18px'
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {}),
                    playlistResults.map((i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__["default"], {
                            href: `/playlists/${i.id}`,
                            style: {
                                textDecoration: 'none'
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                                sx: {
                                    ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_12__/* .flexStyle */ .X)('flex-start', 'center'),
                                    columnGap: '15px',
                                    height: '40px'
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                                        sx: {
                                            width: '40px',
                                            height: '100%'
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: i.avatar.thumb_url,
                                            style: {
                                                width: '100%',
                                                height: '100%'
                                            }
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                                        sx: {
                                            ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_12__/* .flexStyle */ .X)('center', 'space-between'),
                                            flexDirection: 'column'
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                                sx: {
                                                    ..._utils_constants__WEBPACK_IMPORTED_MODULE_8__/* .TEXT_STYLE.content1 */ .gN.content1,
                                                    color: _utils_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.white */ .DM.white,
                                                    display: '-webkit-box',
                                                    textOverflow: 'ellipsis',
                                                    WebkitLineClamp: 1,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden'
                                                },
                                                children: i.name
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                                sx: {
                                                    ..._utils_constants__WEBPACK_IMPORTED_MODULE_8__/* .TEXT_STYLE.content2 */ .gN.content2,
                                                    color: '#9B9B9B',
                                                    display: '-webkit-box',
                                                    textOverflow: 'ellipsis',
                                                    WebkitLineClamp: 1,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden'
                                                },
                                                children: "T\xe1c giả"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, i.id)
                    )
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 1208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SidebarMenu)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/redux/openSidebar.js
var redux_openSidebar = __webpack_require__(7542);
// EXTERNAL MODULE: ./src/redux/token.js
var redux_token = __webpack_require__(7691);
// EXTERNAL MODULE: ./src/redux/openLogin.js
var openLogin = __webpack_require__(9006);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: external "@mui/icons-material/HeadphonesOutlined"
const HeadphonesOutlined_namespaceObject = require("@mui/icons-material/HeadphonesOutlined");
var HeadphonesOutlined_default = /*#__PURE__*/__webpack_require__.n(HeadphonesOutlined_namespaceObject);
// EXTERNAL MODULE: ./src/components/Icons/index.js + 62 modules
var Icons = __webpack_require__(5273);
// EXTERNAL MODULE: ./src/utils/constants.js
var constants = __webpack_require__(7426);
;// CONCATENATED MODULE: ./src/components/Logo/Logo.js


function Logo(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            height: constants/* HEADER_HEIGHT */.Mz,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            ...props.windowWidth <= constants/* SCREEN_BREAKPOINTS.sm */.nN.sm && {
                justifyContent: 'flex-start',
                marginLeft: '49px'
            }
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
            src: "/images/logosidebar.png",
            alt: "voizfm logo",
            loading: "lazy"
        })
    }));
};

// EXTERNAL MODULE: ./src/utils/useWindowSize.js
var useWindowSize = __webpack_require__(9061);
;// CONCATENATED MODULE: ./src/components/SidebarMenu/SidebarMenu.js

// import react 

// import redux




// import next router

// import next link

// import MUI components


// import icons

// import images

// import utils


const RequestsBook = ({ handleClickRequestBook  })=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
        onClick: handleClickRequestBook,
        sx: {
            backgroundColor: constants/* COLORS.main */.DM.main,
            borderRadius: '33px',
            margin: '13.5px 37px 31px 25px',
            height: '48px',
            width: '188px',
            textTransform: 'inherit',
            ...constants/* TEXT_STYLE.content1 */.gN.content1
        },
        variant: "contained",
        startIcon: (0,Icons/* Book */.fy)(),
        children: "Đề nghị s\xe1ch"
    })
;
function SidebarMenu() {
    const windowSize = (0,useWindowSize/* default */.Z)();
    const isSm = windowSize.width > constants/* SCREEN_BREAKPOINTS.sm */.nN.sm ? false : true;
    const navigate = (0,router_.useRouter)();
    const sidebar = (0,external_react_.useRef)(null);
    const { 0: current , 1: setCurrent  } = (0,external_react_.useState)(null);
    const { 0: navigatorLink1 , 1: setNavigatorLink  } = (0,external_react_.useState)([]);
    const { 0: categories1 , 1: setCategories  } = (0,external_react_.useState)([]);
    const openSidebar = (0,external_react_redux_.useSelector)(redux_openSidebar/* selectOpenSidebar */.yG);
    const token = (0,external_react_redux_.useSelector)(redux_token/* selectToken */.rK);
    const dispatch = (0,external_react_redux_.useDispatch)();
    let open = openSidebar;
    (0,external_react_.useEffect)(()=>{
        let navigatorLink = [];
        let categories = [];
        if (!!token) {
            navigatorLink = [
                {
                    id: 1,
                    icon: Icons/* Squircle */.A6,
                    text: 'Trang chủ',
                    url: ''
                },
                {
                    id: 2,
                    icon: Icons/* UpVip */.Ah,
                    text: 'Up VIP',
                    url: 'up-vip'
                },
                {
                    id: 3,
                    icon: Icons/* Discover */.Jq,
                    text: 'Cộng đồng',
                    url: 'discoveries'
                },
                {
                    id: 4,
                    icon: Icons/* Library */.Zu,
                    text: 'Thư viện',
                    url: 'library'
                },
                {
                    id: 5,
                    icon: Icons/* Adward */.g3,
                    text: 'Bảng xếp hạng',
                    url: 'playlists/rankings'
                },
                {
                    id: 6,
                    icon: ()=>/*#__PURE__*/ jsx_runtime_.jsx((HeadphonesOutlined_default()), {})
                    ,
                    text: 'Nội dung đang nghe',
                    url: 'listenings'
                }
            ];
        } else {
            navigatorLink = [
                {
                    id: 1,
                    icon: Icons/* Squircle */.A6,
                    text: 'Trang chủ',
                    url: ''
                },
                {
                    id: 2,
                    icon: Icons/* UpVip */.Ah,
                    text: 'Up VIP',
                    url: 'up-vip'
                },
                {
                    id: 3,
                    icon: Icons/* Discover */.Jq,
                    text: 'Cộng đồng',
                    url: 'discoveries'
                },
                {
                    id: 4,
                    icon: Icons/* Library */.Zu,
                    text: 'Thư viện',
                    url: 'library'
                },
                {
                    id: 5,
                    icon: Icons/* Adward */.g3,
                    text: 'Bảng xếp hạng',
                    url: 'playlists/rankings'
                }
            ];
        }
        categories = [
            {
                id: 7,
                icon: /*#__PURE__*/ jsx_runtime_.jsx(Icons/* AudioBook */.Cw, {}),
                text: 'S\xe1ch n\xf3i',
                url: 'audio-book'
            },
            {
                id: 8,
                icon: /*#__PURE__*/ jsx_runtime_.jsx(Icons/* AudioStory */.cb, {}),
                text: 'Truyện n\xf3i',
                url: 'story-book'
            },
            {
                id: 9,
                icon: /*#__PURE__*/ jsx_runtime_.jsx(Icons/* Podcast */.ec, {}),
                text: 'Podcast',
                url: 'podcast'
            },
            {
                id: 10,
                icon: /*#__PURE__*/ jsx_runtime_.jsx(Icons/* SummaryBook */.LZ, {}),
                text: 'S\xe1ch t\xf3m tắt',
                url: 'summary-book'
            },
            {
                id: 11,
                icon: /*#__PURE__*/ jsx_runtime_.jsx(Icons/* ChildrenBook */.GW, {}),
                text: 'Thiếu nhi',
                url: 'children-book'
            }
        ];
        setNavigatorLink(navigatorLink);
        setCategories(categories);
    }, []);
    const handleClickSidebar = (e)=>{
        const id = Number(e.currentTarget.id);
        const allItems = [
            ...navigatorLink1,
            ...categories1
        ];
        const item = allItems.filter((i)=>i.id === id
        );
        setCurrent(id);
        if (isSm) {
            dispatch((0,redux_openSidebar/* setOpen */.A_)(false));
        }
        navigate.push(`/${item[0].url}`);
        e.stopPropagation();
    };
    const handleClickRequestBook = ()=>{
        if (!token) {
            dispatch((0,openLogin/* setOpenLogin */.e8)(true));
            return;
        }
        navigate.push('/book-request');
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Drawer, {
        sx: {
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: 'inherit',
                backgroundColor: constants/* COLORS.bg1 */.DM.bg1,
                top: {
                    sm: 0,
                    xs: constants/* HEADER_HEIGHT_MB */.hX
                },
                paddingBottom: {
                    sm: 0,
                    xs: constants/* HEADER_HEIGHT */.Mz
                },
                boxSizing: 'border-box',
                borderRight: `1px solid ${constants/* COLORS.blackStroker */.DM.blackStroker}`,
                overflowX: 'hidden',
                scrollbarGutter: 'stable',
                ...!isSm && {
                    overflowY: 'hidden'
                },
                '::-webkit-scrollbar': {
                    width: '4px'
                },
                '::-webkit-scrollbar-track': {
                    borderRadius: '5px'
                },
                '::-webkit-scrollbar-thumb': {
                    background: constants/* COLORS.bg3 */.DM.bg3,
                    borderRadius: '5px'
                },
                ':hover': {
                    overflowY: 'auto'
                }
            },
            width: {
                sm: constants/* DRAWER_WIDTH */.pG,
                xs: '100vw'
            },
            ...!open && {
                display: 'none'
            }
        },
        variant: "persistent",
        anchor: "left",
        open: open,
        ref: sidebar,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Logo, {
                            windowWidth: windowSize.width
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.List, {
                children: navigatorLink1.map((icon)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        sx: {
                            m: '8px 0',
                            ...(icon.id === current || navigate.pathname === icon.url) && {
                                bgcolor: constants/* COLORS.bg2 */.DM.bg2
                            }
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.ListItem, {
                            button: true,
                            sx: {
                                height: '45px',
                                padding: '0 0 0 49px',
                                width: '100%'
                            },
                            id: icon.id,
                            onClick: handleClickSidebar,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItemIcon, {
                                    sx: {
                                        color: constants/* FONT_COLOR */.eS,
                                        ...constants/* TEXT_STYLE.content1 */.gN.content1
                                    },
                                    children: icon.icon({
                                        stroke: icon.id === current || navigate.pathname === icon.url ? '#FFFFFF' : '#ACACAC',
                                        fill: icon.id === current || navigate.pathname === icon.url ? '#FFFFFF' : '#ACACAC'
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItemText, {
                                    disableTypography: true,
                                    primary: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                        sx: {
                                            color: constants/* FONT_COLOR */.eS,
                                            ...constants/* TEXT_STYLE.content1 */.gN.content1,
                                            ...(icon.id === current || navigate.pathname === icon.url) && {
                                                color: constants/* COLORS.white */.DM.white
                                            }
                                        },
                                        children: icon.text
                                    })
                                })
                            ]
                        })
                    }, icon.id)
                )
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {
                style: {
                    borderColor: constants/* COLORS.blackStroker */.DM.blackStroker,
                    width: '80%',
                    alignSelf: 'center',
                    margin: '17px 0'
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.List, {
                children: categories1.map((icon)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        sx: {
                            m: '8px 0',
                            ...(icon.id === current || navigate.pathname === icon.url) && {
                                bgcolor: constants/* COLORS.bg2 */.DM.bg2
                            }
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.ListItem, {
                            button: true,
                            sx: {
                                height: '45px',
                                padding: '0 0 0 49px',
                                width: '100%'
                            },
                            onClick: handleClickSidebar,
                            id: icon.id,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItemIcon, {
                                    sx: {
                                        color: constants/* FONT_COLOR */.eS,
                                        ...constants/* TEXT_STYLE.content1 */.gN.content1
                                    },
                                    children: icon.icon
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItemText, {
                                    disableTypography: true,
                                    primary: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                        style: {
                                            color: constants/* FONT_COLOR */.eS,
                                            ...constants/* TEXT_STYLE.content1 */.gN.content1,
                                            ...(icon.id === current || navigate.pathname === icon.url) && {
                                                color: constants/* COLORS.white */.DM.white
                                            }
                                        },
                                        children: icon.text
                                    })
                                })
                            ]
                        })
                    }, icon.id)
                )
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(RequestsBook, {
                    handleClickRequestBook: handleClickRequestBook
                })
            })
        ]
    }));
};


/***/ }),

/***/ 6507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getRecentlyKeywork)
/* harmony export */ });
function getRecentlyKeywork() {
    const keyFromLocalStorage = localStorage.getItem('keywords');
    if (keyFromLocalStorage) {
        const parsedKeywords = JSON.parse(keyFromLocalStorage || '[]').reverse().slice(0, 3);
        return parsedKeywords;
    }
};


/***/ }),

/***/ 4050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ validatePhoneNumber),
/* harmony export */   "g": () => (/* binding */ validateOTP)
/* harmony export */ });
const validatePhoneNumber = (str)=>{
    const re = RegExp('[0-9]{4,49}\\b');
    return re.test(str);
};
const validateOTP = (str)=>{
    const re = RegExp('[0-9]{6}\\b');
    return re.test(str);
};


/***/ }),

/***/ 8308:
/***/ ((module) => {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ 4173:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Close");

/***/ }),

/***/ 6174:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ExpandLess");

/***/ }),

/***/ 8148:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ExpandMore");

/***/ }),

/***/ 7372:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Favorite");

/***/ }),

/***/ 6910:
/***/ ((module) => {

module.exports = require("@mui/icons-material/FavoriteBorder");

/***/ }),

/***/ 3866:
/***/ ((module) => {

module.exports = require("@mui/icons-material/FilterList");

/***/ }),

/***/ 3042:
/***/ ((module) => {

module.exports = require("@mui/icons-material/GraphicEq");

/***/ }),

/***/ 8996:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Pause");

/***/ }),

/***/ 9272:
/***/ ((module) => {

module.exports = require("@mui/icons-material/PlayArrow");

/***/ }),

/***/ 4613:
/***/ ((module) => {

module.exports = require("@mui/icons-material/SkipNext");

/***/ }),

/***/ 7089:
/***/ ((module) => {

module.exports = require("@mui/icons-material/SkipPrevious");

/***/ }),

/***/ 9726:
/***/ ((module) => {

module.exports = require("@mui/icons-material/VolumeOff");

/***/ }),

/***/ 8610:
/***/ ((module) => {

module.exports = require("@mui/icons-material/VolumeUp");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 8356:
/***/ ((module) => {

module.exports = require("@mui/material/SvgIcon");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 2621:
/***/ ((module) => {

module.exports = require("hls.js");

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

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

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

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3745:
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ 401:
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ }),

/***/ 4873:
/***/ ((module) => {

module.exports = import("firebase/database");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,973,61,273,579,699,836,917,586,245,146], () => (__webpack_exec__(8510)));
module.exports = __webpack_exports__;

})();