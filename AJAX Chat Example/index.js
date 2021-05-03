let express = require('express');
var bodyParser = require('body-parser');
var routes = require("./routes");

let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);

let port = process.env.PORT || 3000;
app.listen(port);
