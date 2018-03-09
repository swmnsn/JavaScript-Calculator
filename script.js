$(document).ready(function(){
  
  var num1 = 0;
  var num2;
  var str;
  
  $("#clear").click(function(){
    $(bar).text(0);
    num1 = 0;
    num2 = undefined;
    str = undefined;
  });
  
  $("#neg").click(function(){
    $(bar).text("-");
  });
  
  $("#divide").click(function(){
    $(bar).text("/");
    str = "/";
  });
  
  $("#seven").click(function(){
    if(str){
      if(num2){
        num2 = num2*10 + 7;
      }else{
        num2 = 7;
      }
      $(bar).text(num2);
    }else{
      num1 = num1*10 + 7;
      $(bar).text(num1);
    }
  });

  $("#eight").click(function(){
    if(str){
      if(num2){
        num2 = num2*10 + 8;
      }else{
        num2 = 8;
      }
      $(bar).text(num2);
    }else{
      num1 = num1*10 + 8;
      $(bar).text(num1);
    }
  });
  
  $("#nine").click(function(){
    if(str){
      if(num2){
        num2 = num2*10 + 9;
      }else{
        num2 = 9;
      }
      $(bar).text(num2);
    }else{
      num1 = num1*10 + 9;
      $(bar).text(num1);
    }
  });
  
  $("#multiply").click(function(){
    $(bar).text("*");
    str = "*";
  });
  
  $("#four").click(function(){
    if(str){
      if(num2){
        num2 = num2*10 + 4;
      }else{
        num2 = 4;
      }
      $(bar).text(num2);
    }else{
      num1 = num1*10 + 4;
      $(bar).text(num1);
    }
  });
  
  $("#five").click(function(){
    if(str){
      if(num2){
        num2 = num2*10 + 5;
      }else{
        num2 = 5;
      }
      $(bar).text(num2);
    }else{
      num1 = num1*10 + 5;
      $(bar).text(num1);
    }
  });
  
  $("#six").click(function(){
    if(str){
      if(num2){
        num2 = num2*10 + 5;
      }else{
        num2 = 5;
      }
      $(bar).text(num2);
    }else{
      num1 = num1*10 + 6;
      $(bar).text(num1);
    }
  });
  
  $("#subtract").click(function(){
    $(bar).text("-");
    str = "-";
  });
  
  $("#three").click(function(){
    if(str){
      if(num2){
        num2 = num2*10 + 3;
      }else{
        num2 = 3;
      }
      $(bar).text(num2);
    }else{
      num1 = num1*10 + 3;
      $(bar).text(num1);
    }
  });
  
  $("#two").click(function(){
    if(str){
      if(num2){
        num2 = num2*10 + 2;
      }else{
        num2 = 2;
      }
      $(bar).text(num2);
    }else{
      num1 = num1*10 + 2;
      $(bar).text(num1);
    }
  });
  
  $("#one").click(function(){
    if(str){
      if(num2){
        num2 = num2*10 + 1;
      }else{
        num2 = 1;
      }
      $(bar).text(num2);
    }else{
      num1 = num1*10 + 1;
      $(bar).text(num1);
    }
  });
  
  $("#add").click(function(){
    $(bar).text("+");
    str="+";
  });
  
  $("#zero").click(function(){
    
    if(str){
      if(num2){
        num2 = num2*10;
      }else{
        num2 = 0;
      }
      $(bar).text(num2);
    }else{
      num1 = num1*10 + 0;
      $(bar).text(num1);
    }
  });
  
  $("#point").click(function(){
    $(bar).text(".");
  });
  
  $("#equals").click(function(){
    $(bar).text(stringToMath(num1, str, num2));
    num1 = stringToMath(num1, str, num2);
    num2 = undefined;
    str = undefined;
  });
   
});
    
function stringToMath(num1, str, num2){
    if(str == "+"){
      return num1 + num2;
    }else if(str == "-"){
      return num1 - num2;
    }else if(str == "*"){
      return num1*num2;
    }else if(str=="/"){
      return num1/num2;
    }else{
      return "err";
    }
      
      
      
   }
   