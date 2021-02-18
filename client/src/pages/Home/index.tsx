import React from "react";
import "./home.css";
import logo from "../../logo.svg";
import { HeaderComponent } from "../../components";

export default function Home() {
  return (
    <div className="App">
      <HeaderComponent />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ReactLion
          <br />
          Coming Soon
        </p>
        <a className="App-link" href="https://slavo3.com" target="_blank">
          Slavo3
        </a>
      </header>
    </div>
  );
}
