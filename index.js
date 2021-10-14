const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const refs = {
    btnStart: document.querySelector('[data-action="start"]'),
    btnStop: document.querySelector('[data-action="stop"]')
}

refs.btnStop.addEventListener('click', funcStop)
refs.btnStart.addEventListener('click', funcStart)
let timerId = null;

function funcBackgroundColor() {
   return colors[randomIntegerFromInterval(0, colors.length - 1)]
}
function funcStart() {
     
    timerId = setInterval(() => {
        document.body.style.backgroundColor = funcBackgroundColor();
       refs.btnStart.style.pointerEvents = "none";
           
  }, 1000);
     
}


function funcStop() {
    clearInterval(timerId);
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};



