function insertDash(word) {
  const wordArr = word.split("");
  wordArr.forEach((letter, index, array) => {
    if (array[index + 1] !== undefined) {
      if ((letter.match(/[aeiou\W]/i) === null) && (array[index + 1].match(/[aeiou\W]/i) === null)) {
        array.splice(index + 1, 0, "-");
      }
    }
  });
  return wordArr.join("");
}

// insertDash("Le Wagon");
module.exports = insertDash;
