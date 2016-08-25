var ocean;
var gameHistory = [];

var ocean = new TrisCorp.BattleShips.Ocean();
ocean.placeAllShipsRandomly();
console.log (ocean.getShipArray());

function fire (row,column,ocean) {
  //debugger;
  ocean.shootAt(row,column,ocean);
  updateShips();
};
function updateShips() {
  console.log(ocean.toString());
  console.log(ocean.formatBoardForConsole(ocean));
  $('#board').text(ocean.formatBoardForConsole(ocean));
};
