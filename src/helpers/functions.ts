export const clampNumber = (num: number, a: number, b: number) =>
  Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));

/**
 * Get a random number given a range of number
 * @param low The starting value in milliseconds
 * @param high The high value in milliseconds
 */
export const getRandomNumber = (low: number, high: number) => {
  const randomNumber = Math.random() * (high - low) + low;

  return randomNumber;
};
