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
*/
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




