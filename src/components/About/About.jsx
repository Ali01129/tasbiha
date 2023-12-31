import React from "react";
import img from "../../assets/picture-1.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import "./About.css";
export default function About() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container container__about">
        <div className="about__me">
          <div className="about__me-image">
          <img src={img} style={{ height: "400px", width: "400px" }} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Computer Science</h5>
              <small>FAST karachi</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Intermediate</h5>
              <small>Saint Mary`s</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Matric</h5>
              <small>Saint Mary`s</small>
            </article>
          </div>
          <p>
            I am a Full Stack Web Developer with experience developing business
            solutions and implementing innovative ideas using MERN stack. I have
            strong expertise in Software Development life cycle from modeling to
            deploying with the ability to work both in SCRUM and AGILE
            environments.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk!
          </a>
        </div>
      </div>
    </section>
  );
}
