import React, { useState } from "react";
import "../App.css";

const Landing = () => {
  const page = useState({ page: "landing" });
  return (
    <div className="page">
      <h1>Hello World</h1>
    </div>
  );
};

export default Landing;
