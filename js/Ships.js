TrisCorp.BattleShips.Ship = function() {
    if (this.constructor === TrisCorp.BattleShips.Ship) {
      throw new Error("Can't instantiate abstract class!");
    }

    this.bowRow = 0;
    this.bowColumn = 0;
    this.horizontal = false;
    this.symbol = null;
    this.hit = [false,false,false,false];
    this.sunk = false;
    this.isSunk = function() {
        return this.sunk;
    };
    this.setSunk = function(sunk) {
        this.sunk = sunk;
    };
    this.isHorizontal = function() {
        return this.horizontal;
    };
    this.setHorizontal = function(horizontal) {
        this.horizontal = horizontal;
    };
    this.getBowRow = function() {
        return this.bowRow;
    };
    this.setBowRow = function(row) {
        this.bowRow = row;
    };
    this.getBowColumn = function() {
        return this.bowColumn;
    };
    this.setBowColumn = function(column) {
        this.bowColumn = column;
    };
    this.getShipType = function() {
        return this.shipType;
    };
    this.getLength = function() {
        return this.length;
    };
    this.getHit = function() {
        return this.hit;
    };
    this.determineIfShipIsSunk = function() {
        function isSunk(element, index, array) {
          return element;
        };
        return this.hit.every(isSunk);
    };
    this.toString = function() {
        return this.string;
    };
    this.placeShipAt = function(row,column,horizontal,ocean) {
        this.setHorizontal(horizontal);
        var placed = false;
        while (!placed) {
            var valid = this.okToPlaceShipAt(row, column, horizontal, ocean);
            if (valid) {
              this.placeOnBoard(row, column, horizontal, ocean);
              placed = true;
            } else {
              row = ocean.aRandomRow(horizontal, this.getLength(), ocean);
              column = ocean.aRandomColumn(horizontal, this.getLength(), ocean);
            }
        }
    };
    this.okToPlaceShipAt = function(row, column, horizontal, ocean) {
        var valid = true;

        if (ocean.getFirstShip()) {
            ocean.setFirstShip(false);
        }

        if (!this.isEmpty(row, column, horizontal, ocean)) {
            valid = false;
            return valid;
        }

        ships = ocean.shipsBoard;

        for (var i = 0; i < this.getLength(); i++) {
            if (horizontal) {
              try {
                if (ocean.shipsBoard[row][column + i].getShipType() != 'EmptySea') {
                    valid = false;
                    return valid;
                }
              } catch(e) {
                return false;
              }
            } else {
              try {
                if (ocean.shipsBoard[row + i][column].getShipType() != 'EmptySea') {
                    valid = false;
                    return valid;
                }
              } catch(e) {
                return false;
              }
            }
        }
        return valid;
    };

    this.isEmpty = function(row, column, horizontal, ocean) {
        ships = ocean.shipsBoard;
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
                        catch (e) {
                            peekColumn++;
                        }
                    }
                    peekColumn = column - 1;
                    peekRow++;
                }
                catch (e) {
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
                        catch (e) {
                            peekColumn++;
                        }
                    }
                    peekColumn = column - 1;
                    peekRow++;
                }
                catch (e) {
                    peekRow++;
                }
            }
        }
        return empty;
    };

    this.placeOnBoard = function(row, column, horizontal, ocean) {
        ships = ocean.shipsBoard;
        this.setBowRow(row);
        this.setBowColumn(column);
        for (var i = 0; i < this.getLength(); i++) {
            if (horizontal) {
                ships[row][column + i] = this;
            } else {
                ships[row + i][column] = this;
            }
        }
    };

    this.shootAt = function(row, column) {
        directHit = false;
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
        this.setSunk(this.determineIfShipIsSunk());
        return directHit;
    };

};

TrisCorp.BattleShips.BattleShip = function() {
    TrisCorp.BattleShips.Ship.apply(this, arguments);
    // TrisCorp.BattleShips.BattleShip initialization...
    this.length = 4;
    this.shipType = 'BattleShip';
    this.hit = [false,false,false,false];
    this.string = "B";
};

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

	this.isSunk = function() {
        return false;
    };
    this.shootAt = function(row,column) {
        return false;
    };
    this.isSunk = function() {
        return false;
    };
    this.getFiredAt = function() { //can lose this when refactoring
        return this.firedAt;
    };
    this.setFiredAt = function() { //can lose this when refactoring
        this.firedAt = true;
    };

};
TrisCorp.BattleShips.EmptySea.prototype = Object.create(TrisCorp.BattleShips.Ship.prototype);
TrisCorp.BattleShips.EmptySea.prototype.constructor = TrisCorp.BattleShips.Submarine;
