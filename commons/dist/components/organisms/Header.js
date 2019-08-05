"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const WindowManager_1 = require("../utils/WindowManager");
const BrandBar_1 = __importDefault(require("../molecules/BrandBar"));
const Signin_1 = __importDefault(require("../molecules/Signin"));
const Header = () => {
    const window = WindowManager_1.useWindowManager();
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { style: { position: 'fixed', top: '16px', left: '16px', zIndex: 100 } },
            react_1.default.createElement(BrandBar_1.default, { size: 20, showTypography: window.scrollTop > window.clientHeight * 0.2 })),
        react_1.default.createElement("div", { style: { position: 'fixed', top: '18px', right: '18px', zIndex: 100 } },
            react_1.default.createElement(Signin_1.default, { size: 16, showTypography: window.scrollTop > window.clientHeight * 0.2 }))));
};
exports.default = Header;
