document.getElementById("searchButton").addEventListener("click", buscarPeliculas);
let api_key = "555ece5be7840f24da307a94d3799fba";
let urlBase = "https://api.themoviedb.org/3/search/movie";
let urlImagen = "https://image.tmdb.org/t/p/w500/";
let resultadosContenedor = document.getElementById("results");

function buscarPeliculas() {
    resultadosContenedor.innerHTML = "cargando...";
let searchInput = document.getElementById("searchInput").value;
fetch(`${urlBase}?query=${searchInput}&api_key=${api_key}`)
    .then((respuesta) => respuesta.json())
    .then((respuesta) => mostrarPeliculas(respuesta.results));
}
function mostrarPeliculas(peliculas) {
  // mostramos peliculas en el div results
resultadosContenedor.innerHTML = "";
  // si la longitud de las peliculas es 0
if (peliculas.length === 0) {
    resultadosContenedor.innerHTML =
    "<p> No se encontraron resultados para tu búsqueda </p>";
    return;
}
  // por cada pelicula crear un div
peliculas.forEach((pelicula) => {
    // en este div estara el titulo, lanzamiento descripcion imagen
    let peliculaDiv = document.createElement("div"); //asignar el elemento div html
    peliculaDiv.classList.add("movie"); //asignar la clase
    let titulo = document.createElement("h2"); //asignar el elemento h1 html
    titulo.textContent = pelicula.title; //asignar el contenido
    let lanzamiento = document.createElement("h6"); //asignar el elemento h1 html
    lanzamiento.textContent = `La fecha de lanzamiento fue: ${pelicula.release_date}`; //asignar el contenido
    let descripcion = document.createElement("p"); //asignar el elemento p html
    descripcion.textContent = pelicula.overview; //asignar el contenido
    let imagenurl = `${urlImagen}${pelicula.poster_path}`; // la ruta de la imagen
    let imagen = document.createElement("img"); // se creala img
    imagen.src = imagenurl;
    // agregamos los elementos al div de peliculas
    peliculaDiv.appendChild(titulo);
    peliculaDiv.appendChild(imagen);
    peliculaDiv.appendChild(descripcion);
    peliculaDiv.appendChild(lanzamiento);
    // agregamos div de peliculas al div resultados
    resultadosContenedor.appendChild(peliculaDiv);
});
}
