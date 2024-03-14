// console.log(process.argv);

function getValues(flag) {
	const valueIndex = process.argv.indexOf(flag) + 1;

	return process.argv[valueIndex];
}

const name = getValues('--name');
const message = getValues('--message');

console.log(name, message);
