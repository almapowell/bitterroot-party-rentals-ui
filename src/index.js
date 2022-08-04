import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Header from "./components/Header";
import Categories from "./components/Categories";
import SelectedCategory from "./components/Categories/SelectedCategory";
import LandingPage from "./components/LandingPage";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { categories } from "./shared/utils";
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
            <Route path="/categories" element={<Categories />} />
            <Route path="/landing-page" element={<LandingPage />} />
            <Route path="/jordy" element={<Admin />} />

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
        </div>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
