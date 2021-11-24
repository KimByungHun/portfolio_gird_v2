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

// const text = document.querySelector(".text p");
// const circle= document.querySelector(".circle");
// const circleTxt = document.querySelector(".circle_txt");

// text.innerHTML = text.innerText.split("").map(
//     (char, i)=>
//     `<span class='circle_txt' style="transform:rotate(${i * 13}deg")>${char}</span>`
// ).join("")

// var circleWidth = getComputedStyle(circle).width;
// var circleHeight = getComputedStyle(circle).height;
// var origin = getComputedStyle(circleTxt).transform-origin;

// console.log(origin)

// if(circleWidth>circleHeight){
//     circleWidth = circleHeight;
//     circle.style.setProperty('height',circleWidth);
// }else{
//     // circleHeight = circleWidth;
//     circle.style.setProperty('height',circleWidth);
// }

// Origin.style.setProperty('transform-origin','0 0px');




// var circleHeight = getComputedStyle(circle).height;
// console.log(circleWidth);
// console.log(circleHeight);