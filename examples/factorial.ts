/**
 * Calculates the factorial of a number using recursion.
 * This function showcases basic recursion in TypeScript.
 *
 * @param n - The number to calculate the factorial for.
 * @returns The factorial of the given number.
 * @throws Will throw an error if n is negative.
 */
function factorial(n: number): number {
  if (n < 0) throw new Error('Factorial is not defined for negative numbers');
  return n <= 1 ? 1 : n * factorial(n - 1);
}

/**
 * Calculates the factorial of a number iteratively.
 * Provides a non-recursive method for calculating factorials.
 *
 * @param n - The number to calculate the factorial for.
 * @returns The factorial of the given number.
 */
function iterativeFactorial(n: number): number {
  if (n < 0) throw new Error('Factorial is not defined for negative numbers');
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5)); // Log recursive factorial result
console.log(iterativeFactorial(5)); // Log iterative factorial result
