'use strict';

/* Directives */

angular.module('myApp.directives', [])
  // .directive('selectNewGame', ['NewGameService', function (NewGameService) {
  //   return {
  //     restrict: 'A',
  //     link: function(scope, element, attrs) {

  //       var tag = "";
  //       angular.forEach(NewGameService.items, function(item, index) {
  //         console.log(item);

  //         tag += '<div class="select-view"><a change-new-game="i' + index + '"><img src="' + item.image + '" width="100" ></a></div>';
  //       });
  //       element.append(tag);

  //     }
  //   };
  // }])
  .directive('changeNewGame', ['NewGameService', function (NewGameService) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        var item, srcPhoto, targetPhoto, targetContent;

        element.bind('click', function() {
          if (!srcPhoto) srcPhoto = element[0].childNodes[0].attributes[0].firstChild.data;

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
  .directive('newGameAffiliate', function () {
    return {
      restrict: 'E',
      link: function(scope, element, attrs) {
        var tag;

        tag = '<div class="text-center affiliate"><a href="http://amazon.jp/o/ASIN/4832244140/eiurur-22" target="_blank"><img border="0" src="http://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=4832244140&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=eiurur-22" ><h3>NEW GAME!</h3></a><img src="http://ir-jp.amazon-adsystem.com/e/ir?t=eiurur-22&l=as2&o=9&a=4832244140" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />';
        element.append(tag);
      }
    };
  });
