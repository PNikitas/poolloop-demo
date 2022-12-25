const express = require('express');
const poolloop = require('./demo-pool/index.js');

const app = express();
const PORT = 3000;

console.log('test')

app.listen(PORT, () => poolloop.testPoolloop());
