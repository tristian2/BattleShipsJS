/**
 @constructor
 @abstract
 */
TrisCorp.BattleShips.Ocean = function() {
    // TrisCorp.BattleShips.Ship initialization...
    this.upperBoardBound = 10;
    //Ship[][] ships = new Ship[10][10] // Used to quickly determine which ship is in any given location.
    //GROOVY Type way var ships = new TrisCorp.BattleShips.Ship[10][10] // Used to quickly determine which ship is in any given location.
    /*  need todo var ships = new Array();
    for (var row=0;row<this.upperBoardBound;row++) {
      var shipsColumn = new Array();
      for (var column=0;column<this.upperBoardBound;column++) {
        shipsColumn.push(new TrisCorp.BattleShips.Ship());
      }
      ships.push(shipsColumn);
    }*/

    this.firstShip = true
    this.shotsFired = 0
    this.shipsSunk = 0
    this.hitCount = 0
    this.assignEmptySeaIndicesToShipArray();
    //the fleet - declared in this scope so they are available
    var battleship = new Battleship();
    var cruiser1 = new Cruiser();
    var cruiser2 = new Cruiser();
    var destroyer1 = new Destroyer();
    var destroyer2 = new Destroyer();
    var destroyer3 = new Destroyer();
    var submarine1 = new Submarine();
    var submarine2 = new Submarine();
    var submarine3 = new Submarine();
    var submarine4 = new Submarine();
    debugger;
};
