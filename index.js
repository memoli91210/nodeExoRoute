const express = require("express"); //ou import express from "express"
const app = express();
const port = 3001;

app.get("/repeat/Word/3", (req, res) => {
  let word = "word ".repeat(3);
  res.send(word);
});

app.get("/repeat/Teacher/5", (req, res) => {
  res.send("Teacher Teacher Teacher Teacher Teacher");
});

app.get("/home/:prenom/:nom/:titre", (req, res) => {
  console.log(req.params);
  let { prenom, nom, titre } = req.params;
  res.send(
    `mon nom est ${nom} mon prenom ${prenom} est mon titre est ${titre}`
  );
});

app.get("/operate/:operation/:nbr1/:nbr2", (req, res) => {
  console.log(req.params);
  let total;
  let { operation, nbr1, nbr2 } = req.params;

  if (operation === "mul") {
    total = nbr1 * nbr2;
  } else if (operation === "add") {
    total = parseInt(nbr1) + parseInt(nbr2);
  } else if (operation === "sub") {
    total = nbr1 - nbr2;
  } else if (operation === "div") {
    total = nbr1 / nbr2;
  }

  res.send(`le total est ${total}`);
});

app.listen(port, () => console.log(`serveur running on port: ${port}`));
