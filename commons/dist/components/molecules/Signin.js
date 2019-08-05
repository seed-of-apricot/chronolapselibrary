"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const core_1 = require("@material-ui/core");
const icons_1 = require("@material-ui/icons");
const react_router_dom_1 = require("react-router-dom");
const useStyles = core_1.makeStyles((size) => core_1.createStyles({
    root: {
        width: 2.25 * size,
        height: 2.25 * size,
        minWidth: 0,
        padding: 0,
        marginLeft: 0.375 * size,
        '& svg': {
            marginTop: -0.225 * size
        },
        '& span': {
            borderRadius: 2 * size
        }
    }
}));
const Signin = (props) => {
    const size = props.size ? props.size : 16;
    const classes = useStyles(size);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(core_1.Fade, { in: props.showTypography },
            react_1.default.createElement(core_1.Typography, { variant: 'body1', style: {
                    paddingTop: 0.3125 * size,
                    paddingRight: 0.125 * size,
                    float: 'left'
                } }, "Sign-in / Sign-up")),
        react_1.default.createElement(core_1.ButtonBase, { className: classes.root, component: react_router_dom_1.Link, to: '/Login' },
            react_1.default.createElement(icons_1.AccountCircle, { style: { width: 2.7 * size, height: 2.7 * size } }))));
};
exports.default = Signin;
