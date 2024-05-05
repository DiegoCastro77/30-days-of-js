function removeDuplicates(arr) {
    const uniqueElements = new Set();
    const result = [];
    for (const item of arr) {
        if (!uniqueElements.has(item)) {
            uniqueElements.add(item);
            result.push(item);
        }
    }
    return result;
}

const fruits = [
  "melon",
  "melon",
  "mango",
  "banana",
  "apple",
  "banana",
  "apple",
];
console.log(removeDuplicates(fruits));

const numbers = [1, 2, 3, 1, 2, 3];
console.log(removeDuplicates(numbers));