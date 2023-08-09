// const tf = require("@tensorflow/tfjs-node");
// const { Tokenizer, BPE } = require("tokenizers");

// // Example dataset
// const companyData = [
//   {
//     prompt: "What is the company?",
//     response: "The company is a leading provider of XYZ services."
//   },
//   {
//     prompt: "What products do they offer?",
//     response: "They offer a range of innovative products in various industries."
//   }
//   // Add more data examples
// ];

// // Tokenizer for processing text
// const tokenizer = new Tokenizer(BPE.init({}, [], { unkToken: "[UNK]" }));

// // Preprocess the data and tokenize the text
// const preprocessedData = companyData.map(async ({ prompt, response }) => {
//   const tokenizedPrompt = await tokenizer.encode(prompt.toLowerCase()).tokens;
//   console.log(tokenizedPrompt);
//   const tokenizedResponse = await tokenizer.encode(response.toLowerCase())
//     .tokens;
//   return { input: tokenizedPrompt, output: tokenizedResponse };
// });

// console.log("preprocessedData");
// console.log(preprocessedData);

// // Convert text tokens to numerical sequences
// const inputSequences = preprocessedData.map(({ input }) =>
//   input.map((token) => token.charCodeAt(0))
// );
// const outputSequences = preprocessedData.map(({ output }) =>
//   output.map((token) => token.charCodeAt(0))
// );

// // Create TensorFlow.js model
// const model = tf.sequential();
// model.add(
//   tf.layers.embedding({
//     inputDim: tokenizer.getVocabSize(),
//     outputDim: 16,
//     inputLength: inputSequences[0].length
//   })
// );
// model.add(tf.layers.lstm({ units: 32 }));
// model.add(
//   tf.layers.dense({
//     units: tokenizer.getVocabSize(),
//     activation: "softmax"
//   })
// );
// model.compile({ optimizer: "adam", loss: "sparseCategoricalCrossentropy" });

// // Convert sequences to tensors
// const inputTensors = inputSequences.map((seq) => tf.tensor2d(seq));
// const outputTensors = outputSequences.map((seq) => tf.tensor2d(seq));

// // Train the model
// async function trainModel() {
//   for (let i = 0; i < 100; i++) {
//     for (let j = 0; j < inputTensors.length; j++) {
//       await model.fit(inputTensors[j], outputTensors[j], { epochs: 1 });
//     }
//   }
//   console.log("Training completed.");
// }

// // Inference function
// function generateResponse(prompt) {
//   const tokenizedPrompt = tokenizer.encode(prompt.toLowerCase()).tokens;
//   const inputSequence = tokenizedPrompt.map((token) => token.charCodeAt(0));
//   const inputTensor = tf.tensor2d(inputSequence, [1, inputSequence.length]);
//   const output = model.predict(inputTensor);
//   const outputSequence = Array.from(output.argMax(1).dataSync());
//   const response = tokenizer.decode(outputSequence);
//   return response;
// }

// // Start training the model
// // trainModel().then(() => {
// //   // Test inference
// //   const userInput = "What products does the company offer?";
// //   const response = generateResponse(userInput);
// //   console.log(`User Input: ${userInput}`);
// //   console.log(`Response: ${response}`);
// // });
