/**
 * Demonstrates use of Typia library with a sample interface.
 * This example highlights serialization using Typia.
 */
import typia from 'typia';

interface User {
  id: number;
  name: string;
  email?: string;
}

const user: User = { id: 1, name: 'John Doe', email: 'john.doe@example.com' };
const serializedUser = typia.stringify<User>(user);
console.log(serializedUser); // Expected serialized output

/**
 * Parses a serialized user JSON back to User object.
 * This function demonstrates deserialization using Typia.
 *
 * @param json - The serialized user JSON string.
 * @returns The deserialized User object.
 * @throws Will throw an error if parsing fails.
 */
function parseUser(json: string): User {
  const obj: User = typia.parse<User>(json);
  return obj;
}

const parsedUser = parseUser(serializedUser);
console.log(parsedUser); // Log deserialized User object
