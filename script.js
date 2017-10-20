//jquery

$('li').mouseenter(function(){
	$(this).css('color', 'red');

});

$('li').mouseleave(function(){
	$(this).css('color', 'black');

})

$('#changeColor').on({
	mouseenter: function(){
		$(this).css('background-color','red');
}, 
	mouseleave: function() {
		$(this).css('background-color','transparent');
},
	click: function() {
		$(this).css('background-color', 'green');
	}
});



		var clickObject = document.getElementById('clickMe'),
			showClicked = document.getElementById('showClicked'),
			important = document.getElementsByClassName('important'),
			saveClicked = {},
			clicks,
			greetings = document.getElementById('greetings');

		function clickHandler() {

			//important notes
			for (var i = 0; i < important.length; i++) {
				important[i].style.color = 'red';
				important[i].style.fontWeight = 'bold';	
			}
			


			if (localStorage.numberOfClicks) {
				clicks = JSON.parse(localStorage.numberOfClicks);
				clicks = clicks.numberOfClicks;
				clicks++;
			}
			if (clicks == undefined) {
				showClicked.innerHTML = "You haven't clicked neither the one time";
			}
			else {
				showClicked.innerHTML = "You have clicked " + clicks + " times";
			}

			//how many clicks
			saveClicked.numberOfClicks = clicks;
			localStorage.numberOfClicks = JSON.stringify(saveClicked);
		}

		clickObject.addEventListener('click', clickHandler);

		function formGreetings(e) {
			if (e.keyCode == 13) {
				greetings.innerHTML = keyOn.value;
			}
		}

		keyOn.addEventListener('keyup', formGreetings);

		var closureAlert = function() {
			var x = 0;
			var alerter = function() {
				alert(++x);
			}
			return alerter;
		}

		var closure1 = closureAlert();
		var closure2 = closureAlert();
		//closure1();
		//closure1();
		//closure1();
		//closure2();





		/* FIRST TIME THAT I USED localStorage

				var lastTimeVisited = 'never',
			numberOfVisits = 0;

		if (localStorage.visitsToPortfolio) {
			var visitsToPortfolio = JSON.parse(localStorage.visitsToPortfolio);
			lastTimeVisited = visitsToPortfolio.lastTimeVisited;
			numberOfVisits = Number(visitsToPortfolio.numberOfVisits);
		}


		document.getElementById('last-time-visited').innerHTML = lastTimeVisited;
		document.getElementById('number-of-visits').innerHTML = numberOfVisits;

		myVisitsToPortfolio = {};
		myVisitsToPortfolio.lastTimeVisited = 'Last time you visited this page: ' + new Date();
		myVisitsToPortfolio.numberOfVisits = numberOfVisits + 1;
		localStorage.visitsToPortfolio = JSON.stringify(myVisitsToPortfolio);
		*/
'use strict'
var storyWriter = function(words) {
	var story = words + '';
	return {
		addWords: function wholeStory(anotherWords) {
				story += anotherWords;
				return story;
			},
		erase: function() {
			story = '';
			return story;
		}
	}
}

var Toaster = function(type) {
	//private properties/methods
	var setTime, pushBreadButton, onButton;
	
	onButton = function(button) {
		if (button == 'on') {
			return true;
		} else if (button = 'off'){
			return false;
		};
	}
	

	pushBreadButton = function() {
		if (button == 'on') {
			return alert('You have just pushed bread out of toaster');
		}
	}

	setTime = function(time) {
		if (time == 1) {
			alert('Your bread will be finished in 1 minute');
		}
		if (time == 2) {
			alert('Your bread will be finished in 2 minutes');
		}
		if (time == 3) {
			alert('Your bread will be finished in 3 minutes');
		}
	}
	return {
		turnOn: function(butt) {
			button = 'on';
			return onButton(button);
			},
		turnOff: function(butt) {
			button = 'off';
			return onButton(button);
		},
		pressPushBread: function(button) {
			return pushBreadButton(button='on');
			},
		timeOfToasting: function(set) {
			if (set == 1 && button === 'on' ) {
				return setTime(1);
			}
			else if (set == 2 && button === 'on') {
				return setTime(2);
			}
			else if (set == 3 && button === 'on') {
				return setTime(3);
			}
			else {
				return alert('Timer is not working properly');
			}
			// get time of toasting setter/getter?
		}

	}
}

var redToaster = Toaster();
redToaster.turnOn('on');
//redToaster.turnOff('off');
//redToaster.timeOfToasting(1);
/*
##Closure exercises

 Using the module pattern, design a toaster. Use your 
 creativity here and think about what you want your 
 users to be able to access on the outside of your 
 toaster vs what you don't want them to be able to 
 touch.
		
	```javascript
	var Toaster = function(){
	    //some private methods and properties
	    
	    return {
	      //some public methods and properties, etc
	    };
	};

*/

var nonsense = function(string) {
	var blab = function() {
		alert(string);
	}
	return blab;
}

var blabLater = nonsense('punk');
var blabAgainLater = nonsense('oi');
console.log(blabLater, blabAgainLater);


var checkAttendanceFunc = function(){
	var resultArr = [];
	counter = 1;
	var printNames = function(nameArr) {
		for(var i = 0; i < nameArr.length; i++){
			resultArr.push(console.log('Is', nameArr[i], 'present?', counter++));
		}
	}
	
	return printNames;
};

var check = checkAttendanceFunc();
check(['Ana', 'Zora', 'Koki']);
check(['Marko', 'Zoka', 'Milos']);

var checkAttendanceFunc2 = function(nameArr){
		var resultArr = [];
		counter = 0;
		for(var i = 0; i < nameArr.length; i++){
			var funk = function(){ 
				console.log('Is', nameArr[i], 'present?', counter++);
		};
		resultArr.push(funk());
		};
		return resultArr;
}

var check2 = checkAttendanceFunc2(['Marko', 'Zoka', 'Milos']);
var check2 = checkAttendanceFunc2(['koja', 'joka', 'prle']);


function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function makeHelpCallback(help) {
	return function() {
		showHelp(help);
	}
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
  }
}

setupHelp();


$("select[name='choose']").change(function(){
	$('#genderSpan').html($(this).val() );
});

$("input:radio[name='species']").change(function(){
	if ($(this).prop('checked')) {
		$('#speciesSpan').html($(this).val() );	
	}
	
});

var allChecked = [];

$("input:checkbox").change(function() {
	var value = $(this).val();
	if ($(this).prop('checked') )  {
		allChecked.push(value);
	} else {
		var index = allChecked.indexOf(value);
		if (index != -1) {
			allChecked.splice(index, 1);
		}
	}

	$('#featureSpan').html('');

	for (var i = 0; i < allChecked.length; i++) {
		$('#featureSpan').append(allChecked[i]);
		if (i < allChecked.length - 1) {
			$('#featureSpan').append(', ');
		} else {
			$('#featureSpan').append(' ');	
		}
		
	}
	
});

$('input:password').change(function(){

})