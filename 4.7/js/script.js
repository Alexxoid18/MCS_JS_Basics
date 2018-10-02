let money = parseInt(prompt('Сколько у вас денег'));
let apples =  parseInt(prompt ('Сколько вы купили яблок'));
let loafs = parseInt(prompt ('Сколько вы купили батонов хлеба'));
let applesPrice = parseInt(prompt ('Сколько стоит одно яблоко')) * apples;
let loafsPrice = parseInt(prompt ('Сколько стоит один батон')) * loafs;
let expenses = applesPrice + loafsPrice;

let haveEnough = (money, apples, loafs, applesPrice, loafsPrice, expenses) => 
{
	if (expenses <= money) {
		document.body.innerHTML = 'Вам хватает денег на покупки';
	} else {
		document.body.innerHTML = 'Вам не хватает денег на покупки';
	}
}

haveEnough(money, apples, loafs, applesPrice, loafsPrice, expenses);