import hashlib

class HashedObject:
    def __init__(self, string_val, char_val, float1, float2):
        self.string_val = string_val
        self.char_val = char_val
        self.float1 = float1
        self.float2 = float2

    def hash_object(self):
        # Convert object values to a string format and hash them
        obj_string = f"{self.string_val},{self.char_val},{self.float1},{self.float2}"
        return hashlib.sha256(obj_string.encode()).hexdigest()

    def sum_int_representation(self):
        # Convert values to integer representations
        str_int = sum(ord(c) for c in self.string_val)  # Sum ASCII values of string characters
        char_int = ord(self.char_val)  # ASCII value of character
        float1_int = int(self.float1)  # Integer part of float
        float2_int = int(self.float2)  # Integer part of float
        return str_int + char_int + float1_int + float2_int

# Example usage
obj = HashedObject("Hello", 'A', 12.34, 56.78)
hashed_value = obj.hash_object()
sum_values = obj.sum_int_representation()

print("Hashed Object:", hashed_value)
print("Sum of Integer Representations:", sum_values)