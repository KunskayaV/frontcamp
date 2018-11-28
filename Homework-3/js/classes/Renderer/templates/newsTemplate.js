import { dateToLocaleString } from '../../../utils/helpers';

export function newsTemplate({ title, description, url, urlToImage, publishedAt }) {
  return (`\
  <div class="card">\
    <img class="card-image" alt="" src="${urlToImage}"/>\
    <div class="overlay"></div>\
    <div class="info">\
      <h3 class="title">${title}</h3>\
      <p class="description">${description}</p>\
      <p class="date">${dateToLocaleString(publishedAt)}</p>\
    </div>\
    <a class="card-link" href="${url}" target="blank"></a>\
  </div>
  </div>`
  );
}