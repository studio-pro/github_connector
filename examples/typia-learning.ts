/**
 * Basic serialization and deserialization example using Typia.
 * This example demonstrates how to serialize and deserialize a simple object.
 */
import typia from 'typia';

interface Example {
  id: number;
  name: string;
}

const example: Example = { id: 1, name: 'Typia Example' };
const serializedExample = typia.stringify<Example>(example);
console.log('Serialized Example:', serializedExample);

const deserializedExample = typia.parse<Example>(serializedExample);
console.log('Deserialized Example:', deserializedExample);
