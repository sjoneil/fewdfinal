console.log('Main.js is connected!')


function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(40.7, -73.9),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

/*
function check () {
	var answers = document.forms[0];
	var txt = "";
	var i;
	for (i = 0; i <animals.length; i++) {
		if (animals[i].checked) {
			txt = txt + animals.value + " "
		}
	}


	document.getElementById("myresult").style.visibility="visible";
	document.getElementById("myresult").value = "Your Cause Is " + animals
}
*/

/*
function check () {
	var animals = document.getElementById("animals").checked;
	var environment = document.getElementById("environment").checked;
	var disaster = document.getElementById("disaster").checked;
	var education = document.getElementById("education").checked;
	var health = document.getElementById("health").checked;
	var human = document.getElementById("human").checked;
	

	document.getElementById("myresult").style.visibility="visible";
	document.getElementById("myresult").innerHTML= "Your Cause Is " + animals;
	document.getElementById("myresult").innerHTML= "Your Cause Is " + environment;
	document.getElementById("myresult").innerHTML= "Your Cause Is " + disaster;
	document.getElementById("myresult").innerHTML= "Your Cause Is " + education;
	document.getElementById("myresult").innerHTML= "Your Cause Is " + health;
	document.getElementById("myresult").innerHTML= "Your Cause Is " + human;
}
*/


function check() {
	document.getElementById("myresult").innerHTML= "Your Cause Is "
	var answers = document.querySelectorAll("input")
	for (var i = 0; i < answers.length; i++) {
		console.warn(answers[i].checked)
		if (answers[i].checked) {
			console.warn(answers[i].getAttribute('id'))
			document.getElementById("myresult").innerHTML +=  answers[i].getAttribute('id')
			document.getElementById("myresult").innerHTML += "\n"
		}
	}
	document.getElementById("myresult").style.visibility="visible";
	console.warn(answers) 
}

/*
function check() {

var question1 = document.charquiz.q1.value;
var question2 = document.charquiz.q2.value;
var question3 = document.charquiz.q3.value;
var question4 = document.charquiz.q4.value;
var question5 = document.charquiz.q5.value;
var question6 = document.charquiz.q6.value;
var question7 = document.charquiz.q7.value;
var question8 = document.charquiz.q8.value;
var cause = 0;


if (question1 == "animals") {
	cause++;
} else if (question1 == "environment") {
	cause++;
} else if (question1 == "disaster") {
	cause++;
} else if (question1 == "education") {
	cause++;
} else if (question1 == "health") {
	cause++;
} else if (question1 == "human") {
	cause++;
}

if (question2 == "animals") {
	cause++;
} else if (question2 == "environment") {
	cause++;
} else if (question2 == "disaster") {
	cause++;
} else if (question2 == "education") {
	cause++;
} else if (question2 == "health") {
	cause++;
} else if (question2 == "human") {
	cause++;
}

if (question3 == "animals") {
	cause++;
} else if (question3 == "environment") {
	cause++;
} else if (question3 == "disaster") {
	cause++;
} else if (question3 == "education") {
	cause++;
} else if (question3 == "health") {
	cause++;
} else if (question3 == "human") {
	cause++;
}

if (question4 == "animals") {
	cause++;
} else if (question4 == "environment") {
	cause++;
} else if (question4 == "disaster") {
	cause++;
} else if (question4 == "education") {
	cause++;
} else if (question4 == "health") {
	cause++;
} else if (question4 == "human") {
	cause++;
}

if (question5 == "animals") {
	cause++;
} else if (question5 == "environment") {
	cause++;
} else if (question5 == "disaster") {
	cause++;
} else if (question5 == "education") {
	cause++;
} else if (question5 == "health") {
	cause++;
} else if (question5 == "human") {
	cause++;
}

if (question6 == "animals") {
	cause++;
} else if (question6 == "environment") {
	cause++;
} else if (question6 == "disaster") {
	cause++;
} else if (question6 == "education") {
	cause++;
} else if (question6 == "health") {
	cause++;
} else if (question6 == "human") {
	cause++;
}

if (question7 == "animals") {
	cause++;
} else if (question7 == "environment") {
	cause++;
} else if (question7 == "disaster") {
	cause++;
} else if (question7 == "education") {
	cause++;
} else if (question7 == "health") {
	cause++;
} else if (question7 == "human") {
	cause++;
}

if (question8 == "animals") {
	cause++;
} else if (question8 == "environment") {
	cause++;
} else if (question8 == "disaster") {
	cause++;
} else if (question8 == "education") {
	cause++;
} else if (question8 == "health") {
	cause++;
} else if (question8 == "human") {
	cause++;
}


var messages = ["Animals!", "Environment!", "Disaster Relief!", "Education!", "Health!", "Humanitarianism!"];

var range;

if (cause = "animals") {
	range = messages[0];
}
if (cause = "environment") {
	range = messages[1];
}
if (cause = "disaster") {
	range = messages[2];
}
if (cause = "education") {
	range = messages[3];
}
if (cause = "health") {
	range = messages[4];
}
if (cause = "human") {
	range = messages[5];
}

	document.getElementById("myresult").style.visibility="visible";
	document.getElementById("myresult").innerHTML= "Your Cause Is " + cause; // numbercorrect

}
*/
