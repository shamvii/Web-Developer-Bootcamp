var movieDB = [
{
	title: "Shawshank Redemption",
rating: 8.1,
hasWatched: true
},
{
	title: "The Imitation Game",
rating: 9.2,
hasWatched: true

},
{
	title: "The Greek Wedding",
rating: 5,
hasWatched: false}
]

movieDB.forEach(function(movie){
	
	console.log(buildString(movie));
})

function buildString(movie) {
	var result = "You have ";
	if(movie.hasWatched) {
		result += "watched";
	} else {
		result += "not seen";
	}
	result += "\"" + movie.title + "\" - ";
	result += movie.rating + "stars";
	return result;
}