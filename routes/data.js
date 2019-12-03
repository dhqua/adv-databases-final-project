var express = require('express');
var router = express.Router();
var dataController = require('../controllers/dataController');
//determining the endpoint of the API. Each endpoint is to access a unique API. 'POST' and 'GET' indicates the type of HTTP methods
router.post('/getSideEffect', dataController.getSideEffect);
router.post('/getDSP', dataController.getDrugAndSideEffect);
router.post('/getDNSP', dataController.getDrugAndNoSideEffect);
router.post('/getNDSP', dataController.getNoDrugAndSideEffect);
router.get('/getNDNSP', dataController.getNoDrugAndNoSideEffect);
module.exports = router;