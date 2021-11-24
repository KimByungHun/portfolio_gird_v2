window.onload=function(){
    Particles.init({
        selector:'.background',
        speed:0.2
    });
};

const btn = document.querySelector(".ripple");

btn.onmousemove = function(e){
    const x = e.pageX - btn.offsetLeft;
    const y = e.pageY - btn.offsetTop;

    btn.style.setProperty('--x',x + 'px');
    btn.style.setProperty('--y',y + 'px');
}

//텍스트 서클

const text = document.querySelector(".text p");
text.innerHTML = text.innerText.split("").map(
    (char, i)=>
    `<span class='circle_txt' style="transform:rotate(${i * 13}deg")>${char}</span>`
).join("")