const express = require('express');
const router = express.Router();

const InfoApi = require('./Info');

router.use('/Info', InfoApi);

module.exports = router;