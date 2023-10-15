const {MOVEMENT, MESSAGES} = require('./constants')
let connection;

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  const stdin = process.stdin;
  connection = conn;

  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);

  return stdin;
};


const handleUserInput = function (key) {
  // ctrl+c - close game
  if (key === '\u0003') {
    process.stdout.write('Disconnecting... \n');
    process.exit();
  }
  // movement
  if (key === 'w' || key === 'a' || key === 's' || key === 'd') {
    connection.write(MOVEMENT[key]);
  }

  // messages
  if (key === '1' || key === '2' || key === '3') {
    connection.write(MESSAGES[key]);
  }
};

module.exports = {setupInput};