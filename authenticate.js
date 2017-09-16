const request = require('request');

request('http://example.com/ex', function(error, response, body) {
   if (error) {
    console.log(error);
    return;
   }
   // Above is guard function
   console.log(body);

let const data = JSON.parse(body);

});

var request = require('request');

request('https://sytantris.github.io/http-examples/', function(err, response, body) {
  if (err) throw err;
  console.log('Response Status Code:', response.statusCode);
});