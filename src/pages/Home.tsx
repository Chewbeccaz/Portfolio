import { About } from "./About";
import { Contact } from "./Contact";
import { Experience } from "./Experience";
import { Projects } from "./Projects";
import "../styles/home.css";

export const Home = () => {
  return (
    <>
      <div className="home-container">
        <h1>Home</h1>
      </div>
      <Projects />
      <About />
      <Experience />
      <Contact />
    </>
  );
};
