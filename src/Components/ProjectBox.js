import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName, projectDesc, githubLink, demoLink }) => {
  return (
    <div className='projectBox'>
      <img className='projectPhoto' src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {projectDesc}
        <br />

        {githubLink && (
          <a href={githubLink} target='_blank' rel="noopener noreferrer">
            <button className='projectbtn'><FaGithub /> Github</button>
          </a>
        )}

        {demoLink && (
          <a href={demoLink} target='_blank' rel="noopener noreferrer">
                      </a>
        )}
      </div>
    </div>
  );
};

export default ProjectBox;
