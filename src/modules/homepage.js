import { getnumberofLikes, Interactlikebutton } from './likeItems.js';
import itemsCounter from './itemCounter.js';

const movieApi = async () => {
  const fetchResult = await fetch('https://api.tvmaze.com/shows');
  const ShowResult = await fetchResult.json();
  const movies = ShowResult.slice(0, 16);
  return movies;
};
movieApi();
const movieCount = document.querySelector('.item-count');

const movieList = async () => {
  const allMovies = await movieApi();
  allMovies.forEach((card) => {
    const CardContainer = document.querySelector('.card-container');
    const cardUL = document.createElement('ul');
    const cardLI = document.createElement('li');
    cardLI.className = 'movie-cards';
    cardLI.innerHTML = `<div class="cards" id=${card.id}>
                          <img src=${card.image.original} alt=${card.name} class="movie-img">
                        </div>
                        <a href="${card.officialSite}" class="movie-title" data-id=${card.id}>${card.name}</a>
                        <div class="movie-info">
                          <i class="fa fa-heart like-count like-btn" id ="lik"aria-hidden="true"></i> <p> likes</p>
                        </div>
                        <button class="comment-btn" id="${card.id}" data-target="#popup-wrapper">Comments</button>`;

    cardUL.appendChild(cardLI);
    CardContainer.appendChild(cardUL);
  });
  getnumberofLikes();
  Interactlikebutton();
  itemsCounter(allMovies, movieCount);
};

export { movieApi, movieList };
