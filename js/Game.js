var ocean;
var gameHistory = [];

var ocean = new TrisCorp.BattleShips.Ocean();
//at this point we have 2d 10x10 array of EmptySea objects
ocean.placeAllShipsRandomly();
console.log (ocean.getShipArray());

function fire (row,column,ocean) {
  //debugger;
  ocean.shootAt(row,column,ocean);
  //test(ocean);
  updateShips();
};
function updateShips() {
  console.log(ocean.toString());
  console.log(ocean.formatBoardForConsole(ocean));
  //$('#board').text(ocean.formatBoardForConsole(ocean));
  $('#board').html(ocean.formatBoardForConsole(ocean));
};

function test(ocean) {
    this.upperBoardBound = 10;
  	for (var row=0;row<this.upperBoardBound;row++) {
 	    var shipsColumn = new Array();
 	    for (var column=0;column<this.upperBoardBound;column++) {
 		     ocean.shootAt(row,column,ocean);
	     }
     }
}
