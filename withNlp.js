const { NlpManager } = require("node-nlp");

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

// Create NLP Manager
const manager = new NlpManager({ languages: ["en"] });

// Preprocess the data and train the NLP model
async function trainModel() {
  // Add language-specific pipeline (tokenization, stemming, etc.)
  manager.addLanguage("en");

  // Train the NLP model
  for (const { prompt, response } of companyData) {
    manager.addDocument("en", prompt, "company-info", { response });
  }
  await manager.train();

  console.log("Training completed.");
}

// Inference function
async function generateResponse(prompt) {
  const response = await manager.process("en", prompt);
  return response.answer || "";
}

// Start training the model
trainModel().then(() => {
  // Test inference
  const userInput = "What products does the company offer?";
  generateResponse(userInput).then((response) => {
    console.log(`User Input: ${userInput}`);
    console.log(`Response: ${response}`);
  });
});
