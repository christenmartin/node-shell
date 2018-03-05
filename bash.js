// console.log("my_prompt: "); 
// console.log(Object.keys(process));

//STDIN is data flowing in 
//STDOUT is ata flowing out 


process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {
    console.log("WE ARE HERE: ", process.argv); 
    // var cmd = data.toString().trim(); // remove the newline
  
    // process.stdout.write('You typed: ' + cmd);
    // process.stdout.write('\nprompt > ');
  
  });