const del = document.querySelector('.btn-delete');
const clr = document.querySelector('.btn-clear');
const screen = document.querySelector('.container_screen');
const btns = document.querySelectorAll('.btn-number');
const operators = document.querySelectorAll('.btn-operator');
const equals = document.querySelector('.btn-operator-equals');

let firstOperand =  "";
let secondOperand = "";
let result = 0;
let reset = false;
let operations = [];

let opSelected = false;



// + - x ÷
operators.forEach( op => {
    op.addEventListener('click', () => {
        operations.push(op.textContent);
        if(!firstOperand){
            firstOperand = Number(screen.textContent);
            screen.textContent = "";
        }else if(!secondOperand){
            secondOperand = Number(screen.textContent);
            screen.textContent = "";
        
        }
        if(firstOperand && secondOperand){
            result = operate(firstOperand,operations.shift(),secondOperand);
            screen.textContent = result;
            reset = true;
            console.log(firstOperand,secondOperand,result);
            firstOperand = result;
            secondOperand = "";
        }  

        operators.forEach( op => {
            op.classList.remove('btn-operator-active');
        })

        op.classList.add('btn-operator-active');
        
    })

});

// =
equals.addEventListener('click',()=>{
    if(!secondOperand){
        secondOperand = Number(screen.textContent);
        screen.textContent = "";
    
    }
    if(firstOperand && secondOperand){
        result = operate(firstOperand,operations.shift(),secondOperand);
        screen.textContent = result;
        reset = true;
        console.log(firstOperand,secondOperand,result);
        firstOperand = result;
        secondOperand = "";
    }
});

// 0 1 2 3 4 5 6 7 8 9 
btns.forEach( btn => {
    btn.addEventListener('click', () => {
        if(reset) {
            screen.textContent = "";
            reset = false;
        }
        screen.textContent  += btn.textContent;
    });
});

// DELETE
del.addEventListener('click', () => {
    let text = screen.textContent.trim();
    screen.textContent = text.substr(0,text.length-1);
});

// CLEAR
clr.addEventListener('click', () => {
    firstOperand =  "";
    secondOperand = "";
    result = 0;
    reset = false;
    operations = [];
    screen.textContent = "";
    operators.forEach( op => {
        op.classList.remove('btn-operator-active');
    })
});

function operate(a,operator,b){
    switch(operator){
        case "+" : return add(a,b);
        case "-" : return substract(a,b);
        case "x" : return multiply(a,b);
        case "÷" : return divide(a,b);
    }
}


function add(a,b){
    return a+b;
}

function substract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

