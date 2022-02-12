"use strict";
(() => {
var exports = {};
exports.id = 56;
exports.ids = [56];
exports.modules = {

/***/ 316:
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
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: external "@mui/icons-material/ShareOutlined"
const ShareOutlined_namespaceObject = require("@mui/icons-material/ShareOutlined");
var ShareOutlined_default = /*#__PURE__*/__webpack_require__.n(ShareOutlined_namespaceObject);
// EXTERNAL MODULE: external "@mui/icons-material/Add"
var Add_ = __webpack_require__(6146);
var Add_default = /*#__PURE__*/__webpack_require__.n(Add_);
// EXTERNAL MODULE: external "@mui/icons-material/Check"
var Check_ = __webpack_require__(6959);
var Check_default = /*#__PURE__*/__webpack_require__.n(Check_);
// EXTERNAL MODULE: external "@mui/icons-material/GraphicEqOutlined"
var GraphicEqOutlined_ = __webpack_require__(5374);
var GraphicEqOutlined_default = /*#__PURE__*/__webpack_require__.n(GraphicEqOutlined_);
// EXTERNAL MODULE: ./src/components/Shared/PlaylistThumbnail.js
var PlaylistThumbnail = __webpack_require__(2835);
// EXTERNAL MODULE: ./src/utils/constants.js
var constants = __webpack_require__(7426);
// EXTERNAL MODULE: ./src/utils/useWindowSize.js
var useWindowSize = __webpack_require__(9061);
// EXTERNAL MODULE: ./src/utils/flexStyle.js
var flexStyle = __webpack_require__(8210);
// EXTERNAL MODULE: ./src/utils/formatDuration.js
var formatDuration = __webpack_require__(994);
// EXTERNAL MODULE: ./src/components/Shared/ShareModal.js
var ShareModal = __webpack_require__(9586);
// EXTERNAL MODULE: ./src/services/api.js + 1 modules
var services_api = __webpack_require__(2055);
;// CONCATENATED MODULE: ./src/components/ChannelDetail/ChannelDetail.js

// import react

// import next router

// import MUI components





// import others components

// import utils





// import service

const PlaylistAudioCount = (props)=>{
    const { audioCount , isSm  } = props;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        sx: {
            ...(0,flexStyle/* flexStyle */.X)('flex-start', 'center'),
            columnGap: '6px'
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((GraphicEqOutlined_default()), {
                sx: {
                    color: constants/* COLORS.contentIcon */.DM.contentIcon,
                    width: isSm ? '12px' : '16px',
                    height: isSm ? '12px' : '16px'
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                sx: {
                    ...isSm ? constants/* TEXT_STYLE.content2 */.gN.content2 : constants/* TEXT_STYLE.content1 */.gN.content1,
                    color: constants/* COLORS.contentIcon */.DM.contentIcon
                },
                children: [
                    audioCount,
                    " audios"
                ]
            })
        ]
    }));
};
function ChannelDetail({ channelFromAPI  }) {
    var ref4, ref1, ref2;
    const api = new services_api/* default */.Z();
    const windowSize = (0,useWindowSize/* default */.Z)();
    const router = (0,router_.useRouter)();
    const isSm = windowSize.width <= constants/* SCREEN_BREAKPOINTS.sm */.nN.sm ? true : false;
    const { id  } = (0,router_.useRouter)().query;
    const { 0: channel , 1: setChannel  } = (0,external_react_.useState)(channelFromAPI);
    const { 0: url , 1: setUrl  } = (0,external_react_.useState)('');
    const { 0: playlists , 1: setPlaylists  } = (0,external_react_.useState)([]);
    const { 0: audios , 1: setAudios  } = (0,external_react_.useState)([]);
    const { 0: openSnackbar , 1: setOpenSnackbar  } = (0,external_react_.useState)(false);
    const { 0: errorMessage , 1: setErrorMessage  } = (0,external_react_.useState)('');
    const { 0: openShareModal , 1: setOpenShareModal  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        async function fetchPlaylists() {
            const res = await api.getChannelPlaylists(id);
            const data = await res.data.data;
            setPlaylists(data);
        }
        async function fetchAudios() {
            const res = await api.getChannelAudio(id);
            const data = await res.data.data;
            setAudios(data);
        }
        fetchPlaylists();
        fetchAudios();
    }, []);
    (0,external_react_.useEffect)(()=>{
        setUrl(window.location.href);
    }, [
        router.query
    ]);
    const handleBookmark = ()=>{
        async function bookmarkChannel(cb) {
            try {
                const res = await api.bookmarkChannel(id);
                const data = await res.data;
                if (data.error) {
                    setOpenSnackbar(true);
                    setErrorMessage('Đ\xe1nh dấu playlist kh\xf4ng th\xe0nh c\xf4ng!');
                    return;
                }
                cb(data.data);
            } catch (err) {
                setErrorMessage('Đ\xe1nh dấu k\xeanh kh\xf4ng th\xe0nh c\xf4ng!');
                setOpenSnackbar(true);
                console.log(err);
            }
        }
        bookmarkChannel(updatedBookmarkStatus);
    };
    const updatedBookmarkStatus = (data)=>{
        const updatedChannel = {
            ...channel
        };
        updatedChannel['is_bookmark'] = !updatedChannel['is_bookmark'];
        updatedChannel['channel_counter']['bookmarks_count'] = data['bookmarks_count'];
        setChannel({
            ...updatedChannel
        });
    };
    const handleOpenShareModal = ()=>{
        setOpenShareModal(true);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        sx: {
            width: '100%'
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: {
                    width: '100%',
                    minHeight: '40vh',
                    ...(0,flexStyle/* flexStyle */.X)('flex-end', 'center'),
                    background: '#222530',
                    p: isSm ? '25px 21px' : '50px 0',
                    boxSizing: 'border-box',
                    mb: isSm ? '16px' : '40px'
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                    sx: {
                        width: '95%',
                        ...(0,flexStyle/* flexStyle */.X)('flex-start', 'flex-start'),
                        columnGap: isSm ? '30px' : '48px',
                        height: '100%',
                        pr: isSm ? 0 : '50px',
                        boxSizing: 'border-box'
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            style: {
                                width: isSm ? '110px' : '210px',
                                height: isSm ? '110px' : '100%'
                            },
                            alt: `image ${channel === null || channel === void 0 ? void 0 : channel.name}`,
                            src: channel === null || channel === void 0 ? void 0 : (ref4 = channel.avatar) === null || ref4 === void 0 ? void 0 : ref4.thumb_url
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                            sx: {
                                height: '100%',
                                width: isSm ? 'calc(100% - 110px)' : 'calc(100% - 210px)',
                                ...(0,flexStyle/* flexStyle */.X)('flex-start', 'flex-start'),
                                ...isSm && {
                                    flexDirection: 'column',
                                    rowGap: '20px'
                                },
                                columnGap: '10%'
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                    sx: {
                                        ...(0,flexStyle/* flexStyle */.X)('space-between', 'center'),
                                        flexDirection: 'column',
                                        height: '100%',
                                        minHeight: '210px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                            sx: {
                                                width: '100%',
                                                mb: '10px'
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                    sx: {
                                                        width: '100%',
                                                        ...isSm ? constants/* TEXT_STYLE.h3 */.gN.h3 : constants/* TEXT_STYLE.h2 */.gN.h2,
                                                        color: constants/* COLORS.white */.DM.white
                                                    },
                                                    children: channel === null || channel === void 0 ? void 0 : channel.name
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                    sx: {
                                                        ...(0,flexStyle/* flexStyle */.X)('flex-start', 'center'),
                                                        borderLeft: `1px solid ${constants/* COLORS.white */.DM.white}`,
                                                        pl: '8px',
                                                        columnGap: '4px',
                                                        mt: '16px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                            sx: {
                                                                ...isSm ? constants/* TEXT_STYLE.title1 */.gN.title1 : constants/* TEXT_STYLE.h3 */.gN.h3,
                                                                color: constants/* COLORS.second */.DM.second
                                                            },
                                                            children: channel === null || channel === void 0 ? void 0 : (ref1 = channel.channel_counter) === null || ref1 === void 0 ? void 0 : ref1.bookmarks_count
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                            sx: {
                                                                ...isSm ? constants/* TEXT_STYLE.content2 */.gN.content2 : constants/* TEXT_STYLE.h3 */.gN.h3,
                                                                color: constants/* COLORS.contentIcon */.DM.contentIcon
                                                            },
                                                            children: "theo d\xf5i"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                            sx: {
                                                width: '100%'
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                sx: {
                                                    ...isSm ? constants/* TEXT_STYLE.content2 */.gN.content2 : constants/* TEXT_STYLE.content1 */.gN.content1,
                                                    color: constants/* COLORS.VZ_Text_content */.DM.VZ_Text_content
                                                },
                                                children: channel === null || channel === void 0 ? void 0 : channel.description
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                    sx: {
                                        ...(0,flexStyle/* flexStyle */.X)('center', 'center'),
                                        columnGap: '10%'
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                                            onClick: handleOpenShareModal,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((ShareOutlined_default()), {
                                                sx: {
                                                    color: constants/* COLORS.contentIcon */.DM.contentIcon
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(ShareModal/* default */.Z, {
                                            url: url,
                                            isSm: isSm,
                                            open: openShareModal,
                                            setOpen: setOpenShareModal
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                            onClick: handleBookmark,
                                            sx: {
                                                ...isSm ? constants/* TEXT_STYLE.title2 */.gN.title2 : constants/* TEXT_STYLE.title1 */.gN.title1,
                                                color: constants/* COLORS.white */.DM.white,
                                                borderRadius: '22px',
                                                height: isSm ? '28px' : '48px',
                                                textTransform: 'none',
                                                bgcolor: (channel === null || channel === void 0 ? void 0 : channel.is_bookmark) ? constants/* COLORS.bg3 */.DM.bg3 : constants/* COLORS.main */.DM.main,
                                                whiteSpace: 'nowrap',
                                                pl: '24px',
                                                pr: '24px',
                                                ':hover': {
                                                    bgcolor: (channel === null || channel === void 0 ? void 0 : channel.is_bookmark) ? constants/* COLORS.bg3 */.DM.bg3 : constants/* COLORS.main */.DM.main
                                                }
                                            },
                                            startIcon: (channel === null || channel === void 0 ? void 0 : channel.is_bookmark) ? /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((Add_default()), {}),
                                            children: (channel === null || channel === void 0 ? void 0 : channel.is_bookmark) ? 'Hủy theo d\xf5i' : 'Theo d\xf5i'
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                sx: {
                    width: '100%',
                    p: isSm ? 0 : '0 48px',
                    boxSizing: 'border-box',
                    ...(0,flexStyle/* flexStyle */.X)('center', 'stretch'),
                    ...isSm && {
                        flexDirection: 'column',
                        rowGap: '16px'
                    },
                    columnGap: '32px'
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        sx: {
                            width: isSm ? '100%' : 'calc(40% - 16px)',
                            bgcolor: constants/* COLORS.bg2 */.DM.bg2
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                            sx: {
                                p: isSm ? '26px 16px' : '26px 32px',
                                boxSizing: 'border-box'
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                    sx: {
                                        ...isSm ? constants/* TEXT_STYLE.h3 */.gN.h3 : constants/* TEXT_STYLE.h2 */.gN.h2,
                                        color: constants/* COLORS.white */.DM.white,
                                        marginBottom: '32px'
                                    },
                                    children: [
                                        "Danh s\xe1ch album (",
                                        channel === null || channel === void 0 ? void 0 : (ref2 = channel.channel_counter) === null || ref2 === void 0 ? void 0 : ref2.playlists_count,
                                        " albums)"
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                    sx: {
                                        ...(0,flexStyle/* flexStyle */.X)('center', 'flex-start'),
                                        flexDirection: 'column',
                                        rowGap: '32px'
                                    },
                                    children: playlists.map((i)=>{
                                        var ref, ref3;
                                        return(/*#__PURE__*/ jsx_runtime_.jsx(PlaylistThumbnail/* default */.Z, {
                                            width: "100%",
                                            id: i === null || i === void 0 ? void 0 : i.id,
                                            name: i.name,
                                            src: i === null || i === void 0 ? void 0 : (ref = i.avatar) === null || ref === void 0 ? void 0 : ref.thumb_url,
                                            authors: i === null || i === void 0 ? void 0 : i.authors,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(PlaylistAudioCount, {
                                                isSm: isSm,
                                                audioCount: i === null || i === void 0 ? void 0 : (ref3 = i.playlist_counter) === null || ref3 === void 0 ? void 0 : ref3.audios_count
                                            })
                                        }, i === null || i === void 0 ? void 0 : i.id));
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        sx: {
                            width: isSm ? '100%' : 'calc(60% - 16px)',
                            bgcolor: constants/* COLORS.bg2 */.DM.bg2
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                            sx: {
                                p: isSm ? '26px 16px' : '26px 32px',
                                boxSizing: 'border-box'
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                    sx: {
                                        ...isSm ? constants/* TEXT_STYLE.h3 */.gN.h3 : constants/* TEXT_STYLE.h2 */.gN.h2,
                                        color: constants/* COLORS.white */.DM.white,
                                        marginBottom: isSm ? '26px' : '32px'
                                    },
                                    children: "Danh s\xe1ch audios"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.List, {
                                        sx: {
                                            width: '100%'
                                        },
                                        children: audios.map((i)=>{
                                            return(/*#__PURE__*/ jsx_runtime_.jsx(material_.ListItem, {
                                                sx: {
                                                    paddingLeft: 0,
                                                    paddingRight: '20px',
                                                    borderTop: `.5px solid ${constants/* COLORS.placeHolder */.DM.placeHolder}`,
                                                    height: '72px'
                                                },
                                                secondaryAction: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                    sx: {
                                                        ...constants/* TEXT_STYLE.content2 */.gN.content2,
                                                        color: constants/* COLORS.bg4 */.DM.bg4
                                                    },
                                                    children: (0,formatDuration/* default */.Z)(i === null || i === void 0 ? void 0 : i.duration)
                                                }),
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItemButton, {
                                                    role: undefined,
                                                    onClick: ()=>1
                                                    ,
                                                    dense: true,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItemText, {
                                                        sx: {
                                                            'span': {
                                                                ...isSm ? constants/* TEXT_STYLE.title2 */.gN.title2 : constants/* TEXT_STYLE.title1 */.gN.title1,
                                                                color: constants/* COLORS.white */.DM.white,
                                                                display: '-webkit-box',
                                                                textOverflow: 'ellipsis',
                                                                WebkitLineClamp: 2,
                                                                WebkitBoxOrient: 'vertical',
                                                                overflow: 'hidden'
                                                            }
                                                        },
                                                        id: `label-${i === null || i === void 0 ? void 0 : i.id}`,
                                                        primary: i === null || i === void 0 ? void 0 : i.name
                                                    })
                                                })
                                            }, i === null || i === void 0 ? void 0 : i.id));
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Snackbar, {
                open: openSnackbar,
                autoHideDuration: 6000,
                onClose: ()=>{
                    setOpenSnackbar(false);
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Alert, {
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
    }));
};

;// CONCATENATED MODULE: ./pages/channels/[id].js

// import next

// import components

// import service

const ChannelDetailPage = ({ channel  })=>{
    var ref;
    const url =  false ? 0 : '';
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: channel === null || channel === void 0 ? void 0 : channel.name
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
                        content: channel === null || channel === void 0 ? void 0 : channel.name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:description",
                        content: channel === null || channel === void 0 ? void 0 : channel.description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: channel === null || channel === void 0 ? void 0 : (ref = channel.avatar) === null || ref === void 0 ? void 0 : ref.original_url
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
            /*#__PURE__*/ jsx_runtime_.jsx(ChannelDetail, {
                channelFromAPI: channel
            })
        ]
    }));
};
async function getServerSideProps(context) {
    const api = new services_api/* default */.Z();
    const { params  } = context;
    const res = await api.getChannel(params.id);
    const channel = res.data.data;
    return {
        props: {
            channel
        }
    };
}
/* harmony default export */ const _id_ = (ChannelDetailPage);


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

/***/ 6146:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Add");

/***/ }),

/***/ 6959:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Check");

/***/ }),

/***/ 3188:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Delete");

/***/ }),

/***/ 5374:
/***/ ((module) => {

module.exports = require("@mui/icons-material/GraphicEqOutlined");

/***/ }),

/***/ 9667:
/***/ ((module) => {

module.exports = require("@mui/icons-material/PersonOutlineOutlined");

/***/ }),

/***/ 9272:
/***/ ((module) => {

module.exports = require("@mui/icons-material/PlayArrow");

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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,691,609,587,835,586], () => (__webpack_exec__(316)));
module.exports = __webpack_exports__;

})();