const myHeight = 176; //my height in cm

// Constants for weight calculation
const IDEAL_WEIGHT_RATIO = 9;
const MIN_WEIGHT_RATIO = 8;
const RATIO_DIVIDER = 10;

// get 76 from 176
const lastTwoDigits = myHeight % 100;

const idealWeight = (lastTwoDigits * IDEAL_WEIGHT_RATIO) / RATIO_DIVIDER;
const maxWeight = lastTwoDigits;
const minWeight = (lastTwoDigits * MIN_WEIGHT_RATIO) / RATIO_DIVIDER;

console.log(`Ideal: ${idealWeight}kg, Max: ${maxWeight}kg, Min: ${minWeight}kg`);
