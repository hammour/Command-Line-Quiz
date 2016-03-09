
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
var question2 = ['Where in your HTML document should you include this code?  \<!DOCTYPE html>',
	 '1. In the body section',
	 '2. The very first line',
	 '3. The last line',
	 '4. It doesn\'t matter',
	 2];
 var question3 = ['What is the function of the following tag ?\<title> Jane\'s Website </title>',
	 '1. It shows the server how to index the website',
	 '2. It shows the server how to title the website',
	 '3. It means the language cannot be interpreted by a web browser',
	 '4. It was developed by a community (rather than a single architect) over time',
	 2];
 var question4 = ['HTML is a \"markup language.\" What does that mean\?',
	 '1. It turns text into images, links, tables, lists more',
	 '2. It shows meta information about the title',
	 '3. It means the language cannot be interpreted by a web browser',
	 '4. It stores the webpage title for browser and search engine results',
	 4];
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


for (var x=1; x<15; x++){
	console.log("Question No. "+ x);
	for (var i=0; i<5; i++){
		
		console.log (question[x][i]);
		

	}
	var ans = prompt("enter the correct answer 1 to 4");

	if (ans == question[x][5]){
		correct++;
		console.log("your answer is correct!!");
	} else {console.log("wrong answer.");
			wrong++;
		}
} 

console.log("your got "+ correct+" correct answers and "+wrong+" Wrong answers");
