const https = require('https');

function getAndPrintHTMLChunks() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  // /* Add your code here */ This function should console.log each chunk of data as it is received, concatenated with a newline character ('\n') so you can visualize each chunk.

    https.get(requestOptions, function(res) {

      res.setEncoding('utf8');

      let rawData = '';
      res.on('data', function(chunk) {
      rawData += chunk;
    });

    res.on('end', function () {
      console.log(rawData);
      //callback(rawData);
    });
  })
}
getAndPrintHTMLChunks();