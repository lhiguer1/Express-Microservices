var express = require('express');
const path = require('path');
var router = express.Router();

let urls = [];

router.use(express.static(path.join(__dirname, 'static')));

/* GET users listing. */
router.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

router.post('/api/shorturl', (req, res) => {
    let url = req.body.url;

    fetch(url)
        .then((response) => {
            let i = urls.indexOf(url) == -1
                ? urls.push(url) - 1
                : urls.indexOf(url)

            res.json({
                original_url: urls[i],
                short_url: i,
            });
        })
        .catch(err => {
            res.json({ error: 'invalid url' })
        })
});

router.get('/api/shorturl/:shortUrl(\\d+)', (req, res) => {
    let shortUrl = Number.parseInt(req.params.shortUrl);
    let originalUrl = urls[shortUrl];

    res.redirect(originalUrl)
});

module.exports = router;
