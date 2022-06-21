export default () => {
  const container = document.createElement('div');
  container.classList.add('homeContainer');

  const template = `
  <div>
  <img class="logoPirateria" src="/pages/style/LogoPirateria.png">
  </div>
  `

  container.innerHTML = template;

  return container;
}
