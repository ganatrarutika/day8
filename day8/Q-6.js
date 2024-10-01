let n = 5; // Predefined number to calculate the factorial
let factorial = 1; // Initialize factorial to 1
let counter = 1; // Start counter at 1

// Check for non-negative input
if (n < 0) {
    console.log("Factorial is not defined for negative numbers.");
} else {
    // While loop to calculate factorial
    while (counter <= n) {
        factorial *= counter; // Multiply the current counter with factorial
        counter++; // Increment the counter
    }

    // Output the result
    console.log(`The factorial of ${n} is ${factorial}.`);
}
