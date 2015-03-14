'use strict';

/* Directives */

angular.module('myApp.directives', [])
  .directive('changeNewGame', ['NewGameService', function (NewGameService) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        var item, srcPhoto, targetPhoto, targetContent;

        element.bind('click', function() {
          if(_.isNull(element[0].childNodes[0].attributes[0].firstChild)){

            // Firefox
            srcPhoto = element[0].firstChild.attributes[2].nodeValue;
          } else {

            // Chrome
            srcPhoto = element[0].childNodes[0].attributes[0].firstChild.data;
          }

          item = _.findWhere(NewGameService.items, {image: srcPhoto});

          if (!targetPhoto) targetPhoto = document.querySelector('.jumbotron-photo > img');
          if (!targetContent) targetContent = document.querySelector('.jumbotron-contents');
          targetPhoto.src = srcPhoto;
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

        tag = '<div class="text-center amazon"><a href="http://www.amazon.co.jp/dp/4832245465" target="_blank"><img src="http://ecx.images-amazon.com/images/I/81EXO6tlYFL.jpg" height="250"></a><h3><a href="http://www.amazon.co.jp/dp/4832245465" target="_blank">NEW GAME!</a></h3></div>';
        element.append(tag);
      }
    };
  });
