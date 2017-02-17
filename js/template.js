/* global TrelloPowerUp */

var boardButtonCallback = function (t) {
  return t.boardBar({
    url: './flappy.html',
    height: 350
  })
};


TrelloPowerUp.initialize({
  'board-buttons': function (t, options) {
    return [
      {
        icon: './images/taco.png',
        text: 'Play Flappy Taco',
        callback: boardButtonCallback
      }
    ];
  }
});
