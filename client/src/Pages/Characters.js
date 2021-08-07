import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";

const Characters = () => {
  const page = useState({ page: "characters" });
  const [characters, setCharacters] = useState([]);

  const getChars = async (req, res) => {
    let cancelToken = axios.CancelToken;
    let source = cancelToken.source();
    try {
      const all = await axios.get("/api/characters", {
        cancelToken: source.token,
      });
      setCharacters(all.data);
    } catch (err) {
      axios.isCancel(err)
        ? console.log("Request cancelled")
        : console.log("getChars", err);
    }
  };

  useEffect(() => {
    try {
      if (characters === []) {
        getChars();
      } else {
        console.log("characters have been saved");
        console.log(characters);
      }
    } catch (err) {
      console.log("useEffect err", err);
    }
  });
  return (
    <div className="page">
      <h4>Hello world</h4>
    </div>
  );
};

export default Characters;
