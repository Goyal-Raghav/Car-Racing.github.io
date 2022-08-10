class Game {
  constructor() {

  }
  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function (data) {
      gameState = data.val();
      console.log(gameState);
    })
  }
  update(state) {
    database.ref("/").update({
      gameState: state
    })
  }
  start() {
    player = new Player();
    player.getCount();

    form = new Form();
    form.display();
  }
  handleElements() {
    form.hide()
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }
  play() {
    this.handleElements();
  }
}
