class Media {
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

// === Tv Shows === //

let TheOffice = new Media(
    "The Office",
    10,
    "comedy",
    "2005",
    "The series depicts the everyday lives of office employees in the Scranton, Pennsylvania, branch of the fictional Dunder Mifflin Paper Company. To simulate the look of an actual documentary, it was filmed in a single-camera setup, without a studio audience or a laugh track.",
    [new Season(25), new Season(20), new Season(26), new Season(25)],
    ["Netflix"],
    "Content/theoffice.jpg",
    "the_office");

let SouthPark = new Media(
    "South Park",
    7,
    "comedy",
    "1997",
    "The animated series is not for children. In fact, its goal seems to be to offend as many as possible as it presents the adventures of Stan, Kyle, Kenny and Cartman.",
    [new Season(12), new Season(12), new Season(12), new Season(12)],
    ["Hulu"],
    "Content/southpark.jpg",
    "south_park");

let DragonBallZ = new Media(
    "Dragon Ball Z",
    7,
    "action",
    "1989",
    "Dragon Ball Z follows the adventures of Goku who, along with the Z Warriors, defends the Earth against evil. The action adventures are entertaining and reinforce the concept of good versus evil. Dragon Ball Z teaches valuable character virtues such as teamwork, loyalty, and trustworthiness.",
    [new Season(12), new Season(8), new Season(24), new Season(25)],
    ["Crunchyroll", "Hulu"],
    './Content/Dragon-Ball-Z.jpg',
    "dragon_ball_z");

let Dark = new Media(
    "Dark",
    10,
    "sci-fi",
    "2018",
    "When two children go missing in a small German town, its sinful past is exposed along with the double lives and fractured relationships that exist among four families as they search for the kids.",
    [new Season(12)],
    ["Netflix"],
    'Content/dark.jpg',
    "dark");

let WestWorld = new Media(
    "West World",
    5,
    "sci-fi",
    "2017",
    "Westworld isn't your typical amusement park. Intended for rich vacationers,\
     the futuristic park -- which is looked after by robotic \"hosts\" -- allows its \
     visitors to live out their fantasies through artificial consciousness. No matter how\
     illicit the fantasy may be, there are no consequences for the park's guests, allowing for\
     any wish to be indulged. \"Westworld\" -- which is based on the 1973 Michael Crichton movie of\
     the same name -- features an all-star cast that includes Oscar winner Anthony Hopkins and Golden Globe winner Ed Harris.",
    [new Season(10)],
    ["HBO GO"],
    'Content/westworld.jpg',
    "west_world");

let HighCastle = new Media(
    "The Man in the High Castle",
    6,
    "sci-fi",
    "2016",
    "This series, loosely based Philip K. Dick's novel of the same name, takes a look at what the world\
    Axis powers won the war, leading to the United States being divided into three parts, an area controlled\
    by the Japanese, a Nazi-controlled section, and a buffer zone between the two. Despite the oppression, a \
    new hope emerges when films turn up that seem to show a different world. A woman believes the films \
    contain the key to freedom and is determined to find their mysterious guardian.",
    [new Season(10)],
    ["Prime Video"],
    'Content/highcastle.png',
    "high_castle");

let SpongeBob = new Media(
    "Spongebob Squarepants",
    8,
    "comedy",
    "1999",
    "A square yellow sponge named SpongeBob SquarePants lives in a pineapple with\
     his pet snail, Gary, in the city of Bikini Bottom on the floor of the Pacific Ocean.\
     He works as a fry cook at the Krusty Krab. During his time off, SpongeBob has a knack for \
     attracting trouble with his starfish best friend, Patrick. Arrogant octopus Squidward Tentacles, \
     SpongeBob's neighbor, dislikes SpongeBob because of his childlike behavior.",
    [new Season(10), new Season(10), new Season(10), new Season(10)],
    ["Prime Video"],
    'Content/spongebob-example.jpg',
    "spongebob");

let Friends = new Media(
    "Friends",
    7,
    "comedy",
    "1987",
    "Three young men and three young women -- of the BFF kind -- live in the same\
     apartment complex and face life and love in New York. They're not above sticking\
     their noses into one another's business and swapping romantic partners, which always leads\
     to the kind of hilarity average people will never experience -- especially during breakups.",
    [new Season(10), new Season(10)],
    ["Netflix", "Prime Video"],
    'Content/Friends.jpg',
    "friends");

let GameOfThrones = new Media(
    "Game of Thrones",
    8,
    "adventure",
    "2015",
    "George R.R. Martin's best-selling book series `A Song of Ice and Fire' is brought to the screen as\
     HBO sinks its considerable storytelling teeth into the medieval fantasy epic. It's the depiction of two powerful\
     families - kings and queens, knights and renegades, liars and honest men - playing a deadly game for control of the\
     Seven Kingdoms of Westeros, and to sit atop the Iron Throne. Martin is credited as a co-executive producer and one of\
     the writers for the series, which was filmed in Northern Ireland and Malta.",
    [new Season(10), new Season(10)],
    ["HBO GO"],
    'Content/gameOfThrones.jpg',
    "gameofthrones");

let Shameless = new Media(
    "Shameless",
    4,
    "drama",
    "2017",
    "Oscar-nominated actor William H. Macy stars as Frank Gallagher, a single father of six who spends much of his\
     free time drinking at bars. The Gallagher children -- led by oldest daughter Fiona (Emmy Rossum), who takes on much\
     of the child-rearing responsibility due to her mother's absence -- manage to raise themselves in spite of Frank's lack of parenting\
     and unusual parenting style when he does choose to act like a father. The drama is an adaptation of the BAFTA Award-winning British\
     show of the same name.",
    [new Season(10), new Season(10)],
    ["Showtime"],
    'Content/shameless.jpg',
    "shameless");

// == Movies == //

let Avengers = new Media(
    "Avengers",
    7,
    "action",
    "2012",
    "Earth's mightiest heroes must come together and learn to fight as a team if\
    they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    [new Season(1)], // 1 season, 1 episode = movie
    ["Netflix"],
    'Content/Avengers.jpg',
    "avengers");

let BlackPanther = new Media(
    "Black Panther",
    8,
    "action",
    "2018",
    "After the death of his father, T'Challa returns home to the African nation of Wakanda to take his rightful place as king.\
     When a powerful enemy suddenly reappears, T'Challa's mettle as king -- and as Black Panther -- gets tested when he's drawn into a\
     conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies\
     and release the full power of Black Panther to defeat his foes and secure the safety of his people.",
    [new Season(1)], // 1 season, 1 episode = movie
    ["Netflix"],
    'Content/black-panther.jpg',
    "blackpanther");

  let BeastsOfNoNation = new Media(
      "Beasts of No Nation",
      10,
      "action",
      "2015",
      "As civil war rages in Africa, a fierce warlord (Idris Elba) trains a young orphan (Abraham Attah) to join his group of guerrilla soldiers.",
      [new Season(1)], // 1 season, 1 episode = movie
      ["Netflix"],
      'Content/beasts-of-no-nation.png',
      "beasts-of-no-nation");

  let TwentyWeeks = new Media(
    "20 weeks",
    7,
    "romance",
    "2017",
    "A couple must decide on how to move forward when their baby is diagnosed with a serious health condition at the 20-week scan.",
    [new Season(1)], // 1 season, 1 episode = movie
    ["Hulu"],
    'Content/twentyweeks.jpg',
    "twentyweeks");
  )


let Medias = [TheOffice, SouthPark, DragonBallZ, Dark, WestWorld, HighCastle, SpongeBob, Friends, GameOfThrones, Shameless, Avengers, BlackPanther, BeastsOfNoNation, TwentyWeeks];

let RecommendedContent = [];
for (let i = 0; i < Medias.length;) {
  let maybeMedia = Medias[Math.floor(Math.random() * Medias.length)];
  if (!RecommendedContent.includes(maybeMedia)) {
    RecommendedContent.push(maybeMedia);
    i++;
  }
}

// == The rest of the code == //

$(document).ready(function() {
    //Code when hamburger is clicked
    $('.hamburger-content').hide();
    $(document).on('click', '#hamburger', function() {
        $('.hamburger-content').toggle();
    });

    let loginServices = new Set();
    // get the logged in services

    let services = ['netflix', 'hulu', 'hbogo', 'showtime', 'primevideo', 'crunchyroll'];


    for (service of services) {
        console.log(service);
        addTogglerListener(service);
    }

    function addTogglerListener(service) {
        $(document).on('click', '#' + service + '-switch', function() {
            // $('#' + service + '-switch').not(':checked').prop("checked", true);
            // updateList();
            if ($('#' + service + '-switch').val() === 'on') {
                $('#' + service + '-switch').val('off');
                if ($('.search-content').is(':visible')) {
                    updateSearch();
                }
                updateList();
                console.log('yikes');
            } else {
                $('#' + service + '-switch').val('on');
                if ($('.search-content').is(':visible')) {
                    updateSearch();
                }
                updateList();
                console.log('jeepers');
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
        $('.search-content').hide();
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


    function sortbyGenre(genre) { // returns results that are the selected genre
        let results = [];
        for (var i = 0; i < Medias.length; i++) {
            if (Medias[i].genre === genre) {
                results.push(Medias[i]);
            }
        }
        return results;
    }

    function updateList() {
        $('#recommended').empty();
        let activeServices = findActiveServices();
        for (var i = 0; i < RecommendedContent.length; i++) {
            for (service of activeServices) {
                if (RecommendedContent[i].services[0].toLowerCase().replace(/\s+/g, '') === service) {
                    AddElement(RecommendedContent[i], "#recommended");
                }
            }
        }
        updateGenres();
    }

    updateList();

    function updateGenres() {
        let genre = document.getElementById('genre-selector');
        let selected = genre.options[genre.selectedIndex].value;

        var myNode = document.getElementById("sortbygenre");
        // while (myNode.firstChild) {
        //     myNode.removeChild(myNode.firstChild);
        // }
        $('#sortbygenre').empty();

        let shows = sortbyGenre(selected);
        let activeServices = findActiveServices();

        for (var i = 0; i < shows.length; i++) {
          for (service of activeServices) {
            if (shows[i].services[0].toLowerCase().replace(/\s+/g, '') === service) {
                AddElement(shows[i], "#sortbygenre");
            }
          }
        }
    }

    updateGenres();

    function findActiveServices() {
        let activeServices = [];
        for (service of services) {
            if ($('#' + service + '-switch').val() === 'on') {
                activeServices.push(service);
            }
        }
        return activeServices;
    }

    let cameFromSearch = false;

    function AddElement(show, location) {
        let html = "<a href=\"#\" id=\"" + show.id + "\" class=\"content\" style=\"background: url(" + show.imgPath + "); background-position: center; background-size: cover;\"><h5 class=\"content-title\">" + show.title + "</h5><h4 class=\"content-service " + show.services[0] + "\">" + show.services[0] + "</h4></div>";
        $(location).append(html);
        addContentListener(show);
    }

    function addContentListener(show) {
        $(document).on('click', '#' + show.id, function() {
            console.log('yite');
            let html = "<div id=\"show-display\"><h5>" + show.title + "</h5></div>"
            $("#show-title").empty().append(show.title);
            $("#show-description").empty().append(show.description);
            $("#show-description").empty().append(show.description);
            $(".show-img-container").empty().append("<img src=\"" + show.imgPath + "\">");
            $("#show-rating-year").empty();
            for (let i = 0; i < Math.floor(show.rating/2); i++) {
              $("#show-rating-year").append("<img src=\"./Content/good.png\">")
            }
            if (show.rating % 2 === 1) {
              $("#show-rating-year").append("<img src=\"./Content/half.png\">")
            }
            for (let i = 5; i > Math.ceil(show.rating/2); i--) {
              $("#show-rating-year").append("<img src=\"./Content/bad.png\">")
            }
            $("#show-rating-year").append(" - " + show.year);
            if ($('.page-content').is(':visible')) {
                $('.page-content').slideUp(300);
                cameFromSearch = false;
            } else {
                $('.search-content').slideUp(300);
                cameFromSearch = true;
            }
            $('.tv-show-page').show();
        });
    }


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




    $('#genre-selector').change(function() {
        updateGenres();
    });

    $('.tv-show-page').hide();

    $(document).on('click', '#show-back-arrow', function() {
        if (cameFromSearch) {
            $('.search-content').slideDown();
            setTimeout(function() {
                $('.tv-show-page').toggle();
            }, 400);
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

    let lastSearch = '';

    $("#search-form").submit(function(e) {
        e.preventDefault();
        lastSearch = $('#search-box').val();
        updateSearch();
        console.log('yowch');
    });

    function updateSearch() {
        const showsToAdd = [];
        let foundShow = false;
        let activeServices = findActiveServices();
        for (show of Medias) {
            if (show.title.toLowerCase().includes(lastSearch.toLowerCase())) {
                for (service of activeServices) {
                    if (show.services[0].toLowerCase().replace(/\s+/g, '') === service) {
                        showsToAdd.push(show);
                        foundShow = true;
                    }
                }
            }
        }
        $('#search-box').val('');
        $('.page-content').hide();
        $('.tv-show-page').hide();
        $('.service-login').hide();
        $('.starting-page').hide();
        $('.hamburger-content').hide();
        $('.search-content').show();
        if (!foundShow) {
            $('#not-found').show()
            $('#search-content-band').hide();
        } else {
            $('#results').empty();
            $('#not-found').hide();
            $('#search-content-band').show();
            for (show of showsToAdd) {
                AddElement(show, '#results');
            }
        }
    }
});
