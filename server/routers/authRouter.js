const router = require('express').Router();

router.get('/', (req, res) => {
  res.status(200).json({
    name: 'phu',
    address: 'an giang',
  });
});

module.exports = router;
