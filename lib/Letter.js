class Letter {
  constructor (char) {
// this takes a single character as a parameter
    this.visible = !/[a-z1-9]/i.test(char);
// this defines a new variable as the product of this regex function that confirms the character is a-z (e.g. a letter) or 1-9.
// so here visible is simply a letter. If the (char) parameter is a $ for example it will not be defined in this variable
    this.char = char;
// this defines char as this char (presumably to simply save an instance of it as a variable - or not a variable - whatever the official term is)
  }
  toString() {
    if (this.visible === true) {
// if the (char) passed to this method is visible it will return that char
        return this.char;
    }
// otherwise the method will return an underscore
    return '_';
  }
  getSolution() {
    return this.char;
  }
  guess(charGuess) {
    if (charGuess.toUpperCase() === this.char.toUpperCase()) {
        this.visible = true;
        return true;
// if the charGuess is the same as this char this.visible becomes true and replaces the underscore with the character
    }
    return false;
  }
}

module.exports = Letter;
