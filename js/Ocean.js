TrisCorp.BattleShips.Ocean = function() {
    var oceanObject = this;
    this.upperBoardBound = 10;
    this.shipsBoard = new Array();
    for (var row=0;row<this.upperBoardBound;row++) {
      var shipsColumn = new Array();
      for (var column=0;column<this.upperBoardBound;column++) {
        shipsColumn.push(new TrisCorp.BattleShips.EmptySea());
      }
      this.shipsBoard.push(shipsColumn);
    }

    this.firstShip = true;
    this.shotsFired = 0;
    this.shipsSunk = 0;
    this.hitCount = 0;
    this.isOccupied = function(row,col,ocean) {
      var ships = ocean.shipsBoard;
      return ships[row][col].getShipType() != 'EmptySea';
    };

    this.setShotsFired = function() {
        this.shotsFired++;
    };
    this.getHitCount = function() {
        return this.hitCount;
    };
    this.getShipsSunk = function() {
    };
    this.isGameOver = function() {
        var gameOver = false;
        if (this.getShipsSunk() == 10);
            gameOver = true;
        return gameOver;
    };


    //groovy auto magically provides getters/setters, in js it's DIY
    this.getFirstShip = function() {
      return this.firstShip;
    };
    this.setFirstShip = function(arg){
        this.firstShip = arg;
    };



    //no TrisCorp.BattleShips.Ocean.prototype.getShipArray = function() {
    this.getShipArray = function() {
    	  	console.log("this ships array:" + this.shipsBoard);
      		return this.shipsBoard;
    };  //or

    this.toString = function() {
        return this.formatBoardForConsole(oceanObject);
    };

    //duplicated from splaceAllshipsrandomlyscope refactor later
    this.aRandomColumn = function (horizontal, length, ocean) {
      if (horizontal) {
        randomColumn = ocean.getRandomIntInclusive(0,9);
      } else {
        randomColumn = ocean.getRandomIntInclusive(0, ocean.upperBoardBound - length);
      }
      return randomColumn;
    };
    //duplicated from splaceAllshipsrandomlyscope refactor later
    this.aRandomRow = function (horizontal, length, ocean) {
      if (horizontal) {
        randomRow = ocean.getRandomIntInclusive(0,9);
      } else {
        randomRow = ocean.getRandomIntInclusive(0, ocean.upperBoardBound - length);
      }
      return randomRow;
    };
    //duplicated from splaceAllshipsrandomlyscope refactor later
    this.getRandomIntInclusive = function (min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    //this is wrong TrisCorp.BattleShips.Ocean.prototype.placeAllShipsRandomly = function() { , need as below
    this.placeAllShipsRandomly = function() {
    	  	console.log("in placeAllShipsRandomly");
          var ships = ['battleship', 'cruiser', 'destroyer', 'submarine'];
          // moved thjis lot to where it is used, so we can get around scope issues!
          var battleship = new TrisCorp.BattleShips.BattleShip();
          var cruiser1 = new TrisCorp.BattleShips.Cruiser();
          var cruiser2 = new TrisCorp.BattleShips.Cruiser();
          var destroyer1 = new TrisCorp.BattleShips.Destroyer();
          var destroyer2 = new TrisCorp.BattleShips.Destroyer();
          var destroyer3 = new TrisCorp.BattleShips.Destroyer();
          var submarine1 = new TrisCorp.BattleShips.Submarine();
          var submarine2 = new TrisCorp.BattleShips.Submarine();
          var submarine3 = new TrisCorp.BattleShips.Submarine();
          var submarine4 = new TrisCorp.BattleShips.Submarine();

          function loopThrUShipTypes(element, index, array) {
            var horizontal = false;
            switch (element) {
              case 'battleship':
          	   console.log(' a battleship');
               horizontal = aRandomBool();
               var row = aRandomRow(horizontal, battleship.getLength(), oceanObject);
               var column = aRandomColumn(horizontal, battleship.getLength(), oceanObject);
               battleship.placeShipAt(row, column, horizontal, oceanObject);
               break;
              case 'cruiser':
          	   console.log(' a cruiser');
               horizontal = aRandomBool();
               var row = aRandomRow(horizontal, cruiser1.getLength(), oceanObject);
               var column = aRandomColumn(horizontal, cruiser1.getLength(), oceanObject);
               cruiser1.placeShipAt(row, column, horizontal, oceanObject);
               horizontal = aRandomBool();
               row = aRandomRow(horizontal, cruiser2.getLength(), oceanObject);
               column = aRandomColumn(horizontal, cruiser2.getLength(), oceanObject);
               cruiser2.placeShipAt(row, column, horizontal, oceanObject);
               break;
              case 'destroyer':
          	   console.log('a destroyer');
               horizontal = aRandomBool();
               var row = aRandomRow(horizontal, destroyer1.getLength(), oceanObject);
               var column = aRandomColumn(horizontal, destroyer1.getLength(), oceanObject);
               destroyer1.placeShipAt(row, column, horizontal, oceanObject);
               horizontal = aRandomBool();
               row = aRandomRow(horizontal, destroyer2.getLength(), oceanObject);
               column = aRandomColumn(horizontal, destroyer2.getLength(), oceanObject);
               destroyer2.placeShipAt(row, column, horizontal, oceanObject);
               horizontal = aRandomBool();
               row = aRandomRow(horizontal, destroyer3.getLength(), oceanObject);
               column = aRandomColumn(horizontal, destroyer3.getLength(), oceanObject);
               destroyer3.placeShipAt(row, column, horizontal, oceanObject);
               break;
              case 'submarine':
        	     console.log('a submarine');
               horizontal = aRandomBool();
               var row = aRandomRow(horizontal, submarine1.getLength(), oceanObject);
               var column = aRandomColumn(horizontal, submarine1.getLength(), oceanObject);
               submarine1.placeShipAt(row, column, horizontal, oceanObject);
               horizontal = aRandomBool();
               row = aRandomRow(horizontal, submarine2.getLength(), oceanObject);
               column = aRandomColumn(horizontal, submarine2.getLength(), oceanObject);
               submarine2.placeShipAt(row, column, horizontal, oceanObject);
               horizontal = aRandomBool();
               row = aRandomRow(horizontal, submarine3.getLength(), oceanObject);
               column = aRandomColumn(horizontal, submarine3.getLength(), oceanObject);
               submarine3.placeShipAt(row, column, horizontal, oceanObject);
               horizontal = aRandomBool();
               row = aRandomRow(horizontal, submarine4.getLength(), oceanObject);
               column = aRandomColumn(horizontal, submarine4.getLength(), oceanObject);
               submarine4.placeShipAt(row, column, horizontal, oceanObject);
               break;
              }

              //for now duplicate in the parent scope - sort later
              function aRandomColumn(horizontal, length, ocean) {
                if (horizontal) {
                  randomColumn = getRandomIntInclusive(0,9);
                } else {
                  randomColumn = getRandomIntInclusive(0, ocean.upperBoardBound - length);
                }
                return randomColumn;
              }
              //for now duplicate in the parent scope - sort later
              function aRandomRow(horizontal, length, ocean) {
                if (horizontal) {
                  randomRow = getRandomIntInclusive(0,9);
                } else {
                  randomRow = getRandomIntInclusive(0, ocean.upperBoardBound - length);
                }
                return randomRow;
              }

              function aRandomBool() {
                return Math.random()<.5;
              }
              //for now duplicate in the parent scope - sort later
              function getRandomIntInclusive(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1)) + min;
              }
          }

          //see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
          ships.forEach(loopThrUShipTypes);
    };

    this.shootAt = function(row,column,ocean) {
      var hit = false;
      ocean.setShotsFired();
      var ships = ocean.shipsBoard;// equiv ships[row][column]
      var ship = ships[row][column];
      if (ocean.isOccupied(row,column,ocean)) {
        if (!ship.isSunk()) {
            hit = ship.shootAt(row, column)
            this.hitCount++
        } else {
            hit = false
        }
      } else {  //assume its an empty sea
          if (ship.getShipType() == "EmptySea") {
              //no need to cast as GROOVY ((EmptySea) ship).setFiredAt()
              ship.setFiredAt();
          }
      }
      return hit;
    };


    this.formatBoardForConsole = function(oceanObject) {
        //basic renderer
        var s ="";
        console.log('format board');

        ships.map( function(e,i) {
          e.map( function(ee,j) {
            console.log("row:"+i + " col:"+j+" "+ee + " "+oceanObject.getSymbolForShipState(ee,i,j));
            s+=oceanObject.getSymbolForShipState(ee,i,j);
          })
        });
        return s.replace(/(..........)/g, "$1<br />");
    }

    this.getSymbolForShipState = function(ship,row,col) {

      var replacementSymbolFragment = '.';
      if (ship.getShipType() == "EmptySea") {    //is it emptysea? is it hit?  then show - no? then show .
          if (ship.getFiredAt())
              replacementSymbolFragment = '-';
          else
              replacementSymbolFragment = '.';
      } else { //must be a ship
          if (ship.isHorizontal()) { //check row col subtract bowcol from col, get index from hit array, is it true? show x
              var hit = ship.getHit();
              if (hit[col - ship.getBowColumn()])
                  replacementSymbolFragment = 'x';
          }
          if (!ship.isHorizontal()) { //it's vertical
              var hit = ship.getHit();
              if (hit[row - ship.getBowRow()])
                  replacementSymbolFragment = 'x';
          }
          if (ship.isSunk()) {
              replacementSymbolFragment = 'S';
          }
      }
      return replacementSymbolFragment;
    }

    this.showBlankBoard = function() {
        /*todo StringBuilder sb1 = new StringBuilder()
        (1..10).each {
            sb1.append('+-+-+-+-+-+-+-+-+-+-+\n')
            sb1.append('| | | | | | | | | | |\n')
        }
        sb1.append('+-+-+-+-+-+-+-+-+-+-+')

        return sb1*/
    };
};
