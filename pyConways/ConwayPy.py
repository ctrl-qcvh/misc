import numpy as np
import time
import os

def print_grid(grid):
    """Prints the grid to the console."""
    os.system('cls' if os.name == 'nt' else 'clear')
    for row in grid:
        print(' '.join('█' if cell else ' ' for cell in row))

def get_next_state(grid):
    """Calculates the next state of the grid based on Conway's rules."""
    rows, cols = grid.shape
    next_grid = np.zeros((rows, cols), dtype=int)
    
    for row in range(rows):
        for col in range(cols):
            # Count live neighbors
            neighbors = (
                grid[row-1:row+2, col-1:col+2].sum() - grid[row, col]
            )
            
            # Apply Conway's rules
            if grid[row, col] == 1 and neighbors in (2, 3):
                next_grid[row, col] = 1
            elif grid[row, col] == 0 and neighbors == 3:
                next_grid[row, col] = 1
    
    return next_grid

def startGame():
    # Initialize grid
    rows, cols = 20, 40
    grid = np.random.choice([0, 1], size=(rows, cols), p=[0.8, 0.2])
    
    try:
        while True:
            print_grid(grid)
            grid = get_next_state(grid)
            time.sleep(0.3)
    except KeyboardInterrupt:
        print("Game stopped.")
startGame()