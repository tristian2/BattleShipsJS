/*var TrisCorp = TrisCorp || {};
TrisCorp.BattleShips = TrisCorp.BattleShips || {};
TrisCorp.BattleShips.Ship = TrisCorp.BattleShips.Ship || {};*/

/**
 @constructor
 @abstract
 */
TrisCorp.BattleShips.Ship = function() {
    if (this.constructor === TrisCorp.BattleShips.Ship) {
      throw new Error("Can't instantiate abstract class!");
    }
    // TrisCorp.BattleShips.Ship initialization...
    //this.length = 0;
    this.bowRow = 0;
    this.bowColumn = 0;
    this.horizontal = false;
    this.symbol = null;
    this.hit = [false,false,false,false];
    this.sunk = false;
    //this.shipType = null; //not needed
    /* error getShipType: function() {
        return this.shipType;
    }*/
};
/* abstract Ship class***********************/
TrisCorp.BattleShips.Ship.prototype.isSunk = function() {
    return this.sunk;
}
TrisCorp.BattleShips.Ship.prototype.setSunk = function(sunk) {
    this.sunk = sunk;
}
TrisCorp.BattleShips.Ship.prototype.isHorizontal = function() {
    return this.horizontal;
}
TrisCorp.BattleShips.Ship.prototype.setHorizontal = function(horizontal) {
    this.horizontal = horizontal;
}

TrisCorp.BattleShips.Ship.prototype.getBowRow = function() {
    return this.bowRow;
}
TrisCorp.BattleShips.Ship.prototype.setBowRow = function(row) {
    this.bowRow = row;
}
TrisCorp.BattleShips.Ship.prototype.getBowColumn = function() {
    return this.bowColumn;
}
TrisCorp.BattleShips.Ship.prototype.setBowColumn = function(column) {
    this.bowColumn = column;
}

TrisCorp.BattleShips.Ship.prototype.getShipType = function() {
    return this.shipType;
}
TrisCorp.BattleShips.Ship.prototype.getLength = function() {
    return this.length;
}
TrisCorp.BattleShips.Ship.prototype.getHit = function() {
    return this.hit;
}

TrisCorp.BattleShips.Ship.prototype.determineIfShipIsSunk = function() {
  //todo
  debugger;
  var length = this.getLength()-1;
  //todo sunk = this.hit[0..length].every();
  return sunk;
}


TrisCorp.BattleShips.Ship.prototype.toString = function() {
    return this.string;
}

TrisCorp.BattleShips.Ship.prototype.placeShipAt = function(row,column,horizontal,ocean) {
  this.setHorizontal(horizontal);
  var placed = false;
  while (!placed) {
    var valid = this.okToPlaceShipAt(row, column, horizontal, ocean); //todo
    if (valid) {
       this.placeOnBoard(row, column, horizontal, ocean); //todo
       placed = true;
    } else {
       row = ocean.aRandomRow(horizontal, this.getLength()); //todo
       column = ocean.aRandomColumn(horizontal, this.getLength()); //todo
    }
  }
}

TrisCorp.BattleShips.Ship.prototype.okToPlaceShipAt = function(row, column, horizontal, ocean) {
    var valid = true;

    if (ocean.getFirstShip()) {
        ocean.setFirstShip(false)
        return valid;
    }

    if (!isEmpty(row, column, horizontal, ocean)) {
        valid = false;
        return valid;
    }

    //Ship[][] ships = ocean.getShipArray() //todo

    for (var i = 0; i < this.getLength(); i++) {
        if (horizontal) {
            if (ocean.ships[row][column + i].getShipType() != 'EmptySea') {
                valid = false;
                return valid;
            }
        } else {
            if (ocean.ships[row + i][column].getShipType() != 'EmptySea') {
                valid = false;
                return valid;
            }
        }
    }
    return valid;
}

TrisCorp.BattleShips.Ship.prototype.isEmpty = function(row, column, horizontal, ocean) {
    //todo Ship[][] ships = ocean.getShipArray()
    length = this.getLength();
    empty = true;
    peekRow = row - 1;
    peekColumn = column - 1;

    if (horizontal) {
        while (peekRow < row + 2) {
            try {
                while (peekColumn < column + length + 2) {
                    try {
                        if (ships[peekRow][peekColumn].getShipType() != 'EmptySea') {
                            empty = false;
                        }
                        peekColumn++;
                    }
                    // todocatch (ArrayIndexOutOfBoundsException aoobe) {
                    catch (e) {
                        //might be at the edge, increment anyway
                        peekColumn++;
                    }
                }
                peekColumn = column - 1;
                peekRow++;
            }
            //catch (ArrayIndexOutOfBoundsException aoobe) {
            catch (e) {
                //might be at the edge, increment anyway
                peekRow++;
            }
        }
    }
    else {
        //vertical
        while (peekRow < row + length + 1) {
            try {
                while (peekColumn < column + 2) {
                    try {
                        if (ships[peekRow][peekColumn].getShipType() != 'EmptySea') {
                            empty = false;
                        }
                        peekColumn++;
                    }
                    //catch (ArrayIndexOutOfBoundsException aoobe) {
                    catch (e) {
                        //might be at the edge, increment anyway
                        peekColumn++;
                    }
                }
                peekColumn = column - 1;
                peekRow++;
            }
            //catch (Exception ex) {
            catch (e) {
                //might be at the edge, increment anyway
                peekRow++;
            }
        }
    }
    return empty;
}

TrisCorp.BattleShips.Ship.prototype.placeOnBoard = function(row, column, horizontal, ocean) {
    //todo Ship[][] ships = ocean.getShipArray()

    this.setBowRow(row);
    this.setBowColumn(column);

    for (var i = 0; i < this.getLength(); i++) {
        if (horizontal) {
            ships[row][column + i] = this;
        } else {
            ships[row + i][column] = this;
        }
    }
}

TrisCorp.BattleShips.Ship.prototype.shootAt = function(row, column) {
  //if row and column part of ship
  directHit = false

  if (this.horizontal) {
      for (var i = 0; i < this.getLength(); i++) {
          if ((this.bowRow == row) && (this.bowColumn + i == column)) {
              directHit = true;
              this.hit[i] = true;
          }
      }
  } else {
      for (var i = 0; i < this.getLength(); i++) {
          if ((this.bowRow + i == row) && (this.bowColumn == column)) {
              directHit = true;
              this.hit[i] = true;
          }
      }
  }
  this.setSunk(determineIfShipIsSunk());
  return directHit;
}







//new TrisCorp.BattleShips.Ship(); // throws Uncaught Error: Can't instantiate abstract class!(…)
/* BattleShip class ***********************/
TrisCorp.BattleShips.BattleShip = function() {
    TrisCorp.BattleShips.Ship.apply(this, arguments);
    // TrisCorp.BattleShips.BattleShip initialization...
    this.length = 4;
    this.shipType = 'BattleShip';
    this.hit = [false,false,false,false];
    this.string = "B";
};
debugger;
TrisCorp.BattleShips.BattleShip.prototype = Object.create(TrisCorp.BattleShips.Ship.prototype);
TrisCorp.BattleShips.BattleShip.prototype.constructor = TrisCorp.BattleShips.BattleShip;

/* Cruiser class ***********************/
TrisCorp.BattleShips.Cruiser = function() {
    TrisCorp.BattleShips.Ship.apply(this, arguments);
    // TrisCorp.BattleShips.Cruiser initialization...
    this.length = 3;
    this.shipType = 'Cruiser';
    this.hit = [false,false,false];
    this.string = "C";
};
TrisCorp.BattleShips.Cruiser.prototype = Object.create(TrisCorp.BattleShips.Ship.prototype);
TrisCorp.BattleShips.Cruiser.prototype.constructor = TrisCorp.BattleShips.Cruiser;

/* Destroyer class ***********************/
TrisCorp.BattleShips.Destroyer = function() {
    TrisCorp.BattleShips.Ship.apply(this, arguments);
    // TrisCorp.BattleShips.Destroyer initialization...
    this.length = 2;
    this.shipType = 'Destroyer';
    this.hit = [false,false];
    this.string = "D";
};
TrisCorp.BattleShips.Destroyer.prototype = Object.create(TrisCorp.BattleShips.Ship.prototype);
TrisCorp.BattleShips.Destroyer.prototype.constructor = TrisCorp.BattleShips.Destroyer;

/* Submarine class ***********************/
TrisCorp.BattleShips.Submarine = function() {
    TrisCorp.BattleShips.Ship.apply(this, arguments);
    // TrisCorp.BattleShips.Submarine initialization...
    this.length = 1;
    this.shipType = 'Submarine';
    this.hit = [false];
    this.string = "S";
};
TrisCorp.BattleShips.Submarine.prototype = Object.create(TrisCorp.BattleShips.Ship.prototype);
TrisCorp.BattleShips.Submarine.prototype.constructor = TrisCorp.BattleShips.Submarine;

/* EmptySea class ***********************/
TrisCorp.BattleShips.EmptySea = function() {
    TrisCorp.BattleShips.Ship.apply(this, arguments);
    this.firedAt = false;
    this.shipType = 'EmptySea';
    this.string = "E";
};
TrisCorp.BattleShips.EmptySea.prototype = Object.create(TrisCorp.BattleShips.Ship.prototype);
TrisCorp.BattleShips.EmptySea.prototype.constructor = TrisCorp.BattleShips.Submarine;
TrisCorp.BattleShips.EmptySea.prototype.isSunk = function() {
    return false;
}
TrisCorp.BattleShips.EmptySea.prototype.shootAt = function(row,column) {
    return false;
}
TrisCorp.BattleShips.EmptySea.prototype.isSunk = function() {
    return false;
}
TrisCorp.BattleShips.EmptySea.prototype.getFiredAt = function() { //can lose this when refactoring
    return this.firedAt;
}
TrisCorp.BattleShips.EmptySea.prototype.setFiredAt = function() { //can lose this when refactoring
    this.firedAt = true;
}





/*usage
var cruiser = new TrisCorp.BattleShips.Cruiser();
var battleship = new TrisCorp.BattleShips.BattleShip();
var destroyer = new TrisCorp.BattleShips.Destroyer();
var submarine = new TrisCorp.BattleShips.Submarine();
console.log("ship type: "+ battleship.getShipType());
console.log('length: '+battleship.getLength());
console.log('string: '+battleship.toString());
console.log('hit array: '+battleship.hit);
console.log("ship type: "+ cruiser.getShipType());
console.log('string: '+ cruiser.toString());
console.log('length: '+cruiser.getLength());
console.log('hit array: '+cruiser.hit);  //this shows that we dont actually need accessors in JS

console.log("ship type: "+ submarine.getShipType());
console.log('string: '+ submarine.toString());
console.log('length: '+ submarine.getLength());
console.log('hit array: '+ submarine.hit);  //this shows that we dont actually need accessors in JS

console.log("ship type: "+ destroyer.getShipType());
console.log('string: '+ destroyer.toString());
console.log('length: '+ destroyer.getLength());
console.log('hit array: '+ destroyer.hit);  //this shows that we dont actually need accessors in JS

var emptySea = new TrisCorp.BattleShips.EmptySea();
console.log("ship type: "+ emptySea.getShipType());
console.log('length: '+ emptySea.getLength());
console.log('string: '+ emptySea.toString());
console.log('hit array: '+ emptySea.hit);
console.log("shootAt: "+ emptySea.shootAt());
console.log('sunk: '+ emptySea.isSunk());
console.log('FiredAt: '+ emptySea.getFiredAt());
*/