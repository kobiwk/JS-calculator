/*
 * Implement all your JavaScript in this file!
 */

 var one = $('#button1').get(0);
 var two = $('#button2').get(0);
 var three = $('#button3').get(0);
 var four = $('#button4').get(0);
 var five = $('#button5').get(0);
 var six = $('#button6').get(0);
 var seven = $('#button7').get(0);
 var eight = $('#button8').get(0);
 var nine = $('#button9').get(0);
 var zero = $('#button0').get(0);
 var plus = $('#addButton').get(0);
 var subtractButton = $('#subtractButton').get(0);
 var multiplyButton = $('#multiplyButton').get(0);
 var divideButton = $('#divideButton').get(0);
 var equalsButton = $('#equalsButton').get(0);
 var clearButton = $('#clearButton').get(0);
 var allNumbers = [one, two, three, four, five, six, seven, eight, nine, zero];
 var operations = [plus, subtractButton, multiplyButton, divideButton, equalsButton];


var start = function () {
	var result = 0, setNumber='', operation,
		previousOperation,lastEnteredNumber;
	
	//set number
	for (i = 0; i < allNumbers.length; i++) {
		allNumbers[i].addEventListener('click', function() {
			setNumber += this.value;
			$('#display').val(setNumber);
		} );
	}

	//do the math
	var doOperation = function(number, operation) {
		switch(operation) {
			case '+':
				result += Number(number);
				lastEnteredNumber = Number(number);
				previousOperation = '+';
				break;
			case '-':
				result -= Number(number);
				lastEnteredNumber = Number(number);
				previousOperation = '-';
				break;
			case '*':
				result *= Number(number);
				lastEnteredNumber = Number(number);
				previousOperation = '*';
				break;
			case '/':
				result /= Number(number);
				lastEnteredNumber = Number(number);
				previousOperation = '/';
				break;
			case '=':
				result = Number($('#display').val() );
				break;
			default: 
				result = Number(number);
				break; 
		}
	}

	//reset number
	var resetNumber = function() {
		setNumber = '';
	}

	//display result
	var displayResult = function() {
		$('#display').val(result);
		
	}

	//do choosen math operation
	for (var j = 0; j < operations.length; j++) {
		operations[j].addEventListener('click', function(){
			if (setNumber == '') {
				displayResult();
				operation = this.value;
				if (operation === '=') {
					doOperation(lastEnteredNumber, previousOperation);
					displayResult();
				}
			} else {
				doOperation(setNumber, operation);
				displayResult();
				resetNumber();
				operation = this.value;
			}
		});
	}

	//reset calculator by pressing 'C'
	clearButton.addEventListener('click', function() {
		resetNumber();
		result = 0;
		$('#display').val('');
	})
}

// start app
start();


/* Vanilla JS */

/*
 var display = document.getElementById('display');
 var one = document.getElementById('button1');
 var two = document.getElementById('button2');
 var three = document.getElementById('button3');
 var four = document.getElementById('button4');
 var five = document.getElementById('button5');
 var six = document.getElementById('button6');
 var seven = document.getElementById('button7');
 var eight = document.getElementById('button8');
 var nine = document.getElementById('button9');
 var zero = document.getElementById('button0');
 var plus = document.getElementById('addButton');
 var subtractButton = document.getElementById('subtractButton');
 var multiplyButton = document.getElementById('multiplyButton');
 var divideButton = document.getElementById('divideButton');
 var equalsButton = document.getElementById('equalsButton');
 var clearButton = document.getElementById('clearButton');
 var allNumbers = [one, two, three, four, five, six, seven, eight, nine, zero];
 var operations = [plus, subtractButton, multiplyButton, divideButton, equalsButton];


var start = function () {
	var result = 0, setNumber='', operation,
		previousOperation,lastEnteredNumber;
	
	//set number
	for (i = 0; i < allNumbers.length; i++) {
		allNumbers[i].addEventListener('click', function() {
			setNumber += this.value;
			display.value = setNumber;
		} );
	}

	//do the math
	var doOperation = function(number, operation) {
		switch(operation) {
			case '+':
				result += Number(number);
				lastEnteredNumber = Number(number);
				previousOperation = '+';
				break;
			case '-':
				result -= Number(number);
				lastEnteredNumber = Number(number);
				previousOperation = '-';
				break;
			case '*':
				result *= Number(number);
				lastEnteredNumber = Number(number);
				previousOperation = '*';
				break;
			case '/':
				result /= Number(number);
				lastEnteredNumber = Number(number);
				previousOperation = '/';
				break;
			case '=':
				result = display.value;
				break;
			default: 
				result = Number(number);
				break; 
		}
	}

	//reset number
	var resetNumber = function() {
		setNumber = '';
	}

	//display result
	var displayResult = function() {
		display.value = result;
		
	}

	//do choosen math operation
	for (var j = 0; j < operations.length; j++) {
		operations[j].addEventListener('click', function(){
			if (setNumber == '') {
				displayResult();
				operation = this.value;
				if (operation === '=') {
					doOperation(lastEnteredNumber, previousOperation);
					displayResult();
				}
			} else {
				doOperation(setNumber, operation);
				displayResult();
				resetNumber();
				operation = this.value;
			}
		});
	}

	//reset calculator by pressing 'C'
	clearButton.addEventListener('click', function() {
		resetNumber();
		result = 0;
		display.value = '';
	})
}

// start app
start(); 

*/
