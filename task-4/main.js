const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let number = result.input
    let a = number[0]
    let b = number[1];
    let c = number[2];
    let d = number[3];
  if( a==b && b==c || b==c && c==d || a==c && c==d || a==b && b==d ){
    console.log("YES");
  }else {
    console.log("NO");
  }

  


    
});
