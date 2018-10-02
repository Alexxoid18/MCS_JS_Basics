const answer = prompt('Сколько вам лет?');
let number = parseInt(answer);
if (answer >= 0) {
	console.log(number);
}
else {
	console.log(Math.abs(number));
}