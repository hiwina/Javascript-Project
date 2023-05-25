import { postData, getData } from './api';

let commentsList = [];

export const Comment = (name, comment) => ({
  name,
  commnet: comment,
});

export const addComment = (name, comment) => {
  const newCommnet = Comment(name, comment);
  postData(newCommnet);
  console.log(newCommnet);
};

export const getComments = async () => {
  const getCommnetsList = await getData();
  commentsList = getCommnetsList;
  console.log(commentsList);
};

export const displayComments = () => {
  const commentsContainer = document.querySelector('.comments-container');
  commentsContainer.innerHTML = '';
  commentsList.forEach((comment) => {
    const newCommnet = document.createElement('p');
    newCommnet.innerHTML = `${comment.name}: ${comment.comment}`;
  });
};