import home from './pages/home/index.js';
import hall from './pages/hall/index.js'
import kitchen from './pages/kitchen/index.js'

const main = document.querySelector('#root');

const init = () => {
  window.addEventListener("hashchange", () => {
    main.innerHTML = " ";
    switch (window.location.hash) {
      case " ":
        main.appendChild(home());
        break;
      case "#kitchen":
        main.appendChild(kitchen());
        break;
      case "#hall":
        main.appendChild(hall());
        break;
      default:
        main.appendChild(home());
    }
  })
}



window.addEventListener("load", () => {
  main.appendChild(home());
  init();
})
