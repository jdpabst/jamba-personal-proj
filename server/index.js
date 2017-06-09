let express = require('express');
let bodyParser = require('body-parser');
let massive = require('massive');
let config = require('./config.js')

const app = module.exports = express();
app.use(express.static(__dirname + "./../dist"));

app.use(bodyParser.json());

let massiveInstance = massive.connectSync({
    connectionString: config.connectionString,
})

app.set('db', massiveInstance);
let db = app.get('db');
let mainCtrl = require('./controllers/mainDbCtrl.js');


app.get('/api/menu', mainCtrl.getMenu);
app.get('/api/menu/smoothies', mainCtrl.getSmoothies);
app.get('/api/menu/smoothies/fnv', mainCtrl.getFnv);
app.get('/api/menu/smoothies/fnv/beet', mainCtrl.getBeet);






app.listen(config.port, console.log('listening on ' + config.port))