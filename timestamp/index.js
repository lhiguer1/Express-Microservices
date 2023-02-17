var express = require('express');
const path = require('path');
var router = express.Router();


router.use(express.static(path.join(__dirname,'static')));

/* GET users listing. */
router.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});


router.get('/api/:date?', (req, res) => {
    let reqDate = req.params.date

    let date;

    if (!reqDate) {
        date = new Date();
    } else {
        date = Date.parse(reqDate) ? new Date(reqDate) : new Date(Number(reqDate));
    }

    if (isNaN(date)) {
        res.json({ error : "Invalid Date" });
        return;
    }

    res.send({
        utc: date.toUTCString(),
        unix: Number(date),
    });
});

module.exports = router;
