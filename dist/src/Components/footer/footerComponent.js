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
import './style.css';
export var Footer = function () {
    return (_jsxs("div", __assign({ className: 'footer' }, { children: [_jsx("p", __assign({ className: 'footerDesc' }, { children: "Copyright \u00A9 2022 UMF - All Rights Reserved." }), void 0), _jsxs("div", __assign({ className: "social-icons" }, { children: [_jsx("a", __assign({ className: "icon", href: "https://twitter.com/UMF_NF", target: '_blank' }, { children: _jsx("i", { className: "fa-brands fa-twitter" }, void 0) }), void 0), _jsx("a", __assign({ className: "icon", href: "https://discord.gg/5tDgtbYSn9", target: '_blank' }, { children: _jsx("i", { className: "fa-brands fa-discord" }, void 0) }), void 0), _jsx("a", __assign({ className: "icon", href: "https://www.instagram.com/umf_nft/", target: '_blank' }, { children: _jsx("i", { className: "fa-brands fa-instagram" }, void 0) }), void 0)] }), void 0)] }), void 0));
};
