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
import ContactModal from "./components/Footer/ContactModal";
import InventoryItem from "./components/Inventory/Item";
import ClearCart from "./components/ShoppingCart/ClearCart";
import { Helmet } from "react-helmet";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Helmet>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Bitterroot Party Rentals offer tents, tables, chairs, and outdoor party games for any occasion. Locally owned and operated, we offer exceptional service and have a proven track record of success. Whether you are planning a wedding, birthdays, or company events, we can help."
          />
          <meta
            name="keywords"
            content="events, rentals, montana, bitterroot valley, ravalli county, party, parties"
          />
          <title>Bitterroot Party Rentals</title>
          <link
            rel="canonical"
            href="https://www.bitterrootpartyrentals.com/"
          />
        </Helmet>
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
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/clear-cart" element={<ClearCart />} />

            <Route path="/contact" element={<ContactModal />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/inventory/item/:itemId" element={<InventoryItem />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
