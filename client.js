const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '::',
    port: 50541,
  });

  // connection message
  conn.on('connect', (connected) => {
    console.log("Successfully connected to the game server.")
    conn.write('Name: MKA')
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // listening
  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = {connect};