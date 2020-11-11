const sodaPrice=15.678;
const brendyPrice=123.965;
const headPhonesPrice=90.2345;
const custumerCash =500;
const maxPrice =Math.max( sodaPrice, brendyPrice, headPhonesPrice);
const minPrice =Math.min( sodaPrice, brendyPrice, headPhonesPrice);
const fullPriceRound =Math.round((Math.floor(sodaPrice) + Math.floor(brendyPrice)+ Math.floor(headPhonesPrice))/100)*100;
const fullPrice =  sodaPrice + brendyPrice + headPhonesPrice;
const moneyBack=(custumerCash - fullPrice ).toFixed(2);
const avgPrice=(fullPrice/3).toFixed(2);
let discount = Math.random();
let clientDiscount = Math.floor(discount*100);
let clientPrice = (( 1-discount)*fullPrice ).toFixed(2);
let fullMoneyGet = ((fullPrice/2)-clientPrice).toFixed(2);
console.log( `максимальне число  ${maxPrice} `);
console.log( `мінімальне число ${minPrice} `);
console.log( `сума усіх товарів ${fullPrice} `);
const roundSumm = Math.floor(sodaPrice) + Math.floor(brendyPrice)+ Math.floor(headPhonesPrice) ;
console.log(`сумма без копійок ${roundSumm}`);
console.log(`округленная суммма ${fullPriceRound}`);
const pairNumber = roundSumm%2 == 0;
console.log(`Булеве зачення ${pairNumber}`);
console.log( `Решта при покупці ${moneyBack}`);
console.log(`Середня ціна товару ${avgPrice}`);
console.log(`знижка ${clientDiscount}%`);
console.log(`Ціна товарів зі знижкою ${clientPrice}`);
console.log(`Прибуток ${fullMoneyGet}`);
console.log(`максимальне число  ${maxPrice};
  мінімальне число ${minPrice};
  сума усіх товарів ${fullPrice};
  сумма без копійок ${roundSumm};
  округленная суммма ${fullPriceRound};
  Булеве зачення ${pairNumber};
  Решта при покупці ${moneyBack};
  Середня ціна товару ${avgPrice};
  знижка ${clientDiscount}%;
  Ціна товарів зі знижкою ${clientPrice};
  Прибуток ${fullMoneyGet}`);
