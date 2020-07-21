import Constants from "./Constants";

const GameLoop = (entities, { touches, events, dispatch }) => {
  let head = entities.head;

  if (events.length) {
    for (let i = 0; i < events.length; i++) {
      if (events[i].type === "move-up") {
        head.yspeed = -1;
        head.xspeed = 0;
      } else if (events[i].type === "move-down") {
        head.yspeed = 1;
        head.xspeed = 0;
      } else if (events[i].type === "move-right") {
        head.xspeed = 1;
        head.yspeed = 0;
      } else if (events[i].type === "move-left") {
        head.xspeed = -1;
        head.yspeed = 0;
      }
    }
  }

  head.nextMove -= 1;
  if (head.nextMove === 0) {
    head.nextMove = head.updateFrequency;

    if (
      head.position[0] + head.xspeed > Constants.grid_size ||
      head.position[0] + head.xspeed < 0 ||
      head.position[1] + head.yspeed > Constants.grid_size ||
      head.position[1] + head.yspeed < 0
    ) {
      //game over
    } else {
      head.position[1] += head.yspeed;
      head.position[0] += head.xspeed;
    }
  }

  return entities;
};

export { GameLoop };
