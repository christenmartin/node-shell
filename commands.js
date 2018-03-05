
// module.exports = {commands: function(commands){
//   process.stdout.write('prompt > ');
//   const date = new Date(); //don't do date.now()
//   // console.log("HERE IS OUR DATE", date.toString());

//   process.stdin.on('data', function (data) {
//     // process.stdout.write(process.argv);
//     var cmd = data.toString().trim(); // remove the newline
//     if (cmd === "pwd") {
//         process.stdout.write(process.argv[1]);
//     } else if (cmd === "date") {
//         process.stdout.write(date.toString());
//     }
//     process.stdout.write('\nprompt > ');

//   });
// }}

var fs = require('fs');

// commands();

function pwd(args){
  // process.stdout.write('prompt > ');
  // process.stdin.on('data', function (data) {
  //   var cmd = data.toString().trim(); // remove the newline
    process.stdout.write(process.argv[1]);
}

function date(arg){
  // process.stdout.write('prompt > ');
  const date = new Date(); //don't do date.now()
  // remove the newline
    process.stdout.write(date.toString());
}

function ls(arg){
  fs.readdir('.', function(err, files) {
  if (err) throw err;
  files.forEach(function(file) {
    process.stdout.write(file.toString() + "\n");
    //gives us a souble prompt and no prompt at end, why?
  })
});
}

function cat(arg){
  //console.log("arg: ", arg);
  var file = "./" + arg;
  fs.readFile(file, (err, data) => {
  if (err) throw err;
  process.stdout.write(data.toString());
});
}


function head(arg){
  fs.readFile(arg, (err, data) => {
  if (err) throw err;
  process.stdout.write(data.toString());
});
}

function echo(string){
  // process.stdout.write('prompt > ');
  // const date = new Date(); //don't do date.now()
  // remove the newline
    process.stdout.write(string);
}

//https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback

module.exports = {
  pwd: pwd,
  date: date,
  ls: ls,
  echo: echo,
  cat: cat,
  head: head
}

// commands();
// module.exports = {commands: commands};
