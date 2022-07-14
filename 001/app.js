
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//const mas = [...Array(10)].map(_ => rand(7, 77));

//const mas = [];

//mas[0] = 'Petras';
//mas[1] = 'Ieva';
//mas[3] = 'Deimante';

//mas.push('Bebras'); // nustume į prieki (+ vieta) 
//mas.unshift('Kurmis');// nustume į galą (0 vieta)


//for (let i = 0; i < 10; i++) {
//    mas.push(rand(7,77));
//}
//console.log(mas);
//const cats = ['Murka', 'Pilkis', 'Rainius'];
//console.log(cats[rand(0, 2)]);



//for (let i = 0; i < 10; i++) {
//    console.log(mas[i])
//}

//mas.forEach(n => console.log(n));
//for (let i = 0; i < 2; i++) {
    
//}

//const rndm = rand(0, 4)
//console.log(rndm)