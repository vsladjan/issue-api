import express from "express";
import IssueController from '../controllers/issueController.js';

var router = express.Router();
let issueController = new IssueController();

// GET all issues
router.get('/', function(req, res) {
  issueController.getIssue(req, res);
});

// GET issue with id
router.get('/:id', function(req, res) {
  issueController.getIssue(req, res);
});

// POST issue
router.post('/', function(req, res) {
  issueController.postIssue(req, res);
});

// PUT issue
router.put('/', function(req, res) {
  issueController.putIssue(req, res);
});


export default router;
