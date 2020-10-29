class View {
    constructor(hg, $el) {
        this.hg = hg;
        this.$el = $el;
        this.setupTowers();
        this.render();
        this.$el.on('click', 'ul', () => {
          this.clickTower();
        })
    }

    setupTowers() {
        const $towers = $('<ul>');

        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                let $disc = $('<li>');
                let pos = [i, j];
                $disc.data("pos", pos);
                $towers.append($disc);
            }
        }
        this.$el.append($towers);
    }

    render() {

    }

    clickTower() {

    }
}


module.exports = View;