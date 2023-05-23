const movies = document.querySelector('.card-contaienr');
import { movieApi } from './modules/homepage.js';
import Icon from '/Users/SilkRoad/Desktop/Microverse Repo/Week 5/Javascript-Project/src/images/cher.jpg';

movies.addEventListener("click", (movie) =>{
    if (movie.target.classList.contain('comment-btn')){
        preview.classList.remove("remove");
        const id = parseFloat(movie.target.id);
        const target = movieApi.find((x) => x.id === id)
        if (target !== undefined){
            preview.innerHTML = `
            
            `
        }
    }
});