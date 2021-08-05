//server dependencies
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//mongoose connection

//

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
}

//routes
//app.use("/api/", require("./routes/"));
app.use("/api/characters", require("./routes/characterRoutes"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
