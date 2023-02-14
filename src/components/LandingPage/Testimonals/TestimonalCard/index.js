import React from "react";
import { female, male } from "../avatars";
import { Rate } from "antd";
import "../styles.css";

const TestimonalCard = ({ review }) => {
  const { testimony, name, gender, stars } = review;

  return (
    <div className="testimony">
      <div className="avatar">{gender === "girl" ? female : male}</div>
      <span className="text">
        {testimony}
        <br />
        <br />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <b>- {name}</b>
          <Rate disabled defaultValue={stars} />
        </div>
      </span>
      <div>
        <div className="quotes">
          <svg
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m2.699 20c-.411 0-.699-.312-.699-.662 0-.249.145-.516.497-.703 1.788-.947 3.858-4.226 3.858-6.248-3.016.092-4.326-2.582-4.326-4.258 0-2.006 1.738-4.129 4.308-4.129 3.241 0 4.83 2.547 4.83 5.307 0 5.981-6.834 10.693-8.468 10.693zm10.833 0c-.41 0-.699-.312-.699-.662 0-.249.145-.516.497-.703 1.788-.947 3.858-4.226 3.858-6.248-3.015.092-4.326-2.582-4.326-4.258 0-2.006 1.739-4.129 4.308-4.129 3.241 0 4.83 2.547 4.83 5.307 0 5.981-6.833 10.693-8.468 10.693z"
              fillRule="nonzero"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TestimonalCard;
