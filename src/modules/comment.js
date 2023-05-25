import { postData, getData } from './api';

let commentsList = [];

console.log(commentsList)

export const Comment = (name, comment, movieId) => ({
  name,
  comment,
  movieId,
});

export const addComment = (name, comment, movieId) => {
  const newCommnet = Comment(name, comment, movieId);
  postData(newCommnet);
  console.log(newCommnet);
};

export const getComments = async (id) => {
  const getCommnetsList = await getData(id);
  commentsList = getCommnetsList;
  console.log(commentsList);
};

export const displayComments = () => {
   const commentsContainer = document.querySelector('.comments-container');
  commentsContainer.innerHTML = '';
  commentsList.forEach((comment) => {
    const newCommnet = document.createElement('p');
    newCommnet.innerHTML = `${comment.name}: ${comment.comment}`;
    commentsContainer.appendChild(newCommnet)
  });
};