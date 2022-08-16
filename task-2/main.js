const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let input = result.input
    let number = input.split(',');
    let x = parseInt(number[0]);
    let a = parseInt(number[1]);
    let b = parseInt(number[2]);
    if (x <= a && a <= b ){
        console.log("OUT");
    }else{
        console.log("IN");
    }
  
});
