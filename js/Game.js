var ocean;
var gameHistory = [];



function fire (row,column,ocean) {
  //debugger;
  $('#fireStatus').text('Fired at Row:' + row + ' Column:' + column);
  ocean.shootAt(row,column,ocean);
  //test(ocean);
  updateShips();

  if(hasTurnAlreadyBeenPlayed(row,column))
    $('#status').text("What? You already fired there!");
  else
    $('#status').text("");

  if (ocean.isGameOver()) {
    $('#status').text("You Won!");
    $('#score').text("Ultimate Victory! Fleet sunk!");
    return;
  }

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

function initialise() {
  $('#status').text("Aye aye Captain!");
  //var ocean = new TrisCorp.BattleShips.Ocean();
  ocean = new TrisCorp.BattleShips.Ocean();
  //at this point we have 2d 10x10 array of EmptySea objects
  ocean.placeAllShipsRandomly();
  console.log (ocean.getShipArray());
  $('#board').html('..........<br>..........<br>..........<br>..........<br>..........<br>..........<br>..........<br>..........<br>..........<br>..........<br>');
}

function hasTurnAlreadyBeenPlayed(row,column) {

    function findInGameHistory(gameHistory) {
      return gameHistory === row+column;
    }

    if(!gameHistory.find(findInGameHistory)) {
        gameHistory.push(row + column);
        return false;
    }
    return true;
}
