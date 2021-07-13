// VARIABLES

const API_KEY = "806bf30fd22337b37d4d8fd39372b1b9"

// FUNCTIONS

// GET GENRE LIST

async function getGenre() {
    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
    try {
        const result = await fetch(apiUrl, {
        }).then(result => result.json())
        return result.genres;
    }
    catch (err) { log(err) }
};

// GET FAVORITE MOVIE

async function getMyFavoriteMovie() {
    const apiUrl = `https://api.themoviedb.org/3/find/tt0090605?api_key=${API_KEY}&external_source=imdb_id`;
    try {
        const result = await fetch(apiUrl, {
        }).then(result => result.json())
        return result.movie_results;
    }
    catch (err) { log(err) }
};

// GET TOP RATED MOVIE LIST

async function getTopRatedMovies() {
    const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=1`;
    try {
        const result = await fetch(apiUrl, {
        }).then(result => result.json())
        return result.results;
    }
    catch (err) { log(err) }
};

// GET TOP RATED SCIFI MOVIE LIST

async function getTopRatedSciFiMovies() {
    const apiUrl = `
    https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&vote_count.gte=18000&with_genres=878&with_watch_monetization_types=flatrate
    `;
    try {
        const result = await fetch(apiUrl, {
        }).then(result => result.json())
        return result.results;
    }
    catch (err) { log(err) }
};

// GET MOVIES MADE IN 1975

async function getMadeIn1975Movies() {
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=vote_count.desc&include_adult=true&include_video=false&page=1&primary_release_year=1975&year=1975&with_watch_monetization_types=flatrate
    `;
    try {
        const result = await fetch(apiUrl, {
        }).then(result => result.json())
        return result.results;
    }
    catch (err) { log(err) }
};








// MET DE => ARROW FUNCTION................................................. 

// const getData = async () => {
//     const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
//     try {
//         const result = await fetch(apiUrl, {
//         }).then(response => response.json())
//         return result.genres;
//     }
//     catch (err) { log(err) }
// }


// MET TOELICHTING........................................................................

// async function getGenre() {
//     const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;  // Variabele gemaakt van de gemaakte Postman url
//     try {
//         const result = await fetch(apiUrl, {                                            // Variabele gemaakt om de te fetchen ApiURL in de wachtrij te zetten
//         }).then(result => result.json())                                                // Dan het resultaat  van de fetch omzetten in .JSON formaat
//         return result.genres;                                                           // Return/call het genres resultaat
//     }
//     catch (err) { log(err) }                                                            // Melden van eventuele errors
// };