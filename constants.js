// player name
const NAME = 'Name: MAK';

// connection settings
const IP = 'localhost';
const PORT = 50541;

// movement controls
const MOVEMENT = {
  'w': 'Move: up',
  'a': 'Move: left',
  's': 'Move: down',
  'd': 'Move: right'
};

// message controls
const MESSAGES = {
  '1': 'Say: hello',
  '2': 'Say: gg',
  '3': 'Say: bye'
};

// instructions
const HELP = '\nWelcome to Snake!\nThe goal of the game is to get as many points as you can by collecting the dots without running into your tail or the wall.\n\nControls:\n[MOVEMENT] W: Up, A: Left, S: Down, D: Right\n[MESSAGES] 1: "hello", 2: "gg", 3: "bye"\n\nPress CTRL + C to QUIT\n';


module.exports = {
  IP,
  PORT,
  MOVEMENT,
  MESSAGES,
  HELP,
  NAME
};