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
// import moment from 'moment';
require("./Timer.css");
class CountDown extends react_1.Component {
    constructor(props) {
        super(props);
        this.count = this.count.bind(this);
        this.state = {
            days: 0,
            minutes: 0,
            hours: 0,
            secounds: 0,
            time_up: "",
        };
        this.x = null;
        this.deadline = null;
    }
    count() {
        var now = new Date().getTime();
        var t = this.deadline - now;
        var dd = Math.floor(t / (1000 * 60 * 60 * 24));
        var hh = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var mm = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        var ss = Math.floor((t % (1000 * 60)) / 1000);
        var days = dd < 10 ? "0" + dd : dd;
        var hours = hh < 10 ? "0" + hh : hh;
        var minutes = mm < 10 ? "0" + mm : mm;
        var seconds = ss < 10 ? "0" + ss : ss;
        this.setState({ days, minutes, hours, seconds });
        if (t < 0) {
            clearInterval(this.x);
            this.setState({
                days: 0,
                minutes: 0,
                hours: 0,
                seconds: 0,
                time_up: "TIME IS UP",
            });
        }
    }
    componentDidMount() {
        this.deadline = new Date("Oct 08, 2022 21:00:00").getTime();
        this.x = setInterval(this.count, 1000);
    }
    render() {
        const { days, seconds, hours, minutes } = this.state;
        return (react_1.default.createElement("div", { id: "countdown" },
            react_1.default.createElement("div", { className: "col-4" },
                react_1.default.createElement("div", { className: "box" },
                    react_1.default.createElement("p", { id: "day" }, days),
                    react_1.default.createElement("span", { className: "text" }, "Days"))),
            react_1.default.createElement("div", { className: "col-4" },
                react_1.default.createElement("div", { className: "box" },
                    react_1.default.createElement("p", { id: "hour" }, hours),
                    react_1.default.createElement("span", { className: "text" }, "Hours"))),
            react_1.default.createElement("div", { className: "col-4" },
                react_1.default.createElement("div", { className: "box" },
                    react_1.default.createElement("p", { id: "minute" }, minutes),
                    react_1.default.createElement("span", { className: "text" }, "Minutes"))),
            react_1.default.createElement("div", { className: "col-4" },
                react_1.default.createElement("div", { className: "box" },
                    react_1.default.createElement("p", { id: "second" }, seconds),
                    react_1.default.createElement("span", { className: "text" }, "Seconds")))));
    }
}
exports.default = CountDown;
//# sourceMappingURL=index.js.map