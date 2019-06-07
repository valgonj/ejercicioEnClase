const express = require('express');
var router = express.Router();

var thingsCollection = [];

var thingsStructure = {
    "id": "uuid",
    "clase": "",
    "seccion": "",
    "cupos": 0,
    "campus": "",
    "docente": ""
};

var clase = "";

thingsCollection.push(
    Object.assign({},thingsStructure, {"id":"uuid", "clase":"Seminario de Software", "seccion": "A", "cupos":0, "campus": "Sagrado Corazon de Jesus", "docente": "Orlando"})
);

router.get('/', (req, res, next)=>{
    res.status(200).json(thingsCollection);
});

router.post('/', (req, res, next)=>{
    var newElement = Object.assign(thingsStructure, req.body, {"id": new Date().getTime()});
    thingsCollection.push(newElement);
    res.status(200).json(newElement);
}); // post /

module.exports = router;