export const getData = async (itemId) => {
  try {
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/S5zUSZol8pU4TaW0FxZG/comments?item_id=${itemId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const postData = async (name, comment, itemId) => {
  try {
    const result = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/S5zUSZol8pU4TaW0FxZG/comments', {
      method: 'POST',
      body: JSON.stringify({
        username: name,
        comment,
        item_id: itemId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },

    });

    return result;
  } catch (error) {
    return error;
  }
};