const board = document.querySelector("#board"),
    colors = ['#1f0887', '#00a87e', '#a8003b', '#a80000', '#ffd500','#00c20d'];

SQUARES_NUMBER = 1800;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        setColor(square)
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })

    board.append(square)
}

function setColor(elem) {
    const color = getRandomColor()
    elem.style.backgroundColor = color;
    elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
function removeColor(elem) {
    elem.style.backgroundColor = '#1d1d1d'
    elem.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() { 
   const index =  Math.floor(Math.random() * colors.length);

   return colors[index];
 }