const CHAR_NUMBER = 5;
const MAX_TRY = 6;
type colors = 'yellow'|'green'|'grey'|'white';
let targetString: string;
let wordPool = [
    'ERASE'
    // to add more words 
];
let currentRow;
let guesses: string[] = new Array(MAX_TRY);
let inputElements: HTMLInputElement[][] = new Array();
let rowElement: HTMLDivElement[] = new Array();
let randChoice = (e: any[]) => e[Math.floor(Math.random()*e.length)];
let containerDiv = document.getElementById('container') as HTMLDivElement;

function init() {
    currentRow = 0;
    targetString = randChoice(wordPool).toUpperCase();
    
    for(let i = 0; i < MAX_TRY; ++i) {
        let ro = document.createElement('div');
        ro.classList.add('wordle_row');
        rowElement.push(ro);
        containerDiv.appendChild(ro);
        inputElements[i] = new Array();
        for(let j = 0; j < CHAR_NUMBER; ++j) {
            let ele = document.createElement('input');
            ele.classList.add('wordle_cell');
            ele.id = `cell${i}${j}`;
            if(i != 0)
                ele.disabled = true;
            ele.oninput = changeText;
            inputElements[i].push(ele);
            ro.appendChild(ele);
        }
    }
}

function getInputAt(row: number) {
    let s = '';
    for(let i = 0; i < CHAR_NUMBER; ++i) {
        s += inputElements[row][i].value;
    }
    guesses[row] = s;
    return s;
}

function checkGuess(row: number) {
    let s = getInputAt(row);
    console.log(s);
    let flag = true;
    let ret: colors[] = new Array(CHAR_NUMBER);
    for(let i = 0; i < CHAR_NUMBER; ++i) {
        if(s[i] == targetString[i]) {
            ret[i] = 'green';
        } else {
            flag = false;
            if(targetString.includes(s[i])) {
                ret[i] = 'yellow';
            } else {
                ret[i] = "grey";
            }
        }
    }
    return ret;
}

// function update(row?: number) {
//     // update the color of the given row

// }

function changeText(event: Event) {
    let tar =  event.target as HTMLInputElement;
    let match = tar.id.match(/^cell([0-9])([0-9])$/);
    if(!match) {
        return;
    }
    
    let row = parseInt(match[1]);
    let col = parseInt(match[2]);

    if(!(typeof row == 'number' && typeof col == 'number'))
        return;
    currentRow = row;
    if(tar.value.match(/^[a-zA-Z]+$/)) {
        let s = tar.value;
        tar.value = s.slice(s.length - 1).toUpperCase();
        let count = -1;
        for(let [i, e] of inputElements[row].entries()) {
            if(!e.value.match(/^[A-Z]$/)) {
                count = i;
                break;
            }
        }
        if(count == -1) {
            let ret = checkGuess(row);
            inputElements[row].forEach(e=>e.disabled = true);

            for(let [i, e] of inputElements[row].entries()) {
                e.classList.add(ret[i]);
            }

            if(ret.every(e=>e=='green'))
                alert('guessed!')

            if(row < MAX_TRY - 1) {
                currentRow++;
                inputElements[row+1].forEach(e=>e.disabled = false);
                inputElements[row + 1][0].focus();
            } else {
                alert('chance\'s over!');
            }
        } else {
            inputElements[row][count].focus();
        }
    } else {
        tar.value = '';
    }

}

window.onload = init;