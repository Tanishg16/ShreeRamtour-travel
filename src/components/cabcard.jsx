import React from "react";
import RajawadaImg from "../images/rajawadaImage.jpg";
import MahakalImg from "../images/mahakalmandir1.jpg";
import MandavImg from  "../images/mandav.jpg";
import MaheshwarImg from "../images/maheshwarfort.jpg"
import OmkareshwarImg from "../images/omkareshwar.jpg"
import MumbaiCityImg from "../images/mumbaicity.jpg"
import CabTaxiImg from "../images/cabtaxi.jpg"
const cabServices = [
  {
    title: "Indore to Bhopal Taxi",
    image: RajawadaImg,
  },
  {
    title: "Indore to Ujjain Taxi",
    image: MahakalImg,
  },
  {
    title: "Indore to Mandav Taxi",
    image:  MandavImg,
  },
 
];
const moreCabServices = [
  {
    title: "Indore to Maheshwar Taxi",
    image: MaheshwarImg,
  },
  {
    title: "Indore to Omkareshwar Taxi",
    image: OmkareshwarImg,
  },
    {
    title: "Indore to Mumbai Taxi",
    image: MumbaiCityImg,
  },
];
const moreeCabServices = [
  {
    title: "Bhopal to Indore Taxi",
    image: RajawadaImg,
  },
  {
    title: "Ujjain to Indore Taxi",
    image: MahakalImg,
  },
    {
    title: "Car on Rent in Indore",
    image: CabTaxiImg,
  },
];
const CabCard = () => {
  return (
    <div className="cab-section">
      <h2 className="cab-heading">Choose Your Cab Service</h2>
      <div className="cab-grid">
        {cabServices.map((service, index) => (
          <div key={index} className="cab-card">
            <img src={service.image} alt={service.title} className="cab-img" />
            <h3 className="cab-title">{service.title}</h3>
          </div>
        ))}
      </div>
      <div style={{ height: "50px" }}></div>
      <div className="cab-grid">
        {moreCabServices.map((service, index) => (
          <div key={index} className="cab-card">
            <img src={service.image} alt={service.title} className="cab-img" />
            <h3 className="cab-title">{service.title}</h3>
          </div>
        ))}
      </div>
        <div style={{ height: "50px" }}></div>
      <div className="cab-grid">
        {moreeCabServices.map((service, index) => (
          <div key={index} className="cab-card">
            <img src={service.image} alt={service.title} className="cab-img" />
            <h3 className="cab-title">{service.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CabCard;