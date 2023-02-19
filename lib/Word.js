const Letter = require("./Letter");

class Word {
  constructor(word) {
// this creates an array by splitting the word given as a parameter into it's letters with the split method.
// .map then iterates along every letter in the array feeding it into the Letter constructor
// it then returns a NEW array full of all of the letter objects built in the contructor which is defined as the variable
    this.letters = word.split("").map(char => new Letter(char));
  }
  getSolution() {
// This uses .map to iterate over each letter in the letters array that was built in the word constructor
// It runs an anonymous function on each letter in the array that calls the getSolution method on each letter
// this will return the true character
// .join method then creates a string from the returned chars. This is the word... 
// (possibly with underscores representing characters that have not been guessed yet) we are trying to guess.
    return this.letters.map(letter => letter.getSolution()).join("");
  }
// this joins the letters with a space between each letter as will be displayed in the console
  toString() {
    return this.letters.join(" ")
  }
  guessLetter(char) {
// the parameter that comes to this function comes from the inquirer input
// it creates the variable foundLetter as false
    let foundLetter = false;
// for each letter in the letters array an anonymous function is called that runs .guess on each letter
// .guess will return true if the guessed character matches the character defined as char for each letter object
// it will return false if letters does not contain the letter that has been guessed
    this.letters.forEach(letter => {
        if (letter.guess(char)) {
            foundLetter = true;
        }
    });
// the function will return whether a letter has been found or not
    return foundLetter;
  }
  guessedCorrectly() {
// this will return true or false
// an anonymous function is called on every letter in letters that tests if they are visible or not
// .every will only return true if every letter returns true (which means they are all visible)
    return this.letters.every(letter => letter.visible);
// AKA when this returns true, you have guessed the whole word (and won the game).
  }
}

module.exports = Word;
