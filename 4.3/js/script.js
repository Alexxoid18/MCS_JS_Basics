const answer = prompt('Сколько вам лет?');
let number = parseInt(answer);
(answer >= 0) ? console.log(number) : console.log(Math.abs(number));
