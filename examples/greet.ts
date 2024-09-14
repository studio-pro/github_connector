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
 * Logs a greeting message to the console.
 * This is an additional function to demonstrate separation of concerns.
 *
 * @param name - The name of the user to greet.
 */
function logGreeting(name: string): void {
  const message = greet(name);
  console.log(message);
}

/**
 * Greets multiple users.
 * This function shows usage of arrays and iteration in TypeScript.
 *
 * @param names - An array of user names to greet.
 * @returns An array of greeting messages.
 */
function greetMultiple(names: string[]): string[] {
  return names.map(greet);
}

logGreeting('Alice');
console.log(greetMultiple(['Bob', 'Charlie', 'David'])); // Log multiple greetings
