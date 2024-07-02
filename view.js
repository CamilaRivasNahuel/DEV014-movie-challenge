import { getGenresList } from "./data/dataset";

export const renderItems=async (data)=>{
    const listGenres = await getGenresList()
    const newUl = document.createElement("ul");
    console.log(data)
    data.forEach(element => {
    const newLi = document.createElement("li")
    const newImg = document.createElement("img")
    // "https://image.tmdb.org/t/p/w500/hkxxMIGaiCTmrEArK7J56JTKUlB.jpg
    newImg.setAttribute("src", getUrlImg(element.poster_path));
    const titulo = document.createElement("dt")
    const calificacionPromedio = document.createElement("dt") 
    titulo.textContent = element.title
    calificacionPromedio.textContent = element.vote_average
   
newLi.append(newImg, titulo, calificacionPromedio)
newLi.setAttribute("name", element.id)
newLi.onclick=(event)=>{
    showModal(element,listGenres)
}
newUl.appendChild(newLi)
});
return newUl




}
const showModal=(movie,listGenres)=>{
    console.log(movie)
    const modal= document.getElementById("modalPeliculas")
    modal.onclick=closeModal
    modal.style.display="flex"
    const modalContenido= document.getElementById("contenido")
    modalContenido.onclick=(event)=>{
        event.stopPropagation();

    }
    const newImg = document.createElement("img")
    // "https://image.tmdb.org/t/p/w500/hkxxMIGaiCTmrEArK7J56JTKUlB.jpg
    newImg.setAttribute("src", getUrlImg(movie.poster_path));
    const newDd = document.createElement("div")

    const title = document.createElement("div")
    title.textContent="Titulo: "+movie.title
    const launch = document.createElement("div")
    launch.textContent="Año de lanzamiento: "+movie.release_date
    const gen = document.createElement("div")
    gen.textContent="Genero: "+ movie.genre_ids.map(id=>listGenres.genres.find(gen=>gen.id == id).name)

    const vote = document.createElement("div")
    vote.textContent="Votos: "+movie.vote_count
    const voteAvg = document.createElement("div")
    voteAvg.textContent="Votos Promedio: "+movie.vote_average

    newDd.append(title,launch,gen,vote,voteAvg)
    modalContenido.textContent=""
    modalContenido.appendChild(newImg)
    modalContenido.appendChild(newDd)
    

}


export const getUrlImg=(path)=>{
    return "https://image.tmdb.org/t/p/w500"+path
}


const closeModal = ()=>{
console.log("cerrar modal")
const modal= document.getElementById("modalPeliculas")
modal.style.display="none"

}

