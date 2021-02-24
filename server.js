const express = require("express");
const bodyParser = require("body-parser");

const task1 = require("./src/task1/router");
const task2 = require("./src/task2/router");
// const cpuUtilization = require("./src/task2/cpuUtilization");

const app = express();

// Routes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text({}));

app.use("/api/taskone", task1);
app.use("/api/tasktwo", task2);

// error handler
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).send({
    error: {
      status: error.status || 500,
      message: error.message || "Server Error",
    },
  });
});

app.listen("3030", function () {
  console.log(`Listening`);
});

// cpuUtilization();
