import Utils from "../../services/Utils.js";

let Home = {
    render : async () => {      
        let view =  /*html*/`
            <section class="section">
                <h1> Text Changers </h1>

                <button id="sort-by-letter">Sort By Letter</button>
                <button id="print-duplicates">Print Duplicates</button>

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
    }
}



export default Home;