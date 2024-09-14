/**
 * Generates a random integer between two values.
 * This demonstrates random number generation in TypeScript.
 *
 * @param min - The minimum integer value.
 * @param max - The maximum integer value.
 * @returns A random integer between min and max.
 */
function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
