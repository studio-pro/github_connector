/**
 * Serialization of nested objects with Typia.
 * This example demonstrates how to serialize and deserialize nested objects.
 */
interface NestedExample {
  id: number;
  name: string;
  details: {
    age: number;
    address: string;
  };
}

const nestedExample: NestedExample = {
  id: 3,
  name: 'Nested Typia Example',
  details: {
    age: 30,
    address: '123 Typia Lane',
  },
};

const serializedNested = typia.stringify<NestedExample>(nestedExample);
console.log('Serialized Nested Example:', serializedNested);

const deserializedNested = typia.parse<NestedExample>(serializedNested);
console.log('Deserialized Nested Example:', deserializedNested);
