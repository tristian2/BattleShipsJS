var TrisCorp = TrisCorp || {};
TrisCorp.BattleShips = TrisCorp.BattleShips || {};
TrisCorp.BattleShips.Ship = TrisCorp.BattleShips.Ship || {};
TrisCorp.BattleShips.Ship = {
    bowColumn:null,
    length:0,
    horizontal:null,
    symbol:null,
    hit : [false,false,false,false],
    sunk : false,
    shipType: null,
    getShipType: function() {
        return this.shipType;
    }

}

TrisCorp.BattleShips.BattleShip.prototype = new TrisCorp.BattleShips.Ship()
{
    var bowRow;
    var bowColumn;
    var length;
    var horizontal;
    var symbol;
    var hit = [false, false, false, false];//new boolean[4];::
    var sunk = false;
    var shipType;
    this.length = 4;
};

TrisCorp.BattleShips.Cruiser.prototype = new TrisCorp.BattleShips.Ship()
{
    var bowRow;
    var bowColumn;
    var length;
    var horizontal;
    var symbol;
    var hit = [false, false, false];//new boolean[4];
    var sunk = false;
    var shipType;
    this.length = 3;
};

TrisCorp.BattleShips.Destroyer.prototype = new TrisCorp.BattleShips.Ship()
{
    var bowRow;
    var bowColumn;
    var length;
    var horizontal;
    var symbol;
    var hit = [false, false];//new boolean[4];
    var sunk = false;
    var shipType;
    this.length = 2;
};

TrisCorp.BattleShips.Submarine.prototype = new TrisCorp.BattleShips.Ship()
{
    var bowRow;
    var bowColumn;
    var length;
    var horizontal;
    var symbol;
    var hit = [false];
    var sunk = false;
    var shipType = "submarine";
    this.length = 1;
};

TrisCorp.BattleShips.EmptySea.prototype = new TrisCorp.BattleShips.Ship()
{
};
