const brain = require("brain.js");
const express = require("express");
const model_training = require("./lider_training");
const fs = require("fs");

const app = express();
app.use(express.json());

const net = new brain.recurrent.LSTM();

// console.log(model_training);

const train = async () => {
  await net.train(model_training, {
    // Defaults values --> expected validation
    iterations: 5000, // the maximum times to iterate the training data --> number greater than 0
    errorThresh: 0.005, // the acceptable error percentage from training data --> number between 0 and 1
    log: true, // true to use console.log, when a function is supplied it is used --> Either true or a function
    logPeriod: 10, // iterations between logging out --> number greater than 0

    momentum: 0.1, // scales with next layer's change value --> number between 0 and 1
    callback: () => {
      console.log("training");
    }, // a periodic call back that can be triggered while training --> null or function
    callbackPeriod: 10, // the number of iterations through the training data between callback calls --> number greater than 0
    timeout: 50000 // the max number of milliseconds to train for --> number greater than 0. Default --> Infinity
  });
};

train();
const modelData = net.toJSON();
fs.writeFileSync("lider_trained.json", JSON.stringify(modelData), "utf-8");

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
