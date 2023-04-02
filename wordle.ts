const CHAR_NUMBER = 5;
const MAX_TRY = 6;
let targetString: string;
let wordPool = [
    'eraser'
];
let guesses: string[];
let inputElements: HTMLElement[][];
let randChoice = (e: any[]) => e[Math.floor(Math.random()*e.length)];
function init() {
    targetString = randChoice(wordPool);
    inputElements = new Array();
    for(let i = 0; i < MAX_TRY; ++i) {
        inputElements[i] = new Array();
        for(let j = 0; j < CHAR_NUMBER; ++j) {
            inputElements[i].push(document.createElement('input'));
        }
    }
}

function getInputAt(row: number) {

}