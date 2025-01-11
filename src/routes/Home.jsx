// rrd import
import { NavLink } from "react-router-dom";
// Components
import Footer from "../components/Footer";
import MissionVision from "../components/MissionVision";
import Testimonials from "../components/Testimonials";
import WhySchool from "../components/WhySchool";
import CarouselComponent from "../components/CarouselComponent";
import CarouselVideo from "../components/CarouselComponent1";
import SocialCarousel from "../components/SocialCarousel";
const Home = () => {
  return (
    <>
      <div className="home">
        <p className="heading">
          Bright Future English Medium
          <span style={{ color: "#14d22a" }}> School </span>
          <br />
          <span style={{ color: "#14d22a" }}>& Jr. College</span>
          <br />
          khadki, Tal.Daund
          <br />
          <span>Pune - 413130</span>
        </p>

        {/* <NavLink to="/about">Explore</NavLink> */}
        <NavLink style={{ whiteSpace: "nowrap" }}>ADMISSION OPEN</NavLink>
        <NavLink style={{ whiteSpace: "nowrap" }}>
          +91 9922723147 | +91 7769802325
        </NavLink>
      </div>
      {/* <MissionVision /> */}

      <CarouselVideo />

      {/* <Educational Photos> */}

      <CarouselComponent />

      <SocialCarousel />

      <WhySchool />
      {/* <Testimonials /> */}
      <Footer />
    </>
  );
};

export default Home;
