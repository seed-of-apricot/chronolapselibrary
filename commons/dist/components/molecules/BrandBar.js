"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const core_1 = require("@material-ui/core");
const react_router_dom_1 = require("react-router-dom");
const BrandLogo_1 = __importDefault(require("../atoms/BrandLogo"));
const BrandTypography_1 = __importDefault(require("../atoms/BrandTypography"));
const BrandBar = (props) => {
    return (react_1.default.createElement(react_router_dom_1.Link, { to: '/' },
        react_1.default.createElement(BrandLogo_1.default, { size: 2 * props.size }),
        react_1.default.createElement(core_1.Fade, { in: props.showTypography },
            react_1.default.createElement(BrandTypography_1.default, { size: props.size }))));
};
exports.default = BrandBar;
