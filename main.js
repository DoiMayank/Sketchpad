//   function populateBoard(size){
//    let board = document.querySelector('.board');
//     board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
//     board.style.gridTemplateRows = `repeat(${size} , 1fr)`;


//     for(let i = 0 ; i < 256 ;i++){
//         let square = document.createElement('div');
//         board.innerHTML = '';
//         square.style.backgroundColor = 'blue';
//         board.insertAdjacentElement('beforeend' , square);
//     }
// } 

// populateBoard(16);

// function changeSize(input){
//     populateBoard(input)
// }

let color = "black";
let click = true;


function populateBoard(size) {
    let board = document.querySelector('.board');
    board.innerHTML = ''; // Clear the existing board content
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        let square = document.createElement('div');
        square.style.backgroundColor = 'white';
        // square.style.border = '1px solid #ddd'; // Optional: to see the grid lines
        square.addEventListener("mouseover", colorSquare);
        square.classList.add('square');
        board.appendChild(square);
    }
}

populateBoard(16);

function changeSize(input){
    if(input >= 2 && input <= 100){
        document.querySelector('.error').style.display = 'none'
        populateBoard(input);    
    } else {
        document.querySelector('.error').style.display = 'flex'
    }
}

// Add an event listener to the button to use the input value
document.querySelector('.size-setting button').addEventListener('click', function() {
    let input = document.querySelector('.size-setting input').value;
    changeSize(input);
});


function colorSquare(){
    if(click){
        if(color === 'random'){
            this.style.backgroundColor = `hsl(${Math.random() * 360} , 100%,50%)`;
    
        }else
        {
        this.style.backgroundColor = color;
        }
    }
}

function changeColor(choice){
    color = choice;
}

function resetBoard(){
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll("div");
    squares.forEach(div => div.style.backgroundColor= "white");
}

document.querySelector('body').addEventListener('click',(e) => {
    if(e.target.tagname != 'BUTTON'){
        click = !click;
        if(click){
            document.querySelector('.mode').textContent = "Mode: Coloring"
        }else{
            document.querySelector('.mode').textContent = "Mode: Not Coloring"
        }    
    }
})