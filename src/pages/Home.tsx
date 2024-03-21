import { About } from "./About";
import { Contact } from "./Contact";
import { Experience } from "./Experience";
import { Projects } from "./Projects";
import "../styles/home.css";
import profileImg from "../images/home-img.jpg";

export const Home = () => {
  return (
    <>
      <section className="home-container">
        <section className="section1">
          <div className="left-text-block">
            <h3>HELLO, I'M</h3>
            <h1>Rebecca Hansson</h1>
            <h3>JUNIOR FULLSTACK DEVELOPER</h3>
          </div>
          <div className="right-image-block">
            <img
              src={profileImg}
              className="profile-img"
              alt="Rebecca Hansson"
            />
          </div>
        </section>
        <div className="button-container">
          <button className="about-btn">About me</button>
          <button className="cv-btn">Download Cv</button>
        </div>
      </section>
      <Projects />
      <About />
      <Experience />
      <Contact />
    </>
  );
};
