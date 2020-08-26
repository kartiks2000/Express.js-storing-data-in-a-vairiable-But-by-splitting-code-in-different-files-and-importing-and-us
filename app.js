
const express = require('express');
const bodyparser = require('body-parser');

const userprops = require('./routes/user');
const backprops = require('./routes/back');

const app = express();
app.use(bodyparser.urlencoded({extended:false}));



app.use(userprops.router);
app.use(backprops.router);



app.listen(3000);