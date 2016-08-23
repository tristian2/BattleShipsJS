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
      debugger;
      ocean = new TrisCorp.BattleShips.Ocean();
      ocean.placeAllShipsRandomly()
      //useful for tracing or cheating!
      //console.log (ocean.ships);
      console.log (ocean.getShipArray());
  }
}(); // or TrisCorp.BattleShips.Game();
