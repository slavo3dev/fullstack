"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
require("./Optin.css");
class Optin extends react_1.Component {
    modal() {
        const modal = document.getElementById("modal");
        modal.classList.toggle("is_open");
    }
    render() {
        return (react_1.default.createElement("div", { className: "optin" },
            react_1.default.createElement("p", null, "Want to be the first to know when we launch?"),
            react_1.default.createElement("button", { onClick: () => this.modal() }, "Click Me"),
            react_1.default.createElement("div", { id: "modal" },
                react_1.default.createElement("div", { className: "wrapper" },
                    react_1.default.createElement("h3", null, "Enter Your Email"),
                    react_1.default.createElement("div", { className: "clearfix" },
                        react_1.default.createElement("div", { className: "col-8" }),
                        react_1.default.createElement("div", { className: "col-3" }))))));
    }
}
exports.default = Optin;
//# sourceMappingURL=index.js.map