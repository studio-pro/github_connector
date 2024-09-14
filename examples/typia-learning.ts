/**
 * Advanced serialization with Typia including optional properties.
 * This example demonstrates how to handle optional properties in serialization.
 */
interface AdvancedExample {
  id: number;
  name: string;
  description?: string;
}

const advancedExample: AdvancedExample = { id: 2, name: 'Advanced Typia Example' };
const serializedAdvanced = typia.stringify<AdvancedExample>(advancedExample);
console.log('Serialized Advanced Example:', serializedAdvanced);

const deserializedAdvanced = typia.parse<AdvancedExample>(serializedAdvanced);
console.log('Deserialized Advanced Example:', deserializedAdvanced);
