import React from "react";
import cocktails from "../Projects/cocktails.png";
import hotelmenu from "../Projects/hotel-menu.png";
import mindgame from "../Projects/mindgame.png";
import netflixclone from "../Projects/netflix-clone.png";

const Projects = () => {
  return (
    <section className="projects">
      <h1 className="projects-header">Projects I have Developed</h1>
      <p className="projects-header-p">
        With the programming skills i have aquired so far.
        <br /> <br /> I have managed to work on the following projects:
      </p>
      <div className="project-items">
        <div className="item">
          <img src={cocktails} alt="cocktail" />
          <h1 className="project-p-h1">Cocktail Joint</h1>
          <p className="project-p-h1">
            Cocktail joint is a project made with ReactJs. This site uses an
            external API to fetch data. Users are able to search different types
            of cocktails through the search bar, as well as get detailed
            information on cocktails ingredients
          </p>
          <a href="https://cocktail-joint.netlify.app">View Project</a>
        </div>

        <div className="item">
          <img src={mindgame} alt="mindgame" />
          <h1 className="project-p-h1">Mind Game</h1>
          <p className="project-p-h1">
            This is a JavaScript paractice project, that i built while learning
            JavaScript programming language
          </p>
          <a href="https://samuocodes-mindgame.netlify.app">View Project</a>
        </div>

        <div className="item">
          <img src={hotelmenu} alt="hotelmenu" />
          <h1 className="project-p-h1">React Hotel Menu</h1>
          <p className="project-p-h1">
            A Hotel Menu project that allows users to search for different meals
            to order, depending on time,that is; braekfast,lunch as well as
            shakes
          </p>
          <a href="https://samuocodes-hotel-menu.netlify.app">View Project</a>
        </div>
        <div className="item">
          <img src={netflixclone} alt="netflixclone" />
          <h1 className="project-p-h1">React Neflix Clone</h1>
          <p className="project-p-h1">
            I managed to build to clone the Neflix movie website using ReactJs.
            To fetch specific movies, i consumed the TMDB API using axios to
            make HTTP fetch request to the API.
          </p>
          <a href="https://netflix-clone-sammykariuki.netlify.app">
            View Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
