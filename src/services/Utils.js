const Utils = { 
  sortByLetter : () => {
    const originalText = document.getElementById('output').innerHTML;
    
    // ALGORITHM 
    // Create object that has a key for every letter of the alphabet
    // Read text as one letter at a time. Increment object['char'].
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

    for (let letter of originalText) {
      // edge cases:
      // casing for characters
      // punctuation

      if (letter.match(/[A-Za-z]/)) { // is a valid letter
        totalLetters[letter.toLowerCase()] += 1;
      }
    }
    
    return /*html*/`
        <div class="sort">
          <ul>
            ${ Object.keys(totalLetters).map(letter => 
                /*html*/`<li>${letter}: ${totalLetters[letter]}</li>`
                ).join('\n ')
            }
          </ul>           
        </div>
    `;
  }
}

export default Utils;