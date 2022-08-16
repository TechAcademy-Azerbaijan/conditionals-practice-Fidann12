const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let number = result.input
    let a = number[0]
    let b = number[1];
    let c = number[2];
    let d = number[3];
    if ( a%2==0 && b%2==0 && c%2==0 && d%2==0 ){
        console.log("YES");
    }else {
        console.log("NO");
    }
  
});
