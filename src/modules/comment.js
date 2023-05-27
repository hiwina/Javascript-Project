import { getData } from './api.js';

let commentsList = [];

export const getComments = async (id) => {
  const getCommnetsList = await getData(id);
  commentsList = getCommnetsList;
};

export const commentsListNum = async (id) => {
  const numComments = await getData(id);
  return numComments;
};

export const displayComments = () => {
  const commentsContainer = document.querySelector('.comments-container');
  commentsContainer.innerHTML = '';
  if (commentsList.length > 0) {
    commentsList.forEach((comment) => {
      const newCommnet = document.createElement('p');
      newCommnet.innerHTML = `${comment.username}: ${comment.comment}`;
      commentsContainer.appendChild(newCommnet);
    });
  }
};