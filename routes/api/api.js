const express = require('express');
const router = express.Router();

const InfoApi = require('./Info');

/*router.get('/', (req, res, next)=>{
    res.status(200).json({"api":"Prueba 1."})
});*/

router.use('/Info', InfoApi);

module.exports = router;