// console.log("my_prompt: "); 
// console.log(Object.keys(process));

//STDIN is data flowing in 
//STDOUT is data flowing out 


process.stdout.write('prompt > ');


const date = new Date(); //don't do date.now()
// console.log("HERE IS OUR DATE", date.toString()); 

process.stdin.on('data', function (data) {
    // process.stdout.write(process.argv); 
    var cmd = data.toString().trim(); // remove the newline
    if (cmd === "pwd") {
        process.stdout.write(process.argv[1]);
    } else if (cmd === "date") {
        process.stdout.write(date.toString()); 
    }
  
   
    process.stdout.write('\nprompt > ');
  
  });

  console.log("blah blah"); 


// https://stackoverflow.com/questions/31089749/how-do-you-set-a-strftime-with-javascript
// http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO-4.html           cat bash.js | head 

