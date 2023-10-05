function isPalindrome(word) {
  // Convert the word to lowercase to ignore capitalization
  word = word.toLowerCase();

  // Reverse the word and compare it to the original word
  const reversedWord = word.split('').reverse().join('');

  // Check if the original word is the same as the reversed word
  return word === reversedWord;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
