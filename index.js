const brain = require("brain.js");
const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

const net = new brain.recurrent.LSTM();
// let modelData = fs.readFileSync("model_state.json", "utf8");

const modelData = JSON.parse(
  fs.readFileSync("optimized_lider_trained_final.json", "utf-8")
);
net.fromJSON(modelData);

// console.log(modelData);
// modelData = JSON.stringify(modelData);
// const net = new brain.NeuralNetwork();
// net.fromJSON(JSON.parse(modelData));
// net.formatData(modelData);

const train = async () => {
  await net.train(
    [
      {
        input: "what does your company do?",
        output: "We are a construction company, nothing much , nothing less"
      },
      {
        input: "your company do?",
        output: "We are a construction company, nothing much , nothing less"
      },
      {
        input: "who are you?",
        output:
          "We are Blue Twitch Institute. We are a construction company, nothing much , nothing less"
      },
      {
        input: "what's the idea?",
        output: "We are a construction company, nothing much , nothing less"
      },
      {
        input: "whats the idea?",
        output: "We are a construction company, nothing much , nothing less"
      },
      {
        input: "what's the idea?",
        output: "We are a construction company, nothing much , nothing less"
      },
      { input: "The world is a terrible place!", output: "sad" }
    ],
    {
      // Defaults values --> expected validation
      iterations: 1000, // the maximum times to iterate the training data --> number greater than 0
      errorThresh: 0.005, // the acceptable error percentage from training data --> number between 0 and 1
      log: true, // true to use console.log, when a function is supplied it is used --> Either true or a function
      logPeriod: 10, // iterations between logging out --> number greater than 0

      momentum: 0.1, // scales with next layer's change value --> number between 0 and 1
      callback: () => {
        console.log("training");
      }, // a periodic call back that can be triggered while training --> null or function
      callbackPeriod: 10, // the number of iterations through the training data between callback calls --> number greater than 0
      timeout: 50000 // the max number of milliseconds to train for --> number greater than 0. Default --> Infinity
    }
  );
};

// train();
// const modelData = net.toJSON();
// fs.writeFileSync("model_state.json", JSON.stringify(modelData), "utf-8");
// fs.writeFileSync("model.json", JSON.stringify(modelData));

app.listen(process.env.PORT || 41886, () => {
  console.log("server running after trainig");
});

app.get("/question/:id", (req, res) => {
  const question = req.params.id;
  question
    ? res.status(200).json({ message: net.run(question) })
    : res.status(409).json({ message: "input a question" });
});

console.log("running");
