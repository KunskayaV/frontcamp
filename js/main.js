const API_KEY = '100a6ae2320b4ab19986e2c78103375b';

async function getNews() {
  const response = await fetch(`https://newsapi.org/v1/articles?source=bbc-news&apiKey=${API_KEY}`);

  return response.json();
}

function dateToLocaleString(date) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  return (new Date(date)).toLocaleString('en-US', options);
}

class News {
  constructor() {
    this.news = [];
    document.addEventListener('DOMContentLoaded', this.initialize.bind(this));
  }
  
  initialize() {
    this.newsRoot = document.getElementById('newsroot');
    this.moreButton = document.getElementById('more-button');
    this.moreButton.addEventListener('click', this.getNewsPortion.bind(this));
    this.getNewsPortion();
  }

  async getNewsPortion() {
    const { status, articles } = await getNews();

    if (status === 'ok') {
      this.news.push(articles);
      this.fillCards(articles);
      this.moreButton.innerText = "More";
      this.moreButton.style.display = !this.newsRoot.children.length ? 'none' : 'block';
    } else {
      this.moreButton.innerText = "Please, try again";
      this.moreButton.style.display = 'block';
    }
  }

  fillCards(cardsInfo) {
    const cards = cardsInfo.map(
      ({ title, description, url, urlToImage, publishedAt }) => `\
        <div id="card">\
          <img class="card-image" alt="image" src="${urlToImage}"/>\
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

    this.newsRoot.innerHTML += cards;
  }
}

new News ();