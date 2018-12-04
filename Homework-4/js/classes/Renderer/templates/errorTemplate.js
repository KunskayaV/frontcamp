const paragraph = '';

export function errorTemplate() {
  return paragraph || (paragraph = `<p class="error-message">Something went wrong. Try again.</p>`);
}

export class ErrorTemplate {
  static instance = null

  getInstance() {
    if (!ErrorTemplate.instance) {
      ErrorTemplate.instance = this;
    }

    return ErrorTemplate.instance;
  }

  getTemplate() {
    return `<p class="error-message">Something went wrong. Try again.</p>`;
  }
}
