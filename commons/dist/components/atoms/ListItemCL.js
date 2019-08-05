"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@material-ui/core");
const react_router_dom_1 = require("react-router-dom");
const react_1 = __importDefault(require("react"));
const ListItemCL = (props) => {
    return (react_1.default.createElement(core_1.ListItem, { component: props.link ? react_router_dom_1.Link : 'li', to: props.link ? `/${props.link}` : undefined },
        props.icon ? react_1.default.createElement(core_1.Icon, null, "props.icon") : undefined,
        react_1.default.createElement(core_1.ListItemText, null, props.text)));
};
exports.default = ListItemCL;
