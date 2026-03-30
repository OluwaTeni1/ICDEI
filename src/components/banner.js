import React, { useState, useEffect, useCallback } from "react";
import heroImg1 from "../assets/img/hero-bg-1.jpg";
import heroImg2 from "../assets/img/hero-bg-2.jpg";
import heroImg3 from "../assets/img/hero-bg-3.jpg";

const sliderData = [
  {
    id: 1,
    title: "Saving the Future Today",
    subtitle:
      "From vulnerability and exploitation to protection, education, and purpose. Every child deserves safety, dignity, and the chance to thrive.",
    image: heroImg1,
    cta: "#",
    buttonText: "Join Our Mission",
  },
  {
    id: 2,
    title: "Partner for Progress",
    subtitle:
      "Collaborate with us to drive lasting change through shared vision and resources.",
    image: heroImg2,
    cta: "#",
    buttonText: "Become a Partner",
  },
  {
    id: 3,
    title: "Ignite Hope, Inspire Action",
    subtitle: "Your support sparks opportunities and transforms futures.",
    image: heroImg3,
    cta: "#",
    buttonText: "Support the Mission",
  },
];

export const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = sliderData.length;

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  }, [length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  useEffect(() => {
    const autoPlay = setInterval(nextSlide, 100000);
    return () => clearInterval(autoPlay);
  }, [nextSlide]);

  return (
    <section className="hero-section" id="home">
      <div className="hero-viewport">
        {/* Navigation Arrows */}
        <button
          className="arrow left-arrow"
          onClick={prevSlide}
          aria-label="Previous Slide"
        >
          &#10094;
        </button>
        <button
          className="arrow right-arrow"
          onClick={nextSlide}
          aria-label="Next Slide"
        >
          &#10095;
        </button>

        {/* Sliding Track */}
        <div
          className="slider-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {sliderData.map((slide, index) => (
            <div key={slide.id} className="hero-slide">
              <img src={slide.image} alt={slide.title} className="hero-img" />
              <div className="img-overlay"></div>

              <div
                className={`hero-content ${current === index ? "active" : ""}`}
              >
                <span className="hero-badge mb-2 d-inline-block">
                  <i className="fas fa-shield-heart me-2"></i>
                  ICDEI CHILDREN DEVELOPMENT
                </span>

                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-text mx-auto">{slide.subtitle}</p>
                <a href={slide.cta} className="hero-btn">
                  {slide.buttonText} <i className="fas fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="dots-container">
          {sliderData.map((_, i) => (
            <button
              key={i}
              className={`dot ${current === i ? "active" : ""}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
