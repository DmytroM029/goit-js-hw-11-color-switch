const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const body = document.body;
const btnStart = document.querySelector('[data-action="start"]');
const btnStop = document.querySelector('[data-action="stop"]');

let numbId = null;


btnStart.addEventListener('click', onClickStart);
btnStop.addEventListener('click', onClickStop);


function onClickStart() {
     numbId = setInterval(() => {
        body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000);
    btnStart.setAttribute("disabled", true);
 }

 


function onClickStop() {
  clearInterval(numbId);
 btnStart.removeAttribute("disabled")
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


// const refs = {
//     btnStart = document.querySelector('[data-action="start"]'),
//     btnStop = document.querySelector('[data-action="stop"]')
// };