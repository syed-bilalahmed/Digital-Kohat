import React from "react";
import "./Cards.css";
import schoolImg from "../imgs/school.svg";
import restaurantImg from "../imgs/restaurant.svg";
import hospitalImg from "../imgs/hospitals.svg";
import businessImg from "../imgs/business.png";
import techImg from "../imgs/technicians.svg";
import tourismImg from "../imgs/tourism.png";

const services = [
  {
    title: "Schools",
    desc: "Search for quality learning institutions or register your own educational center.",
    img: schoolImg,
  },
  {
    title: "Restaurants",
    desc: "Discover or share the best dining spots and food services around you.",
    img: restaurantImg,
  },
  {
    title: "Hospitals",
    desc: "Find trusted medical care or connect your healthcare services with the community.",
    img: hospitalImg,
  },
  {
    title: "Businesses",
    desc: "Explore or promote local shops and businesses in your area.",
    img: businessImg,
  },
  {
    title: "Technicians",
    desc: "Hire skilled workers or offer your professional services with ease.",
    img: techImg,
  },
  {
    title: "Tourism",
    desc: "Plan visits or showcase local attractions and tourism spots.",
    img: tourismImg,
  },
];
const Cards = () => {
  return (

    <section className="services-section">
      <h2 className="services-title">
        <span className="bar"></span> SERVICES
      </h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.img} alt={service.title} className="service-img" />
            <div className="card-content">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <button className="learn-btn">Learn more...</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
