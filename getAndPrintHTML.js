const https = require('https');

function getAndPrintHTML(rawData) {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  // /* Add your code here */

    https.get(requestOptions, function(res) {
      res.setEncoding('utf8');

      let rawData = '';

    res.on('data', function(chunk) {
      rawData += chunk;
    });

    res.on('end', function () {
      console.log(rawData);
      // callback(rawData);
    });
  })
}
getAndPrintHTML();