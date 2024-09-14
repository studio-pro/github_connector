/**
 * Advanced serialization with Typia including nested objects.
 * Demonstrates handling of complex, nested data structures in serialization.
 */
import typia from 'typia';

interface NestedExample {
  id: number;
  name: string;
  details: {
    description: string;
    tags: string[];
  };
}

const nestedExample: NestedExample = {
  id: 3,
  name: 'Nested Typia Example',
  details: { description: 'A more complex example', tags: ['typia', 'serialization'] }
};

const serializedNested = typia.stringify<NestedExample>(nestedExample);
console.log('Serialized Nested Example:', serializedNested);

const deserializedNested = typia.parse<NestedExample>(serializedNested);
console.log('Deserialized Nested Example:', deserializedNested);
