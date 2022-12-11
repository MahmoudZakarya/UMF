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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
var Header = function () {
    var _a = useState(false), hamburgerisActive = _a[0], setHamburgerisActive = _a[1];
    var menuClick = function () {
        setHamburgerisActive(!hamburgerisActive);
    };
    return (_jsx(_Fragment, { children: _jsxs("header", __assign({ className: "header" }, { children: [_jsx("a", __assign({ href: '', className: "menu_item", id: 'logo' }, { children: _jsx("img", { className: 'logo-img', src: require('../../assets/logo.png'), alt: "logo" }, void 0) }), void 0), _jsxs("nav", __assign({ className: "navigation", id: hamburgerisActive ? "navActive" : " " }, { children: [_jsx("a", __assign({ href: "#", className: "menu_item", onClick: menuClick }, { children: "Home" }), void 0), _jsx("a", __assign({ href: "#SneakPeak", className: "menu_item", onClick: menuClick }, { children: "Sneak Peak" }), void 0), _jsx("a", __assign({ href: "#utilities", className: "menu_item", onClick: menuClick }, { children: "UTILITIES" }), void 0), _jsx("a", __assign({ href: "#story", className: "menu_item", onClick: menuClick }, { children: "STORY" }), void 0), _jsx("a", __assign({ href: "#road-map", className: "menu_item", onClick: menuClick }, { children: "ROAD" }), void 0), _jsx("a", __assign({ href: "#family-line", className: "menu_item", onClick: menuClick }, { children: "FAMILY" }), void 0), _jsx("a", __assign({ href: "#faqs", className: "menu_item", onClick: menuClick }, { children: "FAQ" }), void 0)] }), void 0), _jsxs("div", __assign({ className: "hamburger menu_item", id: hamburgerisActive ? "hamActive" : " ", onClick: menuClick }, { children: [_jsx("span", { className: "bar" }, void 0), _jsx("span", { className: "bar" }, void 0), _jsx("span", { className: "bar" }, void 0)] }), void 0)] }), void 0) }, void 0));
};
export default Header;
