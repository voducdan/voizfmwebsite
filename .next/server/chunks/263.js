"use strict";
exports.id = 263;
exports.ids = [263];
exports.modules = {

/***/ 2263:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_AccountCircleOutlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(514);
/* harmony import */ var _mui_icons_material_AccountCircleOutlined__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_AccountCircleOutlined__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _HomeCarousel_HomeCarousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3281);
/* harmony import */ var _Thumbnail_Thumbnail__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2579);
/* harmony import */ var _Shared_CategoryBarWithoutSwiper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3888);
/* harmony import */ var _Shared_PlaylistByCategory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3825);
/* harmony import */ var _Shared_PublisherComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6600);
/* harmony import */ var _Icons_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5273);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7426);
/* harmony import */ var _utils_useWindowSize__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9061);
/* harmony import */ var _utils_flexStyle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8210);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2055);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_HomeCarousel_HomeCarousel__WEBPACK_IMPORTED_MODULE_6__, _Shared_PlaylistByCategory__WEBPACK_IMPORTED_MODULE_9__, _Shared_PublisherComponent__WEBPACK_IMPORTED_MODULE_10__]);
([_HomeCarousel_HomeCarousel__WEBPACK_IMPORTED_MODULE_6__, _Shared_PlaylistByCategory__WEBPACK_IMPORTED_MODULE_9__, _Shared_PublisherComponent__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

// import react


// import next link

// import MUI components


// import others components





// import icons

// import utils



// import service

const Title = (props)=>{
    const { isSm , content , haveArrow  } = props;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
        sx: {
            ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_15__/* .flexStyle */ .X)('flex-start', 'center'),
            marginBottom: '24px'
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                sx: {
                    ...isSm ? _utils_constants__WEBPACK_IMPORTED_MODULE_12__/* .TEXT_STYLE.h3 */ .gN.h3 : _utils_constants__WEBPACK_IMPORTED_MODULE_12__/* .TEXT_STYLE.h2 */ .gN.h2,
                    color: _utils_constants__WEBPACK_IMPORTED_MODULE_12__/* .COLORS.white */ .DM.white
                },
                children: content
            }),
            haveArrow && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                sx: {
                    marginLeft: '11.3px',
                    marginTop: '6px'
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icons_index__WEBPACK_IMPORTED_MODULE_11__/* .RightArrow */ .UV, {
                    fill: _utils_constants__WEBPACK_IMPORTED_MODULE_12__/* .COLORS.white */ .DM.white
                })
            })
        ]
    }));
};
const RandomPlayList = (props)=>{
    var ref;
    const { data , isSm  } = props;
    const { promotion  } = data;
    const height = isSm ? '153px' : '200px';
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
        sx: {
            ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_15__/* .flexStyle */ .X)('center', 'center'),
            bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_12__/* .COLORS.bg2 */ .DM.bg2,
            height: height,
            borderRadius: '4px',
            columnGap: isSm ? '11px' : '18px'
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                sx: {
                    position: 'relative',
                    borderRadius: '3px',
                    ...promotion && {
                        '&::before': {
                            content: promotion === 'vip' ? "url('/images/dvip.png')" : promotion === 'coin' ? "url('/images/dcoin.png')" : "url('/images/dfree.png')",
                            position: 'absolute',
                            right: 0,
                            top: 0,
                            zIndex: 8
                        }
                    }
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: data === null || data === void 0 ? void 0 : (ref = data.avatar) === null || ref === void 0 ? void 0 : ref.thumb_url,
                    style: {
                        width: height,
                        height: height,
                        borderRadius: '3px'
                    }
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                sx: {
                    width: `calc(100% - ${height})`,
                    p: '20px 0',
                    boxSizing: 'border-box'
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                        sx: {
                            ...isSm ? _utils_constants__WEBPACK_IMPORTED_MODULE_12__/* .TEXT_STYLE.title1 */ .gN.title1 : _utils_constants__WEBPACK_IMPORTED_MODULE_12__/* .TEXT_STYLE.h3 */ .gN.h3,
                            color: _utils_constants__WEBPACK_IMPORTED_MODULE_12__/* .COLORS.white */ .DM.white,
                            textAlign: 'left',
                            display: '-webkit-box',
                            textOverflow: 'ellipsis',
                            WebkitLineClamp: 1,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            mb: '6px'
                        },
                        children: data.name
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                        sx: {
                            ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_15__/* .flexStyle */ .X)('flex-start', 'center'),
                            columnGap: '6px',
                            mb: '6px'
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_AccountCircleOutlined__WEBPACK_IMPORTED_MODULE_5___default()), {
                                sx: {
                                    color: _utils_constants__WEBPACK_IMPORTED_MODULE_12__/* .COLORS.contentIcon */ .DM.contentIcon,
                                    width: isSm ? '12px' : '16px',
                                    height: isSm ? '12px' : '16px'
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                sx: {
                                    ...isSm ? _utils_constants__WEBPACK_IMPORTED_MODULE_12__/* .TEXT_STYLE.content2 */ .gN.content2 : _utils_constants__WEBPACK_IMPORTED_MODULE_12__/* .TEXT_STYLE.content1 */ .gN.content1,
                                    color: _utils_constants__WEBPACK_IMPORTED_MODULE_12__/* .COLORS.contentIcon */ .DM.contentIcon
                                },
                                children: data.author_string
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                        sx: {
                            ...isSm ? _utils_constants__WEBPACK_IMPORTED_MODULE_12__/* .TEXT_STYLE.content3 */ .gN.content3 : _utils_constants__WEBPACK_IMPORTED_MODULE_12__/* .TEXT_STYLE.content2 */ .gN.content2,
                            color: _utils_constants__WEBPACK_IMPORTED_MODULE_12__/* .COLORS.VZ_Text_content */ .DM.VZ_Text_content,
                            textAlign: 'left',
                            display: '-webkit-box',
                            textOverflow: 'ellipsis',
                            WebkitLineClamp: 5,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                        },
                        children: data.description
                    })
                ]
            })
        ]
    }));
};
const NUM_PLAYLIST_RANDOM = 12;
function AudioBook({ router  }) {
    var ref;
    const api = new _services_api__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z();
    const pathname = router.pathname;
    const windowSize = (0,_utils_useWindowSize__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)();
    const isSm = windowSize.width <= _utils_constants__WEBPACK_IMPORTED_MODULE_12__/* .SCREEN_BREAKPOINTS.sm */ .nN.sm ? true : false;
    const SPACE_BETWEEN = isSm ? 16 : 24;
    const NUMBER_ITEMS_PER_LINE = isSm ? 2.5 : 5;
    const SIDE_PADDING = isSm ? 19 : 48;
    const { 0: categories , 1: setCategoryies  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: categoryCode1 , 1: setCategoryCode  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: categoryName1 , 1: setCategoryName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: playlists , 1: setPlaylists  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: playlistsRandom , 1: setPlaylistsRandom  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: initPlaylists , 1: setInitPlaylists  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const code = pathname.replace('-', '_').slice(1);
        async function fetchCategories() {
            const res = await api.getCategories(code);
            const data = await res.data.data;
            setCategoryies(data);
        }
        ;
        async function fetchPlaylistsRandom() {
            const res = await api.getCategoryPlaylists(code, NUM_PLAYLIST_RANDOM, [], 'latest', 1);
            const data = await res.data.data;
            setPlaylistsRandom(data);
        }
        fetchPlaylistsRandom();
        fetchCategories();
    }, [
        pathname
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        async function initPlaylist() {
            // const initCategories = categories.filter(i => i.sub_name !== '');
            const initCategories = [
                ...categories
            ];
            const resultPromise = [];
            initCategories.forEach((i)=>{
                const res = api.getCategoryPlaylists(i.code, 10);
                resultPromise.push(res);
            });
            const data = await Promise.all(resultPromise);
            const results = [];
            for(let i1 in data){
                const value = data[i1].data.data;
                if (value.length > 0) {
                    results.push({
                        name: initCategories[i1]['sub_name'] || initCategories[i1]['name'],
                        data: value
                    });
                }
            }
            if (results.length > 1) {
                setInitPlaylists(results);
            }
        }
        initPlaylist();
    }, [
        categories
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        async function fetchPlaylists() {
            if (categoryCode1 === null || categoryCode1 === '') {
                return;
            } else {
                const res = await api.getCategoryPlaylists(categoryCode1, 35);
                const results = await res.data.data;
                setPlaylists(results);
            }
        }
        fetchPlaylists();
    }, [
        categoryCode1
    ]);
    const getPlaylistImgWidth = ()=>{
        const width = windowSize.width;
        let innerWidth = width - SIDE_PADDING * 2;
        const spaceToBeSubstrcted = (NUMBER_ITEMS_PER_LINE - 1) * SPACE_BETWEEN / NUMBER_ITEMS_PER_LINE;
        if (!isSm) {
            innerWidth -= _utils_constants__WEBPACK_IMPORTED_MODULE_12__/* .DRAWER_WIDTH */ .pG;
        }
        return innerWidth / NUMBER_ITEMS_PER_LINE - spaceToBeSubstrcted;
    };
    const getInnerWidth = ()=>{
        const width = windowSize.width;
        let innerWidth = width - SIDE_PADDING * 2;
        if (!isSm) {
            innerWidth -= _utils_constants__WEBPACK_IMPORTED_MODULE_12__/* .DRAWER_WIDTH */ .pG;
        }
        return innerWidth;
    };
    const onSelectCategory = (categoryCode)=>{
        if (categoryCode !== null && categoryCode !== '') {
            const category = categories.filter((i)=>i.code === categoryCode
            )[0];
            const categoryName = !!category.sub_name ? category.sub_name : category.name;
            setCategoryName(categoryName);
        }
        setCategoryCode(categoryCode);
    };
    const handleLoadMoreRandomPlaylist = async ()=>{
        const code = pathname.replace('-', '_').slice(1);
        const ignore_ids = playlistsRandom.map((i)=>i.id
        ).join(',');
        const res = await api.getCategoryPlaylists(code, NUM_PLAYLIST_RANDOM, ignore_ids, 'latest', 1);
        const data = await res.data.data;
        setPlaylistsRandom([
            ...playlistsRandom,
            ...data
        ]);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
        sx: {
            width: '100%'
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HomeCarousel_HomeCarousel__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                windowWidth: windowSize.width
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                sx: {
                    p: `0 ${SIDE_PADDING}px`
                },
                children: [
                    categories.length >= 2 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Shared_CategoryBarWithoutSwiper__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        categoryList: categories,
                        isSm: isSm,
                        windowWidth: getInnerWidth(),
                        onSelectCategory: onSelectCategory
                    }),
                    categories.length === 1 && initPlaylists.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                        sx: {
                            mt: '56px',
                            mb: '34px'
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                            sx: {
                                ...isSm ? _utils_constants__WEBPACK_IMPORTED_MODULE_12__/* .TEXT_STYLE.h3 */ .gN.h3 : _utils_constants__WEBPACK_IMPORTED_MODULE_12__/* .TEXT_STYLE.h2 */ .gN.h2,
                                color: _utils_constants__WEBPACK_IMPORTED_MODULE_12__/* .COLORS.white */ .DM.white
                            },
                            children: (ref = categories[0]) === null || ref === void 0 ? void 0 : ref.name
                        })
                    }),
                    categories.length >= 2 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Divider, {
                        sx: {
                            borderColor: _utils_constants__WEBPACK_IMPORTED_MODULE_12__/* .COLORS.bg2 */ .DM.bg2,
                            mt: '24px'
                        }
                    }),
                    (categoryCode1 === null || categoryCode1 === '') && initPlaylists.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                        sx: {
                            mt: '48px'
                        },
                        children: initPlaylists.map((i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Shared_PlaylistByCategory__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                i: i,
                                isSm: isSm,
                                playlistImgWidth: getPlaylistImgWidth()
                            }, i.name)
                        )
                    }),
                    categoryCode1 !== null && categoryCode1 !== '' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                            sx: {
                                mt: '48px'
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                                    content: categoryName1,
                                    isSm: isSm,
                                    haveArrow: false
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                    sx: {
                                        ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_15__/* .flexStyle */ .X)('flex-start', 'center'),
                                        columnGap: `${SPACE_BETWEEN}px`,
                                        mb: '56px',
                                        flexWrap: 'wrap',
                                        rowGap: isSm ? '16px' : '32px'
                                    },
                                    children: playlists.map((item)=>{
                                        /*#__PURE__*/ return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                            href: `/playlists/${item.id}`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                style: {
                                                    width: `calc(100% / ${isSm ? 2 : 5} - 19.2px)`
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Thumbnail_Thumbnail__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                    style: {
                                                        width: '100%',
                                                        height: `${getPlaylistImgWidth()}px`,
                                                        borderRadius: 3
                                                    },
                                                    avtSrc: item.avatar.thumb_url,
                                                    alt: `images ${item.name}`,
                                                    promotion: (item === null || item === void 0 ? void 0 : item.promotion) || ''
                                                })
                                            })
                                        }, item.id);
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            ![
                '/children-book',
                '/summary-book'
            ].includes(pathname) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                sx: {
                    width: '100%'
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "https://picsum.photos/1190/420?img=2",
                    style: {
                        width: '100%',
                        height: '260px'
                    }
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                sx: {
                    p: `0 ${SIDE_PADDING}px`,
                    mt: ![
                        '/children-book',
                        '/summary-book'
                    ].includes(pathname) ? '58px' : 0,
                    ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_15__/* .flexStyle */ .X)('flex-start', 'center'),
                    rowGap: isSm ? '20px' : '22px',
                    flexWrap: 'wrap',
                    ...!isSm && {
                        columnGap: '28px'
                    }
                },
                children: [
                    playlistsRandom.map((i)=>{
                        /*#__PURE__*/ return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                            href: `/playlists/${i === null || i === void 0 ? void 0 : i.id}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: isSm ? 'random-playlist-link-mb' : 'random-playlist-link-desktop',
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RandomPlayList, {
                                    data: i,
                                    isSm: isSm
                                })
                            })
                        }, i === null || i === void 0 ? void 0 : i.id);
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                        sx: {
                            mt: '26px',
                            mb: '80px',
                            textAlign: 'center',
                            width: '100%'
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {
                            onClick: handleLoadMoreRandomPlaylist,
                            variant: "outlined",
                            sx: {
                                textTransform: 'none',
                                color: _utils_constants__WEBPACK_IMPORTED_MODULE_12__/* .COLORS.white */ .DM.white,
                                ..._utils_constants__WEBPACK_IMPORTED_MODULE_12__/* .TEXT_STYLE.title1 */ .gN.title1,
                                borderRadius: '8px',
                                height: '48px',
                                width: '142px',
                                border: `1px solid ${_utils_constants__WEBPACK_IMPORTED_MODULE_12__/* .COLORS.blackStroker */ .DM.blackStroker}`
                            },
                            children: "Xem th\xeam"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Shared_PublisherComponent__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                isSm: isSm
            })
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_router__WEBPACK_IMPORTED_MODULE_2__.withRouter)(AudioBook));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3888:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CategoryBarWithoutSwiper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_ArrowDropDown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(765);
/* harmony import */ var _mui_icons_material_ArrowDropDown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ArrowDropDown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_ArrowDropUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(815);
/* harmony import */ var _mui_icons_material_ArrowDropUp__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ArrowDropUp__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7426);
/* harmony import */ var _utils_flexStyle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8210);

//import react 

// import MUI components



// import utils


function CategoryBarWithoutSwiper(props) {
    const { categoryList , isSm , windowWidth , onSelectCategory  } = props;
    const { 0: activeCategory , 1: setActiveCategory  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: isAllCategory , 1: setisAllCategory  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: showedItems , 1: setShowedItems  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const newCategoryList = [
        {
            "name": "Tất cả",
            "sub_name": null,
            "code": ''
        },
        ...categoryList
    ];
    const width = 100;
    const height = 36;
    let numItems = 7;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getNumItem();
        setisAllCategory(false);
    }, [
        categoryList,
        windowWidth,
        isSm
    ]);
    const getNumItem = ()=>{
        if (isSm) {
            numItems *= 2;
        }
        const itemsList = newCategoryList.slice(0, numItems);
        setShowedItems(itemsList);
    };
    const handleSelectCategory = (e)=>{
        const categoryCode = e.currentTarget.id;
        setActiveCategory(categoryCode);
        onSelectCategory(categoryCode);
    };
    const handleShowAllCategory = ()=>{
        setisAllCategory(true);
        setShowedItems(newCategoryList);
    };
    const handleShowLessCategory = ()=>{
        setisAllCategory(false);
        getNumItem();
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        style: {
            marginTop: isSm ? 20 : 48,
            ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_6__/* .flexStyle */ .X)('flex-start', 'center')
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
            sx: {
                ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_6__/* .flexStyle */ .X)('flex-start', 'center'),
                rowGap: '20px',
                overflow: 'hidden',
                flexWrap: 'wrap'
            },
            children: [
                showedItems.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        sx: {
                            ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_6__/* .flexStyle */ .X)('flex-start', 'center')
                        },
                        children: [
                            item.code !== activeCategory && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                id: item.code,
                                onClick: handleSelectCategory,
                                sx: {
                                    ...isSm ? _utils_constants__WEBPACK_IMPORTED_MODULE_5__/* .TEXT_STYLE.title2 */ .gN.title2 : _utils_constants__WEBPACK_IMPORTED_MODULE_5__/* .TEXT_STYLE.title1 */ .gN.title1,
                                    color: _utils_constants__WEBPACK_IMPORTED_MODULE_5__/* .COLORS.VZ_Text_content */ .DM.VZ_Text_content,
                                    whiteSpace: 'nowrap',
                                    cursor: 'pointer',
                                    padding: '5px 15px',
                                    boxSizing: 'border-box'
                                },
                                children: item.name
                            }),
                            item.code === activeCategory && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                id: item.code,
                                onClick: handleSelectCategory,
                                sx: {
                                    ...isSm ? _utils_constants__WEBPACK_IMPORTED_MODULE_5__/* .TEXT_STYLE.title2 */ .gN.title2 : _utils_constants__WEBPACK_IMPORTED_MODULE_5__/* .TEXT_STYLE.title1 */ .gN.title1,
                                    color: _utils_constants__WEBPACK_IMPORTED_MODULE_5__/* .COLORS.white */ .DM.white,
                                    bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_5__/* .COLORS.bg3 */ .DM.bg3,
                                    whiteSpace: 'nowrap',
                                    cursor: 'pointer',
                                    padding: '5px 15px',
                                    borderRadius: '25px',
                                    boxSizing: 'border-box',
                                    '&:hover': {
                                        bgcolor: 'rgb(219 173 173 / 26%)'
                                    }
                                },
                                children: item.name
                            })
                        ]
                    }, item.code)
                ),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    sx: {
                        minWidth: `${width}px`,
                        minHeight: `${height}px`,
                        ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_6__/* .flexStyle */ .X)('center', 'center')
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                        onClick: isAllCategory ? handleShowLessCategory : handleShowAllCategory,
                        sx: {
                            ..._utils_constants__WEBPACK_IMPORTED_MODULE_5__/* .TEXT_STYLE.title1 */ .gN.title1,
                            color: _utils_constants__WEBPACK_IMPORTED_MODULE_5__/* .COLORS.VZ_Text_content */ .DM.VZ_Text_content,
                            textTransform: 'none',
                            p: '5px 15px'
                        },
                        endIcon: isAllCategory ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ArrowDropUp__WEBPACK_IMPORTED_MODULE_4___default()), {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ArrowDropDown__WEBPACK_IMPORTED_MODULE_3___default()), {}),
                        children: isAllCategory ? 'Thu gọn' : 'Xem th\xeam'
                    })
                })
            ]
        })
    }));
};


/***/ }),

/***/ 3825:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PlaylistByCategory)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
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

// import next link

// import MUI components

// import swiper


// import others components

// import icons

// import utils


const Title = (props)=>{
    const { isSm , content , haveArrow  } = props;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        sx: {
            ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_8__/* .flexStyle */ .X)('flex-start', 'center'),
            marginBottom: '24px'
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                sx: {
                    ...isSm ? _utils_constants__WEBPACK_IMPORTED_MODULE_7__/* .TEXT_STYLE.h3 */ .gN.h3 : _utils_constants__WEBPACK_IMPORTED_MODULE_7__/* .TEXT_STYLE.h2 */ .gN.h2,
                    color: _utils_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.white */ .DM.white
                },
                children: content
            }),
            haveArrow && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
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
swiper__WEBPACK_IMPORTED_MODULE_3__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation
]);
function PlaylistByCategory(props) {
    const { i , playlistImgWidth , isSm  } = props;
    const numItemsPerLine = isSm ? 2.5 : 5;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                content: i.name,
                isSm: isSm,
                haveArrow: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_node_modules_swiper_react_swiper_react_js__WEBPACK_IMPORTED_MODULE_4__/* .Swiper */ .t, {
                slidesPerView: numItemsPerLine,
                spaceBetween: 24,
                style: {
                    marginBottom: isSm ? 35 : 56
                },
                children: i.data.map((item)=>{
                    /*#__PURE__*/ return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_node_modules_swiper_react_swiper_react_js__WEBPACK_IMPORTED_MODULE_4__/* .SwiperSlide */ .o, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            href: `/playlists/${item.id}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Thumbnail_Thumbnail__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    style: {
                                        width: `100%`,
                                        height: `${playlistImgWidth}px`,
                                        borderRadius: 3
                                    },
                                    avtSrc: item.avatar.thumb_url,
                                    alt: `images ${item.name}`,
                                    promotion: (item === null || item === void 0 ? void 0 : item.promotion) || ''
                                })
                            })
                        })
                    }, item.id);
                })
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;