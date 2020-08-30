const express = require('express');
const router = express.Router();

const ShiftsController = require('../controllers/Shifts');

router.get('/', ShiftsController.getShifts);
router.post('/create', ShiftsController.createShift);


module.exports = router;
