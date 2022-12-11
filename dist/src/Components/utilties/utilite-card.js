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
import "./styles.scss";
export var UtiliteCard = function (_a) {
    var title = _a.title, icon = _a.icon, content = _a.content, bgColor = _a.bgColor;
    var newClassName = "color_bg ".concat(icon);
    var backgroundPath = "url(../../assets/".concat(icon, ".png)");
    return (_jsx("div", __assign({ className: 'u-card' }, { children: _jsxs("div", __assign({ className: "u-wrapper" }, { children: [_jsx("div", { className: newClassName, style: { "backgroundColor": bgColor } }, void 0), _jsx("img", { className: 'u-card-img', src: require("../../assets/".concat(icon, ".png")), alt: "".concat(icon) }, void 0), _jsxs("div", __assign({ className: "u-card-info" }, { children: [_jsx("h1", __assign({ className: "u-card-title" }, { children: title }), void 0), _jsx("p", __assign({ className: "u-card-content" }, { children: content }), void 0)] }), void 0)] }), void 0) }), void 0));
};
