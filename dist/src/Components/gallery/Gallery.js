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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { galleryData } from './galleryData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
var Gallery = function () {
    useEffect(function () {
    });
    var _a = useState(0), current = _a[0], setCurrent = _a[1];
    var length = galleryData.length;
    if (!Array.isArray(galleryData) || galleryData.length <= 0) {
        return null;
    }
    function pervSlide() {
        setCurrent(current === 0 ? length - 1 : current - 1);
        console.log(current);
    }
    var nextSlide = function () {
        setCurrent(current === length - 1 ? 0 : current + 1);
        console.log(current);
    };
    return (_jsxs("div", __assign({ className: 'slider' }, { children: [_jsx(FaArrowAltCircleLeft, { className: 'left-arrow', onClick: pervSlide }, void 0), galleryData.map(function (slide, index) {
                return (_jsx("div", __assign({ id: index === current ? "slideActive" : "", className: "slide" }, { children: index === current && (_jsx("img", { onClick: nextSlide, src: require("./sneaks/".concat(slide.image, ".png")), alt: slide.image, className: 'image' }, void 0)) }), index));
            }), _jsx(FaArrowAltCircleRight, { className: 'right-arrow', onClick: nextSlide }, void 0)] }), void 0));
};
export default Gallery;
