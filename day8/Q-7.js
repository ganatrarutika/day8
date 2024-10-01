let num = 12345; // Predefined number
let sum = 0; // Initialize sum to 0

// Using a while loop to calculate the sum of digits
while (num > 0) {
    sum += num % 10; // Add the last digit to sum
    num = Math.floor(num / 10); // Remove the last digit from num
}

// Output the result
console.log(`The sum of the digits is ${sum}.`);
