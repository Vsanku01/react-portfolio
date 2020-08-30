import "./skills.css";
import React, { useContext } from "react";
import { Fade } from "react-reveal";
import { skillsSection } from "../../portfolio";
import SoftwareSkill from '../SoftwareSkill/SoftwareSkill';
import 'materialize-css/dist/css/materialize.min.css';

const Skills = () => {
  return (
    <div className={"dark-mode main"} id="skills">
      <div className="skills-main-div">
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              className={"white-text"}
            >
              {skillsSection.title}{" "}
            </h1>
            <p
              className={
                "white-text"
              }
            >
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill />
            <div>
              {skillsSection.skills.map((skill) => {
                return (
                  <p
                    key={skill}
                    className={
                     "white-text"
                    }
                    style = {{
                      fontSize: '25px',
                      marginRight: '30px'
                    }}
                  >
                    {skill}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Skills;
