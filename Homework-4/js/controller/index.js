export default class Controller {
  constructor(model, view) {
    view.initialize(model.getSources.bind(model), model.getNewsBySource.bind(model));
  }
}
