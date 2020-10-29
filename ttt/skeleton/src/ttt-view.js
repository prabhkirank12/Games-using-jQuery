class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
  }

  bindEvents() {
    this.$el.on('click', 'li', (e) => {
      const $currentTarget = $(e.currentTarget);
      this.makeMove($currentTarget);
    })
  }

  makeMove($square) {    
    let cp = this.game.currentPlayer;
    try {
      this.game.playMove($square.data('pos'));
    } catch (e) {
      alert("Invalid move. Try again.");  
    }
    
    $square.append(cp);
    $square.addClass(cp);

    if (this.game.isOver()) {
      $('li').addClass('loser');
      if (this.game.winner()) {
        const $winSquares = $(`li.${this.game.winner()}`);
        $winSquares.addClass('winner');
        $winSquares.removeClass('loser');
        $(`<h1>${this.game.winner()} has won!</h1>`).appendTo('body');
      } else {
        $('<h1>It\'s a draw!</h1>').appendTo('body');
      }
      this.$el.off('click');
    }
  }

  setupBoard() {
    const $grid = $('<ul>');
    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
      for (let colIdx = 0; colIdx < 3; colIdx++) {
        let $tile = $('<li>');
        let pos = [rowIdx, colIdx];
        $tile.data("pos", pos);

        $grid.append($tile);
      }
    }
    this.$el.append($grid);
  }
}

module.exports = View;


