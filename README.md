# Wordle

An imitation of game 'wordle', using typescript and javascript.

JUST GO AND ENJOY IT.

## Something I want to say
I use the input element to fill in chars, and delete the extra leading chars each time the user input. The result is that, occasionally it does not work, cause the cursor position is incorrect, especially when you click the input element --- it totally mess everything up!(and I've not found a way to fix it, let's say, set the position of cursor when you select it) So I use the keydown listener to monitor the keys --- that makes the <input> act like a <div> actually. Ironicly, I used to wanna prevent this way, monitering the every single key press, but I wanna just use the natural way of input (input in the <input type="text">). But finally I failed. Anyway, it works, and that's enough now.