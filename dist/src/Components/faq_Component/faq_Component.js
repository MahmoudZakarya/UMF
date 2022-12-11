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
import { useState, useRef, useEffect } from "react";
import "./styles.css";
import { FiPlus } from "react-icons/fi";
export default function FAQ(_a) {
    var title = _a.title, content = _a.content;
    var _b = useState(false), active = _b[0], setActive = _b[1];
    var contentRef = useRef(null);
    useEffect(function () {
        contentRef.current.style.maxHeight = active
            ? "".concat(contentRef.current.scrollHeight, "px")
            : "0px";
    }, [contentRef, active]);
    var toggleAccordion = function () {
        setActive(!active);
    };
    return (_jsx(_Fragment, { children: _jsx("div", __assign({ className: "FAQ" }, { children: _jsx("div", { children: _jsx("button", __assign({ className: "question-section ".concat(active), onClick: toggleAccordion }, { children: _jsxs("div", { children: [_jsxs("div", __assign({ className: "question-align" }, { children: [_jsx("h4", __assign({ className: "question-style" }, { children: title }), void 0), _jsx(FiPlus, { className: active ? "question-icon rotate" : "question-icon" }, void 0)] }), void 0), _jsx("div", __assign({ ref: contentRef, className: active ? "answer answer-divider" : "answer" }, { children: _jsx("p", { className: "answer-style", dangerouslySetInnerHTML: { __html: content } }, void 0) }), void 0)] }, void 0) }), void 0) }, void 0) }), void 0) }, void 0));
}
