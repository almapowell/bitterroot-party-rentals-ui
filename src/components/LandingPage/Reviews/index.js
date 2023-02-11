import React from "react";
import Review from "./Review";
import "./styles.css";
import { HorizontalTicker } from "react-infinite-ticker";

const Reviews = () => {
  const reviews = [
    {
      _id: 1,
      gender: "girl",
      text: ` The tent was fantastic and it was the perfect size! The tables looked
        amazing and everyone was so comfortable…and a warm, beautiful day!!!
        Many thanks for your help! I will definitely call you the next time
        we’re in need! Round 1`,
      name: "Marie",
    },
    {
      _id: 2,
      gender: "boy",
      text: ` The tent was fantastic and it was the perfect size! The tables looked
        amazing and everyone was so comfortable…and a warm, beautiful day!!!
        Many thanks for your help! I will definitely call you the next time
        we’re in need! Round 2`,
      name: "Robby",
    },
    {
      _id: 3,
      gender: "girl",
      text: ` The tent was fantastic and it was the perfect size! The tables looked
        amazing and everyone was so comfortable…and a warm, beautiful day!!!
        Many thanks for your help! I will definitely call you the next time
        we’re in need! Round 3`,
      name: "Meryl",
    },
    {
      _id: 4,
      gender: "boy",
      text: ` The tent was fantastic and it was the perfect size! The tables looked
        amazing and everyone was so comfortable…and a warm, beautiful day!!!
        Many thanks for your help! I will definitely call you the next time
        we’re in need! Round 4`,
      name: "Greg",
    },
  ];

  return (
    <div className="demo">
      <HorizontalTicker style={{ border: "2px solid red" }} duration={150000}>
        {reviews.map((review) => (
          <div key={review._id} style={{ margin: "50px 25px" }}>
            <Review review={review} />
          </div>
        ))}
      </HorizontalTicker>
    </div>
  );
};

export default Reviews;
