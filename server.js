const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "workout-tracker";
const collections = ["workouts"];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
  console.log("Database Error:", error);
});

app.get("/", (req, res) => {
  res.send(index.html);
});

app.get("/exercise", (req, res) => {
      res.send(exercise.html)
});

app.get("/exercise/:id", (req, res) => {
  db.workouts.findOne({ _id: mongojs.ObjectID(req.params.id) }, (error, data) => {
    if (error) {
      console.log(error)
    } else {
      res.send(exercise.html)
    }
  })
});


// Listen on port 3000
app.listen(8080, () => {
  console.log("App running on port 8080!");
});
