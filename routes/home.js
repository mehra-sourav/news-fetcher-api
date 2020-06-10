const express = require('express');
const router = express.Router();
const axios = require('axios');
const $ = require('cheerio');
const URL = 'https://time.com';

/* GET home page. */
router.get('/', async (req, res, next) => {
  var response = [];
    var Res = await axios.get(URL)
          .then(result => {
            return result.data;
          })
          .catch(err => console.log(err));

    var resp = $('.trending .swipe-h li article .content .title', Res);
    for (let i = 0; i < resp.length; i++) {
      var link = resp[i].children[0].attribs.href;
      var title = resp[i].children[0].children[0].data;
      response.push({
        title,
        link:URL+link
      });
    }
    
    res.send({
      news:response
    });   
});

module.exports = router;
