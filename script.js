/* global Medias */

const RecommendedContent = [];
for (let i = 0; i < Medias.length;) {
  const maybeMedia = Medias[Math.floor(Math.random() * Medias.length)];
  if (!RecommendedContent.includes(maybeMedia)) {
    RecommendedContent.push(maybeMedia);
    i++;
  }
}

// == The rest of the code == //

$(document).ready(() => {
    // Code when hamburger is clicked
  $('.hamburger-content').hide();
  $(document).on('click', '#hamburger', () => {
    $('.hamburger-content').toggle();
  });

  const loginServices = new Set();
    // get the logged in services

  const services = ['netflix', 'hulu', 'hbogo', 'showtime', 'primevideo', 'crunchyroll'];
  const genres = ['action', 'adventure', 'animation', 'comedy', 'drama', 'romance', 'sci-fi'];

  const serviceToLoginID = new Map();
  serviceToLoginID.set('#netflixLogin', ['Netflix', 'netflix']);
  serviceToLoginID.set('#huluLogin', ['Hulu', 'hulu']);
  serviceToLoginID.set('#hboLogin', ['HBO GO', 'hbo']);
  serviceToLoginID.set('#showtimeLogin', ['Showtime', 'showtime']);
  serviceToLoginID.set('#primeLogin', ['Prime Video', 'prime']);
  serviceToLoginID.set('#crunchyrollLogin', ['Crunchyroll', 'crunchyroll']);

  $('.page-content').hide();
  $('.service-login').hide();
  $('.search-content').hide();
  $('.playback').hide();

  let loginHamburger = undefined;

  function displayServiceLoginPage(buttonid) {
    $('.starting-page').hide();
    $('.page-content').hide();
    $('.search-content').hide();
    $('.hamburger-content').hide();
    $('.tv-show-page').hide();
    $('#login-service-name').removeClass();
    $('#login-service-name').addClass(serviceToLoginID.get(buttonid)[1]);
    $('#login-service-name').text(serviceToLoginID.get(buttonid)[0]);
    $('.service-login').show();
    loginHamburger = buttonid;
  }

  function addButtonListener(buttonid) {
    $(document).on('click', buttonid, () => {
      if ($(buttonid).hasClass('login')) {
        displayServiceLoginPage(buttonid);
        $('.starting-page').hide();
      } else {
        $(buttonid).removeClass('logout');
        $(buttonid).addClass('login');
        $(buttonid).text('Login');
        loginServices.delete(serviceToLoginID.get(buttonid)[0]);
      }
    });
  }

  for (const buttonid of serviceToLoginID.keys()) {
    addButtonListener(buttonid);
  }

  $('#login-form').submit((e) => {
    e.preventDefault();
    if ($('#username-input').val() === 'cat' && $('#password-input').val() === 'dog') {
      $(loginHamburger).removeClass('login');
      $(loginHamburger).addClass('logout');
      $(loginHamburger).text('Logout');
      loginServices.add(serviceToLoginID.get(loginHamburger)[0]);
      $('.service-login').hide();
      $('.page-content').show();
      $('#username-input').val('');
      $('#password-input').val('');
    } else {
      alert('Incorrect username or password.');
    }
  });

  function sortbyGenre(genre) { // returns results that are the selected genre
    const results = [];
    for (let i = 0; i < Medias.length; i++) {
      for (let j = 0; j < genres.length; j++) {
        if (Medias[i].genres[j] === genre) {
          results.push(Medias[i]);
        }
      }
    }
    return results;
  }

  function findActiveServices() {
    const activeServices = [];
    for (const service of services) {
      if ($(`#${service}-switch`).val() === 'on') {
        activeServices.push(service);
      }
    }
    return activeServices;
  }

  let currentShow = undefined;

  function updateEpisodes() {
    $('#watch-episode').empty();
    document.getElementById('watch-episode').scrollLeft = 0;
    const selectedSeason = currentShow.seasons[$('#season-selector')[0].selectedIndex];
    for (let i = 1; i <= selectedSeason.NumberOfEpisodes; i++) {
      const html = `<a href="#" id="episode-${i}" class="episode" style="background: url(${currentShow.imgPath}); background-position: center; background-size: cover;"><h5 class="content-title">Episode ${i}</h5></div>`;
      $('#watch-episode').append(html);
    }
  }

  let cameFromSearch = false;

  const MAX_DESCRIPTION_LENGTH = 500;
  const SLIDE_SPEED = 500;

  function addContentListener(show) {
    $(document).on('click', `#${show.id}`, () => {
      currentShow = show;
      let extra = '';
      if (show.description.length > MAX_DESCRIPTION_LENGTH) {
        extra = '...';
      }
      $('#show-description').empty().append(show.description.substr(0, MAX_DESCRIPTION_LENGTH) + extra);
      $('.show-img-container').empty().append(`<img src="${show.imgPath}">`);
      $('#show-rating-year').empty();
      for (let i = 0; i < Math.floor(show.rating / 2); i++) {
        $('#show-rating-year').append('<img src="./Content/good.png">');
      }
      if (show.rating % 2 === 1) {
        $('#show-rating-year').append('<img src="./Content/half.png">');
      }
      for (let i = 5; i > Math.ceil(show.rating / 2); i--) {
        $('#show-rating-year').append('<img src="./Content/bad.png">');
      }
      $('#show-rating-year').append(` - ${show.year}`);
      $('.service-container').empty();
      for (const service of show.services) {
        $('.service-container').append(`<div class="content-service-block" id="${service.toLowerCase().replace(/\s+/g, '')}">${service}</div>`);
      }
      if ($('.page-content').is(':visible')) {
        $('.page-content').slideUp(SLIDE_SPEED);
        cameFromSearch = false;
      } else {
        $('.search-content').slideUp(SLIDE_SPEED);
        cameFromSearch = true;
      }
      if (show.seasons.length === 1 && show.seasons[0].NumberOfEpisodes === 1) {
                // Do things for it being a movie
        $('#movie-play').show();
        $('#tv-play').hide();
        $('#movie').empty().text(show.title);
      } else {
        $('#tv-play').show();
        $('#movie-play').hide();
        $('#season-selector').empty();
        for (let i = 1; i <= show.seasons.length; i++) {
          $('#season-selector').append(`<option value="season${i}">Season ${i}</option>`);
        }
        updateEpisodes();
      }
      $('.tv-show-page').show();
    });
  }

  function addElement(show, location) {
    const html = `<a href="#" id="${show.id}" class="content" style="background: url(${show.imgPath}); background-position: center; background-size: cover;"><h5 class="content-title">${show.title}</h5><h4 class="content-service ${show.services[0]}">${show.services[0]}</h4></div>`;
    $(location).append(html);
    addContentListener(show);
  }

  function updateGenres() {
    const genre = document.getElementById('genre-selector');
    const selected = genre.options[genre.selectedIndex].value;

    $('#sortbygenre').empty();

    const shows = sortbyGenre(selected);
    const activeServices = findActiveServices();

    for (let i = 0; i < shows.length; i++) {
      for (const service of activeServices) {
        if (shows[i].services[0].toLowerCase().replace(/\s+/g, '') === service) {
          addElement(shows[i], '#sortbygenre');
        }
      }
    }
  }

  updateGenres();

  function updateList() {
    $('#recommended').empty();
    const activeServices = findActiveServices();
    for (let i = 0; i < RecommendedContent.length; i++) {
      for (const service of activeServices) {
        if (RecommendedContent[i].services[0].toLowerCase().replace(/\s+/g, '') === service) {
          addElement(RecommendedContent[i], '#recommended');
        }
      }
    }
    updateGenres();
  }

  updateList();

  $('.episode').on('click', '.episode', () => {
    const selectedSeason = $('#season-selector')[0].selectedIndex + 1;
    if (loginServices.has(currentShow.services[0])) {
      const episodeNumber = $(this).attr('id').split('-')[1];
      $('#tv-show-playback').empty().text(`Season ${selectedSeason} Episode ${episodeNumber} of`);
      $('#playback-show').empty().text(currentShow.title);
      $('.playback').show();
      $('.tv-show-page').hide();
    } else {
      alert(`You must be logged in to ${currentShow.services[0]} to watch this content!`);
    }
  });

  $(document).on('click', '#play-button', () => {
    if (loginServices.has(currentShow.services[0])) {
      $('#tv-show-playback').empty();
      $('#playback-show').empty().text(currentShow.title);
      $('.playback').show();
      $('.tv-show-page').hide();
    } else {
      alert(`You must be logged in to ${currentShow.services[0]} to watch this content!`);
    }
  });

  const ScrollAmount = 500;

  $('#recommended-scroll-right').click(() => {
    document.getElementById('recommended').scrollLeft += ScrollAmount;
  });
  $('#recommended-scroll-left').click(() => {
    document.getElementById('recommended').scrollLeft -= ScrollAmount;
  });

  $('#genre-scroll-right').click(() => {
    document.getElementById('sortbygenre').scrollLeft += ScrollAmount;
  });
  $('#genre-scroll-left').click(() => {
    document.getElementById('sortbygenre').scrollLeft -= ScrollAmount;
  });

  $('#results-scroll-right').click(() => {
    document.getElementById('results').scrollLeft += ScrollAmount;
  });
  $('#results-scroll-left').click(() => {
    document.getElementById('results').scrollLeft -= ScrollAmount;
  });

  $('#episode-scroll-right').click(() => {
    document.getElementById('watch-episode').scrollLeft += ScrollAmount;
  });
  $('#episode-scroll-left').click(() => {
    document.getElementById('watch-episode').scrollLeft -= ScrollAmount;
  });

  $('#genre-selector').change(() => {
    updateGenres();
  });

  $('#season-selector').change(() => {
    updateEpisodes();
  });

  $('.tv-show-page').hide();

  const TOGGLE_SPEED = 400;

  $(document).on('click', '#show-back-arrow', () => {
    if (cameFromSearch) {
      $('.search-content').slideDown();
      setTimeout(() => {
        $('.tv-show-page').toggle();
      }, TOGGLE_SPEED);
    } else {
      $('.page-content').slideDown();
      setTimeout(() => {
        $('.tv-show-page').toggle();
      }, TOGGLE_SPEED);
    }
  });

  $(document).on('click', '#search-back-arrow', () => {
    $('.search-content').hide();
    $('.page-content').show();
  });

  $(document).on('click', '#playback-back-arrow', () => {
    $('.playback').hide();
    $('.tv-show-page').show();
  });

  let lastSearch = '';

  function updateSearch() {
    const showsToAdd = [];
    let foundShow = false;
    const activeServices = findActiveServices();
    for (const show of Medias) {
      if (show.title.toLowerCase().includes(lastSearch.toLowerCase())) {
        for (const service of activeServices) {
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
      $('#not-found').show();
      $('#search-content-band').hide();
    } else {
      $('#results').empty();
      $('#not-found').hide();
      $('#search-content-band').show();
      for (const show of showsToAdd) {
        addElement(show, '#results');
      }
    }
  }

  $('#search-form').submit((e) => {
    e.preventDefault();
    lastSearch = $('#search-box').val();
    updateSearch();
  });

  function addTogglerListener(service) {
    $(document).on('click', `#${service}-switch`, () => {
      if ($(`#${service}-switch`).val() === 'on') {
        $(`#${service}-switch`).val('off');
        if ($('.search-content').is(':visible')) {
          updateSearch();
        }
        updateList();
        console.log('yikes');
      } else {
        $(`#${service}-switch`).val('on');
        if ($('.search-content').is(':visible')) {
          updateSearch();
        }
        updateList();
        console.log('jeepers');
      }
    });
  }

  for (const service of services) {
    console.log(service);
    addTogglerListener(service);
  }
});
