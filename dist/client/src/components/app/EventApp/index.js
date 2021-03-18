"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const eventDashboard_1 = __importDefault(require("../../features/events/eventDashboard"));
const EventApp = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null, "Event App"),
        react_1.default.createElement(eventDashboard_1.default, null)));
};
exports.default = EventApp;
//# sourceMappingURL=index.js.map