const commentEnd = 'apps/RSvb8rnI4uUXzEWq0me4/comments';
const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';

export const getData = async (id) => {
  try {
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RSvb8rnI4uUXzEWq0me4/comments?item_id=${id}`);
    const data = await response.json();
    return data.result;
  } catch (error) {
    return error;
  }
};

export const postData = async (comment) => {
  try {
    const result = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RSvb8rnI4uUXzEWq0me4/comments?item_id=${comment.movieId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment),
    });
    return result;
  } catch (error) {
    return error;
  }
};