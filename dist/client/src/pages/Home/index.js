"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
const react_1 = __importDefault(require("react"));
const EventApp_1 = __importDefault(require("../../components/app/EventApp"));
const Home = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(EventApp_1.default, null)));
};
exports.Home = Home;
//# sourceMappingURL=index.js.map