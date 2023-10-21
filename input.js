const {MOVEMENT, MESSAGES, HELP} = require('./constants')

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

  // exit game (ctrl+c)
  if (key === '\u0003') {
    process.stdout.write('Disconnecting... \n');
    process.exit();

  // movement (w: up, a: right, s: down, d: right)
  // uses slice for bug fix: ensures that only one input is going through when key is being held down
  } else if (key.includes('w') || key.includes('a') || key.includes('s') || key.includes('d')) {
    key = key.slice(0,1)
    connection.write(MOVEMENT[key]);

  // messages (1: hello, 2: gg, 3: bye)
  } else if (key === '1' || key === '2' || key === '3') {
    connection.write(MESSAGES[key]);

  // prints instructions
  } else if (key === 'h') {
    console.log(HELP);

  // when unused keys are pressed: prints "INVALID INPUT" and controls to access instructions/quit
  } else {
    console.log('INVALID INPUT\nPress H for HELP, or CTRL+C to QUIT');
  }
};

module.exports = {setupInput};