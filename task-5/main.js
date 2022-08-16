const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let number = result.input
    let a = number[0]
    let b = number[1];
    let c = number[2];
    let d = number[3];
  if( a==3 && b==7 || b==3 && c==7 || c==3 && d==7 ){
    console.log("YES");
  }else {
    console.log("NO");
  }
});
