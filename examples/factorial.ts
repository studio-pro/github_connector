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
