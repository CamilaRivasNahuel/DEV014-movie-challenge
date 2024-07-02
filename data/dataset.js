export const getDiscoveryMovie = async () => {
    console.log("hola Mundo")

    const response = await fetch('https://api.themoviedb.org/3/discover/movie?sort_by=vote_count.desc', {
        headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwN2M0MmZlNGYxMGJjYzlmZTA4NmM1YzcyZjYzMzZlZCIsInN1YiI6IjY2NDc3NjAyODlhNmQ1NTlkOGQ3YzM1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wt6Pq1GE6UWX5QaS9DAGkPhSzXBF1oUwZfzRrYncXu8" }
    })
    const listadoPeliculas = await response.json()
    return listadoPeliculas.results
}

export const getGenresList=async ()=>{
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwN2M0MmZlNGYxMGJjYzlmZTA4NmM1YzcyZjYzMzZlZCIsInN1YiI6IjY2NDc3NjAyODlhNmQ1NTlkOGQ3YzM1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wt6Pq1GE6UWX5QaS9DAGkPhSzXBF1oUwZfzRrYncXu8'
        }
      };
      
      const data = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
        .then(response => response.json())
        .then(response => response)
        .catch(err => console.error(err));
      
     return data


} 
export const getPopularMovie = async () => {
    console.log("hola Mundo")

    const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', {
        headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwN2M0MmZlNGYxMGJjYzlmZTA4NmM1YzcyZjYzMzZlZCIsInN1YiI6IjY2NDc3NjAyODlhNmQ1NTlkOGQ3YzM1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wt6Pq1GE6UWX5QaS9DAGkPhSzXBF1oUwZfzRrYncXu8" }
    })
    const listadoPeliculas = await response.json()
    return listadoPeliculas.results
}
