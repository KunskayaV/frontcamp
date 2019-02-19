let uniqueId = 0;

function NewsTemplate(data = {}) {
  const {
    id = String(++uniqueId),
    name, description, url,
    category = 'default',
    language = '',
    country = '',
    title = '',
    urlToImage = '',
  } = data;
  this.id = id;
  this.name = name;
  this.description = description;
  this.url = url;
  this.category = category;
  this.language = language;
  this.country = country;
  this.title = title;
  this.urlToImage = urlToImage;
}

module.exports = NewsTemplate;
