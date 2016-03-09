
//document.write(" This is a Quiz to help you better understand how did you perform in your first week of Front-End Development.")
//var name = prompt("What is your name?");
var correct = 0;
var wrong = 0;
var question1 = ['HTML is a \"markup language.\" What does that mean\?',
	 '1. It turns text into images, links, tables, lists more',
	 '2. It\'s used to \"mark up" existing code',
	 '3. It means the language cannot be interpreted by a web browser',
	 '4. It was developed by a community (rather than a single architect) over time',
	 2];
var question2 = ['HTML is a \"markup language.\" What does that mean\?',
	 '1. It turns text into images, links, tables, lists more',
	 '2. It\'s used to \"mark up" existing code',
	 '3. It means the language cannot be interpreted by a web browser',
	 '4. It was developed by a community (rather than a single architect) over time',
	 2];
 var question3 = ['HTML is a \"markup language.\" What does that mean\?',
	 '1. It turns text into images, links, tables, lists more',
	 '2. It\'s used to \"mark up" existing code',
	 '3. It means the language cannot be interpreted by a web browser',
	 '4. It was developed by a community (rather than a single architect) over time',
	 2];
 var question4 = ['HTML is a \"markup language.\" What does that mean\?',
	 '1. It turns text into images, links, tables, lists more',
	 '2. It\'s used to \"mark up" existing code',
	 '3. It means the language cannot be interpreted by a web browser',
	 '4. It was developed by a community (rather than a single architect) over time',
	 2];
 var question5 = ['HTML is a \"markup language.\" What does that mean\?',
	 '1. It turns text into images, links, tables, lists more',
	 '2. It\'s used to \"mark up" existing code',
	 '3. It means the language cannot be interpreted by a web browser',
	 '4. It was developed by a community (rather than a single architect) over time',
	 2];
 var question6 = ['HTML is a \"markup language.\" What does that mean\?',
	 '1. It turns text into images, links, tables, lists more',
	 '2. It\'s used to \"mark up" existing code',
	 '3. It means the language cannot be interpreted by a web browser',
	 '4. It was developed by a community (rather than a single architect) over time',
	 2];
 var question7 = ['HTML is a \"markup language.\" What does that mean\?',
	 '1. It turns text into images, links, tables, lists more',
	 '2. It\'s used to \"mark up" existing code',
	 '3. It means the language cannot be interpreted by a web browser',
	 '4. It was developed by a community (rather than a single architect) over time',
	 2];
 var question8 = ['HTML is a \"markup language.\" What does that mean\?',
	 '1. It turns text into images, links, tables, lists more',
	 '2. It\'s used to \"mark up" existing code',
	 '3. It means the language cannot be interpreted by a web browser',
	 '4. It was developed by a community (rather than a single architect) over time',
	 2];
 var question9 = ['HTML is a \"markup language.\" What does that mean\?',
	 '1. It turns text into images, links, tables, lists more',
	 '2. It\'s used to \"mark up" existing code',
	 '3. It means the language cannot be interpreted by a web browser',
	 '4. It was developed by a community (rather than a single architect) over time',
	 2];
var question10 = ['HTML is a \"markup language.\" What does that mean\?',
	 '1. It turns text into images, links, tables, lists more',
	 '2. It\'s used to \"mark up" existing code',
	 '3. It means the language cannot be interpreted by a web browser',
	 '4. It was developed by a community (rather than a single architect) over time',
	 2];
var question11 = ['HTML is a \"markup language.\" What does that mean\?',
	 '1. It turns text into images, links, tables, lists more',
	 '2. It\'s used to \"mark up" existing code',
	 '3. It means the language cannot be interpreted by a web browser',
	 '4. It was developed by a community (rather than a single architect) over time',
	 2];
 var question12 = ['HTML is a \"markup language.\" What does that mean\?',
	 '1. It turns text into images, links, tables, lists more',
	 '2. It\'s used to \"mark up" existing code',
	 '3. It means the language cannot be interpreted by a web browser',
	 '4. It was developed by a community (rather than a single architect) over time',
	 2];
 var question13 = ['HTML is a \"markup language.\" What does that mean\?',
	 '1. It turns text into images, links, tables, lists more',
	 '2. It\'s used to \"mark up" existing code',
	 '3. It means the language cannot be interpreted by a web browser',
	 '4. It was developed by a community (rather than a single architect) over time',
	 2];
 var question14 = ['HTML is a \"markup language.\" What does that mean\?',
	 '1. It turns text into images, links, tables, lists more',
	 '2. It\'s used to \"mark up" existing code',
	 '3. It means the language cannot be interpreted by a web browser',
	 '4. It was developed by a community (rather than a single architect) over time',
	 2];
 var question15 = ['HTML is a \"markup language.\" What does that mean\?',
	 '1. It turns text into images, links, tables, lists more',
	 '2. It\'s used to \"mark up" existing code',
	 '3. It means the language cannot be interpreted by a web browser',
	 '4. It was developed by a community (rather than a single architect) over time',
	 2];

 var question = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11, question12, question13, question14, question15];


for (var l=0; l>15; l++){
	for (var i=0; i<5; i++){
		console.log (question[l][i]);
	}
	var ans = prompt("enter the correct answer 1 to 4");

	if (ans == question[l][5]){
		correct++;
		console.log("your answer is correct!!");
	} else {console.log("wrong answer.");
			wrong++;
		}
} 