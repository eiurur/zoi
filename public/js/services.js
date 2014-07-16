'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
  .service('newGameService', function() {
    this.items = [
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
      }
    ];
  });
