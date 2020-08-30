const express = require('express');
const router = express.Router();

const EngineersController = require('../controllers/Engineers');

router.get('/', EngineersController.getEngineers);
router.post('/create', EngineersController.createEngineers);
router.use('/update', EngineersController.updateEngineers)


module.exports = router;
