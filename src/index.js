import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Header from "./components/Header";
import Categories from "./components/Inventory/Categories";
import SelectedCategory from "./components/Inventory/Categories/SelectedCategory";
import LandingPage from "./components/LandingPage";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { categories } from "./shared/utils";
import ShoppingCart from "./components/ShoppingCart";
import Admin from "./components/Admin";
import QuoteSteps from "./components/ShoppingCart/QuoteSteps";
import Footer from "./components/Footer";
import Inventory from "./components/Inventory";
import PasswordCheck from "./components/Admin/PasswordCheck";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />

          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/landing-page" element={<LandingPage />} />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
            <Route path="/finalize-quote" element={<QuoteSteps />} />
            <Route path="/jordy" element={<PasswordCheck />} />

            <Route path="/inventory" element={<Inventory />} />

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
