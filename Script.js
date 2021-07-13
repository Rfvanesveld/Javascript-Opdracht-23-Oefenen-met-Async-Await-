// VARIABLES

let log = console.log;
const genresList = document.getElementById("genresList");
const myFavoriteMovie = document.getElementById("myFavoriteMovie");
const topRatedMovies = document.getElementById("topRatedMovies");
const topRatedSciFiMovies = document.getElementById("topRatedSciFiMovies");
const madeIn1975Movies = document.getElementById("madeIn1975Movies");

//  FUNCTIONS

async function getGenreData() {
    await getGenre().then(result => showGenresList(result));
};

async function getMyFavoriteMovieData() {
    await getMyFavoriteMovie().then(result => showMyFavoriteMovie(result));
};

async function getTopRatedMovieData() {
    await getTopRatedMovies().then(result => showTopRatedMovies(result));
};

async function getTopRatedSciFiMoviesData() {
    await getTopRatedSciFiMovies().then(result => showTopRateSciFiMovies(result))
};

async function getMadeIn1975MoviesData() {
    await getMadeIn1975Movies().then(result => showMadeIn1975Movies(result))
};

showGenresList = (list) => {
    list.map(genre => {
        genreItem = document.createElement("li");
        genreItem.innerHTML = `Movie Genre:    ${genre.name}, ID:  ${genre.id}`;
        genresList.appendChild(genreItem);
    });
};

showMyFavoriteMovie = (list) => {
    list.map(result => {
        movieItem = document.createElement("li");
        movieItem.innerHTML = result.title
        myFavoriteMovie.appendChild(movieItem)
    });
};

showTopRatedMovies = (list) => {
    list.slice(1, 11) //    THE SHAWSHANK REDEMPTION IS THE BEST MOVIE IN THIS LIST, THAT IS WHY MY LIST START AT 1, NOT 0.
        .map(movies => {
            movieItem = document.createElement("li");
            movieItem.innerHTML = movies.title;
            topRatedMovies.appendChild(movieItem);
        });
};

showTopRateSciFiMovies = (list) => {
    list.slice(0, 10)
        .map(result => {
            scifiMovies = document.createElement("li");
            scifiMovies.innerHTML = result.title;
            topRatedSciFiMovies.appendChild(scifiMovies)
        });
};

showMadeIn1975Movies = (list) => {
    list.slice(0, 10)
        .map(result => {
            madeIn1975 = document.createElement("li");
            madeIn1975.innerHTML = result.title;
            madeIn1975Movies.appendChild(madeIn1975)
        });
};

// CALL THE FUNCTIONS

getGenreData()
getMyFavoriteMovieData()
getTopRatedMovieData()
getTopRatedSciFiMoviesData()
getMadeIn1975MoviesData()


// FUNCTIONS MET TOELICHTING..................................................

// showGenresList = (list) => {
//     list.map(genre => { // Creeeren van een array genaamd - list - en itereert het iedere item in de array en wordt onderstaande gecalled
//         genreItem = document.createElement("li");                               // Creeren van een li element
//         genreItem.innerHTML = `Movie Genre:  ${genre.name}, ID:  ${genre.id}`;  // De info die je wilt laten zien in het aangemaakte li element
//         genresList.appendChild(genreItem);                                      // Toevoegen van bovenstaande aan het element genresList
//     })
// }

// async function getGenreData() {
//     await getData().then(result => showGenresList(result))
// } // Als de gevraagde data klaar is, dan het resultaat sturen in het element met de ID "myFavoriteMovie"


// FUNCTIONS OP EEN ANDERE MANIER

// async function getMyFavoriteMovieData() {
//     await getMyFavoriteMovie().then(result => myFavoriteMovie.innerHTML = result[0].title);
// };