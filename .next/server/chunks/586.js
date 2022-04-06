"use strict";
exports.id = 586;
exports.ids = [586];
exports.modules = {

/***/ 9586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ShareModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4173);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3860);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(qrcode_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6158);
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_share__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Icons_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5273);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7426);
/* harmony import */ var _utils_flexStyle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8210);

// import react

// import MUI components


// import react QRcode

// import react share

// import icons

// import utils


function ShareModal(props) {
    const { url , open , setOpen , isSm  } = props;
    const shareIconSize = isSm ? 40 : 48;
    const { 0: openCopyLinkTooltop , 1: setOpenCopyLinkTooltop  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: openQRcodeDialog , 1: setOpenQRcodeDialog  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: tooltipTitle , 1: setTooltipTitle  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('Sao ch\xe9p link th\xe0nh c\xf4ng!');
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.fbAsyncInit = function() {
            FB.init({
                appId: "2746448429009176",
                autoLogAppEvents: true,
                xfbml: true,
                version: 'v13.0'
            });
        };
        // load facebook sdk script
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        })(document, 'script', 'facebook-jssdk');
    }, []);
    const handleClose = ()=>{
        setOpen(false);
    };
    const handleCopyLink = ()=>{
        if (navigator.clipboard) {
            navigator.clipboard.writeText(url);
        } else {
            setTooltipTitle('Đ\xe3 xảy ra lỗi khi sao ch\xe9p link!');
        }
        setOpenCopyLinkTooltop(true);
        setTimeout(()=>{
            setOpenCopyLinkTooltop(false);
        }, 1000);
    };
    const handleCreateQR = ()=>{
        setOpenQRcodeDialog(true);
    };
    const handleCloseQRCodeDialog = ()=>{
        setOpenQRcodeDialog(false);
    };
    const deviceType = ()=>{
        const ua = navigator.userAgent;
        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
            return "tablet";
        } else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
            return "mobile";
        }
        return "desktop";
    };
    const shareItems = [
        {
            label: 'Facebook',
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_share__WEBPACK_IMPORTED_MODULE_5__.FacebookShareButton, {
                url: url,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icons_index__WEBPACK_IMPORTED_MODULE_6__/* .FacebookClassic */ .Km, {
                        size: shareIconSize
                    }),
                    " "
                ]
            })
        },
        {
            label: 'Messenger',
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                sx: {
                    cursor: 'pointer'
                },
                onClick: ()=>{
                    if (deviceType() === 'desktop') {
                        FB.ui({
                            method: 'send',
                            link: url
                        });
                    } else {
                        window.open('fb-messenger://share?link=' + encodeURIComponent(url) + '&app_id=' + encodeURIComponent("2746448429009176"));
                    }
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icons_index__WEBPACK_IMPORTED_MODULE_6__/* .MessengerClassic */ .GV, {
                    size: shareIconSize
                })
            })
        },
        {
            label: 'QR Code',
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                sx: {
                    p: 0
                },
                onClick: handleCreateQR,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icons_index__WEBPACK_IMPORTED_MODULE_6__/* .Hyperlink */ .nW, {
                    size: shareIconSize
                })
            })
        },
        {
            label: 'Link',
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
                PopperProps: {
                    disablePortal: true
                },
                open: openCopyLinkTooltop,
                disableFocusListener: true,
                disableHoverListener: true,
                disableTouchListener: true,
                title: tooltipTitle,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                    onClick: handleCopyLink,
                    sx: {
                        p: 0
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icons_index__WEBPACK_IMPORTED_MODULE_6__.QR, {
                        size: shareIconSize
                    })
                })
            })
        }
    ];
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
        onClose: handleClose,
        open: open,
        sx: {
            '& .MuiDialog-paper': {
                bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.bg1 */ .DM.bg1,
                borderRadius: isSm ? '10px' : '30px',
                ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_8__/* .flexStyle */ .X)('center', 'center'),
                width: isSm ? '95%' : '512px',
                margin: 0
            }
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                "aria-label": "close",
                onClick: handleClose,
                sx: {
                    position: 'absolute',
                    right: 14,
                    top: 11,
                    color: _utils_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.white */ .DM.white,
                    bgcolor: _utils_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.bg2 */ .DM.bg2
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_3___default()), {})
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                sx: {
                    ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_8__/* .flexStyle */ .X)('center', 'center'),
                    flexDirection: 'column',
                    rowGap: '40px',
                    width: '70%',
                    padding: '40px 0',
                    boxSizing: 'border-box'
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                        sx: {
                            ..._utils_constants__WEBPACK_IMPORTED_MODULE_7__/* .TEXT_STYLE.h1 */ .gN.h1,
                            color: _utils_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.white */ .DM.white
                        },
                        children: "Share"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        sx: {
                            ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_8__/* .flexStyle */ .X)('center', 'center'),
                            columnGap: '56px'
                        },
                        children: shareItems.map((item, idx)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                sx: {
                                    ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_8__/* .flexStyle */ .X)('center', 'center'),
                                    flexDirection: 'column',
                                    rowGap: '16px',
                                    width: 'max-content'
                                },
                                children: [
                                    item.icon,
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                        sx: {
                                            ...isSm ? _utils_constants__WEBPACK_IMPORTED_MODULE_7__/* .TEXT_STYLE.caption12 */ .gN.caption12 : _utils_constants__WEBPACK_IMPORTED_MODULE_7__/* .TEXT_STYLE.content2 */ .gN.content2,
                                            color: _utils_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.white */ .DM.white
                                        },
                                        children: item.label
                                    })
                                ]
                            }, idx)
                        )
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
                sx: {
                    '& .MuiDialog-paper': {
                        borderRadius: isSm ? '10px' : '30px',
                        ...(0,_utils_flexStyle__WEBPACK_IMPORTED_MODULE_8__/* .flexStyle */ .X)('center', 'center'),
                        width: isSm ? '95%' : '40%',
                        margin: 0
                    }
                },
                open: openQRcodeDialog,
                onClose: handleCloseQRCodeDialog,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                        "aria-label": "close",
                        onClick: handleCloseQRCodeDialog,
                        sx: {
                            position: 'absolute',
                            right: 8,
                            top: 0,
                            color: _utils_constants__WEBPACK_IMPORTED_MODULE_7__/* .COLORS.bg2 */ .DM.bg2
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_3___default()), {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.DialogTitle, {
                        children: "QR code"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.DialogContent, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.DialogContentText, {
                            id: "alert-dialog-description",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((qrcode_react__WEBPACK_IMPORTED_MODULE_4___default()), {
                                value: url
                            })
                        })
                    })
                ]
            })
        ]
    }));
};


/***/ })

};
;