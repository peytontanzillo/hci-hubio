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

  var services = new Set(['netflix', 'hulu', 'hbo', 'showtime', 'prime', 'crunchyroll']);
  var activeServices = new Set(['netflix', 'hulu', 'hbo', 'showtime', 'prime', 'crunchyroll']);

  for (service of services) {
    console.log(service);
    $(document).on('click', '#' + service + '-switch', function() {
      if ($('#' + service + '-switch').val() === 'on') {
        activeServices.delete(service);
        // for (let i = 0; i < activeServices.length; i++) {
        //   if (activeServices[i] === service) {
        //     activeServices.splice(i, 1);
        //   }
        // }
        //activeServices.splice(activeServices.indexOf(service), 1);
        $('#' + service + '-switch').val('off');
        console.log(activeServices);
        updateList();
      } else {
        activeServices.add(service);
        $('#' + service + '-switch').val('on');
        console.log(activeServices);
        updateList();
      }
    });
  }


  let serviceToLoginID = new Map();
  serviceToLoginID.set("#netflixLogin", ["Netflix", "netflix"]);
  serviceToLoginID.set("#huluLogin", ["Hulu", "hulu"]);
  serviceToLoginID.set("#hboLogin", ["HBO GO", "hbo"]);
  serviceToLoginID.set("#showtimeLogin", ["Showtime", "showtime"]);
  serviceToLoginID.set("#primeLogin", ["Prime Video", "prime"]);
  serviceToLoginID.set("#crunchyrollLogin", ["Crunchyroll", "crunchyroll"]);

  for (buttonid of serviceToLoginID.keys()) {
    addButtonListener(buttonid);
  }

  $('.page-content').hide();
  $('.service-login').hide();
  $('.search-content').hide();

  function addButtonListener(buttonid) {
    $(document).on('click', buttonid, function() {
      if ($(buttonid).hasClass("login")) {
        //        $(buttonid).removeClass("login");
        //        $(buttonid).addClass("logout");
        //        $(buttonid).text("Logout");
        //        loginServices.add(serviceToLoginID.get(buttonid)[0]);
        displayServiceLoginPage(buttonid);
        //          $('.page-content').show();
        $('.starting-page').hide();
      } else {
        $(buttonid).removeClass("logout");
        $(buttonid).addClass("login");
        $(buttonid).text("Login");
        loginServices.delete(serviceToLoginID.get(buttonid)[0]);
      }
    });
  }

  let loginHamburger = undefined;

  function displayServiceLoginPage(buttonid) {
    $('.starting-page').hide();
    $('.page-content').hide();
    $('.hamburger-content').hide();
    $('.tv-show-page').hide();
    $('#login-service-name').removeClass()
    $('#login-service-name').addClass(serviceToLoginID.get(buttonid)[1])
    $('#login-service-name').text(serviceToLoginID.get(buttonid)[0])
    $('.service-login').show();
    loginHamburger = buttonid;
  }

  $(document).on('click', '#login-button', function() {
    if ($('#username-input').val() == 'cat' && $('#password-input').val() == 'dog') {
      $(loginHamburger).removeClass("login");
      $(loginHamburger).addClass("logout");
      $(loginHamburger).text("Logout");
      loginServices.add(serviceToLoginID.get(loginHamburger)[0]);
      $('.service-login').hide();
      $('.page-content').show();
      $('#username-input').val('');
      $('#password-input').val('');
    } else {
      alert("Incorrect username or password.");
    }
  });

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
    ["HBO GO"],
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
    'Content/spongebob.jpg',
    "spongebob");

  let friends = new TvShow(
    "Friends",
    7,
    "comedy",
    "1987",
    "friends",
    [new Season(10), new Season(10)],
    ["Netflix", "Prime Video"],
    'Content/friends.jpg',
    "friends");

  let gameofthrones = new TvShow(
    "Game of Thrones",
    8,
    "adventure",
    "2015",
    "throne of games",
    [new Season(10), new Season(10)],
    ["HBO GO"],
    'Content/gameofthrones.jpg',
    "gameofthrones");

  let shameless = new TvShow(
    "Shameless",
    4,
    "drama",
    "2017",
    "no idea what this show is about",
    [new Season(10), new Season(10)],
    ["Showtime"],
    'Content/shameless.jpg',
    "shameless");

  if ($('#netflix-switch').is(":checked")) {

  }
  let TvShows = [TheOffice, SouthPark, DragonBallZ, Dark, WestWorld, mithc, spongebob, friends, gameofthrones, shameless];

  function sortbyGenre(genre) { // returns results that are the selected genre
    let results = [];
    for (var i = 0; i < TvShows.length; i++) {
      if (TvShows[i].genre === genre) {
        results.push(TvShows[i]);
      }
    }
    return results;
  }

  function updateList() {
    for (var i = 0; i < TvShows.length; i++) {
      // if (activeServices.has(TvShows[i].services[0])) {
        AddElement(TvShows[i], "#recommended");
        console.log('yeet');
      // }
      updateGenres();
    }
  }

  updateList();

    let cameFromSearch = false;
    
  function AddElement(show, location) {
    let html = "<a href=\"#\" id=\"" + show.id + "\" class=\"content\" style=\"background: url(" + show.imgPath + "); background-position: center; background-size: cover;\"><h5 class=\"content-title\">" + show.title + "</h5><h4 class=\"content-service " + show.services[0] + "\">" + show.services[0] + "</h4></div>";
    $(location).append(html);
      
    $('#' + show.id).click(function() {
    //var id = $(this).attr('id');
    //let show = null;

//    for (let i = 0; i < TvShows.length; i++) {
//      if (TvShows[i].id === id) {
//        show = TvShows[i];
//      }
//    }

    let html = "<div id=\"show-display\"><h5>" + show.title + "</h5></div>"
    $("#show-title").empty().append(show.title);
    $("#show-description").empty().append(show.description);
    $("#show-description").empty().append(show.description);
    $(".show-img-container").empty().append("<img src=\"" + show.imgPath + "\">");
    $("#show-rating-year").empty().append("X Stars - 20XX");
    if ($('.page-content').is(':visible')) {
        $('.page-content').slideUp(300);
        cameFromSearch = false;
    } else {
        $('.search-content').hide() 
        cameFromSearch = true;
    }
    $('.tv-show-page').show();
  });
      
  };

  let ScrollAmount = 500;

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
    
  $('#results-scroll-right').click(function() {
    document.getElementById('results').scrollLeft += ScrollAmount;
  });
  $('#results-scroll-left').click(function() {
    document.getElementById('results').scrollLeft -= ScrollAmount;
  });


  function updateGenres() {
    let genre = document.getElementById('genre-selector');
    let selected = genre.options[genre.selectedIndex].value;

    var myNode = document.getElementById("sortbygenre");
    while (myNode.firstChild) {
      myNode.removeChild(myNode.firstChild);
    }

    let shows = sortbyGenre(selected);
    for (var i = 0; i < shows.length; i++) {
      AddElement(shows[i], "#sortbygenre");
    }
  }

  updateGenres();

  $('#genre-selector').change(function() {
    updateGenres();
  });

  $('.tv-show-page').hide();

    $(document).on('click', '#show-back-arrow', function() {
        if (cameFromSearch) {
            $('.search-content').show();
            $('.tv-show-page').hide();
        } else {
            $('.page-content').slideDown();
            setTimeout(function() {
                $('.tv-show-page').toggle();
            }, 400);
        }
    });
    
    $(document).on('click', '#search-back-arrow', function() {
        $('.search-content').hide();
        $('.page-content').show();
    });
    
    $("#search-form").submit(function(e) {
        let foundShow = false;
        const showsToAdd = [];
        e.preventDefault();
        for (show of TvShows) {
            if (show.title.toLowerCase().includes($('#search-box').val().toLowerCase())) {
                showsToAdd.push(show)
                foundShow = true;
            }
        }
        $('#search-box').val('');
        if (!foundShow) {
            alert('Show not found.');
        } else {
            $('#results').empty();
            $('.search-content').show();
            $('.page-content').hide();
            $('.tv-show-page').hide();
            $('.service-login').hide();
            $('.starting-page').hide();
            $('.hamburger-content').hide();
            for (show of showsToAdd) {
                AddElement(show, '#results');
            }
        }
    });
});