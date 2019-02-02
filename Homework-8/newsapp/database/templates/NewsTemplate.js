let uniqueId = 0;

function NewsTemplate(data = {}) {
  const {
    id = String(++uniqueId),
    name, description, url,
    category = 'default',
    language = '',
    country = ''
  } = data;
  this.id = id;
  this.name = name;
  this.description = description;
  this.url = url;
  this.category = category;
  this.language = language;
  this.country = country;
}

module.exports = NewsTemplate;
