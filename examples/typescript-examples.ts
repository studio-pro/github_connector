/**
 * Calculates the sum of an array of numbers.
 * This example highlights reduction operation in TypeScript.
 *
 * @param numbers - An array of numbers to sum.
 * @returns The total sum of the numbers.
 */
function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
