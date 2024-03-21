import "../styles/projects.css";
import searchify from "../images/searchify.png";
import hollywoodHarvest from "../images/restaurant.png";
import tbr from "../images/tbr.png";
import weatherApp from "../images/weatherapp.png";
import rockPaperScissors from "../images/stensaxpase.png";
import comingSoon from "../images/comingSoon.png";
import { Link } from "react-router-dom";

export const Projects = () => {
  return (
    <section className="projects-container">
      <div className="text-left-block">
        <h3>Projects</h3>
        <div className="text-block">
          <p>Här är det lite mera text.</p>
        </div>
      </div>

      <div className="projects-box">
        <div className="project1">
          <img src={searchify} className="searchify-img" alt="Searchify" />
          <a href="https://google.com" className="project1-link">
            <h4>Searchify</h4>
          </a>
        </div>
        <div className="project2">
          <img
            src={hollywoodHarvest}
            className="restaurant-img"
            alt="Restaurant app"
          />
          <a href="https://google.com" className="project2-link">
            <h4>Restaurant App</h4>
          </a>
        </div>
        <div className="project3">
          <img src={tbr} className="tbr-img" alt="To be read, to do list app" />
          <a
            href="https://chewbeccaz.github.io/the-todos-Chewbeccaz/"
            className="project3-link">
            <h4>TBR - Book List</h4>
          </a>
        </div>
        <div className="project4">
          <img src={weatherApp} className="weatherapp-img" alt="weather app" />
          <a
            href="https://chewbeccaz.github.io/Wheather-App/"
            className="project4-link">
            <h4>Weather App</h4>
          </a>
        </div>
        <div className="project5">
          <img
            src={rockPaperScissors}
            className="rockpaperscissor-img"
            alt="rock paper scissors app"
          />
          <a
            href="https://chewbeccaz.github.io/Rock-Paper-Scissor/"
            className="project5-link">
            <h4>Rock Paper Scissor</h4>
          </a>
        </div>
        <div className="project6">
          <img
            src={comingSoon}
            className="comingSoon-img"
            alt="More projects coming soon"
          />
          <h4>Coming soon..</h4>
        </div>
      </div>
    </section>
  );
};
