const cheerio = require('cheerio');
const https = require('https');

module.exports = {
  initialScrape: (req, res, next) => {
    // grab links to javascript releases
    res.setHeader('Content-Type', 'application/json');

    https.get('https://developer.mozilla.org/en-US/docs/Web/JavaScript', (response) => {
      let body = '';
      response.on('data', (d) => {
        body += d;
      })
      response.on('end', () => {
        const $ = cheerio.load(body);
        const link = '/en-US/docs/Web/JavaScript/New_in_Javascript';
        const li = $(`a[href="${link}"]`).parent().find('li');
        li.each(function(index){
          console.log($(this).text());
        })
        // console.log(li);
        res.send({message: 'yay'});
        // res.locals.releases
      })
    })
    .on('error', (e) => {
      console.log(e)
    })
  },
}
