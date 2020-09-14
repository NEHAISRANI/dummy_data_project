const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json()); 

require("./controller/api.js")(app);   

const server = app.listen(7000, function(){     
  console.log("listening on port %s...", server.address().port);
});


