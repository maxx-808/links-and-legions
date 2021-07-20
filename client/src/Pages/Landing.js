import React, { useState } from "react";
import "../App.css";

const Landing = () => {
  const page = useState({ page: "landing" });
  return (
    <div className="page">
      <h1>Hello fellow Maplers!</h1>
      <h4>
        As an aspiring javascript developer and Maplestory player, I have
        wondered for quite a while how I can do something to merge the two. Sad
        as it is to say, I have only recently picked up the game around May
        2021. I have met many wonderful people throughout my time playing and
        have learned a lot about the game. For better or for worse, I always
        want to know everything I can about what I do and the more I play
        Maplestory, the more I find theres way too much information to memorize.
        Which got me thinking of ideas to help make playing easier for me, and I
        can only assume that could help others. I recently started working on my
        link skills and legion. Two of the most time consuming things to do lol.
        I personally did not want to memorize all characters link skills per
        level of link skill as well as legion buffs and what not. So I found a
        table made by a reddit user named Nakiado. Much love to this user as
        this has helped me out a ton. But as lazy as I am, I wanted to make a
        list in order of most important links and legions to myself personally
        and have more detail into it. I thought about making a graph with excel
        or google drive but figured why not make an application? So that is how
        this came to be. I hope that this helps at least one person on their
        Maplestory journey!
      </h4>
      <h3>
        If their are any questions or problems with this application please send
        an email to max.webdevprojects@gmail.com with the subject
        "Maplestory_linklegion Contact" and type out the reason for the email in
        the message box. I will try to get to any emails as soon as possible. My
        current timezone is HST which is 3 hours behind PST. I am on my computer
        most of the time right now so that shouldn't be too much of a problem.
      </h3>
      <h2>
        Disclaimer: I don't plan on making any money off of this application in
        the scope of my current path plan. Also, Maplestory, if there is
        anything here that really can't be used or if there is anything you'd
        want changed, please contact me via the email I left right above. I made
        this purely for people like me who love the game and want to help out
        everyone to continue to grow. I also have no knowledge of anything on
        here being unable to be used.
      </h2>
    </div>
  );
};

export default Landing;
