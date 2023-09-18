const brain = require("brain.js");
const express = require("express");
const model_training = require("./lider_training_data.json");
const fs = require("fs");

const app = express();
app.use(express.json());

const net = new brain.recurrent.LSTM();
console.log(model_training);
console.log("here");

const normal = {
  // Defaults values --> expected validation
  iterations: 6000, // the maximum times to iterate the training data --> number greater than 0
  errorThresh: 0.005, // the acceptable error percentage from training data --> number between 0 and 1
  log: true, // true to use console.log, when a function is supplied it is used --> Either true or a function
  logPeriod: 10, // iterations between logging out --> number greater than 0

  momentum: 0.1, // scales with next layer's change value --> number between 0 and 1
  callback: () => {
    console.log("training");
  }, // a periodic call back that can be triggered while training --> null or function
  callbackPeriod: 10, // the number of iterations through the training data between callback calls --> number greater than 0
  timeout: 50000 // the max number of milliseconds to train for --> number greater than 0. Default --> Infinity
};

// console.log(model_training);
const trainingOptions = {
  iterations: 6000,
  errorThresh: 0.005,
  log: true,
  logPeriod: 10,
  momentum: 0.1,
  callback: () => {
    console.log("Training in progress...");
  },
  callbackPeriod: 10,
  timeout: 50000
};

const optimizedTraining = {
  iterations: 5000,
  errorThresh: 0.01,
  log: true,
  logPeriod: 100,
  momentum: 0.9,
  callback: () => {
    console.log("Training in progress...");
  },
  callbackPeriod: 100,
  timeout: 60000
};

const train = async () => {
  await net.train(model_training, optimizedTraining);
};

train();
const modelData = net.toJSON();
fs.writeFileSync(
  "better_lider_trained_final.json",
  JSON.stringify(modelData),
  "utf-8"
);

app.listen(4222, () => {
  console.log("server running after trainig");
});

app.post("/question", (req, res) => {
  const question = req.body.question;
  question
    ? res.status(200).json({ message: net.run(question) })
    : res.status(409).json({ message: "input a question" });
});

console.log("running");
