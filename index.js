const readlineSync=require('readline-sync');
const chalk = require('chalk');
const log = console.log;
var currPlayer={score: "0",name:""};



function emptyLine(){
	log();
}

function dottedLine(){
	emptyLine();
	log(chalk.bold.magentaBright("-----------------------------------------"));
	emptyLine();
}

function welcome(){
	log(chalk.green.bold("Welcome to OnePiece Quiz"));
	dottedLine();
}

function takeName(){
	currPlayer.name = readlineSync.question(chalk.blueBright.bold("Please enter your name! "));
	emptyLine();
	log(chalk.bold.yellowBright("Welcome "+ currPlayer.name+" ☺️"));
	dottedLine();
}

function rules(){
	log(chalk.bold.greenBright("How to play this game ??"));
	log(chalk.cyanBright.bold("1 Choose the option form 1-4"));
	log(chalk.cyanBright.bold("2 Submit answer by clicking Enter key"));
	log(chalk.cyanBright.bold("3 Have fun!!"));
	dottedLine();
}

function play(question,options,answer){
	emptyLine();
	log(chalk.green.bold(question));
	for(var i=0;i<4;i++){
		log(chalk.cyan.bold(i+1+" "+options[i]));
	}

	var userAnswer=readlineSync.question(chalk.green("choose your answer: "));
	if(answer === userAnswer){
		currPlayer.score = parseInt(currPlayer.score)+1;
	}
	else{
		log(chalk.redBright("Oops!! wrong answer 😑"));
	}

	log(chalk.blueBright("Your current score is : "+ currPlayer.score));
	dottedLine();
}

var questions=[
	{
		question: "1:Who promised that they would never lose another fight until they defeated a certain someone?",
		options:["Luffy","Sanji","Zoro","Usopp"],
		answer:"3"
	},
	{
		question: "2: Who was the first Admiral to be shown in the series?",
		options:["Akainu","Aokiji","Kizaru","Sengoku"],
		answer:"2"
	},
	{
		question:"Who was the first member of the SH crew to try and recruit a new member besides Luffy?",
		options:["Nami","Sanji","Zoro","Usopp"],
		answer:"1"
	},
	{
		question:"Who was the first villain to defeat Luffy? ",
		options:["Arlong","Buggy","Don Krieg","Crocodile"],
		answer:"4"
	},
	{
		question:"How long did Portgas D. Rouge's pregnancy last (in months)?",
		options:["9","12","20","18"],
		answer:"3"
	},
	
];




welcome();
takeName();
rules();
for(var i=0;i<questions.length;i++){
	var question=questions[i].question;
	var options=questions[i].options;
	var answer=questions[i].answer;

	play(question,options,answer);
}

log(chalk.bold.cyanBright("Your Final score is: ")+chalk.bold.yellowBright(currPlayer.score)+"/"+questions.length);
dottedLine();



