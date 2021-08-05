const router = require("express").Router();
const { getCharacters } = require("../controllers/characterController");

router.get("/", getCharacters);

module.exports = router;
