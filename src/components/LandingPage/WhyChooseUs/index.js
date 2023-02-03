import React from "react";
import "./styles.css";
import { phone, store, worker } from "./utils";

const WhyChooseUs = () => {
  return (
    <div>
      <h2>
        <b>Why Work With Us?</b>
      </h2>

      <div className="section-container">
        {reasons.map((r) => {
          return (
            <div className="reason">
              <span>
                <b>{r.title}</b>
              </span>
              <p className="subText">{r.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyChooseUs;

const itemsImages = [
  "https://bitterroot-party-rentals.s3.amazonaws.com/IMG_5348.JPG",
  "https://bitterroot-party-rentals.s3.amazonaws.com/IMG_5362.JPG",
  "https://bitterroot-party-rentals.s3.amazonaws.com/DSC00136.JPG",
];

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
    title: "Locally Owned Small Business",
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

// {
//   reasons.map((reason, index) => (
//     <section
//       className="section"
//       style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
//       key={index}
//     >
//       {index % 2 !== 0 && window.innerWidth > 1000 && (
//         <div className="image">
//           <img src={reason.img} />
//         </div>
//       )}

//       <div className="textContainer">
//         <div className="description">
//           <div>
//             <span className="icon-container">{reason.icon}</span>
//           </div>
//           <span className="title">{reason.title}</span>
//         </div>
//         <p className="subText">{reason.description}</p>
//       </div>

//       {index % 2 === 0 && (
//         <div className="image">
//           <img src={reason.img} />
//         </div>
//       )}
//       {index % 2 !== 0 && window.innerWidth < 1000 && (
//         <div className="image">
//           <img src={reason.img} />
//         </div>
//       )}
//     </section>
//   ));
// }
