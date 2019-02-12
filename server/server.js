const express = require('express');
const postsRouter = require('./routes/postsRouter');

const server = express();

server.use(express.json());

server.use('/api/posts', postsRouter);

server.get('/', async (req, res) => {
	res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});

// export default server; ES2015 Modules
module.exports = server;
