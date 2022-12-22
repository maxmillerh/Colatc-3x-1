var res = document.getElementById("result"); 
var btnq = document.getElementById("hui"); 


btnq.onclick = function(){
     
     var a = document.getElementById("num").value;
     var b = 0;
     while(a != 1){ 
          if(Math.floor(a/2) == a/2){
                a = a / 2; 
                b++;
          } else{ 
                a = a * 3 + 1; 
                b++;
          }
     }  

     res.innerHTML = "Итого: " + b ;
     
}
