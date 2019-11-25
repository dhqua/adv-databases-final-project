var express = require('express');
var router = express.Router();
var dataController = require('../controllers/dataController');

router.post('/getSideEffect', dataController.getSideEffect);
router.post('/getDSP', dataController.getDrugAndSideEffect);
router.post('/getDNSP', dataController.getDrugAndNoSideEffect);
router.post('/getNDSP', dataController.getNoDrugAndSideEffect);
router.get('/getNDNSP', dataController.getNoDrugAndNoSideEffect);
module.exports = router;