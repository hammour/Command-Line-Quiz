
//document.write(" This is a Quiz to help you better understand how did you perform in your first week of Front-End Development.")
//var name = prompt("What is your name?");
var correct = 0;
var wrong = 0;
var question1 = ['This HTML anchor tag will not work. Why? <a href=https://www.codecademy.com/>click here</a>',
	 '1. The href is missing a closing tag',
	 '2. The link is incorrect. It should be `ref,` not `href`',
	 '3. There is no anchor tag in the code',
	 '4. The URL is missing quotation marks',
	 4];
var question2 = ['What element(s) will you to find inside a body tag?',
	 '1. A doctype declaration',
	 '2. Head and title elements',
	 '3. All of these are correct',
	 '4. Headings, paragraphs, links and images',
	 4];
 var question3 = ['What is the difference between HTML and CSS?',
	 '1. CSS structures a webpage. HTML strictly provides styling',
	 '2. There is no difference',
	 '3. CSS is one type of HTML',
	 '4. HTML gives a webpage structure. CSS provides styling.',
	 4];
 var question4 = ['Where in your HTML document should you include this code? <!DOCTYPE html>',
	 '1. It doesn\'t matter',
	 '2. The very first line',
	 '3. The last line',
	 '4. In the body section',
	 2];
 var question5 = ['For this tag to display an image, what must you replace "#" with?   <img src="#"> ',
	 '1. An image URL',
	 '2. An image anchor tag',
	 '3. The image vector',
	 '4. An image file size',
	 1];
 var question6 = ['By default, HTML elements have a ____ value for the `position` property.',
	 '1. relative',
	 '2. absolute',
	 '3. static',
	 '4. None of the above',
	 3];
 var question7 = ['By default, div elements do which of the following?',
	 '1. Take up the full width of the webpage',
	 '2. Are centered on the webpage',
	 '3. Take up exactly 1/4 of the webpage',
	 '4. Take up 1/2 of the webpage',
	 1];
 var question8 = ['Because of its `clear` property, this `footer` div will: #footer \{\
    border: 1px solid blue;\
    height: 50px;\
    clear: both;\
\}',
	 '1. Move below elements with a `float: left` property',
	 '2. Float to the top of the webpage',
	 '3. Move below all floating elements on the webpage',
	 '4. Overlap surrounding elements by 50px',
	 3];
 var question9 = ['Complete this sentence: "Margin is..."',
	 '1. ..the innermost layer of the HTML element',
	 '2. ...the negative value of an HTML element',
	 '3. ...the space around an HTML element',
	 '4. ...the content of an HTML element',
	 3];
var question10 = ['How will divs be arranged according to this code? div \{\
    height: 50px\;\
    width: 100px\;\
    display: inline-block\;\}',
	 '1. As blocks sitting next to each other on the same line',
	 '2. As blocks that overlap each other by 50px',
	 '3. As blocks that overlap each other by 100px',
	 '4. As blocks, each taking up its own line',
	 1];
var question11 = ['Which of the following is the correct use of the confirm dialog?',
	 '1. confirm[“Hello world”];',
	 '2. confirm(“Hello world”);',
	 '3. confirm. “Hello world”;',
	 '4. confirm.(“Hello world”);',
	 2];
 var question12 = ['What is the function of the prompt dialog?',
	 '1. To ask the user for an input',
	 '2. To ask the user for advice',
	 '3. To ask the user to confirm an action',
	 '4. To display a help window',
	 2];
 var question13 = ['Which of the following returns \'he\'?',
	 '1. \'hello world\'.substring(0,2);',
	 '2. \'hello world\'.(substring 1,2);',
	 '3. \'hello world\'.(substring 0,1);',
	 '4. \'hello world\'.(substring 1,2);',
	 1];
 var question14 = ['Which statement returns the value of 2?',
	 '1.                       7 + 3 / 5',
	 '2.                       4 + (4 / 8)',
	 '3.                       \'hi\'.length - 1 * 2',
	 '4.                       (3 + 1) / \'hi\'.length',
	 4];
 var question15 = ['Which of the following is not a comparator operation in JavaScript?',
	 '1. >',
	 '2. ===',
	 '3. <==',
	 '4. !==',
	 3];

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
