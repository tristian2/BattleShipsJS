var TrisCorp = TrisCorp || {};
TrisCorp.BattleShips = TrisCorp.BattleShips || {};
TrisCorp.BattleShips.Ship = TrisCorp.BattleShips.Ship || {};
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
TrisCorp.BattleShips.Ship.prototype.say = function() {
    throw new Error("Abstract method!");
}
TrisCorp.BattleShips.Ship.prototype.getShipType = function() {
    return this.shipType;
}
TrisCorp.BattleShips.Ship.prototype.getLength = function() {
    return this.length;
}

TrisCorp.BattleShips.Ship.prototype.toString = function() {
    return this.string;
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

//usage
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
