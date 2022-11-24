import React from "react";
import "./styles.css";
import { phone, store, worker } from "./utils";

const WhyChooseUs = () => {
  return (
    <div>
      <div className="why">
        <span className="main-title">Why Work With Us?</span>
        <div className="section-container">
          {reasons.map((reason) => (
            <section>
              <div className="description">
                <div>
                  <span className="icon-container">{reason.icon}</span>
                </div>
                <span className="title">{reason.title}</span>
              </div>
              <p className="subText">{reason.description}</p>
              <img style={{ height: 200 }} src={reason.img} />
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

const reasons = [
  {
    icon: phone,
    title: "Great Customer Service",
    description:
      "We offer personal contact information which allows a very direct and quick point of contact.",
    img: "https://drive.google.com/uc?export=view&id=1S84VOzz3trPFshR7XFoS7QUO1TJ-yC0E",
  },
  {
    icon: store,
    title: "Local Small Business",
    description:
      "Started in 2019, we are a family opporated business trying serving the Bitterroot/Missoula area.",
    img: "https://drive.google.com/uc?export=view&id=1cGTQBrLr4Aneh8CW4SE6g9WGoMZuvM5V",
  },
  {
    icon: worker,
    title: "We Do The Work For You",
    description:
      "We offer to set up and take down equipment for you so that your event can be as hassle free as possible.",
    img: "https://drive.google.com/uc?export=view&id=1aDKA5QoRBTHmOu5hgswcagDQ0iePKRNY",
  },
];

const itemData = [
  {
    img: "https://drive.google.com/uc?export=view&id=1S84VOzz3trPFshR7XFoS7QUO1TJ-yC0E",
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1cGTQBrLr4Aneh8CW4SE6g9WGoMZuvM5V",
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1aDKA5QoRBTHmOu5hgswcagDQ0iePKRNY",
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1viglfl2V1XKthyRFaFQhPahNExwUd-RX",
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1ck-euKuuFTgAL_RGY3x_zujBkKO3KPKN",
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1HisUWEJ2MQTl_YJCYQnBMwv5DD2qLicJ",
  },
  {
    img: "https://drive.google.com/uc?export=view&id=17pf47SRWozmjLdN2Jl0KnMDwWXLHGqJo",
  },
];
