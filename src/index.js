import './style/index.css';
import { movieList, movieApi } from './modules/homepage.js';
import image from './images/log.jpg';

console.log(image);

const movieContainer = document.querySelector('.card-container');
const preview = document.getElementById('preview');
const moviesLsit = await movieApi();

movieContainer.addEventListener('click', (mov) => {
  if (mov.target.classList.contains('comment-btn')) {
    preview.classList.remove('remove');
    const id = parseFloat(mov.target.id);
    const target = moviesLsit.find((x) => x.id === id);
    if (target !== undefined) {
      preview.innerHTML = `
            <div class="popup-window">
                <button class="x-mark" ><i id="close" class="fa-solid fa-xmark fa-3x"></i></button>
                <div class="popup-header">
                    <div>
                        <img class="popup-img" src=${target.image.original} alt="">
                    </div>
                    <div>
                        <h2 class="movie-name">${target.name}</h2>
                        <table class="movie-info">
                            <tr>
                                <td>Rating</td>
                                <td>${target.rating.average}</td>
                            </tr>
                            <tr>
                                <td>Gener</td>
                                <td>${target.genres[0]}</td>
                            </tr>
                            <tr>
                                <td>Release Date</td>
                                <td>${target.ended}</td>
                            </tr>
                            <tr>
                                <td>Language</td>
                                <td>${target.language}</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="comments">
                    <h3>Comments(2)</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, fugiat.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, fugiat.</p>
                </div>
                <h3>Add Comment</h3>
                <form action="">
                    <input class="name-input" type="text" placeholder="Enter Your Name"><br>
                    <textarea class="commnet-input" name="" id="" cols="30" rows="10" placeholder="Your insight"></textarea><br>
                    <button class="popup-comment-btn" type="submit">Comment</button>
                </form>
            </div>
            `;
    }
  }
});

preview.addEventListener('click', (mov) => {
  if (mov.target.id === 'close') {
    preview.classList.add('remove');
  }
});

movieList();