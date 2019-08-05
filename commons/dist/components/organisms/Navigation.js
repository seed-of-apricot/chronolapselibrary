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
const react_1 = __importDefault(require("react"));
const Toolbar_1 = __importDefault(require("@material-ui/core/Toolbar"));
const core_1 = require("@material-ui/core");
const ListCL_1 = __importStar(require("../molecules/ListCL"));
const useStyles = core_1.makeStyles((theme) => core_1.createStyles({
    drawer: {
        position: 'fixed',
        zIndex: 50,
        backgroundColor: theme.palette.primary.main,
        width: '298px'
    },
    toolBar: {
        paddingTop: '4.5rem'
    }
}));
const Navigation = (props) => {
    const classes = useStyles();
    return (react_1.default.createElement(core_1.Drawer, { variant: "persistent", open: true, anchor: "left", classes: { paper: classes.drawer } },
        react_1.default.createElement(core_1.Divider, null),
        react_1.default.createElement(Toolbar_1.default, { className: classes.toolBar },
            react_1.default.createElement(ListCL_1.default, { items: props.list.items }))));
};
exports.default = Navigation;
