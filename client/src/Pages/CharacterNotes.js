import React, { useState, useEffect } from "react";
import "../App.css";
import getCharacters from "../Components/GetCharacters/getCharacters";

const CharacterNotes = () => {
  const page = useState({ page: "characterNotes" });
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
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((character, index) => (
            <tr key={index}>
              <td>{character.name}</td>
              <td>{character.stat}</td>
              <td>
                {character.notes.map((note, index) => (
                  <ul key={index + 9999}>
                    <li>{note}</li>
                  </ul>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CharacterNotes;
