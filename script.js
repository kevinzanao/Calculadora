var screen = document.getElementById('screen');
var keyboardButtons = document.querySelectorAll('.keyboard button');

var calc = 0;



document.addEventListener('click', (event) => {
    keyboardButtons.forEach((button) => {
        if(event.target == button) {
            if (button.className == "clean") {
                screen.value = '';
            } else if(button.id ==! 'equal') {
                screen.value += event.target.innerText;
            } else {
                if (screen.value.includes("x")) {
                    screen.value = eval(screen.value.replace('x', '*'));
                } else {
                    console.log("sem vezes");
                    screen.value = eval(screen.value);
                }
            }
        }
    })
})





