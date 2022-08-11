const express = require('express');

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');
const app = express();
const port = 4000;

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
