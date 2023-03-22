import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import { API, leftArrow, quoteIcon, rightArrow } from "../../../shared/utils";
import { female, male } from "./avatars";

const Testimonials = () => {
  const [people, setPeople] = useState([]);
  const [index, setIndex] = useState(0);

  const getTestimonials = async () => {
    await axios.get(API + "/api/reviews/reviews").then(({ data }) => {
      setPeople(data.reviews);
    });
  };

  useEffect(() => {
    getTestimonials();
  }, []);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  // autoslide, clearInterval = een cleanup functie noodzakelijk bij interval
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 6000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2 className="review-title">
          <span className="review-slash">/</span>reviews
        </h2>
      </div>
      {people.length && (
        <div className="section-center">
          {people.map((person, personIndex) => {
            const { gender, name, title, testimony } = person;
            let position = "nextSlide";
            if (personIndex === index) {
              position = "activeSlide";
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              position = "lastSlide";
            }
            return (
              <article key={personIndex} className={position}>
                <div className="avatar">
                  {gender === "female" ? female : male}
                </div>
                <p className="quote-name">{name}</p>
                <p className="title">{title}</p>
                <p className="text">{testimony}</p>
                <br />
                {quoteIcon}
              </article>
            );
          })}
          <button className="prev" onClick={() => setIndex(index - 1)}>
            {leftArrow}
          </button>
          <button className="next" onClick={() => setIndex(index + 1)}>
            {rightArrow}
          </button>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
