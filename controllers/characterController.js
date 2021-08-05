const characters = require("../characters.json");

module.exports = {
  getCharacters: async (req, res) => {
    try {
      const allCharacters = await characters;
      res.json(allCharacters);
    } catch (err) {
      console.log("getCharacters error: ", err);
    }
  },
};
