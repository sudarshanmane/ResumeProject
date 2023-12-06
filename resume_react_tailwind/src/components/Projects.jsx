import React from "react";
import "./sectionHeader.css";
const Projects = ({
  title = "title",
  duration = "07/2023 - Present",
  place = "MetaMind",
  description = "description",
  responsibilities = ["responsibilities", "responsibilities"],
  accomplishments = ["accomplishments", "accomplishments", "accomplishments"],
  techStack = ["ReactJs", "React Router", "React Redux"],
}) => {
  let responsibilitesList = responsibilities.map((element, index) => (
    <li key={index}>{element}</li>
  ));

  let accomplishmentsList = accomplishments.map((element, index) => (
    <li key={index}>{element}</li>
  ));

  return (
    <div className="section-summary">
      <div className="flex justify-between">
        <strong>{title}</strong>
        <strong>{duration}</strong>
      </div>
      <p className="italic">{place}</p>
      <p className="mb-2">{description}</p>
      <b className="">Responsibilities</b>
      <ul className="list-disc">{responsibilitesList} </ul>
      <div className="mt-2"></div>
      <b>Accomplishments</b>
      <div className="mb-2"></div>
      <ul className="list-disc mb-3"> {accomplishmentsList} </ul>
      <b>Tech Stack</b>
      <div className="font-semibold">{techStack.join(" | ")}</div>
    </div>
  );
};

export default Projects;
