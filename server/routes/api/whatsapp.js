const express = require('express');
const router = express.Router();

router.post('/test', async (req, res) => {
  try {
        console.log("whatsapp webhook working")
      } catch (error) {
    console.log(error)
    res.status(400).json({
      error: 'Your request could not be processed. Please try again.'
    });
  }
});

module.exports = router;
