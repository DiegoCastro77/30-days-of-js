let words = ["racecar", "leeeveeel", "world", "hello"]
function findLargestPalindrome(words) {
    let largestPalindrome = "";
  
    for (let word of words) {
  
      if (word == word.split("").reverse().join("") && largestPalindrome.length < word.length) {
  
        largestPalindrome = word;
  
      }
  
    }
  
    if (largestPalindrome) {
  
      return largestPalindrome;
  
    } else {
  
      return null;
  
    }
  }

console.log(findLargestPalindrome(words))