function newColor() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = `rgb( ${x}  ${y}  ${z})`;
  console.log(bgColor);
  var color = document.getElementById("changeColor");
  color.style.background = bgColor;
}
