const path = require('path');

function getMessages(req, res) {
  res.sendFile(path.join(__dirname, '..', 'public', 'countryroads.avif'));
  //   res.send('<ul><li>Hello John!</li></ul>');
}

function postMessage(req, res) {
  console.log('updating messages');
}

module.exports = {
  getMessages,
  postMessage,
};
