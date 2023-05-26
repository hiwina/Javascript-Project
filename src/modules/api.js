export const getData = async (itemId) => {
  try {
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6Jy3AoMKwDu68FogjOrT/comments?item_id=${itemId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const postData = async (name, comment, itemId) => {
  try {
    const result = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6Jy3AoMKwDu68FogjOrT/comments', {
      method: 'POST',
      body: JSON.stringify({
        username: name,
        comment,
        itemId,
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