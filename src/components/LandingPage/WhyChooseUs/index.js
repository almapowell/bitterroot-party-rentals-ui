import React from "react";
import "./styles.css";
import { phone, store, worker } from "./utils";

const WhyChooseUs = () => {
  return (
    <div>
      <div className="why">
        <span className="main-title">Why Work With Us?</span>
        <div className="section-container">
          <section>
            <div className="description">
              <div>
                <span className="icon-container">{phone}</span>
              </div>
              <span className="title">Great Customer Service</span>
            </div>
            <p className="subText">
              We offer personal contact information which allows a very direct
              and quick point of contact.
            </p>
          </section>

          <section>
            <div className="description">
              <div>
                <span className="icon-container">{store}</span>
              </div>
              <span className="title">Local Small Business</span>
            </div>
            <p className="subText">
              Started in 2019, we are a family opporated business trying serving
              the Bitterroot/Missoula area.
            </p>
          </section>

          <section>
            <div className="description">
              <div>
                <span className="icon-container">{worker}</span>
              </div>
              <span className="title">We Do The Work For You</span>
            </div>
            <p className="subText">
              We offer to set up and take down equipment for you so that your
              event can be as hassle free as possible.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
