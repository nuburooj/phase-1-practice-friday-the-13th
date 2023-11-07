//grab movie-list nav element
const movieList = document.getElementById("movie-list")
//get all the movies
fetch('http://localhost:3000/movies')           //api for the get request
  .then(response => response.json())
  .then(movies => {
    const image = document.createElement('img');
    const iconurl = 'http://localhost:3000/movies'
    movies.forEach(element => document.createElement('img'));
    image.setAttribute('src', iconurl);
    li.appendChild(image)

    //for each movie 

        //create an image
        //append to movie-list nav element
  })

form.addEventListener("Submit", (e) => {
    e.preventDefault()
    
})

var image = document.createElement("img");
image.setAttribute("src", iconurl);
li.appendChild(image);