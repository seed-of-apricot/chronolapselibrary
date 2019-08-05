"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Header_1 = __importDefault(require("./components/organisms/Header"));
exports.Header = Header_1.default;
const Navigation_1 = __importDefault(require("./components/organisms/Navigation"));
exports.Navigation = Navigation_1.default;
const WindowManager_1 = __importStar(require("./components/utils/WindowManager"));
exports.WindowManager = WindowManager_1.default;
exports.useWindowManager = WindowManager_1.useWindowManager;
