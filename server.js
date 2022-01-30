const express = require('express');

const app = express();

// Api calls
app.get('/api/helloworld', async (req, res) => {
  
    res.send( {data:'hello world'} );
  
});

// Handle static pages
app.use(express.static('dist'));

// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});