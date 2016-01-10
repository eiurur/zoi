'use strict';

/* Directives */

angular.module('myApp.directives', [])
  .directive('changeNewGame', ['NewGameService', function (NewGameService) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        var item, photoUrl, targetPhoto, targetContent;

        element.on('click', function() {
          photoUrl = element.attr('src');
          item = _.findWhere(NewGameService.items, {image: photoUrl});

          if (!targetPhoto) targetPhoto = document.querySelector('.jumbotron-photo > img');
          if (!targetContent) targetContent = document.querySelector('.jumbotron-contents');
          targetPhoto.src = photoUrl;
          targetContent.innerHTML = '<h1 class="text-center">' + item.word + '<i class="fa fa-chevron-right  word"></i><a href="https://twitter.com/intent/tweet?hashtags=NEWGAME!&url=http://zoi.herokuapp.com&text=' + item.src + ' \/ " title="Tweet" target="_blank"><i class="fa fa-twitter"></i> <span class="tweet">tweet</span></a></h1>';
        });
      }
    };
  }])
  .directive('newNewGame', ['NewGameService', function (NewGameService) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        var targetPhoto, targetContent, item;

        element.bind('click', function() {
          if (!targetPhoto) targetPhoto = document.querySelector('.jumbotron-photo > img');
          if (!targetContent) targetContent = document.querySelector('.jumbotron-contents');

          item = NewGameService.random();
          targetPhoto.src = item.image;
          targetContent.innerHTML = '<h1 class="text-center">' + item.word + '<i class="fa fa-chevron-right  word"></i><a href="https://twitter.com/intent/tweet?hashtags=NEWGAME!&url=http://zoi.herokuapp.com&text=' + item.src + ' \/ " title="Tweet" target="_blank"><i class="fa fa-twitter"></i> <span class="tweet">tweet</span></a></h1>';
        });
      }
    }
  }])
  .directive('newGame', ['NewGameService', function (NewGameService) {
    return {
      restrict: 'E',
      link: function(scope, element, attrs) {
        var item, tag;

        item = NewGameService.random();
        tag = '<div class="jumbotron"><div class="jumbotron-photo"><img src="' + item.image + '"></div><div class="jumbotron-contents"><h1 class="text-center">' + item.word + '<i class="fa fa-chevron-right  word"></i><a href="https://twitter.com/intent/tweet?hashtags=NEWGAME!&url=http://zoi.herokuapp.com&text=' + item.src + ' \/ " title="Tweet" target="_blank"><i class="fa fa-twitter"></i> <span class="tweet">tweet</span></a></h1></div></div>';
        element.append(tag);
      }
    };
  }])
  .directive('newGameAmazon', function () {
    return {
      restrict: 'E',
      link: function(scope, element, attrs) {
        var tag;

        tag = '<div class="text-center amazon"><a href="http://www.amazon.co.jp/dp/4832246569" target="_blank"><img src="http://ecx.images-amazon.com/images/I/81cF7yG5BkL.jpg" height="250"></a><h3><a href="http://www.amazon.co.jp/dp/4832246569" target="_blank">NEW GAME!</a></h3></div>';
        element.append(tag);
      }
    };
  });
