function calculate()
{
var x = parseInt(document.getElementById("m1").value);
var y = parseInt(document.getElementById("m2").value);
var z = 10*x+5*y;
document.getElementById("ans").value = z;
}