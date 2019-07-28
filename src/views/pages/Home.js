import Utils from "../../services/Utils.js";

let Home = {
    render : async () => {      
        let view =  /*html*/`
            <section class="section">
                <h1> Text Changers </h1>

                <button id="sort-by-letter">Sort By Letter</button>
                <button id="print-duplicates">Print Duplicates</button>
                <button id="anagram">Anagrams?</button>
                <button id="repeated">Repeated character?</button>
                <button id="nonrepeated">First non-repeated character?</button>
                <button id="numbers-only">Numbers only?</button>
                <button id="count-vowels-and-consonants">Count Vowels & Consonants</button>

                <div id="string-change"></div>
            </section>
        `
        return view
    },

    after_render: async() => {
      document.getElementById('sort-by-letter').onclick = () => {
        document.getElementById('string-change').innerHTML = Utils.sortByLetter();
      }
      document.getElementById('print-duplicates').onclick = () => {
        document.getElementById('string-change').innerHTML = Utils.printDuplicates();
      }
      document.getElementById('anagram').onclick = () => {
        document.getElementById('string-change').innerHTML = Utils.checkAnagrams();
      }
      document.getElementById('repeated').onclick = () => {
        document.getElementById('string-change').innerHTML = Utils.repeatedFirst();
      }
      document.getElementById('nonrepeated').onclick = () => {
        document.getElementById('string-change').innerHTML = Utils.nonRepeatedFirst();
      }
      document.getElementById('numbers-only').onclick = () => {
        document.getElementById('string-change').innerHTML = Utils.numbersOnly();
      }
      document.getElementById('count-vowels-and-consonants').onclick = () => {
        document.getElementById('string-change').innerHTML = Utils.countVowelsAndConsonants();
      }
    }
}



export default Home;