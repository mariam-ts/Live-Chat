const express = require('express');
const http  = require('http');
const path = require('path');

const app = express();
const port = process.env.port || 3001;
app.use(express.static(__dirname + "dist/ng6"));
app.get()