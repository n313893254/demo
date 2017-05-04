require.config({
  baseUrl: 'js/lib',
  paths: {
    jquery: 'https://code.jquery.com/jquery-3.2.1.min'
  }
});

require(['jquery', 'gotop', 'carousel'], function($, GoTop, Carousel) {
  new GoTop('div', 'a');
  Carousel.init($('.carousel'));
});
