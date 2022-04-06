"use strict";
(() => {
var exports = {};
exports.id = 56;
exports.ids = [56];
exports.modules = {

/***/ 9627:
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
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/redux/user.js
var redux_user = __webpack_require__(7010);
// EXTERNAL MODULE: ./src/redux/openLogin.js
var openLogin = __webpack_require__(9006);
// EXTERNAL MODULE: ./src/redux/playAudio.js
var playAudio = __webpack_require__(7348);
// EXTERNAL MODULE: ./src/redux/payment.js
var payment = __webpack_require__(6204);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
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
// EXTERNAL MODULE: ./src/utils/flexStyle.js
var flexStyle = __webpack_require__(8210);
// EXTERNAL MODULE: ./src/utils/constants.js
var constants = __webpack_require__(7426);
;// CONCATENATED MODULE: ./src/components/Shared/PlayAudioDialog.js

// import next router

// import MUI package

// import utils


function PlayAudioDialog(props) {
    const router = (0,router_.useRouter)();
    const { isSm , openUnauthorizedModal , openUpdateRequiredModal , errorMessage , setOpenUnauthorizedModal , setOpenUpdateRequiredModal , handleBuyPlaylist  } = props;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Dialog, {
                open: openUnauthorizedModal,
                onClose: ()=>{
                    setOpenUnauthorizedModal(false);
                },
                sx: {
                    '& .MuiPaper-root': {
                        width: isSm ? '95%' : '512px',
                        bgcolor: constants/* COLORS.bg1 */.DM.bg1,
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
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.DialogContent, {
                        sx: {
                            p: 0
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.DialogContentText, {
                                sx: {
                                    ...isSm ? constants/* TEXT_STYLE.h3 */.gN.h3 : constants/* TEXT_STYLE.h1 */.gN.h1,
                                    color: constants/* COLORS.white */.DM.white,
                                    textAlign: 'center',
                                    mb: isSm ? '24px' : '32px',
                                    p: 0
                                },
                                children: "Voiz FM"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.DialogContentText, {
                                sx: {
                                    ...constants/* TEXT_STYLE.content1 */.gN.content1,
                                    color: constants/* COLORS.contentIcon */.DM.contentIcon,
                                    textAlign: 'center',
                                    whiteSpace: 'pre-line',
                                    mb: '32px'
                                },
                                children: errorMessage
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.DialogActions, {
                        sx: {
                            ...(0,flexStyle/* flexStyle */.X)('center', 'center')
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                            sx: {
                                ...(0,flexStyle/* flexStyle */.X)('center', 'center'),
                                flexDirection: 'column',
                                rowGap: '24px'
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                    onClick: handleBuyPlaylist,
                                    sx: {
                                        ...constants/* TEXT_STYLE.title1 */.gN.title1,
                                        color: constants/* COLORS.white */.DM.white,
                                        textTransform: 'none',
                                        borderRadius: '8px',
                                        width: isSm ? '168px' : '192px',
                                        height: '48px',
                                        bgcolor: constants/* COLORS.main */.DM.main
                                    },
                                    autoFocus: true,
                                    children: "Mua lẻ s\xe1ch"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                    onClick: ()=>{
                                        setOpenUnauthorizedModal(false);
                                    },
                                    sx: {
                                        ...constants/* TEXT_STYLE.content1 */.gN.content1,
                                        color: constants/* COLORS.contentIcon */.DM.contentIcon,
                                        textTransform: 'none'
                                    },
                                    children: "Bỏ qua"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Dialog, {
                open: openUpdateRequiredModal,
                onClose: ()=>{
                    setOpenUpdateRequiredModal(false);
                },
                sx: {
                    '& .MuiPaper-root': {
                        width: isSm ? '95%' : '512px',
                        bgcolor: constants/* COLORS.bg1 */.DM.bg1,
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
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        sx: {
                            width: '100%',
                            ...(0,flexStyle/* flexStyle */.X)('center', 'center'),
                            mb: isSm ? '24px' : '32px'
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            style: {
                                width: isSm ? '134px' : '108px',
                                height: isSm ? '134px' : '108px'
                            },
                            src: "/images/upgrade.png",
                            alt: "upgrade img"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.DialogContent, {
                        sx: {
                            p: 0
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.DialogContentText, {
                                sx: {
                                    ...isSm ? constants/* TEXT_STYLE.h3 */.gN.h3 : constants/* TEXT_STYLE.h1 */.gN.h1,
                                    color: constants/* COLORS.white */.DM.white,
                                    textAlign: 'center',
                                    mb: '24px',
                                    p: 0
                                },
                                children: "N\xe2ng cấp ngay"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.DialogContentText, {
                                sx: {
                                    ...constants/* TEXT_STYLE.content1 */.gN.content1,
                                    color: constants/* COLORS.contentIcon */.DM.contentIcon,
                                    textAlign: 'center',
                                    whiteSpace: 'pre-line',
                                    mb: '32px'
                                },
                                children: errorMessage
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.DialogActions, {
                        sx: {
                            ...(0,flexStyle/* flexStyle */.X)('center', 'center')
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                            sx: {
                                ...(0,flexStyle/* flexStyle */.X)('center', 'center'),
                                flexDirection: 'column',
                                rowGap: '24px',
                                width: '100%'
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                    sx: {
                                        width: '100%',
                                        ...(0,flexStyle/* flexStyle */.X)('center', 'center'),
                                        columnGap: '16px'
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                            onClick: handleBuyPlaylist,
                                            sx: {
                                                ...constants/* TEXT_STYLE.title1 */.gN.title1,
                                                color: constants/* COLORS.white */.DM.white,
                                                textTransform: 'none',
                                                borderRadius: '8px',
                                                width: isSm ? '168px' : '192px',
                                                height: '48px',
                                                bgcolor: constants/* COLORS.bg1 */.DM.bg1,
                                                border: `1px solid ${constants/* COLORS.blackStroker */.DM.blackStroker}`,
                                                width: '50%'
                                            },
                                            autoFocus: true,
                                            children: "Mua lẻ s\xe1ch"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                            onClick: ()=>{
                                                router.push('/up-vip');
                                            },
                                            sx: {
                                                ...constants/* TEXT_STYLE.title1 */.gN.title1,
                                                color: constants/* COLORS.white */.DM.white,
                                                textTransform: 'none',
                                                borderRadius: '8px',
                                                width: isSm ? '168px' : '192px',
                                                height: '48px',
                                                bgcolor: constants/* COLORS.main */.DM.main,
                                                width: '50%'
                                            },
                                            autoFocus: true,
                                            children: "Đăng k\xfd g\xf3i"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                    onClick: ()=>{
                                        setOpenUpdateRequiredModal(false);
                                    },
                                    sx: {
                                        ...constants/* TEXT_STYLE.content1 */.gN.content1,
                                        color: constants/* COLORS.contentIcon */.DM.contentIcon,
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

// EXTERNAL MODULE: ./src/components/Shared/handleAddToCart.js
var handleAddToCart = __webpack_require__(2482);
// EXTERNAL MODULE: ./src/components/Shared/handlePlayAudio.js
var handlePlayAudio = __webpack_require__(5210);
// EXTERNAL MODULE: ./src/components/Icons/index.js + 62 modules
var Icons = __webpack_require__(5273);
// EXTERNAL MODULE: ./src/utils/useWindowSize.js
var useWindowSize = __webpack_require__(9061);
// EXTERNAL MODULE: ./src/utils/formatDuration.js
var formatDuration = __webpack_require__(994);
// EXTERNAL MODULE: ./src/components/Shared/ShareModal.js
var ShareModal = __webpack_require__(9586);
// EXTERNAL MODULE: ./src/services/api.js + 1 modules
var services_api = __webpack_require__(2055);
;// CONCATENATED MODULE: ./src/components/ChannelDetail/ChannelDetail.js

// import react

// import redux




// import reducer, actions

// import next router

// import MUI components




// import others components




// import icons

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
                    ...constants/* TEXT_STYLE.content1 */.gN.content1,
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
    var ref3, ref1, ref2;
    const api = new services_api/* default */.Z();
    const windowSize = (0,useWindowSize/* default */.Z)();
    const router = (0,router_.useRouter)();
    const isSm = windowSize.width <= constants/* SCREEN_BREAKPOINTS.sm */.nN.sm ? true : false;
    const { id  } = (0,router_.useRouter)().query;
    const user = (0,external_react_redux_.useSelector)(redux_user/* selectUser */.dy);
    const cart = (0,external_react_redux_.useSelector)(payment/* selectCart */.KY);
    const openAudioDetail = (0,external_react_redux_.useSelector)(playAudio/* selectOpenAudioDetail */.vx);
    const { 0: channel , 1: setChannel  } = (0,external_react_.useState)(channelFromAPI);
    const { 0: url , 1: setUrl  } = (0,external_react_.useState)('');
    const { 0: playlists , 1: setPlaylists  } = (0,external_react_.useState)([]);
    const { 0: audios , 1: setAudios  } = (0,external_react_.useState)([]);
    const { 0: openSnackbar , 1: setOpenSnackbar  } = (0,external_react_.useState)(false);
    const { 0: openShareModal , 1: setOpenShareModal  } = (0,external_react_.useState)(false);
    const { 0: openUpdateRequiredModal , 1: setOpenUpdateRequiredModal  } = (0,external_react_.useState)(false);
    const { 0: openUnauthorizedModal , 1: setOpenUnauthorizedModal  } = (0,external_react_.useState)(false);
    const { 0: errorMessage , 1: setErrorMessage  } = (0,external_react_.useState)('');
    const { 0: audio1 , 1: setAudio  } = (0,external_react_.useState)(null);
    const dispatch = (0,external_react_redux_.useDispatch)();
    (0,external_react_.useEffect)(()=>{
        async function fetchPlaylists() {
            var ref;
            const res = await api.getChannelPlaylists(id, 1, channel === null || channel === void 0 ? void 0 : (ref = channel.channel_counter) === null || ref === void 0 ? void 0 : ref.playlists_count);
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
            if (!user) {
                dispatch((0,openLogin/* setOpenLogin */.e8)(true));
                return;
            }
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
    const handlePlayChannelAudio = (audio)=>{
        setAudio(audio);
        (0,handlePlayAudio/* default */.Z)(dispatch, user, audio.id, audio.playlist_id, 'free', setErrorMessage, setOpenUpdateRequiredModal, setOpenUnauthorizedModal, setOpenSnackbar);
    };
    const handleBuyPlaylist = ()=>{
        (0,handleAddToCart/* default */.Z)(dispatch, router, cart, audio1.playlist_id, setErrorMessage, setOpenSnackbar);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        sx: {
            width: '100%',
            ...openAudioDetail && {
                display: 'none'
            }
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: {
                    width: '100%',
                    minHeight: isSm ? '272px' : '390px',
                    ...(0,flexStyle/* flexStyle */.X)('flext-start', 'flex-start'),
                    p: isSm ? '25px 18px 25px 17px' : '50px 50px 50px 160px',
                    boxSizing: 'border-box',
                    mb: isSm ? '16px' : '40px',
                    position: 'relative',
                    '&::before': {
                        content: "''",
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: "url('/images/bgchannelDetail.png')",
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        opacity: 0.4
                    }
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                    sx: {
                        width: '100%',
                        ...(0,flexStyle/* flexStyle */.X)('flex-start', 'flex-start'),
                        columnGap: isSm ? '24px' : '48px',
                        boxSizing: 'border-box',
                        height: '100%'
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                            sx: {
                                height: '100%',
                                ...(0,flexStyle/* flexStyle */.X)('center', 'flex-start')
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                style: {
                                    width: isSm ? '110px' : '210px',
                                    height: isSm ? '110px' : '210px',
                                    borderRadius: '4px',
                                    border: `${isSm ? 5 : 6}px solid ${constants/* COLORS.bg3 */.DM.bg3}`
                                },
                                alt: `image ${channel === null || channel === void 0 ? void 0 : channel.name}`,
                                src: channel === null || channel === void 0 ? void 0 : (ref3 = channel.avatar) === null || ref3 === void 0 ? void 0 : ref3.thumb_url
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                            sx: {
                                height: '100%',
                                width: isSm ? 'calc(100% - 110px)' : 'calc(100% - 210px)',
                                ...isSm ? (0,flexStyle/* flexStyle */.X)('flex-start', 'flex-start') : (0,flexStyle/* flexStyle */.X)('space-around', 'flex-start'),
                                ...isSm && {
                                    flexDirection: 'column',
                                    rowGap: '20px'
                                },
                                columnGap: '10%'
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                    sx: {
                                        ...(0,flexStyle/* flexStyle */.X)('flex-start', 'center'),
                                        flexDirection: 'column',
                                        ...isSm && {
                                            width: '100%'
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                            sx: {
                                                width: '100%',
                                                mb: '10px',
                                                mb: isSm ? '8px' : '40px'
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
                                                                ...isSm ? constants/* TEXT_STYLE.title1 */.gN.title1 : constants/* TEXT_STYLE.h3 */.gN.h3,
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
                                        ...isSm ? (0,flexStyle/* flexStyle */.X)('flex-start', 'center') : (0,flexStyle/* flexStyle */.X)('flex-end', 'center'),
                                        columnGap: '10%',
                                        ...isSm && {
                                            width: '100%'
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                                            onClick: handleOpenShareModal,
                                            sx: {
                                                p: 0
                                            },
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
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                            onClick: handleBookmark,
                                            sx: {
                                                ...isSm ? constants/* TEXT_STYLE.title2 */.gN.title2 : constants/* TEXT_STYLE.title1 */.gN.title1,
                                                color: constants/* COLORS.white */.DM.white,
                                                borderRadius: '22px',
                                                height: isSm ? '28px' : '48px',
                                                width: isSm ? '94px' : '170px',
                                                textTransform: 'none',
                                                bgcolor: (channel === null || channel === void 0 ? void 0 : channel.is_bookmark) ? constants/* COLORS.bg3 */.DM.bg3 : constants/* COLORS.main */.DM.main,
                                                whiteSpace: 'nowrap',
                                                p: '4px 14px',
                                                '& .MuiButton-startIcon': {
                                                    mr: '4px'
                                                },
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
                    columnGap: '32px',
                    mb: isSm ? 0 : '80px',
                    ...!isSm && {
                        maxHeight: '749px'
                    }
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        sx: {
                            width: isSm ? '100%' : 'calc(40% - 16px)',
                            bgcolor: constants/* COLORS.bg2 */.DM.bg2,
                            borderRadius: '10px',
                            overflowY: isSm ? 'auto' : 'hidden',
                            scrollbarGutter: 'stable',
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
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                            sx: {
                                p: isSm ? '26px 16px 40px 16px' : '26px 39px 31px 39px',
                                boxSizing: 'border-box',
                                ...isSm && {
                                    maxHeight: '724px'
                                },
                                overflowY: 'scroll',
                                scrollbarGutter: 'stable',
                                '::-webkit-scrollbar': {
                                    width: '4px'
                                },
                                '::-webkit-scrollbar-track': {
                                    borderRadius: '5px'
                                },
                                '::-webkit-scrollbar-thumb': {
                                    background: constants/* COLORS.bg3 */.DM.bg3,
                                    borderRadius: '5px'
                                }
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
                                        var ref, ref4;
                                        /*#__PURE__*/ return jsx_runtime_.jsx(PlaylistThumbnail/* default */.Z, {
                                            width: "100%",
                                            id: i === null || i === void 0 ? void 0 : i.id,
                                            name: i.name,
                                            src: i === null || i === void 0 ? void 0 : (ref = i.avatar) === null || ref === void 0 ? void 0 : ref.thumb_url,
                                            authors: i === null || i === void 0 ? void 0 : i.authors,
                                            promotion: i === null || i === void 0 ? void 0 : i.promotion,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(PlaylistAudioCount, {
                                                isSm: isSm,
                                                audioCount: i === null || i === void 0 ? void 0 : (ref4 = i.playlist_counter) === null || ref4 === void 0 ? void 0 : ref4.audios_count
                                            })
                                        }, i === null || i === void 0 ? void 0 : i.id);
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        sx: {
                            width: isSm ? '100%' : 'calc(60% - 16px)',
                            bgcolor: constants/* COLORS.bg2 */.DM.bg2,
                            borderRadius: '10px',
                            overflowY: isSm ? 'auto' : 'hidden',
                            scrollbarGutter: 'stable',
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
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                            sx: {
                                p: isSm ? '26px 16px 16px 16px' : '26px 32px 16px 32px',
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
                                        children: audios.map((i, idx)=>{
                                            return(/*#__PURE__*/ jsx_runtime_.jsx(material_.ListItem, {
                                                sx: {
                                                    paddingLeft: 0,
                                                    paddingRight: 0,
                                                    borderTop: `.5px solid ${constants/* COLORS.placeHolder */.DM.placeHolder}`,
                                                    height: '72px'
                                                },
                                                onClick: ()=>{
                                                    handlePlayChannelAudio(i);
                                                },
                                                secondaryAction: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                    sx: {
                                                        ...isSm ? constants/* TEXT_STYLE.content3 */.gN.content3 : constants/* TEXT_STYLE.content2 */.gN.content2,
                                                        color: constants/* COLORS.bg4 */.DM.bg4
                                                    },
                                                    children: (0,formatDuration/* default */.Z)(i === null || i === void 0 ? void 0 : i.duration)
                                                }),
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.ListItemButton, {
                                                    role: undefined,
                                                    onClick: ()=>1
                                                    ,
                                                    dense: true,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                            sx: {
                                                                ...isSm ? constants/* TEXT_STYLE.title2 */.gN.title2 : constants/* TEXT_STYLE.title1 */.gN.title1,
                                                                color: constants/* COLORS.white */.DM.white,
                                                                mr: '14px'
                                                            },
                                                            children: idx + 1
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItemText, {
                                                            sx: {
                                                                'span': {
                                                                    ...isSm ? constants/* TEXT_STYLE.title2 */.gN.title2 : constants/* TEXT_STYLE.title1 */.gN.title1,
                                                                    color: constants/* COLORS.white */.DM.white,
                                                                    display: '-webkit-box',
                                                                    textOverflow: 'ellipsis',
                                                                    WebkitLineClamp: 2,
                                                                    WebkitBoxOrient: 'vertical',
                                                                    overflow: 'hidden',
                                                                    mr: '20px'
                                                                }
                                                            },
                                                            id: `label-${i === null || i === void 0 ? void 0 : i.id}`,
                                                            primary: i === null || i === void 0 ? void 0 : i.name
                                                        })
                                                    ]
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
            }),
            !isSm && /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {
                sx: {
                    bgcolor: constants/* COLORS.blackStroker */.DM.blackStroker,
                    m: '0 48px'
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(PlayAudioDialog, {
                isSm: isSm,
                openUnauthorizedModal: openUnauthorizedModal,
                openUpdateRequiredModal: openUpdateRequiredModal,
                errorMessage: errorMessage,
                setOpenUnauthorizedModal: setOpenUnauthorizedModal,
                setOpenUpdateRequiredModal: setOpenUpdateRequiredModal,
                handleBuyPlaylist: handleBuyPlaylist
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

/***/ 6146:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Add");

/***/ }),

/***/ 6959:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Check");

/***/ }),

/***/ 4173:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Close");

/***/ }),

/***/ 3188:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Delete");

/***/ }),

/***/ 5374:
/***/ ((module) => {

module.exports = require("@mui/icons-material/GraphicEqOutlined");

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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,973,61,273,699,836,835,586,245], () => (__webpack_exec__(9627)));
module.exports = __webpack_exports__;

})();