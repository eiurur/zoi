'use strict';

/* Directives */
var items = [
  {
    word: 'がんばる',
    image: 'https://dl.dropboxusercontent.com/u/31717228/images/zoi/huhuh.jpg',
    src: 'pic.twitter.com/7hvwgRmZ2r'
  }, {
    word: 'がんばる',
    image: 'https://dl.dropboxusercontent.com/u/31717228/images/zoi/ganbaruzoi.jpg',
    src: 'pic.twitter.com/6bdYFIyc3e'
  }, {
    word: 'がんばる',
    image: 'https://dl.dropboxusercontent.com/u/31717228/images/zoi/yosi.jpg',
    src: 'pic.twitter.com/VMJbHYLznB'
  }, {
    word: 'がんばる',
    image: 'https://dl.dropboxusercontent.com/u/31717228/images/zoi/owarisouninai.jpg',
    src: 'pic.twitter.com/Y3ht2Ud94J'
  }, {
    word: 'がんばる',
    image: 'https://dl.dropboxusercontent.com/u/31717228/images/zoi/soutai.jpg',
    src: 'pic.twitter.com/7s5Ke5IQVs'
  }, {
    word: 'がんばる',
    image: 'https://dl.dropboxusercontent.com/u/31717228/images/zoi/ganbbarimasyu.jpg',
    src: 'pic.twitter.com/mrkPJC3DYc'
  }, {
    word: 'あきらめる',
    image: 'https://dl.dropboxusercontent.com/u/31717228/images/zoi/dameda.jpg',
    src: 'pic.twitter.com/DE1dKyLsav'
  }, {
    word: 'あきらめる',
    image: 'https://dl.dropboxusercontent.com/u/31717228/images/zoi/mouyada.jpg',
    src: 'pic.twitter.com/lkDaoEEC7H'
  }, {
    word: 'かえる',
    image: 'https://dl.dropboxusercontent.com/u/31717228/images/zoi/osakini.jpg',
    src: 'pic.twitter.com/ajwCeJa54A'
  }, {
    word: 'かえる',
    image: 'https://dl.dropboxusercontent.com/u/31717228/images/zoi/otukare.jpg',
    src: 'pic.twitter.com/ltC7iuI7rd'
  }, {
    word: 'ごはんにする',
    image: 'https://dl.dropboxusercontent.com/u/31717228/images/zoi/gulu.jpg',
    src: 'pic.twitter.com/rWLIjU08mU'
  }, {
    word: 'ごはんにする',
    image: 'https://dl.dropboxusercontent.com/u/31717228/images/zoi/onakasuita.jpg',
    src: 'pic.twitter.com/g0tGY4FtE4'
  }, {
    word: 'ねる',
    image: 'https://dl.dropboxusercontent.com/u/31717228/images/zoi/yasumutoki.jpg',
    src: 'pic.twitter.com/Qa4OOuaSb4'
  }, {
    word: 'わかった',
    image: 'https://dl.dropboxusercontent.com/u/31717228/images/zoi/wakatta.jpg',
    src: 'pic.twitter.com/TzK4f6K8Cf'
  }, {
    word: 'いけるきがする',
    image: 'https://dl.dropboxusercontent.com/u/31717228/images/zoi/ikeru.jpg',
    src: 'pic.twitter.com/npWAwmcME6'
  }, {
    word: 'あせる',
    image: 'https://dl.dropboxusercontent.com/u/31717228/images/zoi/owattenai.png',
    src: 'pic.twitter.com/yh1ObvxjVI'
  }, {
    word: 'しんちょくだめです',
    image: 'https://dl.dropboxusercontent.com/u/31717228/images/zoi/gogogo.jpg',
    src: 'pic.twitter.com/s9R0mikezN'
  }, {
    word: 'きゅうけいにする',
    image: 'https://dl.dropboxusercontent.com/u/31717228/images/zoi/coffee.jpg',
    src: 'pic.twitter.com/onsbKNL4H7'
  }
];
angular.module('myApp.directives', [])
  .directive('imgPreload', ['$rootScope', function($rootScope) {
    return {
      restrict: 'A',
      scope: {
        ngSrc: '@'
      },
      link: function(scope, element, attrs) {
        element.on('load', function() {
          element.addClass('in');
        }).on('error', function() {
          //
        });
      }
    };
  }])
  .directive('newNewGame', function() {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        var targetPhoto, targetContent, item;

        attrs.suffle = false;

        element.bind('click', function() {
          if (!targetPhoto) targetPhoto = document.querySelector('.jumbotron-photo > img');
          if (!targetContent) targetContent = document.querySelector('.jumbotron-contents');

          console.log(targetPhoto);
          console.log(targetContent);

          if(!attrs.suffle) {
            item = items[Math.floor(Math.random() * items.length)];
            targetPhoto.src = item.image;
            targetContent.innerHTML = '<h1 class="text-center">' + item.word + '<i class="fa fa-chevron-right  word"></i><a href="https://twitter.com/intent/tweet?hashtags=NEWGAME!&url=http://zoi.herokuapp.com&text=' + item.src + '" title="Tweet" target="_blank"><i class="fa fa-twitter"></i> <span class="tweet">tweet</span></a></h1>';
            // attrs.suffle = !attrs.suffle;  
            console.log(item.image);
          }
        });
      }
    }
  })
  .directive('newGame', function () {
    return function(scope, elm, attrs) {
      var item, tag;

      item = items[Math.floor(Math.random() * items.length)];
      tag = '<div class="jumbotron"><div class="jumbotron-photo"><img src="' + item.image + '"></div><div class="jumbotron-contents"><h1 class="text-center">' + item.word + '<i class="fa fa-chevron-right  word"></i><a href="https://twitter.com/intent/tweet?hashtags=NEWGAME!&url=http://zoi.herokuapp.com&text=' + item.src + '" title="Tweet" target="_blank"><i class="fa fa-twitter"></i> <span class="tweet">tweet</span></a></h1></div></div>';
      elm.append(tag);
    };
  })
  .directive('newGameAffiliate', function () {
    return function(scope, elm, attrs) {
      var tag;
      tag = '<div class="text-center affiliate"><a href="http://www.amazon.co.jp/gp/product/4832244140/ref=as_li_qf_sp_asin_il?ie=UTF8&camp=247&creative=1211&creativeASIN=4832244140&linkCode=as2&tag=eiurur-22" target="_blank"><img border="0" src="http://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=4832244140&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=eiurur-22" ><h3>NEW GAME!</h3></a><img src="http://ir-jp.amazon-adsystem.com/e/ir?t=eiurur-22&l=as2&o=9&a=4832244140" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />';
      // tag = '<div class="text-center affiliate"><iframe src="http://rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=eiurur-22&o=9&p=8&l=as1&m=amazon&f=ifr&ref=qf_sp_asin_til&asins=4832244140" style="width:120px;height:240px;" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe></div>';
      elm.append(tag);
    };
  });
