const { Board, Led } = require("johnny-five");
const board = new Board();

board.on("ready", () => {
  let counter = 0;
  const led = new Led(13);
  board.repl.inject({
    led
  });
  led.blink(1000, () => {
    counter++;
    console.log(`Jedeme counter: ${counter}`);
    if (counter >= 10) {
      led.stop();
    }
  });
});
