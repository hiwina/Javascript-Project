import './style/index.css';
import { movieList, movieApi } from './modules/homepage.js';
import { getComments, displayComments } from './modules/comment';
import image from './images/log.jpg';
import { postData } from './modules/api';
import { commentsListNum } from './modules/commentCounter';

// eslint-disable-next-line no-console
console.log(image);

const movieContainer = document.querySelector('.card-container');
const preview = document.getElementById('preview');
const moviesLsit = await movieApi();

const loadComment = async (id) => {
  await getComments(id);
  displayComments();
};

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
                    <h3>Comments(<span class="comment-num"></span>)</h3>
                    <div class="comments-container">
                    </div>
                </div>
                <h3>Add Comment</h3>
                <form action="" class="comment-form">
                    <input required class="name-input" type="text" placeholder="Enter Your Name"><br>
                    <textarea required class="comment-input" name="" id="" cols="30" rows="10" placeholder="Your insight"></textarea><br>
                    <button class="popup-comment-btn" type="submit">Comment</button>
                </form>
            </div>
            `;
      commentsListNum(mov.target.id);
      loadComment(mov.target.id);
      const commentForm = document.querySelector('.comment-form');
      const name = document.querySelector('.name-input');
      const comment = document.querySelector('.comment-input');
      commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const userName = name.value;
        const userComment = comment.value;
        postData(userName, userComment, id);
        name.value = '';
        comment.value = '';
        loadComment(mov.target.id);
        commentsListNum(mov.target.id);
      });
    }
  }
});

preview.addEventListener('click', (mov) => {
  if (mov.target.id === 'close') {
    preview.classList.add('remove');
  }
});

movieList();