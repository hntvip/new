const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const khachhang_controller = require('../controllers/khachhang.controller');

router.post('/create', khachhang_controller.khachhang_create);
// a simple test url to check that all of our files are communicating correctly.
router.get('/test', khachhang_controller.test);
router.get('/getAll', khachhang_controller.getAll);
router.get('/getCustomerByName/:name', khachhang_controller.findByName);
module.exports = router;