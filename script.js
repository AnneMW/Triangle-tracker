function triangle(){
  var A = parseInt(document.getElementById('a').value);
  var B = parseInt(document.getElementById('b').value);
  var C = parseInt(document.getElementById('c').value);
  if (A+B<=C || A+C<=B || B+C<=A) {
    alert("This is not a triangle.");
  }
  else if ( A !== B && B !== C && A !== C ){
  alert("This is a scalene triangle.");
  }
    else if ( A===B && B===C ) {
    alert("This is an equilateral triangle.");
    }
      else if ( A===B || A===C || B===C ){
      alert("This is an isosceles triangle.");
        }
          else {
            alert("A triangle has three sides.");
          }
}
