const path = require('path');
const router = require('express').Router();
let Payment = require(path.join(__basedir, 'models', 'Payment'));

router.route('/').post((req, res) => {
  console.log('Received payment data:', req.body);  // Add this line
  const newPayment = new Payment(req.body);

  newPayment.save()
    .then(() => res.json('Payment added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
