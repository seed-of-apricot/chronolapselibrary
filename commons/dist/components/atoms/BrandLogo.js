"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const core_1 = require("@material-ui/core");
const index_png_1 = __importDefault(require("../../assets/images/logo/index.png"));
const useStyles = (props) => {
    const size = props.size;
    return core_1.makeStyles(() => core_1.createStyles({
        buttonBase: {
            width: size,
            height: size,
            '& span': {
                borderRadius: size
            }
        }
    }))(props);
};
const Logo = (props) => {
    const classes = useStyles(props);
    return (react_1.default.createElement(core_1.ButtonBase, { className: classes.buttonBase },
        react_1.default.createElement("img", { src: index_png_1.default, style: { height: props.size } })));
};
exports.default = Logo;
