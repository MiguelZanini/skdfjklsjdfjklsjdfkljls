mouseEvent="empty";
var lastpositionX,lastpositionY;

canvas=document.getElementById("mcanvas");
ctx=canvas.getContext("2d");
color="rgb(29, 216, 216)";

function circle(mouseX,mouseY){
    ctx.beginPath();
ctx.strokeStyle = document.getElementById("cor").value;
ctx.lineWidth = 2;
ctx.arc(mouseX,mouseY, 40 ,0 , 2*Math.PI);
ctx.stroke();
}
canvas.addEventListener("mousedown",mymousedown);

function mymousedown(e){
    mouseX=e.clientX-canvas.offsetLeft;
    mouseY=e.clientY-canvas.offsetTop;
   // circle(mouseX,mouseY);
    mouseEvent="mousedown"
}

canvas.addEventListener("mousemove", my_mousemove);
 function my_mousemove(e)
 {
  current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
  current_position_of_mouse_y = e.clientY - canvas.offsetTop;

  if (mouseEvent == "mousedown") {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth =2;

  console.log("Last position of x and y coordinates = ");
  console.log("x = " + last_position_of_x + "y = " 
       + last_position_of_y);
  ctx.moveTo(last_position_of_x, last_position_of_y);

  console.log("Current position of x and y coordinates = ");
  console.log("x  = " + current_position_of_mouse_x + "y = " 
          + current_position_of_mouse_y);
  ctx.lineTo(current_position_of_mouse_x, 
          current_position_of_mouse_y);
  ctx.stroke();
  }
  last_position_of_x = current_position_of_mouse_x; 
  last_position_of_y = current_position_of_mouse_y;
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}

    
