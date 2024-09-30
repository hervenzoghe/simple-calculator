// Get element references
let historyValue = document.getElementById("history-value")
let outputValue = document.getElementById("output-value")

// Function to get history value
const getHistory = () => {
	return historyValue.innerText
}

// Function to print history value
const printHistory = (num) => {
	historyValue.innerText=num
}

// Function to get output value
const getOutput = () => {
	return outputValue.innerText;
}

// Function to print output value with formatting
const printOutput = (num) => {
	if(num === ""){
		outputValue.innerText=num
	}
	else{
		outputValue.innerText=getFormattedNumber(num);
	}	
}

// Function to format number
const getFormattedNumber = (num) => {
	if(num === "-"){
		return ""
	}
	const n = Number(num)
	const value = n.toLocaleString("en")
	return value
}

// Function to reverse number formatting (remove commas)
const reverseNumberFormat = (num) => {
	return Number(num.replace(/,/g,''))
}

// Add event listeners to operator buttons
const operators = document.querySelectorAll(".operator")
operators.forEach(operator => {
    operator.addEventListener("click", function(){
        const OperatorId = operator.id
        
		if(OperatorId === "clear"){
			printHistory("")
			printOutput("")
		}

		else if (OperatorId === "backspace") {
			var output=reverseNumberFormat(getOutput()).toString()
			if(output) {
                //if output has a value
				output= output.substring(0,output.length-1)
				printOutput(output)
			}
		}

		else {
			let output = getOutput()
			let history = getHistory()
			if(output === "" && history !== "") {
				if(isNaN(history[history.length-1])){
					history = history.substring(0, history.length - 1);
				}
			}
			if(output !== "" || history !== "") {
				output = output == "" ? output:reverseNumberFormat(output)
				history = history + output
				if(OperatorId === "="){
					const result = eval(history)
					printOutput(result)
					printHistory("")
				}
				else{
					history = history + OperatorId
					printHistory(history)
					printOutput("")
				}
			}
		}
		
	})
})

// Add event listeners to number buttons
const numbers = document.querySelectorAll(".number");
numbers.forEach(number => {
    number.addEventListener("click", () => {
        const numberId = number.id
		let output=reverseNumberFormat(getOutput())
		if(output!=NaN) { 
            //if output is a number
			output = output + numberId
			printOutput(output)
		}
	})
})