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
    function TvShow(title, rating, description, seasons, imgPath) {
      this.title = title;
      this.rating = rating;
      this.description = description;
      this.seasons = seasons;
      this.imgPath = imgPath;
    }

    function Season(NumberOfEpisodes) {
      this.NumberOfEpisodes = NumberOfEpisodes;
    }

    function Movie(title, rating, description) {
      this.title = title;
      this.rating = rating;
      this.description = description;
    }

    let OfficeSeasons = [new Season(25), new Season(20), new Season(26), new Season(25)];
    let TheOffice = new TvShow("The Office", 10, "The series depicts the everyday lives of office employees in the Scranton, Pennsylvania, branch of the fictional Dunder Mifflin Paper Company. To simulate the look of an actual documentary, it was filmed in a single-camera setup, without a studio audience or a laugh track.", OfficeSeasons, "https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2015/03/the_office_season_1_cast.jpg");

    console.log(TheOffice.title);
    console.log(TheOffice.seasons);

    let TvShows = [TheOffice, TheOffice, TheOffice];

    for (var i = 0; i < TvShows.length; i++) {
      AddElement(TvShows[i]);
    }

    function AddElement(show) {
        let html = "<div class=\"content\" style=\"background: url(" + show.imgPath + "); background-position: center; background-size: cover;\"><h5 class=\"content-title\">" + show.title + "</h5><h4 class=\"content-service netflix\">Netflix</h4></div>";
        $("#test_div").append(html);
        console.log(html);
    };
});

