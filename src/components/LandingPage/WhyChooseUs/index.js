import React from "react";
import "./styles.css";
import { phone, store, worker } from "./utils";

const WhyChooseUs = () => {

  const alternatePhotos = (index) => {

    return index % 2 === 0 || window.innerWidth;
  }

  return (
    <div>
      <div className="why">
        <span className="main-title">Why Work With Us?</span>
        <div className="section-container">
          {reasons.map((reason, index) => (
            <section
            className="section"
              style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}
            >
              {index % 2 !== 0 && window.innerWidth > 1000 && <div className="image">
                <img src={reason.img} />
              </div>}

              <div className="textContainer">
                <div className="description">
                  <div>
                    <span className="icon-container">{reason.icon}</span>
                  </div>
                  <span className="title">{reason.title}</span>
                </div>
                <p className="subText">{reason.description}</p>
              </div>

              {index % 2 === 0 && <div className="image">
                <img src={reason.img} />
              </div>}
               {index % 2 !== 0 && window.innerWidth < 1000 && <div className="image">
                <img src={reason.img} />
              </div>}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

const itemsImages = [
   "https://drive.google.com/uc?export=view&id=1S84VOzz3trPFshR7XFoS7QUO1TJ-yC0E",
   "https://drive.google.com/uc?export=view&id=1cGTQBrLr4Aneh8CW4SE6g9WGoMZuvM5V",
   "https://drive.google.com/uc?export=view&id=1TmMjUi9Q56iDwvcvf1nhMaAqkrRvFi49",
   "https://drive.google.com/uc?export=view&id=1XJwH1NnZ1645F_il5YYYFKntB2OLlNvv",
   "https://drive.google.com/uc?export=view&id=1aDKA5QoRBTHmOu5hgswcagDQ0iePKRNY",
   "https://drive.google.com/uc?export=view&id=1viglfl2V1XKthyRFaFQhPahNExwUd-RX",
   "https://drive.google.com/uc?export=view&id=1ck-euKuuFTgAL_RGY3x_zujBkKO3KPKN",
   "https://drive.google.com/uc?export=view&id=1HisUWEJ2MQTl_YJCYQnBMwv5DD2qLicJ",
   "https://drive.google.com/uc?export=view&id=17pf47SRWozmjLdN2Jl0KnMDwWXLHGqJo",
];

console.log(itemsImages[0])

const reasons = [
  {
    icon: phone,
    title: "Great Customer Service",
    description:
      "We offer personal contact information which allows a very direct and quick point of contact.",
    img: itemsImages[0],
  },
  {
    icon: store,
    title: "Local Small Business",
    description:
      "Started in 2019, we are a family opporated business trying serving the Bitterroot/Missoula area.",
    img: itemsImages[1],
  },
  {
    icon: worker,
    title: "We Do The Work For You",
    description:
      "We offer to set up and take down equipment for you so that your event can be as hassle free as possible.",
    img: itemsImages[2],
  },
];


