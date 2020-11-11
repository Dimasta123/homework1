const soda=15.678;
const brendy=123.965;
const headPhones=90.2345;
const maxPrice =Math.max( soda, brendy, headPhones);
const minPrice =Math.min( soda, brendy, headPhones);
const oOsumm =Math.round((Math.floor(soda) + Math.floor(brendy)+ Math.floor(headPhones))/100)*100;
const summ =  soda + brendy + headPhones;
const moneyBack=(500 - summ ).toFixed(2);
const avgPrice=(summ/3).toFixed(2);


let discount = Math.random();
let clientDiscount = Math.floor(discount*100);
let clientPrice = (( 1-discount)*summ ).toFixed(2);
let fullMoneyGet = ((summ-clientPrice)/2).toFixed(2);
console.log( `максимальне число  ${maxPrice} `);
console.log( `мінімальне число ${minPrice} `);

console.log( `сума усіх товарів ${summ} `);
const roundSumm = Math.floor(soda) + Math.floor(brendy)+ Math.floor(headPhones) ;
console.log(`сумма без копійок ${roundSumm}`);

console.log(`округленная суммма ${oOsumm}`);
const pairNumber = roundSumm%2 == 0;
console.log(`Булеве зачення ${pairNumber}`);

console.log( `Решта при покупці ${moneyBack}`);
console.log(`Середня ціна товару ${avgPrice}`);


console.log(`знижка ${clientDiscount}%`);

console.log(`Ціна товарів зі знижкою ${clientPrice}`);
console.log(`Прибуток ${fullMoneyGet}`);
console.log(`максимальне число  ${maxPrice};
  мінімальне число ${minPrice};
  сума усіх товарів ${summ};
  сумма без копійок ${roundSumm};
  округленная суммма ${oOsumm};
  Булеве зачення ${pairNumber};
  Решта при покупці ${moneyBack};
  Середня ціна товару ${avgPrice};
  знижка ${clientDiscount}%;
  Ціна товарів зі знижкою ${clientPrice};
  Прибуток ${fullMoneyGet}`);
