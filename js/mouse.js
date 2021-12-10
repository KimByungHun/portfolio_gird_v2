/*
   e.pageX, e.pageY (전체 문서 기준에서의 좌표값)
   e.clientX, e.clientY (브라우저 기준에서의 좌표값)
*/
const cursor = document.querySelector(".cursor");
let mouse = {};

window.addEventListener("mousemove", e=>{
   mouse = {
      x : e.clientX,
      y : e.clientY
   }
   moveCursor();   
})

window.addEventListener("scroll", moveCursor);


function moveCursor(){
   cursor.style.left = mouse.x+'px';
   cursor.style.top = mouse.y+scrollY+'px';
}