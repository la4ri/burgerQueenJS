export default () => {
  const container = document.createElement('div');
  const template = `
  <h1> Olá Mundo! </h1>
  `

  container.innerHTML = template;

  return container;
}
