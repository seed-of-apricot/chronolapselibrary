"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@material-ui/core");
const ListItemCL_1 = __importStar(require("../atoms/ListItemCL"));
const react_1 = __importDefault(require("react"));
const ListCL = (props) => {
    return (react_1.default.createElement(core_1.List, null, props.items.map(item => {
        react_1.default.createElement(ListItemCL_1.default, { icon: item.icon ? item.icon : undefined, link: item.link ? item.link : undefined, text: item.text });
    })));
};
exports.default = ListCL;
