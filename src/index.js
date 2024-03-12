const express = require("express");
// import express from 'express';

const app = express();

app.get("/", (req, res) => {
  const now = new Date();
  const delay = addSeconds(now, 5);
  console.log(`Request received at ${now}`);
  console.log(`Delay is ${delay}`);

  let count = 0;

  while (new Date() < delay) {
    count++;
  }

  res.send("Count " + count);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

function addMinutes(date, minutes) {
  return new Date(date.getTime() + minutes * 60000);
}

function addSeconds(date, seconds) {
  return new Date(date.getTime() + seconds * 1000);
}
