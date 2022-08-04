import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Categories from "./components/Categories";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShoppingCart from "./components/ShoppingCart";
import QuoteSteps from "./components/ShoppingCart/QuoteSteps";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
            <Route path="/finalize-quote" element={<QuoteSteps />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
