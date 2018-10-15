function openVideo(Title, season, episode){
  // do some stuff where it opens a new page and displays the corresponding video from the database
}

function sortbyGenre(genre){
  var results = [];
  if (show.genre === genre){
    results.add(show);
  }
  return results;
}

function search(){
  var searchResult = document.getElementById('search-box').value;
  console.log(searchResult);

}
