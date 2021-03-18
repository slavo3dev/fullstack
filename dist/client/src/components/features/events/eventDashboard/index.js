"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
const EventDashboard = () => {
    return (react_1.default.createElement(semantic_ui_react_1.Grid, null,
        react_1.default.createElement(semantic_ui_react_1.Grid.Column, { width: 10 }, "Left Column"),
        react_1.default.createElement(semantic_ui_react_1.Grid.Column, { width: 6 }, "Right Column")));
};
exports.default = EventDashboard;
//# sourceMappingURL=index.js.map