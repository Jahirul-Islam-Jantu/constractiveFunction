const express = require("express");

const app = express();

app.get("/", (_, res) => {
  const obj = {
    name: "Jahir",
    email: "jahirulislamjantu@gmail.com",
  };
  res.json(obj);
});

app.listen(3000, () => {
  console.log("i am listening on port 3000!");
});
