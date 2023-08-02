const { NeuralNetwork } = require("brain.js");

// Example dataset
const companyData = [
  {
    prompt: "What is the company?",
    response: "The company is a leading provider of XYZ services."
  },
  {
    prompt: "What products do they offer?",
    response: "They offer a range of innovative products in various industries."
  }
  // Add more data examples
];

// Prepare training data
const trainingData = companyData.map(({ prompt, response }) => ({
  input: prompt.toLowerCase(),
  output: response.toLowerCase()
}));

// Create a neural network
const net = new NeuralNetwork();

// Train the neural network
net.train(trainingData);

// Inference function
function generateResponse(prompt) {
  const output = net.run(prompt.toLowerCase());
  return output;
}

// Test inference
const userInput = "What products does the company offer?";
const response = generateResponse(userInput);
console.log(`User Input: ${userInput}`);
console.log(`Response: ${response}`);
