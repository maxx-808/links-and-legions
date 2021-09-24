import React, { useState } from "react";
import "../App.css";
import CharacterPhoto from "../appImages/CharacterPhoto.png";

const About = () => {
  const page = useState({ page: "about" });
  return (
    <div className="page" id="about">
      <div id="aboutSection">
        <h1>A lil information about me :D</h1>
        <h4>Maplestory:</h4>
        <ul>
          <li>Region: GMS</li>
          <li>World: Bera</li>
          <li>
            Main: Adele (as of July 2021) and yes I know haha so original. I
            wanted to play this class based off the aesthetic of the skill set
            before I knew anything about how good she was.
          </li>
          <li>Level: 235 (as of September 23, 2021)</li>
          <li>I have been playing Maplestory since around mid May 2021</li>
          <li>
            My username: my main is shiroyvki (fame me if you see me :D ill try
            to do the same lul)
          </li>
          <li>Guild: Kaiza</li>
          <li>Alliance: Eggrolls</li>
          <li>
            If you got cash items to sell it wouldn't hurt to see if i'd be
            interested :D . A big reason I started Maplestory was because of how
            diverse the items look and how you can dress your characters
          </li>
        </ul>
        <h4>Coding:</h4>
        <ul>
          <li>How long have I been coding: since around June 2020</li>
          <li>Main coding language: Javascript</li>
          <li>
            Level of coding: I'd say my level of coding is still closer to the
            beginner side of coding. I took a class from UC Berkeley Extension
            on full stack web development and continued learning more after
            that.
          </li>
          <li>
            Job: currently looking for a job as of July 2021. I've had a few
            offers but not entirely in the direction I would like to go. If
            anyone has a legitimate job offer, feel free to contact me via
            LinkedIn: https://www.linkedin.com/in/max-higa-2460351b4/
          </li>
          <li>
            LinkedIn: If you have the time I would love some support on my
            LinkedIn profile :D never expected but always well appreciated!!!
          </li>
        </ul>
      </div>
      <img src={CharacterPhoto} id="aboutCharPhoto"></img>
    </div>
  );
};

export default About;
