const commentEnd = 'apps/RSvb8rnI4uUXzEWq0me4/comments';
const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';

export const getData = async () => {
  try {
    const response = await fetch(url + commentEnd);
    const data = await response.json();
    return data.result;
  } catch (error) {
    return error;
  }
};

export const postData = async (comment) => {
  try {
    const result = await fetch(url + commentEnd, {
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