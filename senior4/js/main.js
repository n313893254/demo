require.config({
  baseUrl: 'js/lib',
  paths: {
    jquery: 'https://code.jquery.com/jquery-3.2.1.min'
  }
});

require(['jquery', 'gotop', 'carousel', 'loadmore', 'waterfall'], function($, GoTop, Carousel, LoadMore, Waterfall) {
  new GoTop('div', 'a');
  Carousel.init($('.carousel'));
  new Waterfall($('.ship .show'));
  LoadMore.init($('.ship .show'));
});
