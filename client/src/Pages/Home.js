import React, { useState } from "react";
import "../App.css";

const Home = () => {
  const page = useState({ page: "home" });
  return (
    <div className="page">
      <body id="home">
        <h1>Hello fellow Maplers!</h1>
        <h5 className="blurbs">
          As an aspiring javascript developer and Maplestory player, I have
          wondered for quite a while how I can do something to merge the two.
          Sad as it is to say, I have only recently picked up the game around
          May 2021. I have met many wonderful people throughout my time playing
          and have learned a lot about the game. For better or for worse, I
          always want to know everything I can about what I do and the more I
          play Maplestory, the more I find theres way too much information to
          memorize. Which got me thinking of ideas to help make playing easier
          for me, and I can only assume that could help others. I recently
          started working on my link skills and legion. Two of the most time
          consuming things to do lol. I personally did not want to memorize all
          characters link skills per level of link skill as well as legion buffs
          and what not. So I found a table made by a reddit user named Nakiado.
          Much love to this user as this has helped me out a ton. But as lazy as
          I am, I wanted to make a list in order of most important links and
          legions to myself personally and have more detail into it. I thought
          about making a graph with excel or google drive but figured why not
          make an application? So that is how this came to be. I hope that this
          helps at least one person on their Maplestory journey!
        </h5>
        <h5 className="blurbs"></h5>
      </body>
    </div>
  );
};

export default Home;
