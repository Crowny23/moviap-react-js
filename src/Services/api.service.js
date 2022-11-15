export default class ApiService {
    getMovies (page) {
      return fetch(`https://api.themoviedb.org/3/discover/movie?language=fr-FR&page=${page}&api_key=b6de1948626d373df1ac927b5dfada2a`)
    }
  
    getMovie (id) {
      return fetch(`https://api.themoviedb.org/3/movie/${id}?language=fr-FR&api_key=b6de1948626d373df1ac927b5dfada2a`)
    }
  
    getSearch (search) {
      return fetch(`https://api.themoviedb.org/3/search/movie?api_key=b6de1948626d373df1ac927b5dfada2a&language=fr-FR&query=${search}&include_adult=false`)
    }
  }
  