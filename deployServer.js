import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("this api message is from deploy docker server.js");
});

app.get("/api/android", (req, res) => {
  res.send("this message is from android in docker deploy");
});

app.get("/api/ios", (req, res) => {
  res.send("this message is from iOS in docker deploy");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});