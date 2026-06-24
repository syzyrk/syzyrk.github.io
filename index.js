const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    status: "OK",
    message: "API działa"
  });
});

app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Jan" },
    { id: 2, name: "Anna" }
  ]);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Serwer działa na porcie ${PORT}`);
});
