import React, { useState, useCallback, useEffect } from "react";
import {
  AddressAutofill,
  AddressMinimap,
  config,
} from "@mapbox/search-js-react";
import "./Address.css";

export default function Address({ onAddressChange }) {
  const [showFormExpanded, setShowFormExpanded] = useState(false);
  const [showMinimap, setShowMinimap] = useState(false);
  const [feature, setFeature] = useState();
  const [token, setToken] = useState("");

  useEffect(() => {
    const accessToken =
      "sk.eyJ1IjoiYWxtYXBvd2VsbCIsImEiOiJjbGR0amdicjYyMjFpM3BvNDA4b3hkZXN3In0.A0Rpl1tlRN4tWU6HO4JHdQ";
    setToken(accessToken);
    config.accessToken = accessToken;
  }, []);

  const handleRetrieve = useCallback(
    (res) => {
      const feature = res.features[0];
      onAddressChange(feature.properties.full_address);
      setFeature(feature);
      setShowMinimap(true);
      setShowFormExpanded(true);
    },
    [setFeature, setShowMinimap]
  );

  return (
    <>
      <form>
        <div className="map-and-inputs">
          <div className="column-stack">
            {/* Input form */}
            <label className="each-label">Address</label>
            <AddressAutofill accessToken={token} onRetrieve={handleRetrieve}>
              <input
                className="each-input"
                placeholder="Start typing the address, e.g. 123 Main..."
                autoComplete="address-line1"
                id="mapbox-autofill"
              />
            </AddressAutofill>
            {!showFormExpanded && (
              <div onClick={() => setShowFormExpanded(true)}>
                Enter an address manually
              </div>
            )}
            <div
              style={{ display: showFormExpanded ? "flex" : "none" }}
              className="column-stack"
            >
              <label className="each-label">City</label>
              <input
                className="each-input"
                placeholder="City"
                autoComplete="address-level2"
              />
              <label className="each-label">State / Region</label>
              <input
                className="each-input"
                placeholder="State / Region"
                autoComplete="address-level1"
              />
              <label className="each-label">ZIP / Postcode</label>
              <input
                className="each-input"
                placeholder="ZIP / Postcode"
                autoComplete="postal-code"
              />
            </div>
          </div>
          <div className="map-container">
            {/* Visual confirmation map */}
            <div className="map-container">
              <AddressMinimap
                satelliteToggle={true}
                feature={feature}
                show={showMinimap}
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
