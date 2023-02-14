import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "antd/dist/antd.min.css";
import App from "./App";
import Header from "./components/Header";
import Categories from "./components/Inventory/Categories";
import LandingPage from "./components/LandingPage";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShoppingCart from "./components/ShoppingCart";
import QuoteSteps from "./components/ShoppingCart/QuoteSteps";
import Footer from "./components/Footer";
import Inventory from "./components/Inventory";
import PasswordCheck from "./components/Admin/PasswordCheck";
import FAQ from "./components/Footer/FAQ";
import Gallery from "./components/Header/Gallery";
import ContactForm from "./components/LandingPage/ContactForm";
import InventoryItem from "./components/Inventory/Item";
import ClearCart from "./components/ShoppingCart/ClearCart";
import LeaveReview from "./components/Footer/LeaveReview";
import { HelmetProvider } from "react-helmet-async";
import ReactGA from "react-ga4";

ReactGA.initialize("G-E2M0LB7YTX");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
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
              <Route path="/faq" element={<FAQ />} />
              <Route path="/review" element={<LeaveReview />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/clear-cart" element={<ClearCart />} />

              <Route path="/contact" element={<ContactForm />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route
                path="/inventory/item/:itemId"
                element={<InventoryItem />}
              />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);
