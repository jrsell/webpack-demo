const express = require('express');
const config = require('./serverConfig');

const app = express();

// Api calls
app.get('/api/helloworld', async (req, res) => {  
    res.send( {data:'hello world'} );
});

// Returns error
app.get('/api/error', async (req, res) => {  
  try {
    throw Error("Internal error in the api code")
    res.send( {data:'hello world'} );
  }
  catch (e) {
    res.status(500).send(e);
  }
});


// Handle static pages
app.use(express.static('dist'));

// Start the server
app.listen(config.PORT, function () {
  console.log('Running on port: ' + config.PORT + ', NODE_ENV: ' + config.NODE_ENV + ", DOMAIN:" + config.DOMAIN);
});

