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
    8,
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
    "idk.",
    [new Season(10)],
    ["HBO GO"],
    'Content/westworld.jpg',
    "west_world");

let HighCastle = new Media(
    "Man in the High Castle",
    6,
    "sci-fi",
    "2016",
    "idk.",
    [new Season(10)],
    ["Prime Video"],
    'Content/highcastle.png',
    "high_castle");

let SpongeBob = new Media(
    "Spongebob Squarepants",
    10,
    "comedy",
    "1999",
    "Spongeboy me bob",
    [new Season(10), new Season(10), new Season(10), new Season(10)],
    ["Prime Video"],
    'Content/spongebob.jpg',
    "spongebob");

let Friends = new Media(
    "Friends",
    7,
    "comedy",
    "1987",
    "friends",
    [new Season(10), new Season(10)],
    ["Netflix", "Prime Video"],
    'Content/friends.jpg',
    "friends");

let GameOfThrones = new Media(
    "Game of Thrones",
    8,
    "adventure",
    "2015",
    "throne of games",
    [new Season(10), new Season(10)],
    ["HBO GO"],
    'Content/gameofthrones.jpg',
    "gameofthrones");

let Shameless = new Media(
    "Shameless",
    4,
    "drama",
    "2017",
    "no idea what this show is about",
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
    "sooper heroz",
    [new Season(1)], // 1 season, 1 episode = movie
    ["Prime Video"],
    'Content/avengers.jpg',
    "avengers");

let Medias = [TheOffice, SouthPark, DragonBallZ, Dark, WestWorld, HighCastle, SpongeBob, Friends, GameOfThrones, Shameless, Avengers];

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
        for (var i = 0; i < Medias.length; i++) {
            for (service of activeServices) {
                if (Medias[i].services[0].toLowerCase().replace(/\s+/g, '') === service) {
                    AddElement(Medias[i], "#recommended");
                }
            }
        }
        updateGenres();
    }

    updateList();

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
              $("#show-rating-year").append("+")
            }
            if (show.rating % 2 === 1) {
              $("#show-rating-year").append("±")
            }
            for (let i = 5; i > Math.ceil(show.rating/2); i--) {
              $("#show-rating-year").append("-")
            }
            $("#show-rating-year").append("      " + show.year);
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
