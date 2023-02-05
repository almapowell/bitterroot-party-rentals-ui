import React, { useEffect, useState } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setInventory } from "./redux/inventorySlice";
import { API } from "./shared/utils";

const App = () => {
  const [alreadyRan, setAlreadyRan] = useState(false);
  const inventory = useSelector((state) => state.inventory);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!inventory.length && !alreadyRan) {
      axios
        .get(API + "/api/inventory/all-inventory")
        .then((res) => {
          console.log(4444, "Inventory is in!");
          setAlreadyRan(true);
          dispatch(setInventory(res.data.inventory));
        })
        .catch((err) => console.log(444, "We have a error!!", err));
    }
  }, []);

  return (
    <div>
      <LandingPage />
    </div>
  );
};

export default App;
