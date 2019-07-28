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

const getLetterHash = (text) => {
  const letterHash = {};

  for (let letter of text) {
      // edge cases:
      // casing for characters
      // punctuation  
      if (letter.match(/[A-Za-z]/)) {
        letterHash[letter.toLowerCase()] = letterHash[letter.toLowerCase()] ? letterHash[letter.toLowerCase()] + 1 : 1; // will this work if not initialized?
      }
  }

  return letterHash;
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

  return /*html*/`
      <div class="sort">
        <span>Anagram? ${str1 === reversedStr2}</span>
      </div>
  `;
}

const repeatedFirst = () => {
  // ALGORITHM
  // for each letter in the text, add to the hash. check to see if more than one letter.
  // if repeated, return.
  // if through the text and no repeated, return no repeated
  const originalText = document.getElementById('output').innerHTML;
  const letterHash = {};

  for (let letter of originalText) {
    if (letterHash[letter]) {
      return /*html*/`
        <div class="sort">
          <span>First repeated letter: ${letter}</span>
        </div>
      `;
    } else {
      letterHash[letter] = 1;
    }
  }

  return /*html*/`
        <div class="sort">
          <span>no repeated letter</span>
        </div>
      `;

}

const nonRepeatedFirst = () => {
  // ALGORITHM
  // create hash for each letter count
  // iterate back through original text and compare with hash. return the first letter at = 1
  const originalText = document.getElementById('output').innerHTML;
  const letterHash = getLetterHash(originalText);

  for (let letter of originalText) {
    if (letterHash[letter] === 1) {
      return /*html*/`
        <div class="sort">
          <span>First nonrepeated letter: ${letter}</span>
        </div>
      `;
    }
  }

  return /*html*/`
        <div class="sort">
          <span>all repeated letters</span>
        </div>
      `;
}

const isLetter = (character) => {
  return character.match(/[A-Za-z]/);
}

const numbersOnly = () => {
  // ALGORITHM
  // can check each letter to make sure it's not a number
  // is there a way to check the whole string for numbers?
  const originalText = document.getElementById('output').innerHTML;
  let isNumberOnly = true;

  for (let letter of originalText) {
    if (letter.match(/[A-Za-z]/)) {
      isNumberOnly = false;
    }
  }

  return isNumberOnly;
}

const countVowelsAndConsonants = () => {
  const originalText = document.getElementById('output').innerHTML;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelCount = 0;
  let consonantCount = 0;

  // if letter (not number, space, or punctuation)
  // if letter is a vowel ==> increase vowel count, otherwise increase consonants.
  for (let letter of originalText) {
    if (isLetter(letter)) {
      if (vowels.includes(letter)) {
        vowelCount += 1;
      } else {
        consonantCount += 1;
      }
    }
  }

  return /*html*/`
        <div class="sort">
          <span>Num of Vowels: ${vowelCount}, Num of Consonants: ${consonantCount}</span>
        </div>
      `;
}



/*
* Collect Fn for Export
*/
const Utils = { 
  getLetterCount: getLetterCount,
  sortByLetter: sortByLetter,
  printDuplicates: printDuplicates,
  checkAnagrams: checkAnagrams,
  repeatedFirst: repeatedFirst,
  nonRepeatedFirst: nonRepeatedFirst,
  numbersOnly: numbersOnly,
  countVowelsAndConsonants: countVowelsAndConsonants
}

export default Utils;