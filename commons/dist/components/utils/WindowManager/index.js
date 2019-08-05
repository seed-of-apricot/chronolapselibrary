"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_scrollbars_custom_1 = __importStar(require("react-scrollbars-custom"));
const WindowManager = (props) => {
    return (react_1.default.createElement(react_scrollbars_custom_1.default, { createContext: true, noScrollX: true, wrapperProps: {
            renderer: props => {
                const { elementRef, style, ...restProps } = props;
                return (react_1.default.createElement("span", Object.assign({}, restProps, { ref: elementRef, style: { ...style, right: 0, bottom: 0 } })));
            }
        }, trackYProps: {
            renderer: props => {
                const { elementRef, style, ...restProps } = props;
                return (react_1.default.createElement("span", Object.assign({}, restProps, { ref: elementRef, style: {
                        ...style,
                        width: '6px',
                        right: '4px'
                    } })));
            }
        }, style: { width: '100vw', height: '100vh' } }, props.children));
};
exports.useWindowManager = () => {
    const scroll = react_1.useContext(react_scrollbars_custom_1.ScrollbarContext).parentScrollbar;
    const [state, setState] = react_1.useState(scroll.getScrollState());
    const callback = (currentState) => setState(currentState);
    scroll.eventEmitter.on('scroll', callback);
    const memo = react_1.useMemo(() => {
        callback(scroll.getScrollState());
        return scroll;
    }, [scroll]);
    return memo;
};
exports.default = WindowManager;
