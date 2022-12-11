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
export default function TeamCard(_a) {
    var id = _a.id, img_path = _a.img_path, mName = _a.mName, mDescription = _a.mDescription, mP = _a.mP, twitter = _a.twitter, insta = _a.insta;
    return (_jsxs(_Fragment, { children: [" ", _jsxs("div", __assign({ id: id, className: "family-card" }, { children: [_jsx("img", { className: "member-img", src: img_path, alt: "" }, void 0), _jsx("h3", __assign({ className: "member-name" }, { children: mName }), void 0), _jsx("h4", __assign({ className: "member-description" }, { children: mDescription }), void 0), _jsx("p", __assign({ className: "member-p" }, { children: mP }), void 0), _jsxs("div", __assign({ className: "social-icons", id: "member-social" }, { children: [_jsx("a", __assign({ className: "icon", href: twitter, target: '_blank' }, { children: _jsx("i", { className: "fa-brands fa-twitter" }, void 0) }), void 0), _jsx("a", __assign({ className: "icon", href: insta, target: '_blank' }, { children: _jsx("i", { className: "fa-brands fa-instagram" }, void 0) }), void 0)] }), void 0)] }), void 0)] }, void 0));
}
