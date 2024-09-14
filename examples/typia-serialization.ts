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
