import express from 'express';
import UserController from '../controllers/userController.js';

var router = express.Router();
let userController = new UserController();

// GET all users
router.get('/', async function(req, res) {
  userController.getUser(req, res);
});

// GET user with id
router.get('/:id', async function(req, res) {
  userController.getUser(req, res);
});

// Post user
router.post('/', function(req, res) {
  userController.postUser(req, res);
});

export default router;
