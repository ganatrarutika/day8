let number = 29; // Predefined number to check
let isPrime = true; // Assume the number is prime initially
let divisor = 2; // Start checking from 2

// Check for numbers less than 2
if (number < 2) {
    isPrime = false;
}

// While loop to check for factors
while (isPrime && divisor <= Math.sqrt(number)) {
    if (number % divisor === 0) {
        isPrime = false; // Found a divisor, not prime
    }
    divisor++; // Check the next number
}

// Output the result
if (isPrime) {
    console.log(`${number} is a prime number.`);
} else {
    console.log(`${number} is not a prime number.`);
}
