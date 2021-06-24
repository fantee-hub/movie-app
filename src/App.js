import React from "react";
import Home from "./components/Home";
import GlobalStyle from "./pages/GlobalStyle";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <Route path={["/movie/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
