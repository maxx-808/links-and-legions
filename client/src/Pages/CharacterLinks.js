import React, { useState, useEffect } from "react";
import "../App.css";
import getCharacters from "../Components/GetCharacters/getCharacters";

const CharacterLinks = () => {
  const page = useState({ page: "characterLinks" });
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await getCharacters();
      setCharacters(res.data);
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
          </tr>
        </thead>
        <tbody>
          {characters.map((character, index) => (
            <tr key={index}>
              <td>{character.name}</td>
              <td>{character.stat}</td>
              <td>{character.link}</td>
              <td>{character.linkReason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CharacterLinks;
