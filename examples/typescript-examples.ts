/**
 * Filters out even numbers from an array.
 * This function showcases array filtering in TypeScript.
 *
 * @param numbers - An array of numbers to filter.
 * @returns An array of odd numbers.
 */
function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter(num => num % 2 !== 0);
}
