const express = require('express');
const router = express.Router();


router.post('/webhook', async (req, res) => {
    console.log('Incoming webhook: ' + JSON.stringify(req.body));
    response.sendStatus(200);
});

module.exports = router;
