import Renderer from './Renderer';
import { ErrorTemplate } from './templates';

import '../../../css/error.scss';

export default class ErrorRenderer extends Renderer{
  renderError(errorRoot) {
    const template = (new ErrorTemplate()).getInstance();

    this.fillRoot(errorRoot, template.getTemplate, [{}], true);
    errorRoot.classList.add('show');
    setTimeout(() => errorRoot.classList.remove('show'), 2000);
  }
};
