let app = require("../index.js");
let db = app.get('db');

module.exports = {
    getMenu: function(req, res, next){
        db.get_menu(function(err, products){
            console.log(err)
            res.status(200).send(products)
        })
    },
    getSmoothies: function(req, res, next){
        db.get_smoothies(function(err, products){
            console.log(err);
            res.status(200).send(products)
        })
    },
    getFnv: function(req, res, next){
        db.fnv(function(err, products){
            console.log(err);
            res.status(200).send(products)
        })
    },
    getBeet: function(req, res, next){
        db.berry_upbeet(function(err, products){
            console.log(err);
            res.status(200).send(products)
        })
    }
}