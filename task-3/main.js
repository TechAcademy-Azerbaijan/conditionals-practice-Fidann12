const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let input = result.input
    let number = input.split(',');
    let a = parseInt(number[0]);
    let b = parseInt(number[1]);
    let c = parseInt(number[2]);
    if ( a<(b+c) && b<(a+c) && c<(a+b) ){
        console.log("YES");
    }else {
        console.log("NO");
    }
});
