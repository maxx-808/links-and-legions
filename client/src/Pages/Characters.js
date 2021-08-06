import React, { useState } from "react";
import "../App.css";
import axios from "axios";

const Characters = () => {
  const page = useState({ page: "about" });

  const getChars = async (req, res) => {
      try {
          const all = await axios.get("/api/characters")
          return all
      }
  }
  return (
    <div className="page">
      <h4>Hello world</h4>
    </div>
  );
};

export default Characters;
