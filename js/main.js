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