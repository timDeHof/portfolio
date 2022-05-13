import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/Galactic Pawn.png";
import IMG2 from "../../assets/Tic_tac_toe.svg.png";
import IMG3 from "../../assets/puppy_bowl.png";
import IMG4 from "../../assets/art_collector.png";
import IMG5 from "../../assets/Strangers Things Demo 0-11 screenshot.png";
import IMG6 from "../../assets/tda.png";

const DATA = [
  {
    id: 0,
    image: IMG1,
    title: "Capstone Project: eCommerce site for a Pawn shop",
    github:
      "https://github.com/PawnShop-at-the-end-of-the-galaxy/PawnShop-Galaxy",
    demo: "https://pawnshop-galaxy.herokuapp.com/",
  },
  {
    id: 1,
    image: IMG2,
    title: "Tic-Tac-Toe game made in html, CSS, and JavaScript",
    github: "https://github.com/timDeHof/TicTacToe",
    demo: "https://keen-ptolemy-79dd48.netlify.app/",
  },
  {
    id: 2,
    image: IMG3,
    title: "Puppy Bowl",
    github: "https://github.com/konradtbudny/UNIV_PuppyBowl_Starter",
    demo: "https://keen-ptolemy-79dd48.netlify.app/", //TODO need to fork a copy and deploy to heroku or netlify
  },
  {
    id: 3,
    image: IMG4,
    title: "Art Collector",
    github: "https://github.com/corylanderson/UNIV_Art_Collector_React_Starter",
    demo: "https://keen-varahamihira-815289.netlify.app/",
  },
  {
    id: 4,
    image: IMG5,
    title: "Stranger's Things",
    github: "https://github.com/timDeHof/strangersThings",
    demo: "https://keen-varahamihira-815289.netlify.app/", //TODO need to deploy to heroku or netlify
  },
  {
    id: 5,
    image: IMG6,
    title: "Fitness Tracker - Backend",
    github: "https://github.com/timDeHof/fitnessTracker",
    demo: "https://keen-varahamihira-815289.netlify.app/", //TODO need to deploy to heroku or netlify
  },
  {
    id: 6,
    image: IMG6,
    title: "Fitness Tracker - Frontend",
    github: "https://github.com/MussaLuv/FrontTracker",
    demo: "https://keen-varahamihira-815289.netlify.app/", //TODO need to deploy to heroku or netlify
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {DATA.map((project, index) => {
          return (
            <article key={index} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={project.image} alt="capstone Project" />
              </div>
              <h3>{project.title}</h3>
              <div className="portfolio_item-cta">
                <a href={project.github} className="btn">
                  Github
                </a>
                <a
                  href={project.demo}
                  className=" btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
//TODO add projects to portfolio page
