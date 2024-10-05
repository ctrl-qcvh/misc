let tradeFee=3.00
let profit=0.00





// Replace 'your_api_key' and 'your_secret_key' with your actual Alpaca API keys
const headers = {
  'APCA-API-KEY-ID': 'your_api_key',
  'APCA-API-SECRET-KEY': 'your_secret_key',
  'Content-Type': 'application/json'
};

// Place a buy order for 1 share of Apple stock (AAPL)
const orderData = {
  symbol: 'AAPL',
  qty: 1,
  side: 'buy',
  type: 'market',
  time_in_force: 'gtc' // 'gtc' = Good Till Canceled
};

fetch('https://paper-api.alpaca.markets/v2/orders', {
  method: 'POST',
  headers: headers,
  body: JSON.stringify(orderData)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error placing order:', error));








const brain = require('brain.js');

// Example stock data
const stockData = {
  symbol: 'META',
  currentPrice: 582.77,
  highPrice: 583.36,
  lowPrice: 568.73,
  openPrice: 570.15,
  previousClose: 572.81
};

// Prepare the data for Brain.js (normalization might be necessary)
const inputData = {
  currentPrice: stockData.currentPrice / 1000, // Normalized (between 0 and 1)
  highPrice: stockData.highPrice / 1000,
  lowPrice: stockData.lowPrice / 1000,
  openPrice: stockData.openPrice / 1000,
  previousClose: stockData.previousClose / 1000
};

// Example neural network setup
const net = new brain.NeuralNetwork();

// Sample training data (could be historical stock data or mock data)
const trainingData = [
  { input: { currentPrice: 0.582, highPrice: 0.583, lowPrice: 0.568, openPrice: 0.570, previousClose: 0.572 }, output: { rise: 1 } },
  { input: { currentPrice: 0.500, highPrice: 0.510, lowPrice: 0.490, openPrice: 0.495, previousClose: 0.480 }, output: { fall: 1 } },
  // Add more training data here
];

// Train the network
net.train(trainingData);

// Predict using the new stock data
const output = net.run(inputData);

console.log(output);














return new promise(resolve+>{setTimeout(() resolve(stockDataIn);