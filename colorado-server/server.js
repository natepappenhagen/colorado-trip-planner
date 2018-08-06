const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const cors           = require('cors');


require('./db/db');


// SET UP CORS AS MIDDLEWARE, SO any client can make a request to our server
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());


// Require the controller after the middleware
const tripController = require('./controllers/tripController');


app.use('/api/v1/trips', tripController);


app.listen(9000, () => {
  console.log('listening on port 9000');
});
