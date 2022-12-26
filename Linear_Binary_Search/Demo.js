import orderedArrayGenerator from "./orderedArrayGenerator.js";
import randomArrayGenerator from "./randomArrayGenerator.js";
import binarySearch from "./BinarySearch.js";
import linearSearch from "./LinearSearch.js";

const orderedArr = orderedArrayGenerator(1, 10);
const randomArr = randomArrayGenerator(1, 10);
const targetValue = 3;

console.log(binarySearch(orderedArr, targetValue));
console.log(linearSearch(randomArr, targetValue));
