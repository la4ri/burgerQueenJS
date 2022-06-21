export default () => {
  const container = document.createElement('div');
  const template = `
  <h1> Hello Word! </h1>
  `

  container.innerHTML = template;

  return container;
}
