export default class SourceLoader {
  getNewsRenderer() {
    return import(
      /* webpackChunkName: "news" */
      /* webpackMode: "lazy" */
      '../Renderer/NewsRenderer.js'
    )
    .then(({ default: NewsRenderer }) => new NewsRenderer)
    .catch(() => console.log('An error occurred while loading the component'));
  }

  getErrorRenderer() {
    return import(
      /* webpackChunkName: "error" */
      /* webpackMode: "lazy" */
      '../Renderer/ErrorRenderer.js'
    )
    .then(({ default: ErrorRenderer }) => new ErrorRenderer)
    .catch(() => console.log('An error occurred while loading the component'));
  }
}