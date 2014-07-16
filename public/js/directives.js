'use strict';

/* Directives */

angular.module('myApp.directives', []).
  directive('newGame', function () {
    return function(scope, elm, attrs) {
      var item, items, tag;

      items = [
        {
          word: 'がんばる',
          image: 'https://pbs.twimg.com/media/BsFthdtCIAEoXzl.jpg:large'
        }, {
          word: 'がんばる',
          image: 'https://pbs.twimg.com/media/BsOY72ZCUAAcT_d.jpg:large'
        }, {
          word: 'がんばる',
          image: 'https://pbs.twimg.com/media/Bsk7Ft7CMAA09To.jpg:large'
        }, {
          word: 'がんばる',
          image: 'https://pbs.twimg.com/media/Bnut-rfCYAAYz4a.jpg:large'
        }, {
          word: 'がんばる',
          image: 'https://pbs.twimg.com/media/Bm32QovCYAAygQO.jpg:large'
        }, {
          word: 'あきらめる',
          image: 'https://pbs.twimg.com/media/Bnr01m4CYAAyhmx.jpg:large'
        }, {
          word: 'あきらめる',
          image: 'https://pbs.twimg.com/media/BsN8danCUAAIhF_.jpg:large'
        }, {
          word: 'かえる',
          image: 'https://pbs.twimg.com/media/BqsbkokCUAAkQ46.jpg:large'
        }, {
          word: 'ごはんにする',
          image: 'https://pbs.twimg.com/media/Bnr4uyfCMAABwQn.jpg:large'
        }, {
          word: 'ねる',
          image: 'https://pbs.twimg.com/media/BqsaMK7CMAE521a.jpg:large'
        }
      ];


      item = items[Math.floor(Math.random() * items.length)];
      console.log(item);
      tag = '<div class="jumbotron"><div class="jumbotron-photo"><img src="' + item.image + '"></div><div class="jumbotron-contents"><h1 class="text-center">' + item.word + '<i class="fa fa-chevron-right  word"></i><a href="https://twitter.com/intent/tweet?hashtags=NEWGAME!&url=http://zoi.herokuapp.com&text=' + item.image + '" title="Tweet" target="_blank"><i class="fa fa-twitter"></i> <span class="tweet">tweet</span></a></h1></div></div>';

      // $('#show-item').attr("src", item);
      elm.append(tag);
    };
  }).
  directive('newGameAffiliate', function () {
    return function(scope, elm, attrs) {
      var tag;
      // tag = '<div class="text-center affiliate"><a href="http://www.amazon.co.jp/gp/product/4832244140/ref=as_li_qf_sp_asin_il?ie=UTF8&camp=247&creative=1211&creativeASIN=4832244140&linkCode=as2&tag=eiurur-22" target="_blank"><img border="0" src="http://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=4832244140&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=eiurur-22" ></a><img src="http://ir-jp.amazon-adsystem.com/e/ir?t=eiurur-22&l=as2&o=9&a=4832244140" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />';
      tag = '<div class="text-center affiliate"><iframe src="http://rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=eiurur-22&o=9&p=8&l=as1&m=amazon&f=ifr&ref=qf_sp_asin_til&asins=4832244140" style="width:120px;height:240px;" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe></div>';
      elm.append(tag);
    };
  });
