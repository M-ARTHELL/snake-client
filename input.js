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
  // w - up
  if (key === 'w') {
    connection.write('Move: up');
  }

  // a - left
  if (key === 'a') {
    connection.write('Move: left');
  }

  // s - down
  if (key === 's') {
    connection.write('Move: down');
  }

  // d - right
  if (key === 'd') {
    connection.write('Move: right');
  }
};

module.exports = {setupInput};