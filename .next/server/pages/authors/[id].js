"use strict";
(() => {
var exports = {};
exports.id = 26;
exports.ids = [26];
exports.modules = {

/***/ 6841:
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
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: external "@mui/icons-material/PhotoLibraryOutlined"
const PhotoLibraryOutlined_namespaceObject = require("@mui/icons-material/PhotoLibraryOutlined");
var PhotoLibraryOutlined_default = /*#__PURE__*/__webpack_require__.n(PhotoLibraryOutlined_namespaceObject);
// EXTERNAL MODULE: external "@mui/icons-material/GraphicEqOutlined"
var GraphicEqOutlined_ = __webpack_require__(5374);
var GraphicEqOutlined_default = /*#__PURE__*/__webpack_require__.n(GraphicEqOutlined_);
// EXTERNAL MODULE: ./src/components/Shared/PlaylistThumbnail.js
var PlaylistThumbnail = __webpack_require__(2835);
// EXTERNAL MODULE: ./src/utils/flexStyle.js
var flexStyle = __webpack_require__(8210);
// EXTERNAL MODULE: ./src/utils/constants.js
var constants = __webpack_require__(7426);
// EXTERNAL MODULE: ./src/utils/useWindowSize.js
var useWindowSize = __webpack_require__(9061);
// EXTERNAL MODULE: ./src/services/api.js + 1 modules
var services_api = __webpack_require__(2055);
;// CONCATENATED MODULE: ./src/components/Author/Author.js

// import react

// import next router

// import next link

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
function Author({ author  }) {
    var ref5, ref1, ref2, ref3;
    const api = new services_api/* default */.Z();
    const router = (0,router_.useRouter)();
    const windowSize = (0,useWindowSize/* default */.Z)();
    const { 0: id1 , 1: setId  } = (0,external_react_.useState)(null);
    const { 0: featuredAuthors , 1: setFeaturedAuthors  } = (0,external_react_.useState)([]);
    const { 0: playlists , 1: setPlaylists  } = (0,external_react_.useState)([]);
    const isSm = windowSize.width > constants/* SCREEN_BREAKPOINTS.sm */.nN.sm ? false : true;
    (0,external_react_.useEffect)(()=>{
        async function fetchFeaturedAuthors() {
            const res = await api.getFeaturedAuthors(id1);
            const data = await res.data.data;
            const slicedData = data.slice(0, 6);
            setFeaturedAuthors(slicedData);
        }
        async function fetchPlaylists() {
            const res = await api.getAuthorPlaylists(id1);
            const data = await res.data.data;
            setPlaylists(data);
        }
        if (id1) {
            fetchFeaturedAuthors();
            fetchPlaylists();
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
    const getFeaturedAuthorWidth = ()=>{
        const el = document.getElementById('author-detail-info');
        const innerWidth = el.clientWidth;
        // (innerWidth - ) padding*2 / NUM_ITEMS_PER_LINE - (((NUM_ITEMS_PER_LINE - 1) * columnGap) / NUM_ITEMS_PER_LINE)
        const padding = isSm ? 36 : 64;
        const numItemsPerLine = 3;
        const columnGap = 20;
        const widthPerItems = (innerWidth - padding) / numItemsPerLine - (numItemsPerLine - 1) * columnGap / numItemsPerLine;
        return widthPerItems;
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        sx: {
            width: '100%'
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: {
                    width: '100%',
                    height: '390px',
                    background: '#222530',
                    p: isSm ? '57px 0' : '65px 0',
                    boxSizing: 'border-box'
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                    sx: {
                        width: '100%',
                        height: '100%',
                        ...(0,flexStyle/* flexStyle */.X)('center', 'center'),
                        flexDirection: 'column'
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                            sx: {
                                width: isSm ? '120px' : '160px',
                                height: isSm ? '120px' : '160px',
                                mb: '40px'
                            },
                            alt: "Remy Sharp",
                            src: author === null || author === void 0 ? void 0 : (ref5 = author.avatar) === null || ref5 === void 0 ? void 0 : ref5.thumb_url
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            sx: {
                                ...isSm ? constants/* TEXT_STYLE.h3 */.gN.h3 : constants/* TEXT_STYLE.h2 */.gN.h2,
                                color: constants/* COLORS.white */.DM.white,
                                mb: '16px'
                            },
                            children: author === null || author === void 0 ? void 0 : author.name
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                            sx: {
                                ...(0,flexStyle/* flexStyle */.X)('center', 'center'),
                                columnGap: '8px'
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((PhotoLibraryOutlined_default()), {
                                    sx: {
                                        color: constants/* COLORS.white */.DM.white
                                    }
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                    sx: {
                                        ...isSm ? constants/* TEXT_STYLE.title2 */.gN.title2 : constants/* TEXT_STYLE.title1 */.gN.title1,
                                        color: constants/* COLORS.white */.DM.white
                                    },
                                    children: [
                                        author === null || author === void 0 ? void 0 : (ref1 = author.author_counter) === null || ref1 === void 0 ? void 0 : ref1.playlists_count,
                                        " albums"
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
                    ...(0,flexStyle/* flexStyle */.X)('space-between', 'stretch'),
                    ...isSm && {
                        flexDirection: 'column'
                    },
                    p: isSm ? '16px 0' : '40px 48px 48px 48px',
                    boxSizing: 'border-box'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                        id: "author-detail-info",
                        sx: {
                            width: isSm ? '100%' : '40%',
                            ...(0,flexStyle/* flexStyle */.X)('flex-start', 'center'),
                            flexDirection: 'column',
                            rowGap: isSm ? '16px' : '32px'
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                sx: {
                                    width: '100%',
                                    bgcolor: constants/* COLORS.bg2 */.DM.bg2,
                                    ...!isSm && {
                                        borderRadius: '10px'
                                    }
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                    sx: {
                                        width: '100%',
                                        p: isSm ? '26px 16px' : '26px 32px',
                                        boxSizing: 'border-box'
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                            sx: {
                                                ...isSm ? constants/* TEXT_STYLE.h3 */.gN.h3 : constants/* TEXT_STYLE.h2 */.gN.h2,
                                                color: constants/* COLORS.white */.DM.white,
                                                marginBottom: isSm ? '16px' : '32px'
                                            },
                                            children: "Giới thiệu"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                            sx: {
                                                ...constants/* TEXT_STYLE.content2 */.gN.content2,
                                                color: constants/* COLORS.VZ_Text_content */.DM.VZ_Text_content
                                            },
                                            children: author === null || author === void 0 ? void 0 : author.description
                                        })
                                    ]
                                })
                            }),
                            isSm && /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                sx: {
                                    width: '100%',
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
                                                author === null || author === void 0 ? void 0 : (ref2 = author.author_counter) === null || ref2 === void 0 ? void 0 : ref2.playlists_count,
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
                                    width: '100%',
                                    bgcolor: constants/* COLORS.bg2 */.DM.bg2,
                                    ...!isSm && {
                                        borderRadius: '10px'
                                    }
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                    sx: {
                                        p: isSm ? '26px 18px' : '26px 32px',
                                        boxSizing: 'border-box',
                                        width: '100%'
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                            sx: {
                                                ...isSm ? constants/* TEXT_STYLE.h3 */.gN.h3 : constants/* TEXT_STYLE.h2 */.gN.h2,
                                                color: constants/* COLORS.white */.DM.white,
                                                marginBottom: '32px'
                                            },
                                            children: "T\xe1c giả nổi bật"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                            sx: {
                                                ...(0,flexStyle/* flexStyle */.X)('center', 'stretch'),
                                                flexWrap: 'wrap',
                                                columnGap: '20px',
                                                rowGap: isSm ? '43px' : '35px'
                                            },
                                            children: featuredAuthors.map((i)=>{
                                                var ref;
                                                /*#__PURE__*/ return jsx_runtime_.jsx(material_.Box, {
                                                    sx: {
                                                        width: `calc(100% / 3 - ${isSm ? 17.5 : 13.5}px)`
                                                    },
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: `/authors/${i === null || i === void 0 ? void 0 : i.id}`,
                                                        style: {
                                                            textDecoration: 'none'
                                                        },
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                            sx: {
                                                                ...(0,flexStyle/* flexStyle */.X)('center', 'center'),
                                                                flexDirection: 'column',
                                                                rowGap: '8px'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                                                                    style: {
                                                                        width: '100%',
                                                                        height: `${getFeaturedAuthorWidth()}px`,
                                                                        border: `2px solid ${constants/* COLORS.second */.DM.second}`
                                                                    },
                                                                    src: i === null || i === void 0 ? void 0 : (ref = i.avatar) === null || ref === void 0 ? void 0 : ref.thumb_url,
                                                                    alt: `image ${i === null || i === void 0 ? void 0 : i.name}`
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                    sx: {
                                                                        textAlign: 'center'
                                                                    },
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                                        sx: {
                                                                            ...constants/* TEXT_STYLE.title3 */.gN.title3,
                                                                            color: constants/* COLORS.white */.DM.white
                                                                        },
                                                                        children: i === null || i === void 0 ? void 0 : i.name
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    })
                                                }, i === null || i === void 0 ? void 0 : i.id);
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    !isSm && /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        sx: {
                            width: '57%',
                            bgcolor: constants/* COLORS.bg2 */.DM.bg2,
                            ...!isSm && {
                                borderRadius: '10px'
                            }
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                            sx: {
                                p: '26px 32px',
                                boxSizing: 'border-box'
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                    sx: {
                                        ...constants/* TEXT_STYLE.h2 */.gN.h2,
                                        color: constants/* COLORS.white */.DM.white,
                                        marginBottom: '32px'
                                    },
                                    children: [
                                        "Danh s\xe1ch album (",
                                        author === null || author === void 0 ? void 0 : (ref3 = author.author_counter) === null || ref3 === void 0 ? void 0 : ref3.playlists_count,
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
                                        var ref, ref6;
                                        /*#__PURE__*/ return jsx_runtime_.jsx(PlaylistThumbnail/* default */.Z, {
                                            width: "100%",
                                            id: i === null || i === void 0 ? void 0 : i.id,
                                            name: i.name,
                                            src: i === null || i === void 0 ? void 0 : (ref = i.avatar) === null || ref === void 0 ? void 0 : ref.thumb_url,
                                            authors: i === null || i === void 0 ? void 0 : i.authors,
                                            promotion: i === null || i === void 0 ? void 0 : i.promotion,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(PlaylistAudioCount, {
                                                isSm: isSm,
                                                audioCount: i === null || i === void 0 ? void 0 : (ref6 = i.playlist_counter) === null || ref6 === void 0 ? void 0 : ref6.audios_count
                                            })
                                        }, i === null || i === void 0 ? void 0 : i.id);
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            !isSm && /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {
                sx: {
                    bgcolor: constants/* COLORS.blackStroker */.DM.blackStroker,
                    m: '0 48px'
                }
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./pages/authors/[id].js


// import service

function AuthorPage({ author  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(Author, {
        author: author
    }));
}
async function getServerSideProps(context) {
    const api = new services_api/* default */.Z();
    const { params  } = context;
    const res = await api.getAuthor(params.id);
    const author = res.data.data;
    return {
        props: {
            author
        }
    };
}
/* harmony default export */ const _id_ = (AuthorPage);


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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,973,61,273,835], () => (__webpack_exec__(6841)));
module.exports = __webpack_exports__;

})();