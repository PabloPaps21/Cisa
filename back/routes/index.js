const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.send('No deberías ver esto =) saludos');
});

module.exports = router;
