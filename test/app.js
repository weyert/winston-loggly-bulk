const winston = require('winston');
const { Loggly } = require('..');

winston.add(new Loggly({
  token: "2a3a93aa-251d-4176-b6fa-aba7a12f3597",
  subdomain: "labenv4",
  tags: "bulk-looping-travis",
  json: true,
  isBulk: true
  //networkErrorsOnConsole: true,
  // bufferOptions: {
  //   size: 1000,
  //   retriesInMilliSeconds: 60 * 1000
  // }
}));

// winston.log('info', "hey info", callback);
// function callback(a, b) {
//   console.log(a);
//   console.log(b);
// }

var source = {
  foo: 1,
  bar: 2,
  buzz: {
      sheep: 'jumped',
      times: 10
  }
};

winston.log('info', "From undefined tag BULK");
winston.log('info', '');
winston.log('info', null);

try {
  var a = 10, b = 0;
  a = a / b;
  throw new Error("Something unexpected has occurred.", a);

} catch (e) {
  winston.error(e);
}
winston.log('info', 'cry me a river :(');
winston.log('info', source);

 setInterval(function () {
   sendMultipleLogs();
 }, 5 * 1000);

 function sendMultipleLogs() {
   for (i = 0; i < 100; i++) {
       //winston.log('info', source);
       winston.log('info', 'cry me a river :(');
       winston.log('info', source);
   }
 }

for (i = 0; i < 20; i++) {
    winston.log('info', "Hello World from Node.js!", i);
}
