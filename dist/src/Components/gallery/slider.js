var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import "./styles.css";
var images = ['1', '2', '3', '4', '5'];
export var Snippets = function () {
    var _a = React.useState(window.innerWidth), width = _a[0], setWidth = _a[1];
    var breakpoint = 1100;
    useEffect(function () {
        var handleResizeWindow = function () { return setWidth(window.innerWidth); };
        // subscribe to window resize event "onComponentDidMount"
        window.addEventListener("resize", handleResizeWindow);
        return function () {
            // unsubscribe "onComponentDestroy"
            window.removeEventListener("resize", handleResizeWindow);
        };
    });
    var NextArrow = function (_a) {
        var onClick = _a.onClick;
        return (_jsx("div", __assign({ className: 'arrow next', onClick: onClick }, { children: _jsx(FaArrowRight, {}, void 0) }), void 0));
    };
    var PervArrow = function (_a) {
        var onClick = _a.onClick;
        return (_jsx("div", __assign({ className: 'arrow perv', onClick: onClick }, { children: _jsx(FaArrowLeft, {}, void 0) }), void 0));
    };
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var _b = useState(0), imageIndex = _b[0], setImageIndex = _b[1];
    var settings = {
        infinite: true,
        lazyload: true,
        dots: false,
        speed: 800,
        slidesToShow: 3,
        swipeToSlide: true,
        autoplay: true,
        focusOnSelect: true,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0",
        nextArrow: _jsx(NextArrow, {}, void 0),
        prevArrow: _jsx(PervArrow, {}, void 0),
        beforeChange: function (current, next) { return setImageIndex(next); }
    };
    var settingsMob = {
        infinite: true,
        lazyload: true,
        dots: false,
        speed: 800,
        slidesToShow: 1,
        swipeToSlide: true,
        autoplay: true,
        focusOnSelect: true,
        slidesToScroll: 1,
        // nextArrow: <NextArrow />, 
        // prevArrow: <PervArrow />,
        beforeChange: function (current, next) { return setImageIndex(next); }
    };
    return (_jsx("div", __assign({ className: 'sslider' }, { children: _jsx("div", __assign({ className: 'slider-div' }, { children: _jsx(Slider, __assign({}, (width > breakpoint) ? settings : settingsMob, { children: images.map(function (img, index) { return (_jsx("div", __assign({ className: index === imageIndex ? "sslide activeSlide" : "sslide" }, { children: _jsx("img", { className: 'slider-img', src: require("../../assets/".concat(img, ".png")), alt: "".concat(img) }, void 0) }), void 0)); }) }), void 0) }), void 0) }), void 0));
};
