# NPM Calculator Package

## Overview

`npm-calculator-package` is a Go package designed to provide essential mathematical operations in an easy-to-use interface. It supports basic arithmetic operations like addition, subtraction, multiplication, and division, making it suitable for simple computations in your projects.

---

## Installation

To install the package, run:

```bash
npm install @amanbora856/npm-calculator-package
```

---

## Importing the Package

To use `npm-calculator-package`, import it in your Go application:

```go
import "github.com/amanbora856/npm-calculator-package"
```

---

## Features

- **Basic Arithmetic**: Add, subtract, multiply, and divide numbers.
- **Error Handling**: Proper handling of invalid inputs or division by zero.
- **Lightweight**: Focused functionality with minimal overhead.

---

## Usage

### 1. Addition

```go
result := mathutil.Add(10, 5)
fmt.Printf("The sum is: %d\n", result)
```

---

### 2. Subtraction

```go
result := mathutil.Subtract(10, 5)
fmt.Printf("The difference is: %d\n", result)
```

---

### 3. Multiplication

```go
result := mathutil.Multiply(10, 5)
fmt.Printf("The product is: %d\n", result)
```

---

### 4. Division

```go
result, err := mathutil.Divide(10, 5)
if err != nil {
    log.Fatalf("Error: %v", err)
}
fmt.Printf("The quotient is: %f\n", result)
```

---

## Testing

To run tests for this package:

```bash
go test ./...
```

---

## Versioning

This package uses [semantic versioning](https://semver.org/). Each release is tagged in the format `vX.Y.Z`.

---

## License

This package is open-source and available under the [MIT License](LICENSE).

---

## Contributions

Contributions are welcome! Open an issue or submit a pull request on the [GitHub repository](https://github.com/amanbora856/npm-calculator-package).

---

## Support

For any questions or issues, visit the [GitHub Issues](https://github.com/amanbora856/npm-calculator-package/issues) page or contact the repository maintainer.

