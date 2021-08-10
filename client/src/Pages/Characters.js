import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";

const Characters = () => {
  const page = useState({ page: "characters" });
  const [characters, setCharacters] = useState([]);

  // const getChars = async (req, res) => {};

  useEffect(() => {
    (async () => {
      try {
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
      } catch (err) {
        console.log("useEffect err", err);
      }
    })();
  }, []);
  return (
    <div className="page">
      <table id="allTable">
        <thead>
          <tr>
            <th>Name</th>
            <th className="stat">Stat</th>
            <th>Link</th>
            <th>Link Reason</th>
            <th>Legion</th>
            <th>Legion Reason</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((character, index) => (
            <tr key={index}>
              <td>{character.name}</td>
              <td>{character.stat}</td>
              <td>{character.link}</td>
              <td>{character.linkReason}</td>
              <td>{character.legion}</td>
              <td>{character.legionReason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Characters;
