'use strict';
var express = require('express');
const url = require('url');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    if (req.get("host").endsWith('appspot.com')) {
            var redirectURL = url.format({
                protocol: 'https',
                host: 'www.adamkarst.com'
        });
     res.redirect(redirectURL);
    }
    res.render('services', { title: 'Adam Karst' });
});



module.exports = router;
