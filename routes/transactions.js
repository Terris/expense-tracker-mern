const express = require('express');
const router = express.Router();
const { getTransactions, addTransaction, deleteTransaction } = require('../controllers/transactions');

// get & post
router.route('/').get(getTransactions).post(addTransaction);
// delete
router.route('/:id').delete(deleteTransaction);

module.exports = router;
