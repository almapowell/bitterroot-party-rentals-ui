import React, { useEffect, useState } from "react";
import TestimonalCard from "./TestimonalCard";
import "./styles.css";
import { HorizontalTicker } from "react-infinite-ticker";
import axios from "axios";
import { API } from "../../../shared/utils";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  const getTestimonials = async () => {
    await axios.get(API + "/api/reviews/reviews").then(({ data }) => {
      console.log(data);
      setTestimonials(data.reviews);
    });
  };

  useEffect(() => {
    getTestimonials();
  }, []);

  return (
    <div className="demo">
      <HorizontalTicker style={{ border: "2px solid red" }} duration={150000}>
        {testimonials.map((review) => (
          <div key={review._id} style={{ margin: "50px 25px" }}>
            <TestimonalCard review={review} />
          </div>
        ))}
      </HorizontalTicker>
    </div>
  );
};

export default Testimonials;
