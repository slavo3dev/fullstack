"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const logo_svg_1 = __importDefault(require("./logo.svg"));
require("./App.css");
function App() {
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement("header", { className: "App-header" },
            react_1.default.createElement("img", { src: logo_svg_1.default, className: "App-logo", alt: "logo" }),
            react_1.default.createElement("p", null,
                "ReactLion",
                react_1.default.createElement("br", null),
                "Coming Soon"),
            react_1.default.createElement("a", { className: "App-link", href: "https://slavo3.com", target: "_blank" }, "Slavo3"))));
}
exports.default = App;
//# sourceMappingURL=App.js.map