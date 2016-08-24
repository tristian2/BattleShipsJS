/**
 @constructor
 @abstract
 */
TrisCorp.BattleShips.Ocean = function() {
    // TrisCorp.BattleShips.Ship initialization...
    this.upperBoardBound = 10;
    this.shipsBoard = new Array();
    for (var row=0;row<this.upperBoardBound;row++) {
      var shipsColumn = new Array();
      for (var column=0;column<this.upperBoardBound;column++) {
        //shipsColumn.push(new TrisCorp.BattleShips.Ship());
        shipsColumn.push(null);
      }
      this.shipsBoard.push(shipsColumn);
    }

    this.firstShip = true;
    this.shotsFired = 0;
    this.shipsSunk = 0;
    this.hitCount = 0;
    this.assignEmptySeaIndicesToShipArray();


    //groovy auto magically provides getters/setters, in js it's DIY
    getFirstShip: (function() {
      return this.firstShip;
    });

    isOccupied: (function(row, col) {

    } );
};

TrisCorp.BattleShips.Ocean.prototype.getShipArray = function() {
	  	console.log("this ships array:" + this.shipsBoard);
  		return this.shipsBoard;
};  //or

//see second prototype in this doc http://alistapart.com/article/getoutbindingsituations
TrisCorp.BattleShips.Ocean.prototype = {
  getShipArray: function() {
  	  	console.log("this ships array:" + this.shipsBoard);
    		return this.shipsBoard;
  },
  assignEmptySeaIndicesToShipArray: function() {
    console.log("assignEmptySeaIndicesToShipArray todo");
  }
};


TrisCorp.BattleShips.Ocean.prototype.placeAllShipsRandomly = function() {
	  	console.log("in placeAllShipsRandomly");
      var ships = ['battleship', 'cruiser', 'destroyer', 'submarine'];

      function loopThrUShipTypes(element, index, array) {
        var horizontal = false;
        switch (element) {
          case 'battleship':
      	   console.log(' a battleship');
           horizontal = aRandomBool();
           var row = aRandomRow(horizontal, battleship.getLength());
           var column = aRandomColumn(horizontal, battleship.getLength());
           battleship.placeShipAt(row, column, horizontal, this);
           break;
          case 'cruiser':
      	   console.log(' a cruiser');
           horizontal = aRandomBool();
           var row = aRandomRow(horizontal, cruiser1.getLength());
           var column = aRandomColumn(horizontal, cruiser1.getLength());
           cruiser1.placeShipAt(row, column, horizontal, this);
           horizontal = aRandomBool();
           row = aRandomRow(horizontal, cruiser2.getLength());
           column = aRandomColumn(horizontal, cruiser2.getLength());
           cruiser2.placeShipAt(row, column, horizontal, this);
           break;
          case 'destroyer':
      	   console.log('a destroyer');
           horizontal = aRandomBool();
           var row = aRandomRow(horizontal, destroyer1.getLength());
           var column = aRandomColumn(horizontal, destroyer1.getLength());
           destroyer1.placeShipAt(row, column, horizontal, this);
           horizontal = aRandomBool();
           row = aRandomRow(horizontal, destroyer2.getLength());
           column = aRandomColumn(horizontal, destroyer2.getLength());
           destroyer2.placeShipAt(row, column, horizontal, this);
           horizontal = aRandomBool();
           row = aRandomRow(horizontal, destroyer3.getLength());
           column = aRandomColumn(horizontal, destroyer3.getLength());
           destroyer3.placeShipAt(row, column, horizontal, this);
           break;
          case 'submarine':
    	     console.log('a submarine');
           horizontal = aRandomBool();
           var row = aRandomRow(horizontal, submarine1.getLength());
           var column = aRandomColumn(horizontal, submarine1.getLength());
           submarine1.placeShipAt(row, column, horizontal, this);
           horizontal = aRandomBool();
           row = aRandomRow(horizontal, submarine2.getLength());
           column = aRandomColumn(horizontal, submarine2.getLength());
           submarine2.placeShipAt(row, column, horizontal, this);
           horizontal = aRandomBool();
           row = aRandomRow(horizontal, submarine3.getLength());
           column = aRandomColumn(horizontal, submarine3.getLength());
           submarine3.placeShipAt(row, column, horizontal, this);
           horizontal = aRandomBool();
           row = aRandomRow(horizontal, submarine4.getLength());
           column = aRandomColumn(horizontal, submarine4.getLength());
           submarine4.placeShipAt(row, column, horizontal, this);
           break;
          }

          function aRandomColumn(horizontal, length) {
            if (horizontal) {
              randomColumn = getRandomIntInclusive(0,9);
            } else {
              randomColumn = getRandomIntInclusive(0, upperBoardBound - length);
            }
            return randomColumn;
          }

          function aRandomRow(horizontal, length) {
            if (horizontal) {
              randomRow = getRandomIntInclusive(0,9);
            } else {
              randomRow = getRandomIntInclusive(0, upperBoardBound - length);
            }
            return randomRow;
          }

          function aRandomBool() {
            return Math.random()<.5;
          }

          function getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
          }
      }

      //see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
      ships.forEach(loopThrUShipTypes);
};

//groovy auto magically provides getters/setters, in js it's DIY
TrisCorp.BattleShips.Ocean.prototype.getFirstShip = function() {
  return this.firstShip;
};
