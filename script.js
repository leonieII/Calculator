document.addEventListener("DOMContentLoaded", function () {
    //No we are selecting elements present in our html 
    const display = document.querySelector(".display");
    const buttons = document.querySelector(".buttons");

    //Now we will add event listeners for button clicks 
    buttons.addEventListener("click", function (event) {
        //Now we will check if the event target i.e the element that triggered the event is a button element or not 
        if (event.target.tagName === "BUTTON") {
            handleButtonClick(event.target.textContent);
        }
    });

    // Function to handle button clicks
    function handleButtonClick(value) {
        switch (value) {
            case "AC":
                clearDisplay();
                break;
            case "DEL":
                deleteLastDigit();
                break;
            case "=":
                evaluateExpression();
                break;
            case "sin":
                sinFunction();
                break;
            case "cos":
                cosFunction();
                break;
            case "tan":
                tanFunction();
                break;
            case "log":
                logFunction();
                break;
            case "e":
                eFunction();
                break;
            case "π":
                piFunction();
                break;
            case "x!":
                factorialFunction();
                break;
            case "√":
                sqrtFunction();
                break;
            default:
                appendToDisplay(value);
                break;
        }
    }

    function sinFunction() {
        display.value = Math.sin(display.value);
    }
    function cosFunction() {
        display.value = Math.cos(display.value);
    }
    function tanFunction() {
        display.value = Math.tan(display.value);
    }
    function logFunction() {
        display.value = Math.log(display.value);
    }
    function eFunction() {
        display.value = 2.71828182846;
    }
    function piFunction() {
        display.value = 3.14159265359;
    }
    function factorialFunction() {
        var i, num, f;
        f = 1;
        num = parseInt(display.value); // Ensure it's a number
        for (i = 1; i <= num; i++) {
            f = f * i;
        }
        display.value = f;
    }
    function sqrtFunction() {
        display.value = Math.sqrt(display.value);
    }

    // Function to clear the display
    function clearDisplay() {
        display.value = "";
    }

    // Function to delete the last digit in the display
    function deleteLastDigit() {
        display.value = display.value.slice(0, -1);
    }

    // Function to append the clicked button value to the display
    function appendToDisplay(value) {
        display.value += value;
    }

    // Function to evaluate the expression in the display
    function evaluateExpression() {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = "Error";
        }
    }

});