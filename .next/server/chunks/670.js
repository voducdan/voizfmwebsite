"use strict";
exports.id = 670;
exports.ids = [670];
exports.modules = {

/***/ 6647:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ getChangedParams)
/* harmony export */ });
/* harmony import */ var _params_list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8411);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1682);



function getChangedParams(swiperParams, oldParams, children, oldChildren) {
  const keys = [];
  if (!oldParams) return keys;

  const addKey = key => {
    if (keys.indexOf(key) < 0) keys.push(key);
  };

  const oldChildrenKeys = oldChildren.map(child => child.key);
  const childrenKeys = children.map(child => child.key);
  if (oldChildrenKeys.join('') !== childrenKeys.join('')) addKey('children');
  if (oldChildren.length !== children.length) addKey('children');
  const watchParams = _params_list_js__WEBPACK_IMPORTED_MODULE_0__/* .paramsList.filter */ .O.filter(key => key[0] === '_').map(key => key.replace(/_/, ''));
  watchParams.forEach(key => {
    if (key in swiperParams && key in oldParams) {
      if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .isObject */ .Kn)(swiperParams[key]) && (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .isObject */ .Kn)(oldParams[key])) {
        const newKeys = Object.keys(swiperParams[key]);
        const oldKeys = Object.keys(oldParams[key]);

        if (newKeys.length !== oldKeys.length) {
          addKey(key);
        } else {
          newKeys.forEach(newKey => {
            if (swiperParams[key][newKey] !== oldParams[key][newKey]) {
              addKey(key);
            }
          });
          oldKeys.forEach(oldKey => {
            if (swiperParams[key][oldKey] !== oldParams[key][oldKey]) addKey(key);
          });
        }
      } else if (swiperParams[key] !== oldParams[key]) {
        addKey(key);
      }
    }
  });
  return keys;
}



/***/ }),

/***/ 426:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ getChildren)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);


function processChildren(c) {
  const slides = [];
  react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(c).forEach(child => {
    if (child.type && child.type.displayName === 'SwiperSlide') {
      slides.push(child);
    } else if (child.props && child.props.children) {
      processChildren(child.props.children).forEach(slide => slides.push(slide));
    }
  });
  return slides;
}

function getChildren(c) {
  const slides = [];
  const slots = {
    'container-start': [],
    'container-end': [],
    'wrapper-start': [],
    'wrapper-end': []
  };
  react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(c).forEach(child => {
    if (child.type && child.type.displayName === 'SwiperSlide') {
      slides.push(child);
    } else if (child.props && child.props.slot && slots[child.props.slot]) {
      slots[child.props.slot].push(child);
    } else if (child.props && child.props.children) {
      const foundSlides = processChildren(child.props.children);

      if (foundSlides.length > 0) {
        foundSlides.forEach(slide => slides.push(slide));
      } else {
        slots['container-end'].push(child);
      }
    } else {
      slots['container-end'].push(child);
    }
  });
  return {
    slides,
    slots
  };
}



/***/ }),

/***/ 4916:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ getParams)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3877);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1682);
/* harmony import */ var _params_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8411);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_0__]);
swiper__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function getParams(obj = {}) {
  const params = {
    on: {}
  };
  const events = {};
  const passedParams = {};
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .extend */ .l7)(params, swiper__WEBPACK_IMPORTED_MODULE_0__["default"].defaults);
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .extend */ .l7)(params, swiper__WEBPACK_IMPORTED_MODULE_0__["default"].extendedDefaults);
  params._emitClasses = true;
  params.init = false;
  const rest = {};
  const allowedParams = _params_list_js__WEBPACK_IMPORTED_MODULE_2__/* .paramsList.map */ .O.map(key => key.replace(/_/, ''));
  Object.keys(obj).forEach(key => {
    if (allowedParams.indexOf(key) >= 0) {
      if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .isObject */ .Kn)(obj[key])) {
        params[key] = {};
        passedParams[key] = {};
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .extend */ .l7)(params[key], obj[key]);
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .extend */ .l7)(passedParams[key], obj[key]);
      } else {
        params[key] = obj[key];
        passedParams[key] = obj[key];
      }
    } else if (key.search(/on[A-Z]/) === 0 && typeof obj[key] === 'function') {
      events[`${key[2].toLowerCase()}${key.substr(3)}`] = obj[key];
    } else {
      rest[key] = obj[key];
    }
  });
  ['navigation', 'pagination', 'scrollbar'].forEach(key => {
    if (params[key] === true) params[key] = {};
    if (params[key] === false) delete params[key];
  });
  return {
    params,
    passedParams,
    rest,
    events
  };
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8726:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ initSwiper),
/* harmony export */   "x": () => (/* binding */ mountSwiper)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3877);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1682);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_0__]);
swiper__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function initSwiper(swiperParams) {
  return new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](swiperParams);
}

function mountSwiper({
  el,
  nextEl,
  prevEl,
  paginationEl,
  scrollbarEl,
  swiper
}, swiperParams) {
  if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .needsNavigation */ .d7)(swiperParams) && nextEl && prevEl) {
    swiper.params.navigation.nextEl = nextEl;
    swiper.originalParams.navigation.nextEl = nextEl;
    swiper.params.navigation.prevEl = prevEl;
    swiper.originalParams.navigation.prevEl = prevEl;
  }

  if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .needsPagination */ .fw)(swiperParams) && paginationEl) {
    swiper.params.pagination.el = paginationEl;
    swiper.originalParams.pagination.el = paginationEl;
  }

  if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .needsScrollbar */ .XE)(swiperParams) && scrollbarEl) {
    swiper.params.scrollbar.el = scrollbarEl;
    swiper.originalParams.scrollbar.el = scrollbarEl;
  }

  swiper.init(el);
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2096:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ calcLoopedSlides),
/* harmony export */   "R": () => (/* binding */ renderLoop)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3877);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_1__]);
swiper__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function calcLoopedSlides(slides, swiperParams) {
  let slidesPerViewParams = swiperParams.slidesPerView;

  if (swiperParams.breakpoints) {
    const breakpoint = swiper__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.getBreakpoint(swiperParams.breakpoints);
    const breakpointOnlyParams = breakpoint in swiperParams.breakpoints ? swiperParams.breakpoints[breakpoint] : undefined;

    if (breakpointOnlyParams && breakpointOnlyParams.slidesPerView) {
      slidesPerViewParams = breakpointOnlyParams.slidesPerView;
    }
  }

  let loopedSlides = Math.ceil(parseFloat(swiperParams.loopedSlides || slidesPerViewParams, 10));
  loopedSlides += swiperParams.loopAdditionalSlides;

  if (loopedSlides > slides.length) {
    loopedSlides = slides.length;
  }

  return loopedSlides;
}

function renderLoop(swiper, slides, swiperParams) {
  const modifiedSlides = slides.map((child, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child, {
      swiper,
      'data-swiper-slide-index': index
    });
  });

  function duplicateSlide(child, index, position) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child, {
      key: `${child.key}-duplicate-${index}-${position}`,
      className: `${child.props.className || ''} ${swiperParams.slideDuplicateClass}`
    });
  }

  if (swiperParams.loopFillGroupWithBlank) {
    const blankSlidesNum = swiperParams.slidesPerGroup - modifiedSlides.length % swiperParams.slidesPerGroup;

    if (blankSlidesNum !== swiperParams.slidesPerGroup) {
      for (let i = 0; i < blankSlidesNum; i += 1) {
        const blankSlide = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: `${swiperParams.slideClass} ${swiperParams.slideBlankClass}`
        });
        modifiedSlides.push(blankSlide);
      }
    }
  }

  if (swiperParams.slidesPerView === 'auto' && !swiperParams.loopedSlides) {
    swiperParams.loopedSlides = modifiedSlides.length;
  }

  const loopedSlides = calcLoopedSlides(modifiedSlides, swiperParams);
  const prependSlides = [];
  const appendSlides = [];
  modifiedSlides.forEach((child, index) => {
    if (index < loopedSlides) {
      appendSlides.push(duplicateSlide(child, index, 'prepend'));
    }

    if (index < modifiedSlides.length && index >= modifiedSlides.length - loopedSlides) {
      prependSlides.push(duplicateSlide(child, index, 'append'));
    }
  });

  if (swiper) {
    swiper.loopedSlides = loopedSlides;
  }

  return [...prependSlides, ...modifiedSlides, ...appendSlides];
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8411:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ paramsList)
/* harmony export */ });
/* underscore in name -> watch for changes */
const paramsList = ['modules', 'init', '_direction', 'touchEventsTarget', 'initialSlide', '_speed', 'cssMode', 'updateOnWindowResize', 'resizeObserver', 'nested', 'focusableElements', '_enabled', '_width', '_height', 'preventInteractionOnTransition', 'userAgent', 'url', '_edgeSwipeDetection', '_edgeSwipeThreshold', '_freeMode', '_autoHeight', 'setWrapperSize', 'virtualTranslate', '_effect', 'breakpoints', '_spaceBetween', '_slidesPerView', '_grid', '_slidesPerGroup', '_slidesPerGroupSkip', '_slidesPerGroupAuto', '_centeredSlides', '_centeredSlidesBounds', '_slidesOffsetBefore', '_slidesOffsetAfter', 'normalizeSlideIndex', '_centerInsufficientSlides', '_watchOverflow', 'roundLengths', 'touchRatio', 'touchAngle', 'simulateTouch', '_shortSwipes', '_longSwipes', 'longSwipesRatio', 'longSwipesMs', '_followFinger', 'allowTouchMove', '_threshold', 'touchMoveStopPropagation', 'touchStartPreventDefault', 'touchStartForcePreventDefault', 'touchReleaseOnEdges', 'uniqueNavElements', '_resistance', '_resistanceRatio', '_watchSlidesProgress', '_grabCursor', 'preventClicks', 'preventClicksPropagation', '_slideToClickedSlide', '_preloadImages', 'updateOnImagesReady', '_loop', '_loopAdditionalSlides', '_loopedSlides', '_loopFillGroupWithBlank', 'loopPreventsSlide', '_allowSlidePrev', '_allowSlideNext', '_swipeHandler', '_noSwiping', 'noSwipingClass', 'noSwipingSelector', 'passiveListeners', 'containerModifierClass', 'slideClass', 'slideBlankClass', 'slideActiveClass', 'slideDuplicateActiveClass', 'slideVisibleClass', 'slideDuplicateClass', 'slideNextClass', 'slideDuplicateNextClass', 'slidePrevClass', 'slideDuplicatePrevClass', 'wrapperClass', 'runCallbacksOnInit', 'observer', 'observeParents', 'observeSlideChildren', // modules
'a11y', 'autoplay', '_controller', 'coverflowEffect', 'cubeEffect', 'fadeEffect', 'flipEffect', 'creativeEffect', 'cardsEffect', 'hashNavigation', 'history', 'keyboard', 'lazy', 'mousewheel', '_navigation', '_pagination', 'parallax', '_scrollbar', '_thumbs', 'virtual', 'zoom'];


/***/ }),

/***/ 3670:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* reexport safe */ _swiper_js__WEBPACK_IMPORTED_MODULE_0__.t),
/* harmony export */   "o": () => (/* reexport safe */ _swiper_slide_js__WEBPACK_IMPORTED_MODULE_1__.o)
/* harmony export */ });
/* harmony import */ var _swiper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9752);
/* harmony import */ var _swiper_slide_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5662);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_swiper_js__WEBPACK_IMPORTED_MODULE_0__]);
_swiper_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Swiper React 7.2.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: October 27, 2021
 */




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5662:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ SwiperSlide)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1682);
/* harmony import */ var _use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5149);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const SwiperSlide = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({
  tag: Tag = 'div',
  children,
  className = '',
  swiper,
  zoom,
  virtualIndex,
  ...rest
} = {}, externalRef) => {
  const slideElRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [slideClasses, setSlideClasses] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('swiper-slide');

  function updateClasses(_s, el, classNames) {
    if (el === slideElRef.current) {
      setSlideClasses(classNames);
    }
  }

  (0,_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_1__/* .useIsomorphicLayoutEffect */ .L)(() => {
    if (externalRef) {
      externalRef.current = slideElRef.current;
    }

    if (!slideElRef.current || !swiper) {
      return;
    }

    if (swiper.destroyed) {
      if (slideClasses !== 'swiper-slide') {
        setSlideClasses('swiper-slide');
      }

      return;
    }

    swiper.on('_slideClass', updateClasses); // eslint-disable-next-line

    return () => {
      if (!swiper) return;
      swiper.off('_slideClass', updateClasses);
    };
  });
  (0,_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_1__/* .useIsomorphicLayoutEffect */ .L)(() => {
    if (swiper && slideElRef.current) {
      setSlideClasses(swiper.getSlideClasses(slideElRef.current));
    }
  }, [swiper]);
  let slideData;

  if (typeof children === 'function') {
    slideData = {
      isActive: slideClasses.indexOf('swiper-slide-active') >= 0 || slideClasses.indexOf('swiper-slide-duplicate-active') >= 0,
      isVisible: slideClasses.indexOf('swiper-slide-visible') >= 0,
      isDuplicate: slideClasses.indexOf('swiper-slide-duplicate') >= 0,
      isPrev: slideClasses.indexOf('swiper-slide-prev') >= 0 || slideClasses.indexOf('swiper-slide-duplicate-prev') >= 0,
      isNext: slideClasses.indexOf('swiper-slide-next') >= 0 || slideClasses.indexOf('swiper-slide-duplicate-next') >= 0
    };
  }

  const renderChildren = () => {
    return typeof children === 'function' ? children(slideData) : children;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Tag, _extends({
    ref: slideElRef,
    className: (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .uniqueClasses */ .kI)(`${slideClasses}${className ? ` ${className}` : ''}`),
    "data-swiper-slide-index": virtualIndex
  }, rest), zoom ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "swiper-zoom-container",
    "data-swiper-zoom": typeof zoom === 'number' ? zoom : undefined
  }, renderChildren()) : renderChildren());
});
SwiperSlide.displayName = 'SwiperSlide';


/***/ }),

/***/ 9752:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ Swiper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var _get_params_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4916);
/* harmony import */ var _init_swiper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8726);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1682);
/* harmony import */ var _loop_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2096);
/* harmony import */ var _get_changed_params_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6647);
/* harmony import */ var _get_children_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(426);
/* harmony import */ var _update_swiper_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1068);
/* harmony import */ var _virtual_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2193);
/* harmony import */ var _use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5149);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_get_params_js__WEBPACK_IMPORTED_MODULE_1__, _init_swiper_js__WEBPACK_IMPORTED_MODULE_2__, _loop_js__WEBPACK_IMPORTED_MODULE_3__]);
([_get_params_js__WEBPACK_IMPORTED_MODULE_1__, _init_swiper_js__WEBPACK_IMPORTED_MODULE_2__, _loop_js__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











const Swiper = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({
  className,
  tag: Tag = 'div',
  wrapperTag: WrapperTag = 'div',
  children,
  onSwiper,
  ...rest
} = {}, externalElRef) => {
  let eventsAssigned = false;
  const [containerClasses, setContainerClasses] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('swiper');
  const [virtualData, setVirtualData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [breakpointChanged, setBreakpointChanged] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const initializedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const swiperElRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const swiperRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const oldPassedParamsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const oldSlides = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const nextElRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const prevElRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const paginationElRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const scrollbarElRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    params: swiperParams,
    passedParams,
    rest: restProps,
    events
  } = (0,_get_params_js__WEBPACK_IMPORTED_MODULE_1__/* .getParams */ .Q)(rest);
  const {
    slides,
    slots
  } = (0,_get_children_js__WEBPACK_IMPORTED_MODULE_4__/* .getChildren */ .G)(children);

  const onBeforeBreakpoint = () => {
    setBreakpointChanged(!breakpointChanged);
  };

  Object.assign(swiperParams.on, {
    _containerClasses(swiper, classes) {
      setContainerClasses(classes);
    }

  });

  if (!swiperElRef.current) {
    // init swiper
    Object.assign(swiperParams.on, events);
    eventsAssigned = true;
    swiperRef.current = (0,_init_swiper_js__WEBPACK_IMPORTED_MODULE_2__/* .initSwiper */ .Q)(swiperParams);

    swiperRef.current.loopCreate = () => {};

    swiperRef.current.loopDestroy = () => {};

    if (swiperParams.loop) {
      swiperRef.current.loopedSlides = (0,_loop_js__WEBPACK_IMPORTED_MODULE_3__/* .calcLoopedSlides */ .f)(slides, swiperParams);
    }

    if (swiperRef.current.virtual && swiperRef.current.params.virtual.enabled) {
      swiperRef.current.virtual.slides = slides;
      const extendWith = {
        cache: false,
        slides,
        renderExternal: setVirtualData,
        renderExternalUpdate: false
      };
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_7__/* .extend */ .l7)(swiperRef.current.params.virtual, extendWith);
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_7__/* .extend */ .l7)(swiperRef.current.originalParams.virtual, extendWith);
    }
  } // Listen for breakpoints change


  if (swiperRef.current) {
    swiperRef.current.on('_beforeBreakpoint', onBeforeBreakpoint);
  }

  const attachEvents = () => {
    if (eventsAssigned || !events || !swiperRef.current) return;
    Object.keys(events).forEach(eventName => {
      swiperRef.current.on(eventName, events[eventName]);
    });
  };

  const detachEvents = () => {
    if (!events || !swiperRef.current) return;
    Object.keys(events).forEach(eventName => {
      swiperRef.current.off(eventName, events[eventName]);
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return () => {
      if (swiperRef.current) swiperRef.current.off('_beforeBreakpoint', onBeforeBreakpoint);
    };
  }); // set initialized flag

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!initializedRef.current && swiperRef.current) {
      swiperRef.current.emitSlidesClasses();
      initializedRef.current = true;
    }
  }); // mount swiper

  (0,_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_6__/* .useIsomorphicLayoutEffect */ .L)(() => {
    if (externalElRef) {
      externalElRef.current = swiperElRef.current;
    }

    if (!swiperElRef.current) return;
    (0,_init_swiper_js__WEBPACK_IMPORTED_MODULE_2__/* .mountSwiper */ .x)({
      el: swiperElRef.current,
      nextEl: nextElRef.current,
      prevEl: prevElRef.current,
      paginationEl: paginationElRef.current,
      scrollbarEl: scrollbarElRef.current,
      swiper: swiperRef.current
    }, swiperParams);
    if (onSwiper) onSwiper(swiperRef.current); // eslint-disable-next-line

    return () => {
      if (swiperRef.current && !swiperRef.current.destroyed) {
        swiperRef.current.destroy(true, false);
      }
    };
  }, []); // watch for params change

  (0,_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_6__/* .useIsomorphicLayoutEffect */ .L)(() => {
    attachEvents();
    const changedParams = (0,_get_changed_params_js__WEBPACK_IMPORTED_MODULE_8__/* .getChangedParams */ .s)(passedParams, oldPassedParamsRef.current, slides, oldSlides.current);
    oldPassedParamsRef.current = passedParams;
    oldSlides.current = slides;

    if (changedParams.length && swiperRef.current && !swiperRef.current.destroyed) {
      (0,_update_swiper_js__WEBPACK_IMPORTED_MODULE_9__/* .updateSwiper */ .Z)({
        swiper: swiperRef.current,
        slides,
        passedParams,
        changedParams,
        nextEl: nextElRef.current,
        prevEl: prevElRef.current,
        scrollbarEl: scrollbarElRef.current,
        paginationEl: paginationElRef.current
      });
    }

    return () => {
      detachEvents();
    };
  }); // update on virtual update

  (0,_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_6__/* .useIsomorphicLayoutEffect */ .L)(() => {
    (0,_virtual_js__WEBPACK_IMPORTED_MODULE_5__/* .updateOnVirtualData */ .R)(swiperRef.current);
  }, [virtualData]); // bypass swiper instance to slides

  function renderSlides() {
    if (swiperParams.virtual) {
      return (0,_virtual_js__WEBPACK_IMPORTED_MODULE_5__/* .renderVirtual */ .v)(swiperRef.current, slides, virtualData);
    }

    if (!swiperParams.loop || swiperRef.current && swiperRef.current.destroyed) {
      return slides.map(child => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child, {
          swiper: swiperRef.current
        });
      });
    }

    return (0,_loop_js__WEBPACK_IMPORTED_MODULE_3__/* .renderLoop */ .R)(swiperRef.current, slides, swiperParams);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Tag, _extends({
    ref: swiperElRef,
    className: (0,_utils_js__WEBPACK_IMPORTED_MODULE_7__/* .uniqueClasses */ .kI)(`${containerClasses}${className ? ` ${className}` : ''}`)
  }, restProps), slots['container-start'], (0,_utils_js__WEBPACK_IMPORTED_MODULE_7__/* .needsNavigation */ .d7)(swiperParams) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    ref: prevElRef,
    className: "swiper-button-prev"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    ref: nextElRef,
    className: "swiper-button-next"
  })), (0,_utils_js__WEBPACK_IMPORTED_MODULE_7__/* .needsScrollbar */ .XE)(swiperParams) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    ref: scrollbarElRef,
    className: "swiper-scrollbar"
  }), (0,_utils_js__WEBPACK_IMPORTED_MODULE_7__/* .needsPagination */ .fw)(swiperParams) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    ref: paginationElRef,
    className: "swiper-pagination"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(WrapperTag, {
    className: "swiper-wrapper"
  }, slots['wrapper-start'], renderSlides(), slots['wrapper-end']), slots['container-end']);
});
Swiper.displayName = 'Swiper';

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1068:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ updateSwiper)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1682);


function updateSwiper({
  swiper,
  slides,
  passedParams,
  changedParams,
  nextEl,
  prevEl,
  scrollbarEl,
  paginationEl
}) {
  const updateParams = changedParams.filter(key => key !== 'children' && key !== 'direction');
  const {
    params: currentParams,
    pagination,
    navigation,
    scrollbar,
    virtual,
    thumbs
  } = swiper;
  let needThumbsInit;
  let needControllerInit;
  let needPaginationInit;
  let needScrollbarInit;
  let needNavigationInit;

  if (changedParams.includes('thumbs') && passedParams.thumbs && passedParams.thumbs.swiper && currentParams.thumbs && !currentParams.thumbs.swiper) {
    needThumbsInit = true;
  }

  if (changedParams.includes('controller') && passedParams.controller && passedParams.controller.control && currentParams.controller && !currentParams.controller.control) {
    needControllerInit = true;
  }

  if (changedParams.includes('pagination') && passedParams.pagination && (passedParams.pagination.el || paginationEl) && (currentParams.pagination || currentParams.pagination === false) && pagination && !pagination.el) {
    needPaginationInit = true;
  }

  if (changedParams.includes('scrollbar') && passedParams.scrollbar && (passedParams.scrollbar.el || scrollbarEl) && (currentParams.scrollbar || currentParams.scrollbar === false) && scrollbar && !scrollbar.el) {
    needScrollbarInit = true;
  }

  if (changedParams.includes('navigation') && passedParams.navigation && (passedParams.navigation.prevEl || prevEl) && (passedParams.navigation.nextEl || nextEl) && (currentParams.navigation || currentParams.navigation === false) && navigation && !navigation.prevEl && !navigation.nextEl) {
    needNavigationInit = true;
  }

  const destroyModule = mod => {
    if (!swiper[mod]) return;
    swiper[mod].destroy();

    if (mod === 'navigation') {
      currentParams[mod].prevEl = undefined;
      currentParams[mod].nextEl = undefined;
      swiper[mod].prevEl = undefined;
      swiper[mod].nextEl = undefined;
    } else {
      currentParams[mod].el = undefined;
      swiper[mod].el = undefined;
    }
  };

  updateParams.forEach(key => {
    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(currentParams[key]) && (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(passedParams[key])) {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .extend */ .l7)(currentParams[key], passedParams[key]);
    } else {
      const newValue = passedParams[key];

      if ((newValue === true || newValue === false) && (key === 'navigation' || key === 'pagination' || key === 'scrollbar')) {
        if (newValue === false) {
          destroyModule(key);
        }
      } else {
        currentParams[key] = passedParams[key];
      }
    }
  });

  if (changedParams.includes('children') && virtual && currentParams.virtual.enabled) {
    virtual.slides = slides;
    virtual.update(true);
  } else if (changedParams.includes('children') && swiper.lazy && swiper.params.lazy.enabled) {
    swiper.lazy.load();
  }

  if (needThumbsInit) {
    const initialized = thumbs.init();
    if (initialized) thumbs.update(true);
  }

  if (needControllerInit) {
    swiper.controller.control = currentParams.controller.control;
  }

  if (needPaginationInit) {
    if (paginationEl) currentParams.pagination.el = paginationEl;
    pagination.init();
    pagination.render();
    pagination.update();
  }

  if (needScrollbarInit) {
    if (scrollbarEl) currentParams.scrollbar.el = scrollbarEl;
    scrollbar.init();
    scrollbar.updateSize();
    scrollbar.setTranslate();
  }

  if (needNavigationInit) {
    if (nextEl) currentParams.navigation.nextEl = nextEl;
    if (prevEl) currentParams.navigation.prevEl = prevEl;
    navigation.init();
    navigation.update();
  }

  if (changedParams.includes('allowSlideNext')) {
    swiper.allowSlideNext = passedParams.allowSlideNext;
  }

  if (changedParams.includes('allowSlidePrev')) {
    swiper.allowSlidePrev = passedParams.allowSlidePrev;
  }

  if (changedParams.includes('direction')) {
    swiper.changeDirection(passedParams.direction, false);
  }

  swiper.update();
}



/***/ }),

/***/ 5149:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ useIsomorphicLayoutEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);


function useIsomorphicLayoutEffect(callback, deps) {
  // eslint-disable-next-line
  if (typeof window === 'undefined') return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(callback, deps);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(callback, deps);
}



/***/ }),

/***/ 1682:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Kn": () => (/* binding */ isObject),
/* harmony export */   "l7": () => (/* binding */ extend),
/* harmony export */   "d7": () => (/* binding */ needsNavigation),
/* harmony export */   "fw": () => (/* binding */ needsPagination),
/* harmony export */   "XE": () => (/* binding */ needsScrollbar),
/* harmony export */   "kI": () => (/* binding */ uniqueClasses)
/* harmony export */ });
function isObject(o) {
  return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
}

function extend(target, src) {
  const noExtend = ['__proto__', 'constructor', 'prototype'];
  Object.keys(src).filter(key => noExtend.indexOf(key) < 0).forEach(key => {
    if (typeof target[key] === 'undefined') target[key] = src[key];else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
      if (src[key].__swiper__) target[key] = src[key];else extend(target[key], src[key]);
    } else {
      target[key] = src[key];
    }
  });
}

function needsNavigation(params = {}) {
  return params.navigation && typeof params.navigation.nextEl === 'undefined' && typeof params.navigation.prevEl === 'undefined';
}

function needsPagination(params = {}) {
  return params.pagination && typeof params.pagination.el === 'undefined';
}

function needsScrollbar(params = {}) {
  return params.scrollbar && typeof params.scrollbar.el === 'undefined';
}

function uniqueClasses(classNames = '') {
  const classes = classNames.split(' ').map(c => c.trim()).filter(c => !!c);
  const unique = [];
  classes.forEach(c => {
    if (unique.indexOf(c) < 0) unique.push(c);
  });
  return unique.join(' ');
}



/***/ }),

/***/ 2193:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ renderVirtual),
/* harmony export */   "R": () => (/* binding */ updateOnVirtualData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);


function updateOnVirtualData(swiper) {
  if (!swiper || swiper.destroyed || !swiper.params.virtual || swiper.params.virtual && !swiper.params.virtual.enabled) return;
  swiper.updateSlides();
  swiper.updateProgress();
  swiper.updateSlidesClasses();

  if (swiper.lazy && swiper.params.lazy.enabled) {
    swiper.lazy.load();
  }

  if (swiper.parallax && swiper.params.parallax && swiper.params.parallax.enabled) {
    swiper.parallax.setTranslate();
  }
}

function renderVirtual(swiper, slides, virtualData) {
  if (!virtualData) return null;
  const style = swiper.isHorizontal() ? {
    [swiper.rtlTranslate ? 'right' : 'left']: `${virtualData.offset}px`
  } : {
    top: `${virtualData.offset}px`
  };
  return slides.filter((child, index) => index >= virtualData.from && index <= virtualData.to).map(child => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child, {
      swiper,
      style
    });
  });
}



/***/ })

};
;