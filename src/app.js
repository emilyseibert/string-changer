import Home from './views/pages/Home.js'; 

const initLoad = async () => {
    const container = null || document.getElementById('page_container');
    container.innerHTML = await Home.render();
    await Home.after_render();

    const originalText = null || document.getElementById('output');
    originalText.innerHTML = '';
}

const readFile = (fileText) => {
  document.getElementById('output').innerHTML = fileText;
};

const fileChangeListener = (event) => {
  const files = event.target.files; // FileList object
  const reader = new FileReader();

  reader.onload = function(e) {
    readFile(reader.result);
  }

  reader.readAsText(files[0]);
};

// Listen on page load:
window.addEventListener('load', initLoad);
document.getElementById('files').addEventListener('change', fileChangeListener, false);