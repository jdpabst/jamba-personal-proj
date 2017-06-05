let express = require('express');
let bodyParser = require('body-parser');
let massive = require('massive');

const app = module.exports = express();
app.use(express.static(__dirname + "./../dist"));

app.use(bodyParser.json());

let massiveInstance = massive.connectSync({
    connectionString: 'postgres://dugaawmtaxzwlp:0d8e24bab13706720368d0b7f30729f3b8e013cf42f045ff25e4afd3459c8587@ec2-54-221-254-72.compute-1.amazonaws.com:5432/dfhqc4rq3omjc5?ssl=true'
})

app.set('db', massiveInstance);
let db = app.get('db');
let mainCtrl = require('./controllers/mainDbCtrl.js');


app.get('/api/menu', mainCtrl.getMenu);
app.get('/api/menu/smoothies', mainCtrl.getSmoothies);
app.get('/api/menu/smoothies/fnv', mainCtrl.getFnv);
app.get('/api/menu/smoothies/fnv/beet', mainCtrl.getBeet);






app.listen(3000, console.log('listening on port 8000'))