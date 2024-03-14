process.stdout.write('Hello\n');

const questions = ['What is your name?', 'How old are you?', 'where are you from?'];

const answers = [];

function ask(index = 0) {
	process.stdout.write(`\n\n ${questions[index]}`);
	process.stdout.write(' > ');
}

ask();

process.stdin.on('data', (data) => {
	answers.push(`${data.toString().trim()}\n`);
	if (answers.length < questions.length) {
		ask(answers.length);
	} else {
		process.exit();
	}
});

process.on('exit', () => {
	console.log(answers);
});
