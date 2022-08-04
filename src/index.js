import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Categories from "./components/Categories";
import SelectedCategory from "./components/Categories/SelectedCategory";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { categories } from "./shared/utils";
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

            <Route
              path={`/${categories[0].link}`}
              element={<SelectedCategory items={categories[0]} />}
            />
            <Route
              path={`/${categories[1].link}`}
              element={<SelectedCategory items={categories[1]} />}
            />
            <Route
              path={`/${categories[2].link}`}
              element={<SelectedCategory items={categories[2]} />}
            />
            <Route
              path={`/${categories[3].link}`}
              element={<SelectedCategory items={categories[3]} />}
            />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
