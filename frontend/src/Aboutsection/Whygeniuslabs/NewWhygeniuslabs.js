import React, { useEffect, useState } from "react";
import "./NewWhygeniuslabs.css";
import bgImage from "../Asset/why.png"; // replace with your background image

function NewWhygeniuslabs() {
  const slides = [
    {
      title: "Experience",
      text: "With decades of expertise and 500+ projects delivered, we understand the unique needs of businesses across industries.",
    },
    {
      title: "Innovation",
      text: "We bring cutting-edge technology and creative thinking to help businesses stay ahead in the digital era.",
    },
    {
      title: "Stability",
      text: "Our reliable systems and dedicated support ensure long-term business continuity and success.",
    },
    {
      title: "Endurance",
      text: "We build solutions designed to last, adapting to evolving technologies and market demands.",
    },
    {
      title: "Versatility",
      text: "From startups to enterprises, our flexible services cater to diverse business needs and challenges.",
    },
    {
      title: "Scalability",
      text: "Our scalable architecture ensures your business can grow seamlessly with increasing demand.",
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto move text every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="Whybanner" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="overlay">
        <div className="vertical-why-container">
          <div className="vertical-why"></div>

          <div className="text-slider">
            <div key={slides[index].title} className="slide left-slide">
              <h1 className="whytitle">{slides[index].title}</h1>
              <p className="whytext">{slides[index].text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewWhygeniuslabs;
