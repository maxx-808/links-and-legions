import React, { useState } from "react";
import "../App.css";

const Landing = () => {
  const page = useState({ page: "landing" });
  return (
    <div className="page">
      <body id="landing">
        {" "}
        <h1>Hello fellow Maplers!</h1>
        <h5 className="blurbs">
          Welcome to my application. as of August 2021, this is purely a work in
          progress. This app is designed to help people who play MapleStory find
          all the info on all characters and their link skills and legion
          bonuses. What I want to turn this into is a downloadable app that you
          can use to track your legion and link skill progress as well as being
          able to log notes down on everything.
        </h5>
        <h5 className="blurbs">
          If their are any questions or problems with this application please
          send an email to max.webdevprojects@gmail.com with the subject
          "Maplestory_linklegion Contact" and type out the reason for the email
          in the message box. I will try to get to any emails as soon as
          possible. My current timezone is HST. I am on my computer most of the
          time right now so that shouldn't be too much of a problem.
          <br />
          <br />
          <strong>Disclaimer:</strong> I don't plan on making any money off of
          this application in the scope of my current path plan. Also,
          Maplestory, if there is anything here that really can't be used or if
          there is anything you'd want changed, please contact me via the email
          I left right above. I made this purely for people like me who love the
          game and want to help out everyone to continue to grow. I also have no
          knowledge of anything on here being unable to be used.
        </h5>
      </body>
    </div>
  );
};

export default Landing;
