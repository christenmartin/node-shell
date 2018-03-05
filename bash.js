// console.log("my_prompt: ");
// console.log(Object.keys(process));

//STDIN is data flowing in
//STDOUT is ata flowing out


// var pwd = require('./commands').pwd;
// var date = require('./commands').date;

var commands = require('./commands');
process.stdout.write('prompt > ');
process.stdin.on('data', function (data) {
    var cmd = data.toString().trim(); // remove
    commands[cmd]();
    process.stdout.write('\nprompt > ');
  });

// userCommand();



// commands.commands();


// https://stackoverflow.com/questions/31089749/how-do-you-set-a-strftime-with-javascript

var startTime = new Date;

setTimeout(function () {
  var endTime = new Date;
  console.log(startTime);
  console.log(endTime);
  console.log('Time elapsed: ', endTime - startTime, 'ms');
}, 500);

while (new Date - startTime < 1000) {};
