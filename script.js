function fibonacci(num) {
    if (num <= 0) return 0;
    if (num === 1) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

// Test the function
console.log(fibonacci(1)); // Output: 0
console.log(fibonacci(5)); // Output: 3


module.exports = fibonacci;
