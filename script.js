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
    let genres = ['action', 'adventure', 'comedy', 'drama', 'romance', 'sci-fi'];


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
    $('.playback').hide();

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

    $('#login-form').submit(function(e) {
        e.preventDefault();
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
            for (var j = 0; j < genres.length; j++) {
                if (Medias[i].genres[j] === genre) {
                    results.push(Medias[i]);
                }
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
    
    let currentShow = undefined;

    function addContentListener(show) {
        $(document).on('click', '#' + show.id, function() {
            currentShow = show;
            let html = "<div id=\"show-display\"><h5>" + show.title + "</h5></div>"
            $("#show-title").empty().append(show.title);
            let extra = '';
            if (show.description.length > 500) {
              extra = '...';
            }
            $("#show-description").empty().append(show.description.substr(0, 500) + extra);
            $(".show-img-container").empty().append("<img src=\"" + show.imgPath + "\">");
            $("#show-rating-year").empty();
            for (let i = 0; i < Math.floor(show.rating / 2); i++) {
                $("#show-rating-year").append("<img src=\"./Content/good.png\">")
            }
            if (show.rating % 2 === 1) {
                $("#show-rating-year").append("<img src=\"./Content/half.png\">")
            }
            for (let i = 5; i > Math.ceil(show.rating / 2); i--) {
                $("#show-rating-year").append("<img src=\"./Content/bad.png\">")
            }
            $("#show-rating-year").append(" - " + show.year);
            $(".service-container").empty();
            for (service of show.services) {
              $(".service-container").append("<div class=\"content-service-block\" id=\"" + service.toLowerCase().replace(/\s+/g, '') + "\">" + service + "</div>");
            }
            if ($('.page-content').is(':visible')) {
                $('.page-content').slideUp(300);
                cameFromSearch = false;
            } else {
                $('.search-content').slideUp(300);
                cameFromSearch = true;
            }
            if(show.seasons.length === 1 && show.seasons[0].NumberOfEpisodes === 1) {
                //Do things for it being a movie
                $('#movie-play').show();
                $('#tv-play').hide();
                $('#movie').empty().text(show.title);
            } else {
                $('#tv-play').show();
                $('#movie-play').hide();
                $('#season-selector').empty();
                for (let i = 1; i <= show.seasons.length; i++) {
                    $('#season-selector').append("<option value=\"season" + i + "\">Season " + i + "</option>");
                }
                updateEpisodes();
            }
            $('.tv-show-page').show();
        });
    }
    
    function updateEpisodes() {
        $('#watch-episode').empty();
        let selectedSeason = currentShow.seasons[$('#season-selector')[0].selectedIndex];
        for (let i = 1; i <= selectedSeason.NumberOfEpisodes; i++) {
             let html = "<a href=\"#\" id=\"episode-" + i + "\" class=\"episode\" style=\"background: white;\"><h5 class=\"content-title\">Episode " + i + "</h5></div>";
            $('#watch-episode').append(html);
        }    
        addEpisodeListener($('#season-selector')[0].selectedIndex + 1);
    }
    
    function addEpisodeListener(selectedSeason) {
        $(document).on('click', '.episode', function() {
            if (loginServices.has(currentShow.services[0])) {
                const episodeNumber = $(this).attr("id").split("-")[1];
                $('#tv-show-playback').empty().text("Season " + selectedSeason + " Episode " + episodeNumber + " of")
                $('#playback-show').empty().text(currentShow.title);
                $('.playback').show();
                $('.tv-show-page').hide();
            } else {
                alert('You must be logged in to ' + currentShow.services[0] + ' to watch this content!');
            }
        });        
    }
    
    $(document).on('click', '#play-button', function() {
        if (loginServices.has(currentShow.services[0])) {
            $('#tv-show-playback').empty();
            $('#playback-show').empty().text(currentShow.title);
            $('.playback').show();
            $('.tv-show-page').hide();
        } else {
            alert('You must be logged in to ' + currentShow.services[0] + ' to watch this content!');
        }
    });        

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

    $('#episode-scroll-right').click(function() {
        document.getElementById('results').scrollLeft += ScrollAmount;
    });
    $('#episode-scroll-left').click(function() {
        document.getElementById('results').scrollLeft -= ScrollAmount;
    });

    $('#genre-selector').change(function() {
        updateGenres();
    });
    
    $('#season-selector').change(function() {
        updateEpisodes();
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
    
     $(document).on('click', '#playback-back-arrow', function() {
        $('.playback').hide();
        $('.tv-show-page').show();
    });

    let lastSearch = '';

    $("#search-form").submit(function(e) {
        e.preventDefault();
        lastSearch = $('#search-box').val();
        updateSearch();
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
        $('.playback').hide();
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
