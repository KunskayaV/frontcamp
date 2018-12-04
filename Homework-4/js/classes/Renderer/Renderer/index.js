export default class Renderer {
  fillRoot(root, template, info = [], checkForEmpty = false) {
    const toRender = info.map(template);

    if (!checkForEmpty || !root.innerHTML.trim()) {
      root.innerHTML = toRender.join('');
    }
  }
}
