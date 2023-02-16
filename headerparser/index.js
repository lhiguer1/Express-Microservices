var express = require('express');
const path = require('path');
var router = express.Router();


router.use('/static/css', express.static(path.join(__dirname, 'static', 'css')));

/* GET users listing. */
router.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});


router.get('/api/whoami', (req, res) => {
    res.json({
        ipaddress: req.ip,
        language: req.headers['accept-language'] || '',
        software: req.headers['user-agent'] || '',
    })
});

module.exports = router;
