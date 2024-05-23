const brain = require('brain.js');
const net = new brain.NeuralNetwork();

const trainingData = [
    { input: [0, 0], output: [0], weight: 0.5 },
    { input: [0, 1], output: [1], weight: 1.0 },
    { input: [1, 0], output: [1], weight: 1.5 },
    { input: [1, 1], output: [0], weight: 2.0 }
];

net.train(trainingData);