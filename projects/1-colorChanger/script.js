// selecting button

const buttons = document.querySelectorAll('.button');
// console.log(buttons);

const body = document.querySelector('body');


buttons.forEach( function(button) {
    console.log(button);
    
    // adding event listner of each - button
    button.addEventListener('click', function(e) {
        console.log(e);
        console.log(e.target); // means on which we are clicking. grey, white, yellow,blue .. etc

        if(e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id; // on click backGr - color => grey
        }
        if(e.target.id === 'white') {
            body.style.backgroundColor = e.target.id; // on click backGr - color => white
        }
        if(e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id; // on click backGr - color => blue
        }
        if(e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id; // on click backGr - color => yellow
        }
        if(e.target.id === 'purple') {
            body.style.backgroundColor = e.target.id;
        }
    });

} );