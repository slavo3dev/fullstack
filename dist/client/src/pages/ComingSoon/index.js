"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComingSoon = void 0;
const react_1 = __importDefault(require("react"));
require("./stylesComingSoon.css");
const ComingSoon = () => {
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement("div", { className: "container" },
            react_1.default.createElement("h1", null,
                "Website",
                react_1.default.createElement("br", null),
                "Coming Soon"))));
};
exports.ComingSoon = ComingSoon;
//# sourceMappingURL=index.js.map