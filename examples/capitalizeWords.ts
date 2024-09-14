/**
 * Capitalizes the first letter of each word in a sentence.
 * This function demonstrates string manipulation techniques in TypeScript.
 *
 * @param sentence - The input sentence to capitalize.
 * @returns A new sentence with each word capitalized.
 */
function capitalizeWords(sentence: string): string {
  return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
