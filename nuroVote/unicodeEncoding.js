const brain = require('brain.js');
const net = new brain.NeuralNetwork();

// Function to encode text as a fixed-size array of normalized Unicode values
function encodeUnicodeText(text, maxLength) {
    const encoded = new Array(maxLength).fill(0);
    for (let i = 0; i < text.length && i < maxLength; i++) {
        encoded[i] = text.codePointAt(i) / 65535; // Normalize Unicode code point
    }
    return encoded;
}

// Example training data with Unicode text descriptions
const maxLength = 20; // Maximum length of text descriptions
const trainingData = [
    { input: encodeUnicodeText('Hello 🌍', maxLength), output: [0] },
    { input: encodeUnicodeText('Brain.js is 🚀', maxLength), output: [1] },
    { input: encodeUnicodeText('Neural networks are cool 😎', maxLength), output: [1] },
    { input: encodeUnicodeText('JavaScript coding', maxLength), output: [0] }
];

// Train the neural network
net.train(trainingData);

// Test the network
const output = net.run(encodeUnicodeText('Hello Brain.js 🌍', maxLength));
console.log(output); // Output will be a numeric value