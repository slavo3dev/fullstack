"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const pages_1 = require("./pages");
function App() {
    const isNotReady = true;
    return isNotReady ? react_1.default.createElement(pages_1.ComingSoon, null) : react_1.default.createElement(pages_1.Home, null);
}
exports.default = App;
//# sourceMappingURL=App.js.map