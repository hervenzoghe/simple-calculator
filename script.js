// All buttons
let buttons = document.querySelectorAll("button")

// Our operation zone
let operation = document.getElementById("operation")

// Our result zone 
let outputValue = document.getElementById("output-value")

// Cette variable va contenir l'expression de notre opération
let expression = ""

// Mathjs pour l'évaluation des expressions

// On écoute l'événement "click" sur l'un des boutons
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent
        expression += value
        switch (value) {
            case "=":
                const resultValue = evaluateOperation(expression)
                outputValue.textContent = resultValue
                expression = ""
                break
            case "AC":
               //
            default: 
                displayOperation(operation, value)
                break
        }
        console.log(expression)
    })
})
/*
const cleanOperation = (expressInput) => {
    return expressInput.textContent = ""
}
*/
const displayOperation = (targetElement, val) => {
    targetElement.value += val
}

const evaluateOperation = (operationExpression) => {
    try {
        return math.evaluate(operationExpression)
    } catch (error) {
        return "Error"
    }
}