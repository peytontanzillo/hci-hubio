var loginservices = [];
// get the logged in services
//
// show content on homescreen from the logged in services
// var content = [];
// for (service in loginservices){
//  if (tvshow.service === service){
//    content.push(tvshow);
//  }
//}


function openVideo(Title, season, episode){
  // do some stuff where it opens a new page and displays the corresponding video from the database
}

function sortbyGenre(genre){ // returns results that are the selected genre
  let results = [];
  if (show.genre === genre){
    results.push(show);
  }
  return results;
}
//console.log(results);

$(document).ready(function() {
    function TvShow(title, rating, description, seasons, services, imgPath) {
      this.title = title;
      this.rating = rating;
      this.description = description;
      this.seasons = seasons;
      this.imgPath = imgPath;
      this.services = services;
    }

    function Season(NumberOfEpisodes) {
      this.NumberOfEpisodes = NumberOfEpisodes;
    }

    function Movie(title, rating, description, services) {
      this.title = title;
      this.rating = rating;
      this.description = description;
      this.services = services;
    }

    let TheOffice = new TvShow("The Office", 10,
      "The series depicts the everyday lives of office employees in the Scranton, Pennsylvania, branch of the fictional Dunder Mifflin Paper Company. To simulate the look of an actual documentary, it was filmed in a single-camera setup, without a studio audience or a laugh track."
      , [new Season(25), new Season(20), new Season(26), new Season(25)],
      ["Netflix"], "https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2015/03/the_office_season_1_cast.jpg");

    let SouthPark = new TvShow("South Park", 8,
      "The animated series is not for children. In fact, its goal seems to be to offend as many as possible as it presents the adventures of Stan, Kyle, Kenny and Cartman."
      , [new Season(12), new Season(12), new Season(12), new Season(12)],
      ["Hulu"], 'Content/forest.jpg');

    let DragonBallZ = new TvShow("Dragon Ball Z", 7,
      "Dragon Ball Z follows the adventures of Goku who, along with the Z Warriors, defends the Earth against evil. The action adventures are entertaining and reinforce the concept of good versus evil. Dragon Ball Z teaches valuable character virtues such as teamwork, loyalty, and trustworthiness."
      , [new Season(12), new Season(8), new Season(24), new Season(25)],
      ["Hulu", "Crunchyroll"], 'Content/forest.jpg');

    let Dark = new TvShow("Dark", 10,
      "When two children go missing in a small German town, its sinful past is exposed along with the double lives and fractured relationships that exist among four families as they search for the kids."
      , [new Season(12)],
      ["Netflix"], 'Content/forest.jpg');

    let TvShows = [TheOffice, SouthPark, DragonBallZ, Dark];

    for (var i = 0; i < TvShows.length; i++) {
      AddElement(TvShows[i], "#recommended");
      AddElement(TvShows[TvShows.length - (i + 1)], "#sortbygenre");
    }

    function AddElement(show, location) {
        let html = "<div class=\"content\" style=\"background: url(" + show.imgPath + "); background-position: center; background-size: cover;\"><h5 class=\"content-title\">" + show.title + "</h5><h4 class=\"content-service " + show.services[0] + "\">" + show.services[0] + "</h4></div>";
        $(location).append(html);
    };
});
