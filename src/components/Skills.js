import React from "react";
import skills from "../data-skills";
import {} from "react-icons";

const Skills = () => {
  return (
    <div className="skills">
      <h2>Technical Skills.</h2>

      {skills.map((skill) => {
        const { id, skill1 } = skill;
        return (
          <ul className="skills-items" key={id}>
            <li>{skill1}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default Skills;
