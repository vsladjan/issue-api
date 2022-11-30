import express from 'express';
import SupportController from '../controllers/supportController.js';

var router = express.Router();
let supportController = new SupportController();

// GET all supports
router.get('/', function(req, res) {
  supportController.getSupport(req, res);
});

// GET support with id
router.get('/:id', function(req, res) {
  supportController.getSupport(req, res);
});

// Post support
router.post('/', function(req, res) {
  supportController.postSupport(req, res);
});


export default router;
