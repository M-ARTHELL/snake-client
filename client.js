const net = require("net");
const {IP, PORT, HELP, NAME} = require('./constants');


// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,   // host server IP here
    port: PORT,   // host server port here
  });

  // on connection to the server: displays success message and instructions, then sets player name
  conn.on('connect', (connected) => {
    console.log('Successfully connected to the game server.')
    
    console.log(HELP)   // displays instructions
    conn.write(NAME);   // sets player name
  });

  //interpret incoming data as text
  conn.setEncoding("utf8");

  // listening
  conn.on('data', (data) => {
    console.log('Server says: ' + data);
  });

  return conn;
};


module.exports = {connect};