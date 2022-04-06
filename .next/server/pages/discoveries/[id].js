"use strict";
(() => {
var exports = {};
exports.id = 507;
exports.ids = [507];
exports.modules = {

/***/ 860:
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
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/redux/user.js
var redux_user = __webpack_require__(7010);
// EXTERNAL MODULE: ./src/redux/openLogin.js
var openLogin = __webpack_require__(9006);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: external "@mui/icons-material/BorderColorOutlined"
const BorderColorOutlined_namespaceObject = require("@mui/icons-material/BorderColorOutlined");
var BorderColorOutlined_default = /*#__PURE__*/__webpack_require__.n(BorderColorOutlined_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Headphones"
const Headphones_namespaceObject = require("@mui/icons-material/Headphones");
var Headphones_default = /*#__PURE__*/__webpack_require__.n(Headphones_namespaceObject);
// EXTERNAL MODULE: ./src/components/Icons/index.js + 62 modules
var Icons = __webpack_require__(5273);
// EXTERNAL MODULE: ./src/utils/flexStyle.js
var flexStyle = __webpack_require__(8210);
// EXTERNAL MODULE: ./src/utils/constants.js
var constants = __webpack_require__(7426);
// EXTERNAL MODULE: ./src/utils/useWindowSize.js
var useWindowSize = __webpack_require__(9061);
// EXTERNAL MODULE: ./src/services/api.js + 1 modules
var services_api = __webpack_require__(2055);
;// CONCATENATED MODULE: ./src/components/Discovery/DiscoveryDetail.js

// import react

// import redux

// import reducer, actions


// import next router

// import next link

// import MUI components



// Import icons

// import utils



// import service

const CommentItem = (props)=>{
    const { data: data1 , api , updateLike , commentInputRef , user  } = props;
    const { 0: isLikeError , 1: setIsLikeError  } = (0,external_react_.useState)(false);
    const { 0: errorMessage , 1: setErrorMessage  } = (0,external_react_.useState)('');
    const dispatch = (0,external_react_redux_.useDispatch)();
    const handleLikeComment = async (id)=>{
        if (!user) {
            dispatch((0,openLogin/* setOpenLogin */.e8)(true));
            return;
        }
        try {
            const res = await api.likeComment(id);
            const data = await res.data;
            if (data.error) {
                setIsLikeError(true);
                return;
            }
            updateLike(data.data);
        } catch (err) {
            const errList = err.response.data.error;
            if (errList instanceof Object) {
                let errMessage = '';
                for(let e in errList){
                    const key = Object.keys(errList[e])[0];
                    const value = errList[e][key];
                    errMessage += `${value} \n`;
                }
                setErrorMessage(errMessage);
                setIsLikeError(true);
                return;
            }
            setErrorMessage(errList);
            setIsLikeError(true);
        }
    };
    const handleResponseComment = ()=>{
        if (!user) {
            dispatch((0,openLogin/* setOpenLogin */.e8)(true));
            return;
        }
        commentInputRef.current.children[1].focus();
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        id: `comment-${data1.id}`,
        sx: {
            ...(0,flexStyle/* flexStyle */.X)('flex-start', 'flex-start'),
            columnGap: '11px'
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                    sx: {
                        width: '35px',
                        height: '35px'
                    },
                    alt: "img alt",
                    src: data1.user ? data1.user.avatar.thumb_url : ''
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                sx: {
                    ...(0,flexStyle/* flexStyle */.X)('center', 'flex-starrt'),
                    flexDirection: 'column',
                    rowGap: '15px',
                    width: '100%',
                    overflowWrap: 'anywhere',
                    wordBreak: 'break-word',
                    whiteSpace: 'pre-line'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                        sx: {
                            ...(0,flexStyle/* flexStyle */.X)('center', 'flex-start'),
                            flexDirection: 'column',
                            rowGap: '8px',
                            padding: '15px',
                            bgcolor: constants/* COLORS.bg2 */.DM.bg2,
                            borderRadius: '10px'
                        },
                        children: [
                            data1.user && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                sx: {
                                    ...constants/* TEXT_STYLE.title1 */.gN.title1,
                                    color: constants/* COLORS.white */.DM.white
                                },
                                children: [
                                    data1.user.first_name,
                                    " ",
                                    data1.user.last_name
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                style: {
                                    ...constants/* TEXT_STYLE.content1 */.gN.content1,
                                    color: constants/* COLORS.VZ_Text_content */.DM.VZ_Text_content
                                },
                                children: data1.content
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                        sx: {
                            ...(0,flexStyle/* flexStyle */.X)('flex-start', 'center'),
                            columnGap: '31px'
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                sx: {
                                    ...(0,flexStyle/* flexStyle */.X)('center', 'center'),
                                    columnGap: '8px',
                                    cursor: 'pointer'
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Icons/* Comment */.sv, {
                                        bgfill: constants/* COLORS.contentIcon */.DM.contentIcon,
                                        fill: constants/* COLORS.contentIcon */.DM.contentIcon
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                        onClick: handleResponseComment,
                                        sx: {
                                            ...constants/* TEXT_STYLE.content3 */.gN.content3,
                                            color: constants/* COLORS.contentIcon */.DM.contentIcon
                                        },
                                        children: "Trả lời"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                sx: {
                                    ...(0,flexStyle/* flexStyle */.X)('center', 'center'),
                                    columnGap: '8px',
                                    cursor: 'pointer'
                                },
                                onClick: ()=>{
                                    handleLikeComment(data1.id);
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Icons/* Like */.mN, {
                                        bgfill: data1.is_liked ? constants/* COLORS.main */.DM.main : constants/* COLORS.white */.DM.white,
                                        fill: data1.is_liked ? constants/* COLORS.main */.DM.main : constants/* COLORS.white */.DM.white
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                        sx: {
                                            ...constants/* TEXT_STYLE.content3 */.gN.content3,
                                            color: constants/* COLORS.contentIcon */.DM.contentIcon
                                        },
                                        children: data1.comment_likes_count
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                sx: {
                                    ...(0,flexStyle/* flexStyle */.X)('center', 'center'),
                                    columnGap: '8px'
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                    sx: {
                                        ...constants/* TEXT_STYLE.content3 */.gN.content3,
                                        color: constants/* COLORS.contentIcon */.DM.contentIcon
                                    },
                                    children: data1.published_at
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Snackbar, {
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'center'
                },
                open: isLikeError,
                onClose: ()=>{
                    setIsLikeError(false);
                },
                message: errorMessage
            }, "bottomcenter")
        ]
    }));
};
function DiscoveryDetail({ discovery  }) {
    var ref8, ref1, ref2, ref3, ref4, ref5, ref6;
    const api = new services_api/* default */.Z();
    const windowSize = (0,useWindowSize/* default */.Z)();
    const commentInputRef = (0,external_react_.useRef)();
    const user = (0,external_react_redux_.useSelector)(redux_user/* selectUser */.dy);
    const { 0: inlineDiscovery , 1: setInlineDiscovery  } = (0,external_react_.useState)(discovery);
    const { 0: comments , 1: setComments  } = (0,external_react_.useState)([]);
    const { 0: commentContent , 1: setCommentContent  } = (0,external_react_.useState)('');
    const { 0: commentPage , 1: setCommentPage  } = (0,external_react_.useState)(1);
    const { 0: isCommentError , 1: setIsCommentError  } = (0,external_react_.useState)(false);
    const { 0: errorMessage , 1: setErrorMessage  } = (0,external_react_.useState)('');
    const { 0: readOnlyComment , 1: setReadOnlyComment  } = (0,external_react_.useState)(false);
    const { id  } = (0,router_.useRouter)().query;
    const dispatch = (0,external_react_redux_.useDispatch)();
    const isSm = windowSize.width <= constants/* SCREEN_BREAKPOINTS.sm */.nN.sm ? true : false;
    const coverImgHeight = isSm ? 200 : 380;
    async function fetchDiscoveryComment() {
        try {
            const res = await api.getDiscoveryComment(id, commentPage);
            const data = await res.data.data;
            const appendedComments = [
                ...comments,
                ...data
            ];
            setComments(appendedComments);
        } catch (err) {
            console.log(err);
        }
    }
    ;
    (0,external_react_.useEffect)(()=>{
        fetchDiscoveryComment();
    }, [
        commentPage
    ]);
    (0,external_react_.useEffect)(()=>{
        if (user) {
            setReadOnlyComment(false);
        }
    }, [
        user
    ]);
    const handleWriteComment = (e)=>{
        if (user) {
            const content = e.target.value;
            setCommentContent(content);
        }
    };
    const handleClickCommentInput = (e)=>{
        if (!user && !commentContent) {
            dispatch((0,openLogin/* setOpenLogin */.e8)(true));
            setCommentContent('');
            setReadOnlyComment(true);
        }
    };
    const handleCommentKeyUp = async (e)=>{
        const { keyCode  } = e;
        if (keyCode === 13 && commentContent) {
            await sendComment(inlineDiscovery.id, {
                content: commentContent
            });
        }
    };
    const handleComment = async ()=>{
        if (commentContent) {
            await sendComment(inlineDiscovery.id, {
                content: commentContent
            });
        }
    };
    const updateLike = (data)=>{
        const commentsTmp = [
            ...comments
        ];
        const cmtIdx = commentsTmp.findIndex((i)=>i.id === data.id
        );
        commentsTmp[cmtIdx] = data;
        setComments(commentsTmp);
    };
    const appendComment = (comment)=>{
        const copiedDiscovery = {
            ...inlineDiscovery
        };
        copiedDiscovery.discovery_counter.comments_count = inlineDiscovery.discovery_counter.comments_count + 1;
        setInlineDiscovery({
            ...copiedDiscovery
        });
        setComments([
            comment,
            ...comments
        ]);
    };
    async function sendComment(discoveryId, body) {
        if (!user) {
            dispatch((0,openLogin/* setOpenLogin */.e8)(true));
            setCommentContent('');
            return;
        }
        try {
            const res = await api.commentDiscovery(discoveryId, body);
            const data = await res.data;
            if (data.error) {
                setIsCommentError(true);
                console.log(data.error);
                return;
            }
            appendComment(data.data);
            setCommentContent('');
            window.location.href = `${window.location.origin}${window.location.pathname}#comment-${data.data.id}`;
        } catch (err) {
            setCommentContent('');
            const errList = err.response.data.error;
            if (errList instanceof Object) {
                let errMessage = '';
                for(let e in errList){
                    const key = Object.keys(errList[e])[0];
                    const value = errList[e][key];
                    errMessage += `${value} \n`;
                }
                setErrorMessage(errMessage);
                setIsCommentError(true);
                return;
            }
            setErrorMessage(errList);
            setIsCommentError(true);
        }
    }
    const updateDiscoveryLike = (data)=>{
        const discoveryTmp = {
            ...inlineDiscovery
        };
        discoveryTmp['discovery_counter']['likes_count'] = data.likes_count;
        discoveryTmp['is_liked'] = !discoveryTmp['is_liked'];
        setInlineDiscovery(discoveryTmp);
    };
    const handleLikeDiscovery = async ()=>{
        if (!user) {
            dispatch((0,openLogin/* setOpenLogin */.e8)(true));
            return;
        }
        try {
            const res = await api.likeDiscovery(id);
            const data = await res.data;
            if (data.error) {
                setIsLikeError(true);
                return;
            }
            updateDiscoveryLike(data.data);
        } catch (err) {
            const errList = err.response.data.error;
            if (errList instanceof Object) {
                let errMessage = '';
                for(let e in errList){
                    const key = Object.keys(errList[e])[0];
                    const value = errList[e][key];
                    errMessage += `${value} \n`;
                }
                setErrorMessage(errMessage);
                setIsCommentError(true);
                return;
            }
            setErrorMessage(errList);
            setIsCommentError(true);
        }
    };
    const handleLoadMoreComment = ()=>{
        if (comments.length < inlineDiscovery.discovery_counter.comments_count) {
            const nextCommentPage = commentPage + 1;
            fetchDiscoveryComment(nextCommentPage);
            setCommentPage(nextCommentPage);
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        sx: {
            ...(0,flexStyle/* flexStyle */.X)('center', 'center'),
            flexDirection: 'column'
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: {
                    height: `${coverImgHeight}px`,
                    width: '100%',
                    top: 0
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    style: {
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%',
                        left: 0
                    },
                    alt: "cover img alt",
                    src: inlineDiscovery === null || inlineDiscovery === void 0 ? void 0 : (ref8 = inlineDiscovery.image) === null || ref8 === void 0 ? void 0 : ref8.original_url
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: {
                    width: '100%',
                    bgcolor: constants/* COLORS.bg2 */.DM.bg2
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                    sx: {
                        width: isSm ? '90%' : '60%',
                        margin: '0 auto'
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                            sx: {
                                ...(0,flexStyle/* flexStyle */.X)('flex-start', 'center'),
                                columnGap: '16px',
                                margin: isSm ? '24px 0 16px 0' : '24px 0'
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                                        sx: {
                                            width: '48px',
                                            height: '48px'
                                        },
                                        alt: "discovery avt alt",
                                        src: inlineDiscovery === null || inlineDiscovery === void 0 ? void 0 : (ref1 = inlineDiscovery.channel) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.avatar) === null || ref2 === void 0 ? void 0 : ref2.thumb_url
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                    sx: {
                                        ...(0,flexStyle/* flexStyle */.X)('center', 'flex-start'),
                                        flexDirection: 'column',
                                        rowGap: '6px'
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                            sx: {
                                                ...constants/* TEXT_STYLE.h3 */.gN.h3,
                                                color: constants/* COLORS.white */.DM.white
                                            },
                                            children: inlineDiscovery === null || inlineDiscovery === void 0 ? void 0 : (ref3 = inlineDiscovery.channel) === null || ref3 === void 0 ? void 0 : ref3.name
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                            sx: {
                                                ...constants/* TEXT_STYLE.content2 */.gN.content2,
                                                color: constants/* COLORS.contentIcon */.DM.contentIcon
                                            },
                                            children: inlineDiscovery === null || inlineDiscovery === void 0 ? void 0 : inlineDiscovery.published_at
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {
                            sx: {
                                border: `1px solid ${constants/* COLORS.blackStroker */.DM.blackStroker}`,
                                mb: isSm ? '16px' : '24px'
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            sx: {
                                ...isSm ? constants/* TEXT_STYLE.content2 */.gN.content2 : constants/* TEXT_STYLE.content1 */.gN.content1,
                                color: constants/* COLORS.white */.DM.white,
                                mb: isSm ? '19px' : '16px'
                            },
                            children: inlineDiscovery === null || inlineDiscovery === void 0 ? void 0 : inlineDiscovery.summary
                        })
                    ]
                })
            }),
            inlineDiscovery.discovery_contents && inlineDiscovery.discovery_contents.map((i)=>{
                var ref, ref7;
                /*#__PURE__*/ return (0,jsx_runtime_.jsxs)(material_.Box, {
                    sx: {
                        width: isSm ? '90%' : '60%',
                        margin: '0 auto'
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            sx: {
                                ...isSm ? constants/* TEXT_STYLE.title1 */.gN.title1 : constants/* TEXT_STYLE.h2 */.gN.h2,
                                color: constants/* COLORS.white */.DM.white,
                                margin: isSm ? '33px auto 24px auto' : '48px auto'
                            },
                            children: i === null || i === void 0 ? void 0 : i.title
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                            sx: {
                                height: '329px',
                                width: '100%',
                                top: 0,
                                position: 'relative'
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    style: {
                                        objectFit: 'cover',
                                        width: '100%',
                                        height: '100%',
                                        left: 0
                                    },
                                    alt: "cover img alt",
                                    src: i === null || i === void 0 ? void 0 : (ref = i.avatar) === null || ref === void 0 ? void 0 : ref.original_url
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    style: {
                                        textDecoration: 'none'
                                    },
                                    href: `/playlists/${i === null || i === void 0 ? void 0 : (ref7 = i.playlist) === null || ref7 === void 0 ? void 0 : ref7.id}`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                        sx: {
                                            position: 'absolute',
                                            bottom: '10px',
                                            right: '10px',
                                            ...constants/* TEXT_STYLE.title2 */.gN.title2,
                                            color: constants/* COLORS.white */.DM.white,
                                            bgcolor: constants/* COLORS.main */.DM.main,
                                            textTransform: 'none',
                                            height: '48px',
                                            width: '150px',
                                            borderRadius: '48px',
                                            ':hover': {
                                                bgcolor: 'rgb(56 57 68 / 93%)'
                                            }
                                        },
                                        startIcon: /*#__PURE__*/ jsx_runtime_.jsx((Headphones_default()), {
                                            sx: {
                                                color: constants/* COLORS.white */.DM.white
                                            }
                                        }),
                                        children: "Nghe s\xe1ch"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            sx: {
                                ...isSm ? constants/* TEXT_STYLE.content2 */.gN.content2 : constants/* TEXT_STYLE.content1 */.gN.content1,
                                color: constants/* COLORS.VZ_Text_content */.DM.VZ_Text_content,
                                margin: isSm ? '23px auto 16px auto' : '48px auto 32px auto',
                                whiteSpace: 'pre-wrap'
                            },
                            children: i === null || i === void 0 ? void 0 : i.content
                        })
                    ]
                }, i === null || i === void 0 ? void 0 : i.id);
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: {
                    width: isSm ? '100%' : '60%',
                    margin: '0 auto'
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                    sx: {
                        bgcolor: constants/* COLORS.bg2 */.DM.bg2,
                        padding: isSm ? '16px' : '20px',
                        ...(0,flexStyle/* flexStyle */.X)('space-between', 'center'),
                        mb: isSm ? '24px' : '30px'
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                            id: "comment-area",
                            sx: {
                                ...(0,flexStyle/* flexStyle */.X)('center', 'center'),
                                columnGap: '8px'
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Icons/* Comment */.sv, {
                                    bgfill: constants/* COLORS.white */.DM.white,
                                    fill: constants/* COLORS.white */.DM.white
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                    sx: {
                                        ...constants/* TEXT_STYLE.content2 */.gN.content2,
                                        color: constants/* COLORS.white */.DM.white
                                    },
                                    children: [
                                        inlineDiscovery === null || inlineDiscovery === void 0 ? void 0 : (ref4 = inlineDiscovery.discovery_counter) === null || ref4 === void 0 ? void 0 : ref4.comments_count,
                                        " g\xf3p \xfd"
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                            sx: {
                                ...(0,flexStyle/* flexStyle */.X)('center', 'center'),
                                columnGap: '8px'
                            },
                            onClick: handleLikeDiscovery,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Icons/* Like */.mN, {
                                    bgfill: inlineDiscovery.is_liked ? constants/* COLORS.main */.DM.main : constants/* COLORS.white */.DM.white,
                                    fill: inlineDiscovery.is_liked ? constants/* COLORS.main */.DM.main : constants/* COLORS.white */.DM.white
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                    sx: {
                                        ...constants/* TEXT_STYLE.content2 */.gN.content2,
                                        color: constants/* COLORS.white */.DM.white
                                    },
                                    children: [
                                        inlineDiscovery === null || inlineDiscovery === void 0 ? void 0 : (ref5 = inlineDiscovery.discovery_counter) === null || ref5 === void 0 ? void 0 : ref5.likes_count,
                                        " th\xedch"
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                sx: {
                    width: isSm ? '90%' : '60%',
                    margin: '0 auto'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                        sx: {
                            ...(0,flexStyle/* flexStyle */.X)('center', 'flex-start'),
                            flexDirection: 'column',
                            rowGap: '34px'
                        },
                        children: [
                            comments.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(CommentItem, {
                                    user: user,
                                    commentInputRef: commentInputRef,
                                    updateLike: updateLike,
                                    api: api,
                                    data: item
                                }, item.id)
                            ),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                sx: {
                                    width: '100%',
                                    ...(0,flexStyle/* flexStyle */.X)('center', 'center')
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                    onClick: handleLoadMoreComment,
                                    disabled: comments.length >= (inlineDiscovery === null || inlineDiscovery === void 0 ? void 0 : (ref6 = inlineDiscovery.discovery_counter) === null || ref6 === void 0 ? void 0 : ref6.comments_count),
                                    sx: {
                                        textTransform: 'none',
                                        ...constants/* TEXT_STYLE.title2 */.gN.title2,
                                        color: constants/* COLORS.white */.DM.white,
                                        bgcolor: constants/* COLORS.main */.DM.main,
                                        width: '170px',
                                        height: '40px',
                                        borderRadius: '50px',
                                        ':hover': {
                                            bgcolor: constants/* COLORS.main */.DM.main
                                        }
                                    },
                                    children: "Tải th\xeam g\xf3p \xfd"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                        sx: {
                            ...(0,flexStyle/* flexStyle */.X)('flex-start', 'center'),
                            columnGap: isSm ? '16px' : '31px',
                            mt: '40px',
                            maxWidth: '650px'
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.FormControl, {
                                fullWidth: true,
                                variant: "standard",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Input, {
                                    sx: {
                                        height: '40px',
                                        border: `1px solid ${constants/* COLORS.placeHolder */.DM.placeHolder}`,
                                        color: constants/* COLORS.placeHolder */.DM.placeHolder,
                                        borderRadius: '24px',
                                        padding: '0 16px',
                                        boxSizing: 'border-box',
                                        '& .MuiInput-input': {
                                            padding: '13px 16px',
                                            ...constants/* TEXT_STYLE.content2 */.gN.content2,
                                            color: constants/* COLORS.white */.DM.white
                                        }
                                    },
                                    ref: commentInputRef,
                                    disableUnderline: true,
                                    id: "discovery-comment",
                                    value: commentContent,
                                    placeholder: "Gửi g\xf3p \xfd cho nội dung n\xe0y",
                                    onChange: handleWriteComment,
                                    onKeyUp: handleCommentKeyUp,
                                    onClick: handleClickCommentInput,
                                    readOnly: readOnlyComment,
                                    tabIndex: "-1",
                                    startAdornment: /*#__PURE__*/ jsx_runtime_.jsx((BorderColorOutlined_default()), {
                                        sx: {
                                            color: constants/* COLORS.placeHolder */.DM.placeHolder
                                        },
                                        position: "start",
                                        children: "$"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                onClick: handleComment,
                                sx: {
                                    fontSize: '16px',
                                    lineHeight: '16px',
                                    fontWeight: 600,
                                    fontFamily: 'SF UI Display',
                                    fontStyle: 'normal',
                                    color: constants/* COLORS.VZ_Text_content */.DM.VZ_Text_content,
                                    textTransform: 'none',
                                    p: 0,
                                    minWidth: 0
                                },
                                children: "Gửi"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Snackbar, {
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'center'
                },
                open: isCommentError,
                autoHideDuration: 6000,
                onClose: ()=>{
                    setIsCommentError(false);
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Alert, {
                    onClose: ()=>{
                        setIsCommentError(false);
                    },
                    severity: "error",
                    sx: {
                        width: '100%'
                    },
                    children: errorMessage
                })
            }, "bottomcenter")
        ]
    }));
};

;// CONCATENATED MODULE: ./pages/discoveries/[id].js

// import components

// import service

const DiscoveryDetailPage = ({ discovery  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(DiscoveryDetail, {
        discovery: discovery
    }));
};
async function getServerSideProps(context) {
    const api = new services_api/* default */.Z();
    const pageLimit = 10;
    const { params  } = context;
    const res = await api.getDiscovery(params.id, 0, pageLimit);
    const discovery = await res.data.data;
    return {
        props: {
            discovery
        }
    };
}
/* harmony default export */ const _id_ = (DiscoveryDetailPage);


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

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,973,61,273,699], () => (__webpack_exec__(860)));
module.exports = __webpack_exports__;

})();