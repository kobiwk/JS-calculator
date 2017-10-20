/*
 * Implement all your JavaScript in this file!
 */
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
 var equalsButton = document.getElementById('equalsButton');
 
 var allNumbers = [one, two, three, four, five, six, seven, eight, nine, zero];

 var firstNumber = [];
 var saveNumber;

var pressNumber = function() {
	for (i = 0; i < allNumbers.length; i++) {
		allNumbers[i].addEventListener('click', function() {
 			firstNumber.push(this.value);
 			display.value = firstNumber.join('');
 			});
		}
	}


var takeNumber = function() {
	pressNumber();
	plus.addEventListener('click', function() {
		var num1 = Number(firstNumber.join(''));
		firstNumber = [];
		equalsButton.addEventListener('click', function(){
			var num2 = 	Number(firstNumber.join(''));
			alert(num1 + num2);
			firstNumber = [];
		})
		
	});

}


// start app
takeNumber(); 
