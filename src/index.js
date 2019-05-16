import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
import { FavoritesContextProvider } from "./favoritesContext";

ReactDOM.render(
  <FavoritesContextProvider>
    <Router>
      <App />
    </Router>
  </FavoritesContextProvider>,
  document.getElementById("root")
);
