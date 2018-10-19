//
// show content on homescreen from the logged in services
// var content = [];
// for (service in loginservices){
//  if (tvshow.service === service){
//    content.push(tvshow);
//  }
//}


function openVideo(Title, season, episode) {
  // do some stuff where it opens a new page and displays the corresponding video from the database
}


//console.log(results);

$(document).ready(function() {
  //Code when hamburger is clicked
  $('.hamburger-content').hide();
  $(document).on('click', '#hamburger', function() {
    $('.hamburger-content').toggle();
  });

  var loginServices = new Set();
  // get the logged in services

  let serviceToLoginID = new Map();
  serviceToLoginID.set("#netflixLogin", "Netflix");
  serviceToLoginID.set("#huluLogin", "Hulu");
  serviceToLoginID.set("#hboLogin", "HBO GO");
  serviceToLoginID.set("#showtimeLogin", "Showtime");
  serviceToLoginID.set("#primeLogin", "Prime Video");
  serviceToLoginID.set("#crunchyrollLogin", "Crunchyroll");

  for (buttonid of serviceToLoginID.keys()) {
    addButtonListener(buttonid);
  }

  $('.page-content').hide();

  function addButtonListener(buttonid) {
    $(document).on('click', buttonid, function() {
      if ($(buttonid).hasClass("login")) {
        $(buttonid).removeClass("login");
        $(buttonid).addClass("logout");
        $(buttonid).text("Logout");
        loginServices.add(serviceToLoginID.get(buttonid));
        $('.page-content').show();
        $('.starting-page').hide();
      } else {
        $(buttonid).removeClass("logout");
        $(buttonid).addClass("login");
        $(buttonid).text("Login");
        loginServices.delete(serviceToLoginID.get(buttonid));
      }
      console.log(loginServices);
    });
  }

  class TvShow {
    constructor(title, rating, genre, year, description, seasons, services, imgPath, id) {
      this.title = title;
      this.rating = rating;
      this.description = description;
      this.genre = genre;
      this.year = year;

      // Arrays
      this.seasons = seasons;
      this.services = services;

      //  Image path
      this.imgPath = imgPath;

      this.id = id;
    }
  }

  class Season {
    constructor(NumberOfEpisodes) {
      this.NumberOfEpisodes = NumberOfEpisodes;
    }
  }

  class Movie {
    constructor(title, rating, description, services) {
      this.title = title;
      this.rating = rating;
      this.description = description;
      this.services = services;
    }
  }

  let TheOffice = new TvShow(
    "The Office",
    10,
    "comedy",
    "2005",
    "The series depicts the everyday lives of office employees in the Scranton, Pennsylvania, branch of the fictional Dunder Mifflin Paper Company. To simulate the look of an actual documentary, it was filmed in a single-camera setup, without a studio audience or a laugh track.",
    [new Season(25), new Season(20), new Season(26), new Season(25)],
    ["Netflix"],
    "Content/theoffice.jpg",
    "the_office");

  let SouthPark = new TvShow(
    "South Park",
    8,
    "comedy",
    "1997",
    "The animated series is not for children. In fact, its goal seems to be to offend as many as possible as it presents the adventures of Stan, Kyle, Kenny and Cartman.",
    [new Season(12), new Season(12), new Season(12), new Season(12)],
    ["Hulu"],
    "Content/southpark.jpg",
    "south_park");

  let DragonBallZ = new TvShow(
    "Dragon Ball Z",
    7,
    "action",
    "1989",
    "Dragon Ball Z follows the adventures of Goku who, along with the Z Warriors, defends the Earth against evil. The action adventures are entertaining and reinforce the concept of good versus evil. Dragon Ball Z teaches valuable character virtues such as teamwork, loyalty, and trustworthiness.",
    [new Season(12), new Season(8), new Season(24), new Season(25)],
    ["Crunchyroll", "Hulu"],
    './Content/Dragon-Ball-Z.jpg',
    "dragon_ball_z");

  let Dark = new TvShow(
    "Dark",
    10,
    "sci-fi",
    "2018",
    "When two children go missing in a small German town, its sinful past is exposed along with the double lives and fractured relationships that exist among four families as they search for the kids.",
    [new Season(12)],
    ["Netflix"],
    'Content/dark.jpg',
    "dark");

  let WestWorld = new TvShow(
    "West World",
    5,
    "sci-fi",
    "2017",
    "idk.",
    [new Season(10)],
    ["HBO"],
    'Content/westworld.jpg',
    "west_world");

  let mithc = new TvShow(
    "Man in the High Castle",
    6,
    "sci-fi",
    "2016",
    "idk.",
    [new Season(10)],
    ["Prime Video"],
    'Content/highcastle.png',
    "high_castle");

  let spongebob = new TvShow(
    "Spongebob Squarepants",
    10,
    "comedy",
    "1999",
    "Spongeboy me bob",
    [new Season(10), new Season(10), new Season(10), new Season(10)],
    ["Prime Video"],
    'Content/forest.jpg',
    "spongebob");

  let TvShows = [TheOffice, SouthPark, DragonBallZ, Dark, WestWorld, mithc, spongebob];

  function sortbyGenre(genre) { // returns results that are the selected genre
    let results = [];
    for (var i = 0; i < TvShows.length; i++) {
      if (TvShows[i].genre === genre) {
        results.push(TvShows[i]);
      }
    }
    return results;
  }

  for (var i = 0; i < TvShows.length; i++) {
    AddElement(TvShows[i], "#recommended");
    AddElement(TvShows[TvShows.length - (i + 1)], "#sortbygenre");
  }

  function AddElement(show, location) {
    let html = "<div class=\"content\" style=\"background: url(" + show.imgPath + "); background-position: center; background-size: cover;\"><h5 class=\"content-title\">" + show.title + "</h5><h4 class=\"content-service " + show.services[0] + "\">" + show.services[0] + "</h4></div>";
    $(location).append(html);
  };

  let ScrollAmount = 300;

  $('#recommended-scroll-right').click(function() {
    document.getElementById('recommended').scrollLeft += ScrollAmount;
  });
  $('#recommended-scroll-left').click(function() {
    document.getElementById('recommended').scrollLeft -= ScrollAmount;
  });

  $('#genre-scroll-right').click(function() {
    document.getElementById('sortbygenre').scrollLeft += ScrollAmount;
  });
  $('#genre-scroll-left').click(function() {
    document.getElementById('sortbygenre').scrollLeft -= ScrollAmount;
  });

  $('#genre-selector').change(function() {
    let genre = document.getElementById('genre-selector');
    let selected = genre.options[genre.selectedIndex].value;
    console.log(selected);

    var myNode = document.getElementById("sortbygenre");
    while (myNode.firstChild) {
      myNode.removeChild(myNode.firstChild);
    }

    let shows = sortbyGenre(selected);
    console.log(shows);
    for (var i = 0; i < shows.length; i++) {
      AddElement(shows[i], "#sortbygenre");
    }
  });

});
