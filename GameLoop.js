import Constants from "./Constants";

const GameLoop = (entities, { touches, events, dispatch }) => {
  let head = entities.head;
  head.position[0] += head.xspeed;

  return entities;
};

export { GameLoop };
