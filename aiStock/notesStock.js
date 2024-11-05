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






function normalize(array) {
    const min = Math.min(...array);
    const max = Math.max(...array);
    return array.map(val => (val - min) / (max - min));
}

const normalizedStockIn = normalize(nuroStockIn);




function normalize2DArray(array) {
    // Flatten the 2D array to find global min and max
    let flatArray = nuroStockIn.flat();
    
    const min = Math.min(...flatArray);
    const max = Math.max(...flatArray);
    
    // Normalize each value in the 2D array
    return nuroStockIn.map(row => 
        row.map(value => (value - min) / (max - min))
    );
}

// Example 2D array
const array2D = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];

// Normalize the 2D array
const normalizedArray2D = normalize2DArray(array2D);

console.log(normalizedArray2D);







return new promise(resolve+>{setTimeout(() resolve(stockDataIn);











        const data = ["item", 45];

         function saveFile() {
            // Convert the array to JSON format
            const json = JSON.stringify(net);

            // Create a blob from the JSON string
            const blob = new Blob([json], { type: 'application/json' });

            // Create a temporary link for downloading the file
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "net.json"; // Set the file name

            // Trigger download and clean up
            document.body.appendChild(link);
            document.body.removeChild(link);
        };

        document.getElementById('uploadButton').addEventListener('click', function () {
            document.getElementById('uploadInput').click();
        });

        document.getElementById('uploadInput').addEventListener('change', function (event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    // Parse the JSON content back to an array
                    const uploadedData = JSON.parse(e.target.result);
                    console.log("Uploaded Data:", uploadedData);
                    // Do something with the uploaded data, like reassigning it
                };
                reader.readAsText(file);
            }
        });