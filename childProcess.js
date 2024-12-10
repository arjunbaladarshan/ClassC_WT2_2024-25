const url = require('url');

const apiUrl = "http://abcd.com/xyz.js?a=1&b=arjun&c=false";

const urlData = url.parse(apiUrl,false);

console.log(urlData)
