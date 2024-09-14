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

/**
 * Parses a serialized user JSON back to User object.
 * This function demonstrates deserialization using Typia.
 *
 * @param json - The serialized user JSON string.
 * @returns The deserialized User object.
 * @throws Will throw an error if parsing fails.
 */
function parseUser(json: string): User {
  return typia.parse<User>(json);
}
