const CardsEl = document.getElementById('cards');
const FormEl = document.getElementById('form-movie');
const InputEl = document.getElementById('input-search');
const Preloader = document.getElementById('preloader');

const Token = MovieName => `https://www.omdbapi.com/?s=${MovieName}&apikey=9446507`

function fetchMovie(MovieName = 'Game of thrones') {
    fetch(Token(MovieName))
    .then(res => res.json())
    .then(data => {
        renderMovies(data.Search)
        console.log(data)
    })
    .catch(error => console.log(error))
}


function renderMovies(movieArr = []) {
    CardsEl.innerHTML = '';

    movieArr.map(item => {
        CardsEl.innerHTML += `
            <div class="card">
                <div class="card__image">
                    <img src="${item.Poster}" alt="">
                </div>
        
                <div class="card__info">
                    <div class="card__name">
                        <a href="./details.html?movie=${item.imdbID}">${item.Title}</a>
                    </div>

                    <div class="card__year">
                        <p>Дата выхода:</p>
                        <p>${item.Year}</p>
                    </div>

                    <div class="card__jenre">
                        <p>Жанр:</p>
                        <p>${item.Type}</p>
                    </div>
                </div>
            </div>
        `
       if(!Response){

        const titleDefault = document.createElement('h4')

        titleDefault.textContent = 'Такого фильма нет'
        
        document.body.appendChild(titleDefault)
       }

    })
}

FormEl.addEventListener('submit', e => {
    e.preventDefault()

    fetchMovie(InputEl.value)

    InputEl.value = ""
})

function closeLoader() {
    window.onload = Preloader.classList.add('hide')
}

closeLoader()

fetchMovie()