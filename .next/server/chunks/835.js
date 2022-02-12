"use strict";
exports.id = 835;
exports.ids = [835];
exports.modules = {

/***/ 2835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PlaylistThumnail)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_PersonOutlineOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9667);
/* harmony import */ var _mui_icons_material_PersonOutlineOutlined__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_PersonOutlineOutlined__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6959);
/* harmony import */ var _mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6146);
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3188);
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_icons_material_PlayArrow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9272);
/* harmony import */ var _mui_icons_material_PlayArrow__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_PlayArrow__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_flexStyle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8210);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7426);
/* harmony import */ var _utils_useWindowSize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9061);

// import next link

// import MUI components






// import utils



function PlaylistThumnail(props) {
    const { id , src , name , authors: authors1 , isBookmark , hasBookmark , hasDelete , handleConfirmDeleteModalOpen , handleBookmark , children , width  } = props;
    const windowSize = (0,_utils_useWindowSize__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    const isSm = windowSize.width <= _utils_constants__WEBPACK_IMPORTED_MODULE_8__/* .SCREEN_BREAKPOINTS.sm */ .nN.sm ? true : false;
    const clientWidth = width ? width : isSm || hasDelete ? '100%' : '45%';
    const authorsString = (authors)=>{
        if (Array.isArray(authors)) {
            if (authors.length > 0) {
                return authors.map((author)=>author.name
                ).join(',');
            }
            return null;
        }
        return authors;
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Card, {
        sx: {
            ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_10__/* .flexStyle */ .X)('flex-start', 'center'),
            columnGap: isSm ? '10px' : '20px',
            bgcolor: 'inherit',
            boxShadow: 'none',
            width: clientWidth,
            height: '100px'
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                sx: {
                    width: '100px',
                    height: '100px',
                    position: 'relative'
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        style: {
                            width: '100px',
                            height: '100px',
                            borderRadius: hasDelete ? '50%' : '4px'
                        },
                        // img src currently not working
                        src: src,
                        alt: `images ${name}`
                    }),
                    hasDelete && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_PlayArrow__WEBPACK_IMPORTED_MODULE_7___default()), {
                        fontSize: "large",
                        sx: {
                            position: 'absolute',
                            color: _utils_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.white */ .DM.white,
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%,-50%)'
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CardContent, {
                sx: {
                    ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_10__/* .flexStyle */ .X)('space-between', 'flex-start'),
                    flexDirection: 'column',
                    flex: '1 0 auto',
                    p: 0,
                    height: '100%',
                    width: isSm ? 'calc(100% - 110px)' : 'calc(100% - 120px)',
                    '&:last-child': {
                        p: 0
                    }
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        sx: {
                            ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_10__/* .flexStyle */ .X)('space-between', 'flex-start'),
                            width: '100%',
                            ...isSm && {
                                columnGap: '10px'
                            }
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                sx: {
                                    ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_10__/* .flexStyle */ .X)('flex-start', 'flex-start'),
                                    flexDirection: 'column',
                                    flex: '1 0 auto',
                                    rowGap: '6px',
                                    width: '50%'
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                        href: `/playlists/${id}`,
                                        style: {
                                            textDecoration: 'none'
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                            sx: {
                                                ...isSm ? _utils_constants__WEBPACK_IMPORTED_MODULE_8__/* .TEXT_STYLE.title2 */ .gN.title2 : _utils_constants__WEBPACK_IMPORTED_MODULE_8__/* .TEXT_STYLE.title1 */ .gN.title1,
                                                color: _utils_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.white */ .DM.white,
                                                display: '-webkit-box',
                                                textOverflow: 'ellipsis',
                                                WebkitLineClamp: 1,
                                                WebkitBoxOrient: 'vertical',
                                                overflow: 'hidden'
                                            },
                                            children: name
                                        })
                                    }),
                                    authorsString(authors1) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                        sx: {
                                            ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_10__/* .flexStyle */ .X)('flex-start', 'center'),
                                            columnGap: '6px'
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_PersonOutlineOutlined__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                sx: {
                                                    color: _utils_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.contentIcon */ .DM.contentIcon
                                                }
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                href: `/authors/${authors1[0].id}`,
                                                style: {
                                                    textDecoration: 'none'
                                                },
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                                    sx: {
                                                        ...isSm ? _utils_constants__WEBPACK_IMPORTED_MODULE_8__/* .TEXT_STYLE.content2 */ .gN.content2 : _utils_constants__WEBPACK_IMPORTED_MODULE_8__/* .TEXT_STYLE.content1 */ .gN.content1,
                                                        color: _utils_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.contentIcon */ .DM.contentIcon,
                                                        display: '-webkit-box',
                                                        textOverflow: 'ellipsis',
                                                        WebkitLineClamp: 1,
                                                        WebkitBoxOrient: 'vertical',
                                                        overflow: 'hidden'
                                                    },
                                                    children: [
                                                        authorsString(authors1),
                                                        " ",
                                                        Array.isArray(authors1) ? '(T\xe1c giả)' : ''
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    !authorsString(authors1) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                        sx: {
                                            ...isSm ? _utils_constants__WEBPACK_IMPORTED_MODULE_8__/* .TEXT_STYLE.content2 */ .gN.content2 : _utils_constants__WEBPACK_IMPORTED_MODULE_8__/* .TEXT_STYLE.content1 */ .gN.content1,
                                            color: _utils_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.contentIcon */ .DM.contentIcon
                                        },
                                        children: "Kh\xf4ng c\xf3 t\xe1c giả"
                                    })
                                ]
                            }),
                            hasBookmark && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                onClick: ()=>{
                                    handleBookmark(id);
                                },
                                sx: {
                                    ...isSm ? _utils_constants__WEBPACK_IMPORTED_MODULE_8__/* .TEXT_STYLE.title3 */ .gN.title3 : _utils_constants__WEBPACK_IMPORTED_MODULE_8__/* .TEXT_STYLE.title1 */ .gN.title1,
                                    ...isSm && {
                                        whiteSpace: 'nowrap'
                                    },
                                    color: _utils_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.white */ .DM.white,
                                    borderRadius: '22px',
                                    height: isSm ? '28px' : '48px',
                                    width: 'max-content',
                                    textTransform: 'none',
                                    bgcolor: isBookmark ? _utils_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.bg3 */ .DM.bg3 : _utils_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.main */ .DM.main,
                                    pl: '14px',
                                    pr: '14px',
                                    ':hover': {
                                        bgcolor: isBookmark ? _utils_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.bg3 */ .DM.bg3 : _utils_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.main */ .DM.main
                                    }
                                },
                                startIcon: isBookmark ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_4___default()), {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_5___default()), {}),
                                children: isBookmark ? 'Hủy đ\xe1nh dấu' : 'Đ\xe1nh dấu'
                            }),
                            hasDelete && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                                onClick: handleConfirmDeleteModalOpen,
                                id: id,
                                "aria-label": "delete",
                                size: "small",
                                sx: {
                                    color: _utils_constants__WEBPACK_IMPORTED_MODULE_8__/* .COLORS.VZ_Text_content */ .DM.VZ_Text_content,
                                    p: '0 5px 5px 5px'
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    fontSize: "small"
                                })
                            })
                        ]
                    }),
                    children
                ]
            })
        ]
    }));
};


/***/ })

};
;