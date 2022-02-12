"use strict";
(() => {
var exports = {};
exports.id = 392;
exports.ids = [392];
exports.modules = {

/***/ 700:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/redux/playAudio.js
var playAudio = __webpack_require__(7348);
// EXTERNAL MODULE: ./src/redux/audio.js
var redux_audio = __webpack_require__(3307);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/icons-material/ExpandMore"
var ExpandMore_ = __webpack_require__(8148);
var ExpandMore_default = /*#__PURE__*/__webpack_require__.n(ExpandMore_);
// EXTERNAL MODULE: external "@mui/icons-material/GraphicEq"
var GraphicEq_ = __webpack_require__(3042);
var GraphicEq_default = /*#__PURE__*/__webpack_require__.n(GraphicEq_);
// EXTERNAL MODULE: ./src/components/Shared/InfoLabel.js
var InfoLabel = __webpack_require__(9654);
// EXTERNAL MODULE: ./src/components/Shared/InfoValue.js
var InfoValue = __webpack_require__(7238);
// EXTERNAL MODULE: ./src/components/Shared/ShareModal.js
var ShareModal = __webpack_require__(9586);
// EXTERNAL MODULE: ./src/components/Icons/index.js + 54 modules
var Icons = __webpack_require__(9587);
// EXTERNAL MODULE: ./src/utils/flexStyle.js
var flexStyle = __webpack_require__(8210);
// EXTERNAL MODULE: ./src/utils/constants.js
var constants = __webpack_require__(7426);
// EXTERNAL MODULE: ./src/utils/useWindowSize.js
var useWindowSize = __webpack_require__(9061);
// EXTERNAL MODULE: ./src/utils/convertSecondsToReadableString.js
var convertSecondsToReadableString = __webpack_require__(2083);
;// CONCATENATED MODULE: ./src/components/AudioPlay/AudioPlay.js

// import react

// import next router

// import redux



// import MUI components



// import others components



// import icons

// import utils




function AudioPlay({ audio  }) {
    var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8;
    const playing = (0,external_react_redux_.useSelector)(playAudio/* selectPlayAudio */.jc);
    const router = (0,router_.useRouter)();
    const { 0: url , 1: setUrl  } = (0,external_react_.useState)('');
    const { 0: id1 , 1: setId  } = (0,external_react_.useState)(null);
    const { 0: openShareModal , 1: setOpenShareModal  } = (0,external_react_.useState)(false);
    const windowSize = (0,useWindowSize/* default */.Z)();
    const isSm = windowSize.width <= constants/* SCREEN_BREAKPOINTS.sm */.nN.sm ? true : false;
    const dispatch = (0,external_react_redux_.useDispatch)();
    (0,external_react_.useEffect)(()=>{
        dispatch((0,redux_audio/* setAudioData */.Bt)(audio));
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (id1) {
            setUrl(window.location.href);
        }
    }, [
        id1
    ]);
    (0,external_react_.useEffect)(()=>{
        const { id  } = router.query;
        setId(id);
    }, [
        router.query
    ]);
    const handleOpenShareModal = ()=>{
        setOpenShareModal(true);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        sx: {
            ...isSm ? (0,flexStyle/* flexStyle */.X)('center', 'center') : (0,flexStyle/* flexStyle */.X)('flex-start', 'center'),
            flexDirection: 'column',
            width: '95%',
            margin: isSm ? `0px auto 302px auto` : 'auto'
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                sx: {
                    ...(0,flexStyle/* flexStyle */.X)('flex-end', 'center'),
                    columnGap: '36px',
                    width: '100%',
                    boxSizing: 'border-box',
                    padding: isSm ? '20px 0 32px 0' : '35px 0'
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        onClick: handleOpenShareModal,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Icons/* Share */.mB, {
                            bgfill: "none",
                            fill: "none",
                            stroke: constants/* COLORS.contentIcon */.DM.contentIcon
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ShareModal/* default */.Z, {
                        url: url,
                        isSm: isSm,
                        open: openShareModal,
                        setOpen: setOpenShareModal
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((ExpandMore_default()), {
                        sx: {
                            color: constants/* COLORS.contentIcon */.DM.contentIcon
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                sx: {
                    ...isSm ? (0,flexStyle/* flexStyle */.X)('center', 'center') : (0,flexStyle/* flexStyle */.X)('center', 'flex-start'),
                    ...isSm && {
                        flexDirection: 'column',
                        rowGap: '32px'
                    },
                    columnGap: '75px',
                    width: '100%'
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                            sx: {
                                width: isSm ? '235px' : '335px',
                                height: isSm ? '235px' : '335px',
                                borderRadius: '15px'
                            },
                            variant: "rounded",
                            alt: "playlist avt",
                            src: audio === null || audio === void 0 ? void 0 : (ref = audio.playlist) === null || ref === void 0 ? void 0 : (ref1 = ref.avatar) === null || ref1 === void 0 ? void 0 : ref1.original_url
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                        sx: {
                            width: '90%'
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                sx: {
                                    ...isSm ? constants/* TEXT_STYLE.h3 */.gN.h3 : constants/* TEXT_STYLE.h1 */.gN.h1,
                                    color: constants/* COLORS.white */.DM.white,
                                    marginBottom: '25px',
                                    ...isSm && {
                                        textAlign: 'center'
                                    }
                                },
                                children: audio === null || audio === void 0 ? void 0 : (ref2 = audio.playlist) === null || ref2 === void 0 ? void 0 : ref2.name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.TableContainer, {
                                sx: {
                                    width: '100%',
                                    bgcolor: 'transparent',
                                    boxShadow: 'none'
                                },
                                component: material_.Paper,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Table, {
                                    "aria-label": "playlist info tbl",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.TableBody, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.TableRow, {
                                                sx: {
                                                    '&:last-child td, &:last-child th': {
                                                        border: 0
                                                    }
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                        sx: {
                                                            borderBottom: 'none',
                                                            padding: '0 0 21px 0'
                                                        },
                                                        component: "th",
                                                        scope: "row",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(InfoLabel/* default */.Z, {
                                                            title: "T\xe1c giả"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                        sx: {
                                                            borderBottom: 'none',
                                                            padding: '0 0 21px 0',
                                                            textAlign: 'left'
                                                        },
                                                        align: "right",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(InfoValue/* default */.Z, {
                                                            value: audio === null || audio === void 0 ? void 0 : (ref3 = audio.playlist) === null || ref3 === void 0 ? void 0 : ref3.author_string
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.TableRow, {
                                                sx: {
                                                    '&:last-child td, &:last-child th': {
                                                        border: 0
                                                    }
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                        sx: {
                                                            borderBottom: 'none',
                                                            padding: '0 0 21px 0'
                                                        },
                                                        component: "th",
                                                        scope: "row",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(InfoLabel/* default */.Z, {
                                                            title: "Thời lượng"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                        sx: {
                                                            borderBottom: 'none',
                                                            padding: '0 0 21px 0',
                                                            textAlign: 'left'
                                                        },
                                                        align: "right",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                            sx: {
                                                                ...constants/* TEXT_STYLE.content2 */.gN.content2,
                                                                color: constants/* COLORS.VZ_Text_content */.DM.VZ_Text_content
                                                            },
                                                            children: (0,convertSecondsToReadableString/* default */.Z)(audio === null || audio === void 0 ? void 0 : (ref4 = audio.playlist) === null || ref4 === void 0 ? void 0 : ref4.total_duration)
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.TableRow, {
                                                sx: {
                                                    '&:last-child td, &:last-child th': {
                                                        border: 0
                                                    }
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                        sx: {
                                                            borderBottom: 'none',
                                                            padding: '0 0 21px 0'
                                                        },
                                                        component: "th",
                                                        scope: "row",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(InfoLabel/* default */.Z, {
                                                            title: "K\xeanh"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                        sx: {
                                                            borderBottom: 'none',
                                                            padding: '0 0 21px 0',
                                                            textAlign: 'left'
                                                        },
                                                        align: "right",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(InfoValue/* default */.Z, {
                                                            value: audio === null || audio === void 0 ? void 0 : (ref5 = audio.playlist) === null || ref5 === void 0 ? void 0 : (ref6 = ref5.channel) === null || ref6 === void 0 ? void 0 : ref6.name
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.TableRow, {
                                                sx: {
                                                    '&:last-child td, &:last-child th': {
                                                        border: 0
                                                    }
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                        sx: {
                                                            borderBottom: 'none',
                                                            padding: '0 0 21px 0'
                                                        },
                                                        component: "th",
                                                        scope: "row",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(InfoLabel/* default */.Z, {
                                                            title: "Người đọc"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                        sx: {
                                                            borderBottom: 'none',
                                                            padding: '0 0 21px 0',
                                                            textAlign: 'left'
                                                        },
                                                        align: "right",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(InfoValue/* default */.Z, {
                                                            value: audio && ((ref8 = audio === null || audio === void 0 ? void 0 : (ref7 = audio.playlist) === null || ref7 === void 0 ? void 0 : ref7.voicers[0]) === null || ref8 === void 0 ? void 0 : ref8.name)
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            }),
                            playing && !isSm && /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                sx: {
                                    ...constants/* TEXT_STYLE.title1 */.gN.title1,
                                    color: constants/* COLORS.white */.DM.white,
                                    textTransform: 'none',
                                    width: '280px',
                                    height: '48px',
                                    border: `1px solid ${constants/* COLORS.blackStroker */.DM.blackStroker}`,
                                    borderRadius: '6px',
                                    marginTop: '40px'
                                },
                                variant: "outlined",
                                endIcon: /*#__PURE__*/ jsx_runtime_.jsx((GraphicEq_default()), {}),
                                children: "Đang ph\xe1t"
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};

// EXTERNAL MODULE: ./src/services/api.js + 1 modules
var services_api = __webpack_require__(2055);
;// CONCATENATED MODULE: ./pages/audio-play/[id].js

// import next

// import components

// import service

const AudioPlayPage = ({ audio  })=>{
    var ref;
    const url =  false ? 0 : '';
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: audio === null || audio === void 0 ? void 0 : audio.name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:url",
                        content: url
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:type",
                        content: "website"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title",
                        content: audio === null || audio === void 0 ? void 0 : audio.name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:description",
                        content: audio === null || audio === void 0 ? void 0 : audio.description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: audio === null || audio === void 0 ? void 0 : (ref = audio.avatar) === null || ref === void 0 ? void 0 : ref.original_url
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image:width",
                        content: "1200"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image:height",
                        content: "630"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(AudioPlay, {
                audio: audio
            })
        ]
    }));
};
async function getServerSideProps(context) {
    const api = new services_api/* default */.Z();
    const { params  } = context;
    const res = await api.getAudio(params.id);
    const audio = await res.data.data;
    return {
        props: {
            audio
        }
    };
}
/* harmony default export */ const _id_ = (AudioPlayPage);


/***/ }),

/***/ 3307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bt": () => (/* binding */ setAudioData),
/* harmony export */   "a$": () => (/* binding */ selectAudioData),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const audioSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: 'audio',
    initialState: {
        data: {}
    },
    reducers: {
        setAudioData: (state, action)=>{
            state.data = action.payload;
        }
    }
});
const { setAudioData  } = audioSlice.actions;
const selectAudioData = (state)=>state.audio.data
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (audioSlice.reducer);


/***/ }),

/***/ 7348:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ez": () => (/* binding */ togglePlayAudio),
/* harmony export */   "jc": () => (/* binding */ selectPlayAudio),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const playAudioSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: 'playAudio',
    initialState: {
        playing: false
    },
    reducers: {
        togglePlayAudio: (state)=>{
            state.playing = !state.playing;
        }
    }
});
const { togglePlayAudio  } = playAudioSlice.actions;
const selectPlayAudio = (state)=>state.playAudio.playing
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (playAudioSlice.reducer);


/***/ }),

/***/ 8148:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ExpandMore");

/***/ }),

/***/ 3042:
/***/ ((module) => {

module.exports = require("@mui/icons-material/GraphicEq");

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

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [691,609,587,586,580], () => (__webpack_exec__(700)));
module.exports = __webpack_exports__;

})();