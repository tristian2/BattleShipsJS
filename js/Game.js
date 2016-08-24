TrisCorp.BattleShips.Game = function() {

  console.log('playing the game...');
  var ocean;
  var gameHistory = [];

  /* this works by be autonatically called...(function() {
    console.log('show window equiv');
  })();*/
  showWindow : (function() {
      console.log('static main method equivalent');
      play();
  })();


  function play() {
      //ocean = new Ocean()
      ocean = new TrisCorp.BattleShips.Ocean();
      ocean.placeAllShipsRandomly();
      //useful for tracing or cheating!
      //console.log (ocean.ships);

      //for dev, let's try firing..
      for (var col=0; col<9;col++)
        for (var row=0; row<9;row++)
          fire(row,col);

      console.log (ocean.getShipArray());

  }

  function fire(row,column) {
    ocean.shootAt(row,column,ocean);
    updateShips();
  }
  function updateShips() {
    console.log(ocean.toString());
  }
}(); // or TrisCorp.BattleShips.Game();
