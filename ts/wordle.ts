const CHAR_NUMBER = 5;
const MAX_TRY = 6;
type colors = 'yellow'|'green'|'grey'|'white';
let targetString: string;
let wordPool = [
    'eraser'
    // to add more words
];
let guesses: string[] = new Array(MAX_TRY);
let inputElements: HTMLElement[][] = new Array();
let rowElement: HTMLDivElement[] = new Array();
let randChoice = (e: any[]) => e[Math.floor(Math.random()*e.length)];
function init() {
    targetString = randChoice(wordPool);
    
    for(let i = 0; i < MAX_TRY; ++i) {
        let ro = document.createElement('div');
        ro.classList.add('wordle_row');
        rowElement[i] = ro;
        inputElements[i] = new Array();
        for(let j = 0; j < CHAR_NUMBER; ++j) {
            let ele = document.createElement('input');
            ele.classList.add('wordle_cell');
            inputElements[i].push(ele);
        }
    }
}

function getInputAt(row: number) {
    let s = '';
    for(let i = 0; i < CHAR_NUMBER; ++i) {
        s += inputElements[row][i].innerHTML;
    }
    guesses[row] = s;
    return s;
}

function checkGuess(row: number) {
    let s = getInputAt(row);
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

function update(row?: number) {
    // update the color of the given row

}