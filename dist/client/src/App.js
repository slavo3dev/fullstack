"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const logo_svg_1 = __importDefault(require("./logo.svg"));
require("./App.css");
function App() {
    return (<div className="App">
      <header className="App-header">
        <img src={logo_svg_1.default} className="App-logo" alt="logo"/>
        <p>
          ReactLion
          <br />
          Coming Soon
        </p>
        <a className="App-link" href="https://slavo3.com" target="_blank">
          Slavo3
        </a>
      </header>
    </div>);
}
exports.default = App;
//# sourceMappingURL=App.js.map