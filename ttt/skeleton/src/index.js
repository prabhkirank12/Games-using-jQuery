const View = require('./ttt-view.js'); // require appropriate file
const Game = require('../../solution/game.js'); // require appropriate file

  $(() => {
    const game = new Game();
    const $el = $('.ttt');
    const view = new View(game, $el);
    view.setupBoard();
    view.bindEvents();
  });
