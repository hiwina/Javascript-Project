const movieContainer = document.querySelector('card-container');
const preview = document.querySelector('popup-window');

movieContainer.addEventListener('click', (mov) => {
  if (mov.target.classList.contains('commnet-btn')) {
    preview.classList.remove('remove');
    const id = parseFloat(mov.target.id);
    const target = mov.find((x) => x.id === id);
    if (target !== undefined) {
      preview.innerHTML = `
            <div class="popup-window">
                <div class="popup-header">
                    <div>
                        <img class="popup-img" src="images/cher.jpg" alt="">
                    </div>
                    <div>
                        <h2 class="movie-name">CHERNOBYL</h2>
                        <table class="movie-info">
                            <tr>
                                <td>Rating</td>
                                <td>7.8</td>
                            </tr>
                            <tr>
                                <td>Type</td>
                                <td>historical</td>
                            </tr>
                            <tr>
                                <td>Release Date</td>
                                <td>2018</td>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td>SilkRoad</td>
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