function area() {
 let radius = document.getElementById("dius").value;   
  let area = Math.PI * radius**2;

 document.getElementById("aswer").value=area .toFixed(2);

}