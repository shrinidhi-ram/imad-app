//Counter code
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function(){
    
  //make request to the counter endpoint
  
  //capture the respone and store it in a variable
  
  //Render the variable in the last correct span
  counter = counter + 1;
  var span = document.getElementById('count');
  span.innerHTML = counter.toString();
};