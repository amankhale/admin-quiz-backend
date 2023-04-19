const express = require('express');
const app = express();

require('./router')(app);
require('./db')(app);