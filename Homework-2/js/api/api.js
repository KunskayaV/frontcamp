import { API_KEY } from './constants'; 

async function getNews(source) {
  const response = await fetch(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${API_KEY}`);

  return response.json();
}

async function getSources() {
  const response = await fetch(`https://newsapi.org/v2/sources?apiKey=${API_KEY}`);

  return response.json();
}

export { getNews, getSources };