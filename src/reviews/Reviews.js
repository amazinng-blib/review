import React, { useState } from "react";
import people from "./data";
import { FaQuoteRight, FaChevronRight, FaChevronLeft } from "react-icons/fa";
const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { id, job, image, name, text } = people[index];

  const checkIndex = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const getRandomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }

    setIndex(checkIndex(randomNumber));
  };

  const nextIndex = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };
  const prevIndex = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };
  return (
    <article className="review">
      <section className="section-container">
        <div className="img-container">
          <img src={image} alt={name} className="img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h2>{name}</h2>
        <p>{job}</p>
        <p>{text}</p>
        <button className="prev-btn" onClick={prevIndex}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextIndex}>
          <FaChevronRight />
        </button>
      </section>
      <button className="random-btn" onClick={getRandomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Reviews;
