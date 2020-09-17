var favoriteMovies = [];

function addFavoriteMovie(movieName) {
  if (!movieName.includes("The")) {
    favoriteMovies.push(movieName);
  }
}

function printFavoriteMovies() {
  console.log("Favorite Movies: " + favoriteMovies.length);

  for (var i = 0; i < favoriteMovies.length; i++) {
    console.log(favoriteMovies[i]);
  }
}
