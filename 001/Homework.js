// 1 uzduotis: Naudokite funkcija rand(). Sukurkite du kintamuosius ir naudodamiesi funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės.
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
/*function divide(a, b) {
    if (a / b < Number.MIN_VALUE) {
      return '0';
    }
    return (a / b);
  }

let a = rand (0,4)
let b = rand (0,4)
console.log(divide(a,b));

// 2 uzduotis: Naudokite funkcija rand(). Sukurkite tris kintamuosius ir naudodamiesi funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir su console.log() atspausdinkite kintąmąjį turintį vidurinę reikšmę.


const second = [...Array(3)].map(_ => rand(0, 25));

second.sort((a, b) => a - b);
console.log(second);
console.log(second[1]);

// 3 uzduotis: Įvedami skaičiai -a, b, c –kraštinių ilgiai, trys kintamieji (naudokite ​rand()​ funkcija nuo 1 iki 10). Parašykite skriptą, kuris nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų naudojant console.log(). 

let a = rand (1,10)
let b = rand (1,10)
let c = rand (1,10)

if (a + b > c && b + c > a && a + c > b) {
    console.log('veikia');
    } else
        console.log('neveikia');
    

// 4 uzduotis: Sukurkite keturis kintamuosius ir ​rand()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. Rezultatus atspauzdinkite su console.log()


const fourth = [...Array(4)].map(_ => rand(0, 2));
const count = fourth.reduce((accumulator, value) => {
    return {...accumulator, [value]: (accumulator[value] || 0) + 1};
  }, {});

console.log(count);


// 5 uzduotis: Naudokite funkcija rand(). Atspausdinkite 3 skaičius naudodami console.log() nuo -10 iki 10. Prie skaičių mažesnių už 0 iš abiejų pusių atspauzdinkite “+” simbolius,  didesnių už 0 iš abiejų pusių atspauzdinkite “-” simbolius, o prie 0 “*” simbolius

const fifth = [...Array(3)].map(_ => rand(-10, 10));

for(num of fifth){
    if(num < 0 ){
        console.log(`+${num}+`);
    } else if (num > 0){
        console.log(`-${num}-`);
    }else{
        console.log(`*${num}*`);
    }
}
console.log(fifth);

*/
// 6 uzduotis: Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite skriptą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą su console.log() kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​rand()​ funkcija nuo 5 iki 3000.

let zvakesKaina = rand(5,3000)
if (zvakesKaina < 1000) {
    console.log(`užsakyta: ${zvakesKaina} | Kaina: ${zvakesKaina}`);
} else if (zvakesKaina > 2000) {
    console.log(`užsakyta: ${zvakesKaina} | Kaina: ${zvakesKaina*0.96}`);
} else {
    console.log(`užsakyta: ${zvakesKaina} | Kaina: ${zvakesKaina*0.97}`);
}
/*
// 7 uzduotis: Naudokite funkcija rand(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Ir aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite su console.log()
//mano variantas.
const a = rand(0,100);
const b = rand(0,100);
const c = rand(0,100);
console.log(a,b,c);

 if (a,b,c > 10) {
    console.log(`(${a} + ${b} + ${c}) / 3 = ${(a+b+c)/3}`);
 } else if (a,b,c < 10){
    console.log(`Mažiau 10`);
 } else if (a,b,c > 90) {
    console.log(`Daugiau 90`);
 }


 
console.log('------');

//  Ženkos variantas.
let arry7 = [];
let sum =0;
let s =0;
arry7.push(a7 = rand(0,100));
arry7.push(b7 = rand(0,100));
arry7.push(c7 = rand(0,100));
console.log((a7+b7+c7)/3);
for(n of arry7){
  if (n > 10 && n < 90){
      sum += n;
      s +=1;
  }
}
console.log(sum/s);
*/