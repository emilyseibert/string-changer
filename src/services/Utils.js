/*
* Utils functions
*/
const getLetterCount = (text) => {
   const totalLetters = {
      'a': 0,
      'b': 0,
      'c': 0,
      'd': 0,
      'e': 0,
      'f': 0,
      'g': 0,
      'h': 0,
      'i': 0,
      'j': 0,
      'k': 0,
      'l': 0,
      'm': 0,
      'n': 0,
      'o': 0,
      'p': 0,
      'q': 0,
      'r': 0,
      's': 0,
      't': 0,
      'u': 0,
      'v': 0,
      'w': 0,
      'x': 0,
      'y': 0,
      'z': 0
    };

    for (let letter of text) {
      // edge cases:
      // casing for characters
      // punctuation

      if (letter.match(/[A-Za-z]/)) { // is a valid letter
        totalLetters[letter.toLowerCase()] += 1;
      }
    }

    return totalLetters;
};

const sortByLetter = () => {
  // ALGORITHM 
  // Create object that has a key for every letter of the alphabet
  // Read text as one letter at a time. Increment object['char'].
  // Iterate over object keys, and print key values
  const originalText = document.getElementById('output').innerHTML;
  const letters = getLetterCount(originalText);
  
  return /*html*/`
      <div class="sort">
        <ul>
          ${ Object.keys(letters).map(letter => 
              /*html*/`<li>${letter}: ${letters[letter]}</li>`
              ).join('\n ')
          }
        </ul>           
      </div>
  `;
};

const printDuplicates = () => {
  // ALGORITHM 
  // Create object that has a key for every letter of the alphabet
  // Read text as one letter at a time. Increment object['char'].
  // Iterate over object keys, and print key values if value > 1
  const originalText = document.getElementById('output').innerHTML;
  const letters = getLetterCount(originalText);
  
  return /*html*/`
      <div class="sort">
        <ul>
          ${Object.keys(letters).map(letter => {
              if (letters[letter] > 1) {
                console.log('letter', letter);
                return (/*html*/`<li>${letter}: ${letters[letter]}</li>`);
              }
            }).join('\n')}
        </ul>           
      </div>
  `;
}

const checkAnagrams = () => {
  // ALGORITHM
  // Take in original text and split on space to get string1 and string2.
  // Compare length. If not the same length, than false.
  // Split str2 into array, Reverse, join without delim on second string
  // compare str2 with string 1.
  const originalText = document.getElementById('output').innerHTML;
  const [str1, str2] = originalText.split(' ');

  if (!str1 || !str2) return false;
  if (str1.length !== str2.length) return false;

  const reversedStr2 = str2.split('').reverse().join('');

  return str1 === reversedStr2;
}

/*
* Collect Fn for Export
*/
const Utils = { 
  getLetterCount: getLetterCount,
  sortByLetter: sortByLetter,
  printDuplicates: printDuplicates,
  checkAnagrams: checkAnagrams
}

export default Utils;