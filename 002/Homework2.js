// 1 uzduotis: Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//                (Kiek elementu)  (_ kitamojo vardas)
const skaiciai = [...Array(30)].map(_ => rand(5, 25));
console.log(skaiciai);

/*
//2. Uzduoties A) Naudodamiesi 1 uždavinio masyvu: Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;

let kiekis = 0;
skaiciai.forEach(a => a> 10 ? kiekis += 1 : null); // nulo reikia, kad nepyktu terneris (else). kiekis gali buti "kiekis++"
console.log(kiekis);

//2. Uzduoties B) Naudodamiesi 1 uždavinio masyvu: Raskite didžiausią masyvo reikšmę ir jos indeksą;
console.log( Math.max(...skaiciai), skaiciai.indexOf(Math.max(...skaiciai)));

//2. Uzduoties C) Naudodamiesi 1 uždavinio masyvu: Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;

let suma = 0;
console.log(skaiciai.map((a, i) => i % 2 ===0 ? suma+= a: null));

//2. Uzduoties D) Naudodamiesi 1 uždavinio masyvu: Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;


//2. Uzduoties E) Naudodamiesi 1 uždavinio masyvu: Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;

skaiciai.push(...([...Array(10)].map(_ => rand(5,25))));
console.log(skaiciai);

//2. Uzduoties F) Naudodamiesi 1 uždavinio masyvu: Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indeksų reikšmių, o kitas iš porinių (pagal neporinį-porinį indeksą, ne reikšmę);

//const [a,b] = [skaiciai.filter((_, i => i%2 === 0),skaiciai.filter((_, i => i%2 !==0)))];
//console.log([a,b]); //???? nezinau kas cia vyksta



let skaiciai3 = [];
let skaiciai4 = [];

//skaiciai.forEach() //nepabaigta

//2. Uzduoties G) Naudodamiesi 1 uždavinio masyvu: Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;

const maziausiasIndex = [];
skaiciai.forEach((a,i)=> {
    if(a > 10) {
        maziausiasIndex.push(i);
    }
});
console.log(maziausiasIndex);
//2. Uzduoties H) Naudodamiesi 1 uždavinio masyvu: Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;
*/

//3-4. Uzduotis

const mass4 = [...Array(200)].map(_ => ['A','B','C','D'][rand(0,3)]);


const rez = {A: 0, B: 0, C: 0, D: 0};

mass4.forEach(l => rez[l]++);


console.log(mass4);
console.log(rez);




console.log('--------------------------');

function raide(){
    const ABC = 'ABCD';
    return ABC[Math.floor(Math.random()*ABC.length)]
}

const mass1 = [...Array(200)].map(_ => raide());
const mass2 = [...Array(200)].map(_ => raide());
const mass3 = [...Array(200)].map(_ => raide());

console.log(mass1);
console.log(mass2);
console.log(mass3);
const massSum = [...Array(600)].map((_,i) => (mass1[i]+mass2[i]+mass3[i]));
console.log(massSum);

function charCount(str) {
    const raides = {
    };

    for (const symbols of str) {
        if (raides[symbols]) {
            raides[symbols]++;
        } else {
            raides[symbols] = 1;
        }
    }

    return raides;
}
console.log(Object.entries(charCount(mass1)).length); 
console.log(Object.entries(charCount(mass2)).length);
console.log(Object.entries(charCount(mass3)).length);

let uniquevalue = 0;

Object.entries(charCount(massSum)).forEach(n => n[1] === 1? uniquevalue++ :null);

console.log(uniquevalue);
console.log(Object.entries(charCount(massSum)).filter(n => n[1]===1));
console.log(Object.entries(charCount(massSum)));

//5. Uzduotis

console.log('---------5---------');

const uniArr1 = []
const uniArr2 = []
function arrfiller(emAr){
while (emAr.length != 100) {
    let n = rand(100,999);
    if (!emAr.includes(n)){
        emAr.push(n)
    }
}
return emAr
}
console.log(arrfiller(uniArr1));
console.log(arrfiller(uniArr2));

console.log('---------6---------');

const uniArr3 =[];
for (let i = 0; i < uniArr1.length - 1; i++){
    if (!uniArr2.includes(uniArr1[i])){
        uniArr3.push(uniArr1[i])
    }
}
console.log(uniArr3);

console.log('---------7---------');

const uniArr4 =[];
for (let i = 0; i < uniArr1.length - 1; i++){
    if (uniArr2.includes(uniArr1[i])){
        uniArr4.push(uniArr1[i])
    } 
}
console.log(uniArr4);

console.log('---------8---------');
const uniArr5 =[];
for (let i = 0; i < uniArr1.length - 1; i++){
        uniArr5[uniArr1[i]] = uniArr2[i];
}
console.log(uniArr5);

console.log('---------9---------');

const newarr1 = [...Array(2)].map(_ => rand(5,25));
for (let i = 0; i < 8; i++){
    newarr1.push(newarr1[i] + newarr1[i+1])
}
console.log(newarr1); 