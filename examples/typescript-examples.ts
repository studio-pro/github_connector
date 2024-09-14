/**
 * Greets the user with a message.
 * This function is intended to demonstrate TypeScript function annotations.
 *
 * @param name - The name of the user to greet.
 * @returns A greeting message string.
 */
function greet(name: string): string {
  return `Hello, ${name}!`;
}

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
 * Demonstrates use of Typia library with a sample interface.
 * This example highlights serialization using Typia.
 */
import typia from 'typia';

interface User {
  id: number;
  name: string;
}

const user: User = { id: 1, name: 'John Doe' };
const serializedUser = typia.stringify<User>(user);
console.log(serializedUser); // Expected serialized output
