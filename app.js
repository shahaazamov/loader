// // const title =  document.querySelector('.title')
// const key  = document.querySelector('.key')
// const keyCode = document.querySelector('.keyCode')
// const code  = document.querySelector('.code')

// // const card = document.querySelector('.card')

// document.addEventListener('keypress', (e)=> {
// let keyBoard = e.target
// let num = e.key
// let harf = e.keyCode
// code.textContent = num
// keyCode.textContent = harf

// })

// let intervalTime = setInterval(() =)


// drink water//
// blurry loader//
// animated counter//

const bg = document.querySelector(".bg");
const loadText = document.querySelector(".loading-text");

let load = 0;
let int = setInterval(blurring, 70);

function blurring() {
    load++;
    if (load > 99) {
        setInterval(int);
    }
    
    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 70, 50, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};