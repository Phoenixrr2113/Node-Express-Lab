const express = require('express');
const userRouter = require('./routes/userRouter');

const server = express();

server.use(express.json());

server.use('/api/posts', userRouter);

server.get('/', async (req, res) => {
	res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});

// export default server; ES2015 Modules
module.exports = server;
