import React from 'react';
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import { CiCoffeeCup } from "react-icons/ci";
import DeveloperImage from '../images/logo img.jpg'

const Home = () => {
  return (
    <div>
      {/* === Home Section === */}
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>Thalla Ganesh</b></h1>
          <Typed />
        </div>

      <img
  src={DeveloperImage}
  alt="Developer"
  className="w-40 h-40 object-cover rounded-full border-4 border-blue-500 shadow-lg transition-transform duration-300 hover:scale-105"
/>


      </div>

      {/* === About Section === */}
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            I am a beginner developer currently focusing on building and improving my skills in the <b>MERN</b> stack.<br /><br />
            I'm passionate about learning new technologies and turning ideas into real-world web applications.<br /><br />
            Excited about the journey ahead and continuously working to grow as a full-stack developer. <CiCoffeeCup style={{ scale: "1.5", rotate: "15deg" }} />
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="Ganesh Avatar" />
        </Tilt>
      </div>
    </div>
  );
};

export default Home;
