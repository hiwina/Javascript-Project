import { getData } from "./api";

export const commentsListNum = async (id) => {
    const numComments = await getData(id);
    const commentNum = document.querySelector('.comment-num');
    if(typeof(numComments.length) === typeof(1)){
      commentNum.innerHTML = `${numComments.length}`;
    }else{
      commentNum.innerHTML = `0`;
    }
  };