# Create an array of three integer objects
int_objs = [12, 6, 8]

# Define a function to perform a modulo operation
def modulo_operation(obj_array):
    if len(obj_array) < 2:
        return "Array needs at least two integers for the modulo operation."
    return obj_array[0] % obj_array[1]

# Call the function and display the result
result = modulo_operation(int_objs)
print(f"The result of the modulo operation is: {result}")