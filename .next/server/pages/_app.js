"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1160:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/redux/openSidebar.js
var redux_openSidebar = __webpack_require__(7542);
// EXTERNAL MODULE: ./src/redux/OpenSearch.js
var OpenSearch = __webpack_require__(93);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: ./src/redux/token.js
var redux_token = __webpack_require__(7691);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: external "@mui/icons-material/HeadphonesOutlined"
const HeadphonesOutlined_namespaceObject = require("@mui/icons-material/HeadphonesOutlined");
var HeadphonesOutlined_default = /*#__PURE__*/__webpack_require__.n(HeadphonesOutlined_namespaceObject);
// EXTERNAL MODULE: ./src/components/Icons/index.js + 54 modules
var Icons = __webpack_require__(9587);
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
            src: "/images/logo.png",
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


const RequestsBook = ()=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
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
    const { 0: current , 1: setCurrent  } = (0,external_react_.useState)(null);
    const { 0: navigatorLink1 , 1: setNavigatorLink  } = (0,external_react_.useState)([]);
    const { 0: categories1 , 1: setCategories  } = (0,external_react_.useState)([]);
    const openSidebar = (0,external_react_redux_.useSelector)(redux_openSidebar/* selectOpenSidebar */.yG);
    const token = (0,external_react_redux_.useSelector)(redux_token/* selectToken */.rK);
    const dispatch = (0,external_react_redux_.useDispatch)();
    let open = !isSm ? true : openSidebar;
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
                    text: 'Kh\xe1m ph\xe1',
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
                    text: 'Kh\xe1m ph\xe1',
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
                text: 'T\xf3m tắt s\xe1ch',
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
                overflowX: 'hidden',
                boxSizing: 'border-box',
                borderRight: `1px solid ${constants/* COLORS.blackStroker */.DM.blackStroker}`
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
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    display: 'block'
                },
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
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/book-request",
                style: {
                    textDecoration: 'none'
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(RequestsBook, {})
                })
            })
        ]
    }));
};

// EXTERNAL MODULE: ./src/redux/openLogin.js
var redux_openLogin = __webpack_require__(9006);
// EXTERNAL MODULE: ./src/redux/payment.js
var payment = __webpack_require__(6204);
// EXTERNAL MODULE: ./src/redux/user.js
var user = __webpack_require__(7010);
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
;// CONCATENATED MODULE: external "@mui/icons-material/Search"
const Search_namespaceObject = require("@mui/icons-material/Search");
var Search_default = /*#__PURE__*/__webpack_require__.n(Search_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Clear"
const Clear_namespaceObject = require("@mui/icons-material/Clear");
var Clear_default = /*#__PURE__*/__webpack_require__.n(Clear_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/ShoppingCartOutlined"
const ShoppingCartOutlined_namespaceObject = require("@mui/icons-material/ShoppingCartOutlined");
var ShoppingCartOutlined_default = /*#__PURE__*/__webpack_require__.n(ShoppingCartOutlined_namespaceObject);
;// CONCATENATED MODULE: external "lodash/debounce"
const debounce_namespaceObject = require("lodash/debounce");
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce_namespaceObject);
// EXTERNAL MODULE: ./src/services/api.js + 1 modules
var services_api = __webpack_require__(2055);
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
        return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
            onClick: handleCloseSidebarWhenClickAccountIcon,
            href: "/account",
            style: {
                textDecoration: 'none'
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
            height: 40
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
    const { 0: avtSrc , 1: setAvtSrc  } = (0,external_react_.useState)(null);
    const { 0: numItemsInCart , 1: setNumItemsInCart  } = (0,external_react_.useState)(0);
    const { 0: searchKeyword , 1: setSearchKeyword  } = (0,external_react_.useState)('');
    const { 0: searchOnMb , 1: setSearchOnMb  } = (0,external_react_.useState)(false);
    const { 0: searchOnPC , 1: setSearchOnPC  } = (0,external_react_.useState)(false);
    const { 0: showHeaderItems , 1: setShowHeaderItems  } = (0,external_react_.useState)(true);
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
        if (token) {
            fetchUserInfo();
            return;
        }
        setAvtSrc(null);
        dispatch((0,user/* setUser */.av)(null));
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
    const fetchNumItemsInCart = async ()=>{
        const res = await api.getNumItemsInCart();
        const data = await res.data.data;
        setNumItemsInCart(data.badge);
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
        dispatch((0,user/* setUser */.av)(data));
    };
    const onOpenLogin = (e)=>{
        dispatch((0,redux_openLogin/* handleOpenLogin */.Lu)());
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
    }, 300), []);
    const handleCloseSidebarWhenClickAccountIcon = ()=>{
        dispatch((0,redux_openSidebar/* setOpen */.A_)(false));
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(AppBar, {
        position: "fixed",
        open: openSidebar,
        windowwidth: windowSize.width,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Toolbar, {
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
                                        color: constants/* COLORS.placeHolder */.DM.placeHolder
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
    }));
}
/* harmony default export */ const Header_Header = ((0,router_.withRouter)(Header));

;// CONCATENATED MODULE: external "@mui/material/Typography"
const Typography_namespaceObject = require("@mui/material/Typography");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_namespaceObject);
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
function Footer(props) {
    const openSidebar = (0,external_react_redux_.useSelector)(redux_openSidebar/* selectOpenSidebar */.yG);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        sx: {
            width: openSidebar ? `calc(100% - ${constants/* DRAWER_WIDTH */.pG}px)` : '100%',
            ...openSidebar && {
                marginLeft: `${constants/* DRAWER_WIDTH */.pG}px`
            },
            marginTop: '80px'
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Logo, {}),
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

// EXTERNAL MODULE: ./src/components/CustomDisabledButton/CustomDisabledButton.js
var CustomDisabledButton = __webpack_require__(8247);
// EXTERNAL MODULE: ./src/utils/validate.js
var validate = __webpack_require__(4050);
// EXTERNAL MODULE: ./src/utils/flexStyle.js
var utils_flexStyle = __webpack_require__(8210);
;// CONCATENATED MODULE: ./src/components/Login/Login.js

// import react module

// import redux reducer, actions



// import MUI component

// import others components

// import icons

// import utils




// import service

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
function Login() {
    const api = new services_api/* default */.Z();
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
    const dispatch = (0,external_react_redux_.useDispatch)();
    const phonePrefixList = constants/* COUNTRY_CODES */.Qd;
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
        try {
            const res = await api.getOTP(phoneNumber, countryCode);
            const data = await res.data;
            if (data.error) {
                setHasError(true);
                setError(data.error);
                return;
            }
            setStep(2);
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
                dispatch((0,redux_token/* setToken */.o4)(accessToken));
                setStep(4);
                return;
            }
            setStep(3);
        } catch (err) {
            setHasError(true);
            const errList = err.response.data.error;
            if (errList instanceof Object) {
                let errMessage = '';
                for(let e in errList){
                    const key = Object.keys(errList[e])[0];
                    const value = errList[e][key];
                    errMessage += `${key} ${value} \n`;
                }
                setError(errMessage || 'Đ\xe3 xảy ra lỗi, vui l\xf2ng thử lại!');
                return;
            }
            setError(errList);
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
            dispatch((0,redux_token/* setToken */.o4)(accessToken1));
        } catch (err) {
            setHasError(true);
            const errList = err.response.data.error;
            if (errList instanceof Object) {
                let errMessage = '';
                for(let e in errList){
                    const key = Object.keys(errList[e])[0];
                    const value = errList[e][key];
                    errMessage += `${key} ${value} \n`;
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
                    height: !isSm ? 'auto' : '70%',
                    paddingTop: '40px',
                    paddingBottom: '56px',
                    display: flexCenter.display,
                    alignItems: flexCenter.alignItems
                }
            },
            sx: {
                '& .MuiDialog-container': {
                    alignItems: 'center'
                }
            },
            children: [
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
                                                            placeholder: "986754523",
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
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                                    sx: {
                                                        textTransform: 'none',
                                                        height: '48px'
                                                    },
                                                    variant: "contained",
                                                    color: "primary",
                                                    startIcon: /*#__PURE__*/ jsx_runtime_.jsx(Icons/* FacebookButtonIcon */.$R, {}),
                                                    children: "Facebook"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                                    sx: {
                                                        textTransform: 'none',
                                                        height: '48px'
                                                    },
                                                    variant: "contained",
                                                    color: "error",
                                                    startIcon: /*#__PURE__*/ jsx_runtime_.jsx(Icons/* GoogleButtonIcon */.tb, {}),
                                                    children: "Google"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                    sx: {
                                        display: step === 2 ? flexCenter.display : 'none',
                                        alignItems: flexCenter.alignItems,
                                        flexDirection: 'column',
                                        rowGap: '25px'
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                            sx: {
                                                ...constants/* TEXT_STYLE.title1 */.gN.title1,
                                                color: constants/* COLORS.white */.DM.white,
                                                mt: '32px'
                                            },
                                            children: "Nhập m\xe3 số gồm 6 chữ số đ\xe3 gửi tới"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.TextField, {
                                            sx: {
                                                borderRadius: '4px',
                                                border: '1px solid #353535',
                                                justifyContent: 'center',
                                                height: '49px',
                                                '& .MuiOutlinedInput-root': {
                                                    height: '100%'
                                                },
                                                '& .MuiOutlinedInput-input': {
                                                    color: constants/* COLORS.white */.DM.white,
                                                    ...!isSm ? constants/* TEXT_STYLE.h2 */.gN.h2 : constants/* TEXT_STYLE.h3 */.gN.h3
                                                }
                                            },
                                            id: "phone-number",
                                            placeholder: "123456",
                                            variant: "outlined",
                                            onChange: onOTPChange
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(CustomDisabledButton/* default */.Z, {
                                            disabled: !isOTPValid,
                                            onClick: onEnterOTP,
                                            style: {
                                                width: '100%',
                                                textTransform: 'none',
                                                marginBottom: !isSm ? '50px' : '40px',
                                                height: '48px'
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
                        width: isSm ? '100%' : '80%',
                        ...(0,utils_flexStyle/* flexStyle */.X)('center', 'center'),
                        flexDirection: 'column',
                        rowGap: '24px',
                        marginTop: '32px',
                        paddingBottom: '48px'
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        sx: {
                            display: step === 3 ? flexCenter.display : 'none',
                            alignItems: flexCenter.alignItems,
                            flexDirection: 'column'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
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
                                    children: "Cập nhật th\xf4ng tin c\xe1 nh\xe2n"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                    sx: {
                                        width: '100%',
                                        display: flexCenter.display,
                                        flexDirection: 'column',
                                        rowGap: '10px'
                                    },
                                    children: [
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
                                            name: "first_name",
                                            onChange: handleChangeUserInfo,
                                            placeholder: "Họ t\xean l\xf3t"
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
                                            name: "last_name",
                                            onChange: handleChangeUserInfo,
                                            placeholder: "T\xean"
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
                                            placeholder: "Ng\xe0y sinh",
                                            name: "birthday",
                                            onChange: handleChangeUserInfo
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
                                            placeholder: "Avatar url",
                                            name: "avatar_url",
                                            onChange: handleChangeUserInfo
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
                                            name: "email",
                                            onChange: handleChangeUserInfo,
                                            placeholder: "Email"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                    onClick: onUpdateProfile,
                                    sx: {
                                        width: '100%',
                                        textTransform: 'none',
                                        marginBottom: !isSm ? '20px' : '30px',
                                        height: '48px',
                                        ...!isSm ? constants/* TEXT_STYLE.title1 */.gN.title1 : constants/* TEXT_STYLE.title2 */.gN.title2
                                    },
                                    children: "Tiếp tục"
                                })
                            ]
                        })
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
                                ...(0,utils_flexStyle/* flexStyle */.X)('center', 'center'),
                                'whiteSpace': 'pre-line'
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                onClick: handleCloseErrorDialog,
                                autoFocus: true,
                                children: "Đ\xf3ng"
                            })
                        })
                    ]
                })
            ]
        })
    }));
};

// EXTERNAL MODULE: ./src/redux/audio.js
var audio = __webpack_require__(3307);
// EXTERNAL MODULE: external "@mui/icons-material/VolumeUp"
var VolumeUp_ = __webpack_require__(8610);
var VolumeUp_default = /*#__PURE__*/__webpack_require__.n(VolumeUp_);
;// CONCATENATED MODULE: external "@mui/icons-material/Favorite"
const Favorite_namespaceObject = require("@mui/icons-material/Favorite");
var Favorite_default = /*#__PURE__*/__webpack_require__.n(Favorite_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/FilterList"
const FilterList_namespaceObject = require("@mui/icons-material/FilterList");
var FilterList_default = /*#__PURE__*/__webpack_require__.n(FilterList_namespaceObject);
// EXTERNAL MODULE: ./src/redux/playAudio.js
var playAudio = __webpack_require__(7348);
;// CONCATENATED MODULE: external "@mui/material/Slider"
const Slider_namespaceObject = require("@mui/material/Slider");
var Slider_default = /*#__PURE__*/__webpack_require__.n(Slider_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/IconButton"
const IconButton_namespaceObject = require("@mui/material/IconButton");
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Pause"
const Pause_namespaceObject = require("@mui/icons-material/Pause");
var Pause_default = /*#__PURE__*/__webpack_require__.n(Pause_namespaceObject);
// EXTERNAL MODULE: external "@mui/icons-material/PlayArrow"
var PlayArrow_ = __webpack_require__(9272);
var PlayArrow_default = /*#__PURE__*/__webpack_require__.n(PlayArrow_);
;// CONCATENATED MODULE: external "@mui/icons-material/SkipNext"
const SkipNext_namespaceObject = require("@mui/icons-material/SkipNext");
var SkipNext_default = /*#__PURE__*/__webpack_require__.n(SkipNext_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/SkipPrevious"
const SkipPrevious_namespaceObject = require("@mui/icons-material/SkipPrevious");
var SkipPrevious_default = /*#__PURE__*/__webpack_require__.n(SkipPrevious_namespaceObject);
// EXTERNAL MODULE: ./src/utils/formatDuration.js
var formatDuration = __webpack_require__(994);
;// CONCATENATED MODULE: ./src/components/PlayBar/Control.js

// import react

// import redux


// import MUI component













// import services

const WallPaper = (0,styles_.styled)('div')({
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    overflow: 'hidden'
});
const Widget = (0,styles_.styled)('div')(({ theme  })=>({
        width: '100%',
        margin: 'auto',
        position: 'relative',
        ...(0,utils_flexStyle/* flexStyle */.X)('center', 'center'),
        flexDirection: 'column',
        rowGap: '20px'
    })
);
const TinyText = (0,styles_.styled)((Typography_default()))({
    ...constants/* TEXT_STYLE.content2 */.gN.content2,
    color: constants/* COLORS.white */.DM.white
});
function Control(props) {
    const api = new services_api/* default */.Z();
    const { audioData  } = props;
    const theme = (0,styles_.useTheme)();
    const dispatch = (0,external_react_redux_.useDispatch)();
    const { 0: position , 1: setPosition  } = (0,external_react_.useState)(0);
    const { 0: paused , 1: setPaused  } = (0,external_react_.useState)(true);
    const { 0: audio , 1: setAudio  } = (0,external_react_.useState)(new Audio(''));
    // useEffect(() => {
    //     if (audioData) {
    //         setPosition(audioData.position);
    //     }
    // }, [audioData]);
    (0,external_react_.useEffect)(()=>{
        if (paused) {
            audio.pause();
            addAudioToListening(audioData.id, position, audioData.playlist.id);
        } else {
            audio.play();
        }
    }, [
        paused
    ]);
    (0,external_react_.useEffect)(()=>{
        // addAudioToListening(audioData.id, position, audioData.playlist.id);
        audio.addEventListener('ended', ()=>setPaused(true)
        );
        // audio.addEventListener('timeupdate', (e) => {
        //     const currentTime = e.target.currentTime;
        //     setPosition(currentTime)
        // });
        return ()=>{
            audio.removeEventListener('ended', ()=>setPaused(true)
            );
        };
    }, []);
    const onPlayClick = ()=>{
        setPaused(!paused);
        dispatch((0,playAudio/* togglePlayAudio */.ez)());
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
    const mainIconColor = constants/* COLORS.white */.DM.white;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        sx: {
            width: '100%',
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Widget, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        sx: {
                            ...(0,utils_flexStyle/* flexStyle */.X)('center', 'center'),
                            columnGap: '36px',
                            width: '100%'
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                sx: {
                                    textAlign: 'center'
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Icons/* Loop */.rN, {
                                        fill: constants/* COLORS.bg4 */.DM.bg4,
                                        bgcolor: "none"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        sx: {
                                            ...constants/* TEXT_STYLE.caption10Regular */.gN.caption10Regular,
                                            color: constants/* COLORS.contentIcon */.DM.contentIcon,
                                            whiteSpace: 'nowrap',
                                            marginTop: '9px'
                                        },
                                        children: "Lặp lại 1 b\xe0i"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                "aria-label": "previous song",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((SkipPrevious_default()), {
                                    sx: {
                                        width: '24px',
                                        height: '24px'
                                    },
                                    htmlColor: mainIconColor
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                sx: {
                                    border: `1px solid ${constants/* COLORS.white */.DM.white}`
                                },
                                "aria-label": paused ? 'play' : 'pause',
                                onClick: onPlayClick,
                                children: paused ? /*#__PURE__*/ jsx_runtime_.jsx((PlayArrow_default()), {
                                    sx: {
                                        width: '24px',
                                        height: '24px'
                                    },
                                    htmlColor: mainIconColor
                                }) : /*#__PURE__*/ jsx_runtime_.jsx((Pause_default()), {
                                    sx: {
                                        width: '24px',
                                        height: '24px'
                                    },
                                    htmlColor: mainIconColor
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                "aria-label": "next song",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((SkipNext_default()), {
                                    sx: {
                                        width: '24px',
                                        height: '24px'
                                    },
                                    htmlColor: mainIconColor
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                sx: {
                                    textAlign: 'center'
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Icons/* Clock */.SU, {
                                        fill: constants/* COLORS.bg4 */.DM.bg4,
                                        bgcolor: "none"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        sx: {
                                            ...constants/* TEXT_STYLE.caption10Regular */.gN.caption10Regular,
                                            color: constants/* COLORS.contentIcon */.DM.contentIcon,
                                            whiteSpace: 'nowrap',
                                            marginTop: '4px'
                                        },
                                        children: "Hẹn giờ"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        sx: {
                            ...(0,utils_flexStyle/* flexStyle */.X)('center', 'center'),
                            columnGap: '10px',
                            width: '100%',
                            mt: -2,
                            p: '0 25px',
                            boxSizing: 'border-box'
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(TinyText, {
                                children: (0,formatDuration/* default */.Z)(position)
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Slider_default()), {
                                "aria-label": "time-indicator",
                                size: "small",
                                value: position,
                                min: 0,
                                step: 1,
                                max: audioData === null || audioData === void 0 ? void 0 : audioData.duration,
                                onChange: (_, value)=>setPosition(value)
                                ,
                                sx: {
                                    height: 3,
                                    color: '#CFD1E9',
                                    '& .MuiSlider-track': {
                                        color: '#754ADA'
                                    },
                                    '& .MuiSlider-thumb': {
                                        width: 12,
                                        height: 12,
                                        color: constants/* COLORS.white */.DM.white,
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
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TinyText, {
                                children: [
                                    "-",
                                    (0,formatDuration/* default */.Z)((audioData === null || audioData === void 0 ? void 0 : audioData.duration) - position)
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(WallPaper, {})
        ]
    }));
};

// EXTERNAL MODULE: external "@mui/icons-material/Close"
var Close_ = __webpack_require__(4173);
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_);
// EXTERNAL MODULE: external "@mui/icons-material/GraphicEq"
var GraphicEq_ = __webpack_require__(3042);
var GraphicEq_default = /*#__PURE__*/__webpack_require__.n(GraphicEq_);
;// CONCATENATED MODULE: ./src/components/AudioPlay/AudioListModals.js

// import react

// import next router

// import MUI components



// import utils



// import services

function AudioList(props) {
    const api = new services_api/* default */.Z();
    const { playlistId , anchorAudioList , onCloseAudioList , audioId  } = props;
    const navigate = (0,router_.useRouter)();
    const open = Boolean(anchorAudioList);
    const windowSize = (0,useWindowSize/* default */.Z)();
    const isSm = windowSize.width <= constants/* SCREEN_BREAKPOINTS.sm */.nN.sm ? true : false;
    const { 0: audiosList , 1: setAudiosList  } = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        async function fetchPlaylistAudios() {
            const res = await api.getPlaylistAudios(playlistId);
            const data = res.data.data;
            setAudiosList(data);
        }
        ;
        fetchPlaylistAudios();
    }, [
        playlistId
    ]);
    const handleSelectAudio = (id)=>{
        navigate.push(`/audio-play/${id}`);
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(material_.Popover, {
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
                bgcolor: constants/* COLORS.bg2 */.DM.bg2,
                maxHeight: isSm ? '70%' : 'calc(100% - 210px)'
            }
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
            sx: {
                bgcolor: constants/* COLORS.bg2 */.DM.bg2,
                width: '100%',
                height: '100%',
                padding: isSm ? '26px 15px 0 15px' : '26px 32px 0 26px',
                boxSizing: 'border-box',
                borderRadius: '10px'
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                    sx: {
                        ...(0,utils_flexStyle/* flexStyle */.X)('space-between', 'flex-start'),
                        width: '100%'
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
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                            "aria-label": "close",
                            onClick: onCloseAudioList,
                            sx: {
                                p: 0,
                                color: constants/* COLORS.white */.DM.white,
                                bgcolor: constants/* COLORS.bg2 */.DM.bg2
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {})
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.List, {
                        sx: {
                            width: '100%'
                        },
                        children: audiosList.map((value)=>{
                            return(/*#__PURE__*/ jsx_runtime_.jsx(material_.ListItem, {
                                sx: {
                                    paddingLeft: 0,
                                    paddingRight: '20px',
                                    borderTop: `.5px solid ${constants/* COLORS.placeHolder */.DM.placeHolder}`,
                                    height: '72px',
                                    ...value.id === audioId && {
                                        bgcolor: constants/* COLORS.bg3 */.DM.bg3,
                                        borderRadius: '6px',
                                        borderTop: 'none'
                                    },
                                    ...value.id === audioId + 1 && {
                                        borderTop: 'none'
                                    }
                                },
                                secondaryAction: value.id === audioId && /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                                    edge: "end",
                                    "aria-label": "delete",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((GraphicEq_default()), {
                                        sx: {
                                            color: constants/* COLORS.contentIcon */.DM.contentIcon
                                        }
                                    })
                                }),
                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItemButton, {
                                    role: undefined,
                                    onClick: ()=>{
                                        handleSelectAudio(value.id);
                                    },
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

;// CONCATENATED MODULE: ./src/components/PlayBar/PlayBar.js

// import react

// import redux


// import MUI components




// import others components


// import utils



// import services

function PlayBar() {
    var ref, ref1, ref2, ref3, ref4, ref5;
    const api = new services_api/* default */.Z();
    const windowSize = (0,useWindowSize/* default */.Z)();
    const isSm = windowSize.width <= constants/* SCREEN_BREAKPOINTS.sm */.nN.sm ? true : false;
    const audioData = (0,external_react_redux_.useSelector)(audio/* selectAudioData */.a$);
    const { 0: volume , 1: setVolume  } = (0,external_react_.useState)(40);
    const { 0: anchorAudioList , 1: setAnchorAudioList  } = (0,external_react_.useState)(null);
    const { 0: isLiked , 1: setIsLiked  } = (0,external_react_.useState)(audioData === null || audioData === void 0 ? void 0 : (ref = audioData.meta_data) === null || ref === void 0 ? void 0 : ref.is_liked);
    const dispatch = (0,external_react_redux_.useDispatch)();
    const openAudioList = (event)=>{
        setAnchorAudioList(event.currentTarget);
    };
    const onCloseAudioList = ()=>{
        setAnchorAudioList(null);
    };
    const handleLikeAudio = ()=>{
        async function likeAudio() {
            const audioId = audioData.id;
            const res = await api.likeAudio(audioId);
            const data = await res.data;
            if (!data.error) {
                setIsLiked(data.data['is_liked']);
            }
        }
        likeAudio();
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        id: "play-audio-bar",
        sx: {
            bgcolor: constants/* COLORS.bg1 */.DM.bg1,
            ...(0,utils_flexStyle/* flexStyle */.X)('center', 'center'),
            columnGap: '3%',
            boxSizing: 'border-box',
            padding: `${isSm ? 24 : 0}px 0`,
            width: '100%',
            zIndex: 1201,
            position: 'fixed',
            bottom: 0,
            borderTop: `1px solid ${constants/* COLORS.blackStroker */.DM.blackStroker}`,
            height: isSm ? 'auto' : '100px',
            ...isSm && {
                flexDirection: 'column-reverse',
                rowGap: '16px'
            }
        },
        children: [
            isSm && /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                sx: {
                    bgcolor: constants/* COLORS.bg2 */.DM.bg2,
                    ...constants/* TEXT_STYLE.content2 */.gN.content2,
                    color: constants/* COLORS.contentIcon */.DM.contentIcon,
                    textTransform: 'none',
                    width: isSm ? '100%' : '157px',
                    ...!isSm && {
                        maxWidth: '50%'
                    },
                    height: '36px',
                    borderRadius: '4px'
                },
                startIcon: /*#__PURE__*/ jsx_runtime_.jsx((FilterList_default()), {}),
                onClick: openAudioList,
                children: "Danh s\xe1ch audio"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                sx: {
                    width: isSm ? '100%' : '30%',
                    ...(0,utils_flexStyle/* flexStyle */.X)('flex-start', 'center'),
                    columnGap: '15px'
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                        sx: {
                            width: isSm ? '65px' : '65px',
                            height: isSm ? '65px' : '65px'
                        },
                        alt: "audio avt",
                        src: audioData === null || audioData === void 0 ? void 0 : (ref1 = audioData.playlist) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.avatar) === null || ref2 === void 0 ? void 0 : ref2.thumb_url
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                        sx: {
                            ...(0,utils_flexStyle/* flexStyle */.X)('center', 'flex-start'),
                            columnGap: '28px'
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                        sx: {
                                            ...isSm ? constants/* TEXT_STYLE.title2 */.gN.title2 : constants/* TEXT_STYLE.title1 */.gN.title1,
                                            color: constants/* COLORS.white */.DM.white,
                                            marginBottom: `${isSm ? 4 : 8}px`,
                                            display: '-webkit-box',
                                            textOverflow: 'ellipsis',
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden'
                                        },
                                        children: audioData === null || audioData === void 0 ? void 0 : (ref3 = audioData.playlist) === null || ref3 === void 0 ? void 0 : ref3.name
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                        sx: {
                                            ...constants/* TEXT_STYLE.content3 */.gN.content3,
                                            color: constants/* COLORS.contentIcon */.DM.contentIcon
                                        },
                                        children: [
                                            "T\xe1c giả: ",
                                            audioData === null || audioData === void 0 ? void 0 : (ref4 = audioData.playlist) === null || ref4 === void 0 ? void 0 : ref4.author_string
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Favorite_default()), {
                                onClick: handleLikeAudio,
                                sx: {
                                    color: isLiked ? constants/* COLORS.main */.DM.main : constants/* COLORS.contentIcon */.DM.contentIcon
                                }
                            })
                        ]
                    })
                ]
            }),
            isSm && /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {
                sx: {
                    borderColor: constants/* COLORS.blackStroker */.DM.blackStroker,
                    margin: '5px 0',
                    width: '100%',
                    borderWidth: '1px'
                }
            }),
            Object.keys(audioData).length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: {
                    width: isSm ? '100%' : '40%'
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(Control, {
                    audioData: audioData
                })
            }),
            !isSm && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                sx: {
                    width: '30%',
                    ...(0,utils_flexStyle/* flexStyle */.X)('center', 'flex-end')
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                        sx: {
                            bgcolor: constants/* COLORS.bg2 */.DM.bg2,
                            ...constants/* TEXT_STYLE.content2 */.gN.content2,
                            color: constants/* COLORS.contentIcon */.DM.contentIcon,
                            textTransform: 'none',
                            width: '157px',
                            maxWidth: '50%',
                            height: '36px',
                            borderRadius: '4px'
                        },
                        startIcon: /*#__PURE__*/ jsx_runtime_.jsx((FilterList_default()), {}),
                        onClick: openAudioList,
                        children: "Danh s\xe1ch audio"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {
                        sx: {
                            color: constants/* COLORS.blackStroker */.DM.blackStroker,
                            margin: '0 24px'
                        },
                        orientation: "vertical",
                        flexItem: true
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Stack, {
                        spacing: 2,
                        direction: "row",
                        sx: {
                            mb: 1,
                            width: '50%'
                        },
                        alignItems: "center",
                        justifyContent: "flex-start",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((VolumeUp_default()), {
                                sx: {
                                    color: constants/* COLORS.contentIcon */.DM.contentIcon
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Slider, {
                                sx: {
                                    height: 2,
                                    width: '100px',
                                    maxWidth: '100%',
                                    color: constants/* COLORS.blackStroker */.DM.blackStroker,
                                    '& .MuiSlider-track': {
                                        color: constants/* COLORS.white */.DM.white
                                    },
                                    '& .MuiSlider-thumb': {
                                        width: 12,
                                        height: 12,
                                        color: constants/* COLORS.white */.DM.white,
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
                                onChange: (_, value)=>setVolume(value)
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(AudioList, {
                anchorAudioList: anchorAudioList,
                onCloseAudioList: onCloseAudioList,
                playlistId: audioData === null || audioData === void 0 ? void 0 : (ref5 = audioData.playlist) === null || ref5 === void 0 ? void 0 : ref5.id,
                audioId: audioData === null || audioData === void 0 ? void 0 : audioData.id
            })
        ]
    }));
};

// EXTERNAL MODULE: external "@mui/icons-material/AccessTime"
var AccessTime_ = __webpack_require__(6666);
var AccessTime_default = /*#__PURE__*/__webpack_require__.n(AccessTime_);
// EXTERNAL MODULE: ./src/components/Thumbnail/Thumbnail.js
var Thumbnail = __webpack_require__(2579);
// EXTERNAL MODULE: ./src/utils/getRecentlyKeywordsFromLocal.js
var getRecentlyKeywordsFromLocal = __webpack_require__(6507);
;// CONCATENATED MODULE: ./src/components/Search/SearchModal.js

// import react

// import redux


// import next link

// import MUI components


// import others components

// import utils




// import service

function useOutsideAlerter(ref) {
    const dispatch = (0,external_react_redux_.useDispatch)();
    (0,external_react_.useEffect)(()=>{
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target) && event.target.id !== 'input-search') {
                dispatch((0,OpenSearch/* handleCloseSearch */.wF)());
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
    const api = new services_api/* default */.Z();
    const windowSize = (0,useWindowSize/* default */.Z)();
    const isSm = windowSize.width <= constants/* SCREEN_BREAKPOINTS.sm */.nN.sm ? true : false;
    const wrapperRef = (0,external_react_.useRef)(null);
    useOutsideAlerter(wrapperRef);
    const { 0: commonKeywords , 1: setCommonKeywords  } = (0,external_react_.useState)([]);
    const { 0: recentlyKeywords , 1: setRecentlyKeywords  } = (0,external_react_.useState)([]);
    const { 0: playlistRecommendation , 1: setPlaylistRecommendation  } = (0,external_react_.useState)([]);
    const searchStatus = (0,external_react_redux_.useSelector)(OpenSearch/* selectSearchStatus */.ui);
    const playlistResults = (0,external_react_redux_.useSelector)(OpenSearch/* selectPlaylistResults */.rN);
    (0,external_react_.useEffect)(()=>{
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
            const keywords = (0,getRecentlyKeywordsFromLocal/* default */.Z)();
            if (keywords) {
                setRecentlyKeywords(keywords);
            }
        }
        fetchRecentlyKeywork();
        fetchPlaylistRecommendation();
        fetchCommonKeywords();
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        ref: wrapperRef,
        sx: {
            bgcolor: constants/* COLORS.bg2 */.DM.bg2,
            width: isSm ? '100%' : '40%',
            borderRadius: '4px',
            p: isSm ? '32px 23px' : '32px',
            position: 'fixed',
            top: '70px',
            left: isSm ? 0 : '300px',
            zIndex: '1300',
            boxSizing: 'border-box'
        },
        children: [
            !searchStatus && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                sx: {
                    width: '100%'
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        sx: {
                            ...(0,utils_flexStyle/* flexStyle */.X)('center', 'flex-start'),
                            flexDirection: 'column',
                            rowGap: '16px'
                        },
                        children: recentlyKeywords.map((i, idx)=>/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: `/search?searchKey=${i}`,
                                style: {
                                    textDecoration: 'none'
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                    sx: {
                                        ...(0,utils_flexStyle/* flexStyle */.X)('flex-start', 'center'),
                                        columnGap: '8px'
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((AccessTime_default()), {
                                            sx: {
                                                color: constants/* COLORS.contentIcon */.DM.contentIcon
                                            }
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                            sx: {
                                                ...constants/* TEXT_STYLE.content2 */.gN.content2,
                                                color: constants/* COLORS.white */.DM.white
                                            },
                                            children: i
                                        })
                                    ]
                                })
                            }, idx)
                        )
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {
                        sx: {
                            borderBottomColor: constants/* COLORS.placeHolder */.DM.placeHolder,
                            m: '32px 0 '
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                sx: {
                                    ...constants/* TEXT_STYLE.title1 */.gN.title1,
                                    color: constants/* COLORS.white */.DM.white,
                                    mb: '16px'
                                },
                                children: "Từ kh\xf3a phổ biến"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                sx: {
                                    ...(0,utils_flexStyle/* flexStyle */.X)('flex-start', 'center'),
                                    flexWrap: 'wrap',
                                    columnGap: '8px',
                                    rowGap: '8px'
                                },
                                children: commonKeywords.map((i, idx)=>/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: `/search?searchKey=${i.name}`,
                                        style: {
                                            textDecoration: 'none'
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Chip, {
                                            label: i.name,
                                            sx: {
                                                bgcolor: constants/* COLORS.bg3 */.DM.bg3,
                                                color: constants/* COLORS.VZ_Text_content */.DM.VZ_Text_content,
                                                ...constants/* TEXT_STYLE.content2 */.gN.content2
                                            }
                                        })
                                    }, idx)
                                )
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                        sx: {
                            width: '100%',
                            mt: '32px'
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                sx: {
                                    ...constants/* TEXT_STYLE.title1 */.gN.title1,
                                    color: constants/* COLORS.white */.DM.white,
                                    mb: '16px'
                                },
                                children: "C\xf3 thể bạn muốn nghe"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                sx: {
                                    ...(0,utils_flexStyle/* flexStyle */.X)('flex-start', 'center'),
                                    width: '100%',
                                    flexWrap: 'wrap',
                                    columnGap: '8px',
                                    rowGap: '8px'
                                },
                                children: playlistRecommendation.map((i)=>{
                                    var ref;
                                    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        className: "playlist-recommendation-item",
                                        href: `/playlists/${i === null || i === void 0 ? void 0 : i.id}`,
                                        style: {
                                            textDecoration: 'none',
                                            width: 'calc(100% / 5 - 6.4px)'
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Thumbnail/* default */.Z, {
                                            style: {
                                                width: '100%',
                                                height: '100%',
                                                borderRadius: 3
                                            },
                                            avtSrc: i === null || i === void 0 ? void 0 : (ref = i.avatar) === null || ref === void 0 ? void 0 : ref.thumb_url,
                                            alt: `images ${i === null || i === void 0 ? void 0 : i.id}`
                                        })
                                    }, i.id));
                                })
                            })
                        ]
                    })
                ]
            }),
            searchStatus && /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: {
                    width: '100%',
                    ...(0,utils_flexStyle/* flexStyle */.X)('center', 'flex-start'),
                    flexDirection: 'column',
                    rowGap: '18px'
                },
                children: playlistResults.map((i)=>/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: `/playlists/${i.id}`,
                        style: {
                            textDecoration: 'none'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                            sx: {
                                ...(0,utils_flexStyle/* flexStyle */.X)('flex-start', 'center'),
                                columnGap: '15px',
                                height: '40px'
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                    sx: {
                                        width: '40px',
                                        height: '100%'
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: i.avatar.thumb_url,
                                        style: {
                                            width: '100%',
                                            height: '100%'
                                        }
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                    sx: {
                                        ...(0,utils_flexStyle/* flexStyle */.X)('center', 'space-between'),
                                        flexDirection: 'column'
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                            sx: {
                                                ...constants/* TEXT_STYLE.content1 */.gN.content1,
                                                color: constants/* COLORS.white */.DM.white,
                                                display: '-webkit-box',
                                                textOverflow: 'ellipsis',
                                                WebkitLineClamp: 1,
                                                WebkitBoxOrient: 'vertical',
                                                overflow: 'hidden'
                                            },
                                            children: i.name
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                            sx: {
                                                ...constants/* TEXT_STYLE.content2 */.gN.content2,
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
            })
        ]
    }));
};

// EXTERNAL MODULE: ./src/redux/store.js
var store = __webpack_require__(2917);
;// CONCATENATED MODULE: ./src/components/Layout/Layout.js

















function Layout(props) {
    const { children  } = props;
    const location = (0,router_.useRouter)();
    const { 0: includeFooter , 1: setIncludeFooter  } = (0,external_react_.useState)(null);
    let windowSize = (0,useWindowSize/* default */.Z)();
    const isSm = windowSize.width > constants/* SCREEN_BREAKPOINTS.sm */.nN.sm ? false : true;
    const openSidebar = (0,external_react_redux_.useSelector)(redux_openSidebar/* selectOpenSidebar */.yG);
    const { 0: anchorEl , 1: setAnchorEl  } = (0,external_react_.useState)(null);
    const anchorSearchElId = (0,external_react_redux_.useSelector)(OpenSearch/* selectAnchorEl */.Ud);
    const openSearchModal = Boolean(anchorEl);
    const dispatch = (0,external_react_redux_.useDispatch)();
    (0,external_react_.useEffect)(()=>{
        if (!isSm && !openSidebar) {
            dispatch((0,redux_openSidebar/* setOpen */.A_)(true));
        }
    }, [
        isSm,
        openSidebar
    ]);
    (0,external_react_.useEffect)(()=>{
        function checkIncludeFooter() {
            if (constants/* EXCLUDE_FOOTER.some */.MI.some((e)=>e.test(location.asPath)
            )) {
                setIncludeFooter(false);
            } else {
                setIncludeFooter(true);
            }
        }
        checkIncludeFooter();
        dispatch((0,OpenSearch/* handleCloseSearch */.wF)());
    }, [
        location
    ]);
    (0,external_react_.useEffect)(()=>{
        getSearchAnchorEl();
    }, [
        anchorSearchElId
    ]);
    const openPlayBar = ()=>{
        const playAudioPathRegex = new RegExp('^/audio-play/[0-9]+$');
        if (playAudioPathRegex.test(location.asPath)) {
            if (!isSm) {
                return true;
            }
            if (!openSidebar) {
                return true;
            }
        }
        return false;
    };
    const getSearchAnchorEl = ()=>{
        const el = document.getElementById(anchorSearchElId);
        setAnchorEl(el);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Login, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Header_Header, {}),
            openSearchModal && /*#__PURE__*/ jsx_runtime_.jsx(Search, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(SidebarMenu, {}),
            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                sx: {
                    flexGrow: 1,
                    height: `calc(100% - ${constants/* HEADER_HEIGHT */.Mz})`,
                    marginTop: !isSm ? constants/* HEADER_HEIGHT */.Mz : constants/* HEADER_HEIGHT_MB */.hX,
                    width: openSidebar ? `calc(100% - ${constants/* DRAWER_WIDTH */.pG}px)` : '100%',
                    ...openSidebar && !isSm && {
                        marginLeft: `${constants/* DRAWER_WIDTH */.pG}px`
                    }
                },
                children: children
            }),
            openPlayBar() && /*#__PURE__*/ jsx_runtime_.jsx(PlayBar, {}),
            includeFooter && /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    }));
}
/* harmony default export */ const Layout_Layout = (({ children  })=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
        store: store/* default */.Z,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
            children: children
        })
    }));

;// CONCATENATED MODULE: ./pages/_app.js






 // core Swiper
 // Navigation module


function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(Layout_Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    }));
}
/* harmony default export */ const _app = (MyApp);


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

/***/ 6507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getRecentlyKeywork)
/* harmony export */ });
function getRecentlyKeywork() {
    const keyFromLocalStorage = localStorage.getItem('keywords');
    if (keyFromLocalStorage) {
        const parsedKeywords = JSON.parse(keyFromLocalStorage || '[]');
        return parsedKeywords;
    }
};


/***/ }),

/***/ 8308:
/***/ ((module) => {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ 6666:
/***/ ((module) => {

module.exports = require("@mui/icons-material/AccessTime");

/***/ }),

/***/ 4173:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Close");

/***/ }),

/***/ 3042:
/***/ ((module) => {

module.exports = require("@mui/icons-material/GraphicEq");

/***/ }),

/***/ 9272:
/***/ ((module) => {

module.exports = require("@mui/icons-material/PlayArrow");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,691,609,587,579,917,121], () => (__webpack_exec__(1160)));
module.exports = __webpack_exports__;

})();