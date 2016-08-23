var TrisCorp = TrisCorp || {};
TrisCorp.BattleShips = TrisCorp.BattleShips || {};
TrisCorp.BattleShips.Ocean = TrisCorp.BattleShips.Ocean || {};
TrisCorp.BattleShips.Ship = TrisCorp.BattleShips.Ship || {};

TrisCorp.BattleShips.Ship = function(shipType, shipId) {
	this.shipType = shipType;
	this.shipId = shipId;
}

TrisCorp.BattleShips.Ocean = function() {
	/* not voalid within *this* structure
	anotherTest : ( function() {
		//test approaches
		console.log('in test');
		console.log(Ships[0][0]);
	}*/

    // TrisCorp.BattleShips.Ship initialization...
    this.upperBoardBound = 10;
	this.Ships = null;

	//approach 1
	var ship1 = new TrisCorp.BattleShips.Ship("frigate", 431);
	var ship2 = new TrisCorp.BattleShips.Ship("battleship", 443);
	var ship3 = new TrisCorp.BattleShips.Ship("submarine", 555);
	var ship4 = new TrisCorp.BattleShips.Ship("cruiser", 123);
	this.Ships = [ [ship1,ship2], [ship3,ship4] ] ;

	// approach -1 absolutely NOT var Ships = new Array( new Array());
	/* approach 2
	for (var row=0;row<this.upperBoardBound;row++) {
	  var shipsColumn = new Array();
	  for (var column=0;column<this.upperBoardBound;column++) {
		shipsColumn.push(new TrisCorp.BattleShips.Ship("xxx",123));
	  }
	  ships.push(shipsColumn);
	}*/

	/* no function oceanTest() {
		//test approaches
		console.log('in test');
		console.log(Ships[0][0]);
		console.log(Ships[0][1]);
		console.log(Ships[1][0]);
		console.log(Ships[1][1]);
	};*/



	var getShipArray = function() {
		return this.Ships
	};
}

TrisCorp.BattleShips.Ocean.prototype.oceanTest = function() {
  		//test approaches
		console.log('in test');
		console.log(Ships[0][0]);
		//console.log(Ships[0][1]);
		//console.log(Ships[1][0]);
		//console.log(Ships[1][1]);
};

TrisCorp.BattleShips.Ocean.prototype.getShipArray = function() {
		console.log("this ships array:" + Ships);
  		return this.Ships;
};

var x = new TrisCorp.BattleShips.Ocean;
// no VM282:56 Uncaught TypeError: x.oceanTest is not a function x.oceanTest()
// no x.anotherTest()
x.oceanTest(); //now works
console.log(x.getShipArray());
