export default class Battle {

    create() {

		var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
	    var text = this.game.add.text(0, 100, "The battle begins...", style);
	    text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
	    text.setTextBounds(0, 100, 1200, 100);

    }

}