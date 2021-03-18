import React from "react";
import { Home, ComingSoon } from "./pages";

function App() {
  const isNotReady = true;

  return isNotReady ? <ComingSoon /> : <Home />;
}

export default App;
