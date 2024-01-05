const MovieContainer = document.querySelector('#movies-con');

const myURL = window.location.search
const params = new URLSearchParams(myURL)

const movieDetailID = params.get('movie')

const DetailJSON = `https://www.omdbapi.com/?i=${movieDetailID}&apikey=9446507`

console.log(movieDetailID)

function fetchMovieDetail() {
    fetch(DetailJSON)
    .then(res => res.json())
    .then(data => {
        renderDetails(data)
        console.log(data)
    })
    .catch(err => console.log(err))
}

function renderDetails(rendersArr = []) {
    MovieContainer.innerHTML = ''

    rendersArr = [rendersArr]
    
    rendersArr.forEach(function(element) {
        MovieContainer.innerHTML = `
            <div class="about-movie">
                <div class="movie-img">
                    <img src="${element.Poster}" alt="">
                </div>

                <div class="about-movie-text">

                    <div class="movie-title">
                        <h4>${element.Title}</h4>
                    </div>

                    <div class="movie-info">
                        <div class="movie-data">
                            <p>Year:</p>
                            <p>${element.Year}</p>
                        </div>
                        <div class="movie-data">
                            <p>Country:</p>
                            <p>${element.Country}</p>
                        </div>
                        <div class="movie-data">
                            <p>Rated:</p>
                            <p>${element.imdbRating}</p>
                        </div>
                        <div class="movie-data">
                            <p>jenre:</p>
                            <p>${element.Genre}</p>
                        </div>
                        <div class="movie-data">
                            <p>Language:</p>
                            <p>${element.Language}</p>
                        </div>
                        <div class="movie-data">
                            <p>Rated:</p>
                            <p>${element.Rated}</p>
                        </div>  
                        <div class="movie-data">
                            <p>Runtime:</p>
                            <p>${element.Runtime}</p>
                        </div>
                        <div class="movie-data director">
                            <p>Director:</p>
                            <p>${element.Director}</p>
                        </div>
                        <div class="movie-data writer">
                            <p>Writer:</p>
                            <p>${element.Writer}</p>
                        </div>
                        <div class="movie-data">
                            ${element.totalSeasons ? `<p>Seasons:</p> 
                            <p>${element.totalSeasons}</p>` : ""}
                    </div>
                    </div>

                </div>

                <div class="movie-actors">
                    <h4>Actors <img class="chevron" src="./styles//ico/chevron-forward-outline.svg" alt=""></h4>

                    <div class="movie-info-actors">
                        <span>${element.Actors}</span>
                    </div>
                </div>
            </div>
        `
    })
}
fetchMovieDetail()