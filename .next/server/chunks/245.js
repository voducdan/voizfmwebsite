"use strict";
exports.id = 245;
exports.ids = [245];
exports.modules = {

/***/ 4002:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _redux_playAudio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7348);
/* harmony import */ var _redux_audio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3307);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2055);
// import reducer, actions


// import service

const fetchAudioUrl = async (dispatch, id, setErrorMessage, setOpenUpdateRequiredModal, setOpenUnauthorizedModal, setOpenSnackbar)=>{
    const api = new _services_api__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z();
    try {
        const resAudioFile = await api.getAudioFile(id);
        const data = await resAudioFile.data.data;
        const resAudio = await api.getAudio(id);
        const audioDataFromApi = await resAudio.data.data;
        dispatch((0,_redux_playAudio__WEBPACK_IMPORTED_MODULE_0__/* .setAudioHls */ .IS)(data.url));
        dispatch((0,_redux_audio__WEBPACK_IMPORTED_MODULE_1__/* .setAudioData */ .Bt)(audioDataFromApi));
    } catch (err) {
        var ref;
        console.log(err);
        const status = err === null || err === void 0 ? void 0 : (ref = err.response) === null || ref === void 0 ? void 0 : ref.status;
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchAudioUrl);


/***/ }),

/***/ 2482:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _redux_payment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6204);
/* harmony import */ var _redux_openLogin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9006);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2055);
// import reducer, actions


// import service

const handleAddToCart = async (dispatch, router, cart, playlistId, moveToCart, setAddToCartErrorMessage, setAddToCartError)=>{
    const api = new _services_api__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z();
    // add to cart store
    const isItemExists = cart.length > 0 && cart.some((i)=>i.id === playlistId
    );
    if (isItemExists && moveToCart) {
        router.push('/cart');
    }
    if (!isItemExists) {
        async function fetchPlaylist(id) {
            const res = await api.getPlaylistDetail(id);
            const playlist = res.data.data;
            return playlist;
        }
        try {
            let playlist = null;
            let id = null;
            if (typeof playlistId === 'object') {
                playlist = playlistId;
                id = playlistId.id;
            } else {
                id = playlistId;
                playlist = await fetchPlaylist(id);
            }
            const res = await api.addToCart(id);
            const result = await res.data;
            if (result.code === 0) {
                setAddToCartErrorMessage(result.error);
                setAddToCartError(true);
                setTimeout(()=>{
                    setAddToCartError(false);
                }, 1500);
                return;
            }
            const tmpCart = [
                ...cart,
                playlist
            ];
            console.log(tmpCart);
            dispatch((0,_redux_payment__WEBPACK_IMPORTED_MODULE_0__/* .setCart */ .RV)(tmpCart));
            dispatch((0,_redux_payment__WEBPACK_IMPORTED_MODULE_0__/* .setAddToCartFlag */ .ES)(1));
            if (moveToCart) {
                router.push('/cart');
            }
        } catch (err) {
            console.log(err);
            const { status  } = err.response;
            if (status === 401) {
                dispatch((0,_redux_openLogin__WEBPACK_IMPORTED_MODULE_1__/* .setOpenLogin */ .e8)(true));
                return;
            }
            const errList = err.response.data.error;
            if (errList instanceof Object) {
                let errMessage = '';
                for(let e in errList){
                    const key = Object.keys(errList[e])[0];
                    const value = errList[e][key];
                    errMessage += `${value} \n`;
                }
                setAddToCartErrorMessage(errMessage || 'Đ\xe3 xảy ra lỗi, vui l\xf2ng thử lại!');
                setAddToCartError(true);
                setTimeout(()=>{
                    setAddToCartError(false);
                }, 1500);
                return;
            }
            setAddToCartErrorMessage(errList);
            setAddToCartError(true);
            setTimeout(()=>{
                setAddToCartError(false);
            }, 1500);
        }
        return;
    }
    setAddToCartErrorMessage('Sản phẩm đ\xe3 được th\xeam v\xe0o.\n Vui l\xf2ng kiểm tra lại giỏ h\xe0ng!');
    setAddToCartError(true);
    setTimeout(()=>{
        setAddToCartError(false);
    }, 1500);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleAddToCart);


/***/ }),

/***/ 5210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _redux_openLogin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9006);
/* harmony import */ var _redux_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4317);
/* harmony import */ var _fetchAudioUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4002);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2055);
// import reducer, actions



// import service

const handlePlayAudio = async (dispatch, user, audioId, playlistId, promotion, setErrorMessage, setOpenUpdateRequiredModal, setOpenUnauthorizedModal, setOpenSnackbar)=>{
    const api = new _services_api__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z();
    try {
        if (!user && promotion !== 'free') {
            dispatch((0,_redux_openLogin__WEBPACK_IMPORTED_MODULE_0__/* .setOpenLogin */ .e8)(true));
            return;
        }
        if (user) {
            await api.addListeningPlaylists(audioId, 0, playlistId);
        }
        dispatch((0,_redux_footer__WEBPACK_IMPORTED_MODULE_1__/* .setFooter */ .iG)(false));
        (0,_fetchAudioUrl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(dispatch, audioId, setErrorMessage, setOpenUpdateRequiredModal, setOpenUnauthorizedModal, setOpenSnackbar);
    } catch (err) {
        var ref, ref1;
        console.log(err);
        const errList = err === null || err === void 0 ? void 0 : (ref = err.response) === null || ref === void 0 ? void 0 : (ref1 = ref.data) === null || ref1 === void 0 ? void 0 : ref1.error;
        if (errList instanceof Object) {
            let errMessage = '';
            for(let e in errList){
                const key = Object.keys(errList[e])[0];
                const value = errList[e][key];
                errMessage += `${key} ${value} \n`;
            }
            setErrorMessage(errMessage);
            setOpenSnackbar(true);
            return;
        }
        setErrorMessage(errList);
        setOpenSnackbar(true);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handlePlayAudio);


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
    return `${hour > 0 ? `${hour}:` : ''}${minute}:${secondLeft <= 9 ? `0${secondLeft}` : secondLeft}`;
};


/***/ })

};
;