function armstrong(num) {

    var a = num.toString().split('') //["3", "7", "1"]
    var b = num
    var c = 0
  
    for (let i = 0; i < a.length; i++){
      a[i] = Math.pow(a[i], a.length)
      c += a[i]
    }
  
    if (c == b) {
      console.log("Number is armstrong")
    } else if (c != b) 
    {
      console.log("Number is not armstrong")
    }
    else{
      console.log("Number is not valid")
    }
  
  
  }
  
 console.log (armstrong(371));