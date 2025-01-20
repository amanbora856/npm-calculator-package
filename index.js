class Calculator {
  // Addition
  add(a, b) {
    return a + b;
  }

  // Subtraction
  subtract(a, b) {
    return a - b;
  }

  // Multiplication
  multiply(a, b) {
    return a * b;
  }

  // Division
  divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }

  // Exponentiation (power)
  power(base, exponent) {
    return Math.pow(base, exponent);
  }

  // Square root
  sqrt(number) {
    if (number < 0) {
      throw new Error("Cannot compute the square root of a negative number");
    }
    return Math.sqrt(number);
  }
}

module.exports = new Calculator();
