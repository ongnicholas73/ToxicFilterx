const express = require("express");
const path = require("path");

const PORT = 3968;

const app = express();

// server settings
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

app.get("/pizza", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/pizza.html"));
});

app.get("/roblox", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/roblox.html"));
});

app.get("/tfx", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/tfx.html"));
});

app.get("/api/secret", (req, res) => {
  const myMostSecretMegaSuperSecret = "chiterchidco";
  res.json({ seceret: myMostSecretMegaSuperSecret });
});

app.get("/api/password", (req, res) => {
  const password = "cochimpmululuocco";
  res.json({ password: password });
});

app.post("/api/tacos", (req, res) => {
  console.log("req.body", req.body);

  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log("listening on PORT: ", PORT);
});
