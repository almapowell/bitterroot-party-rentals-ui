import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./components/Admin";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />

          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/landing-page" element={<LandingPage />} />
            <Route path="/jordy" element={<Admin />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
