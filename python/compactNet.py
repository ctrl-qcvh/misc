import random, math

class NeuralNet:
    def __init__(self, inputs, hidden, outputs):
        self.W1 = [[random.uniform(-1, 1) for _ in range(hidden)] for _ in range(inputs)]
        self.W2 = [[random.uniform(-1, 1) for _ in range(outputs)] for _ in range(hidden)]
    
    def activate(self, x): return 1 / (1 + math.exp(-x))  # Sigmoid activation
    def forward(self, X):
        H = [sum(x*w for x, w in zip(X, ws)) for ws in zip(*self.W1)]
        H = [self.activate(h) for h in H]
        O = [sum(h*w for h, w in zip(H, ws)) for ws in zip(*self.W2)]
        return [self.activate(o) for o in O]

# Example usage
nn = NeuralNet(3, 4, 2)  # 3 inputs, 4 hidden neurons, 2 outputs
output = nn.forward([0.5, 0.2, 0.1])  # Sample input
print(output)