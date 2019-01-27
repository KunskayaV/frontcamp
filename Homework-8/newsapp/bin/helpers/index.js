function checkNewsFields(news) {
  const { id, name, description, url, category = 'general', language = 'no', country = 'no' } = news;

  return id && name && description && url;
}

function getNewsById(source, id) {
  return source.find(news => news.id === id);
}

module.exports = {
  checkNewsFields,
  getNewsById
};