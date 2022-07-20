// 1 Uzduotis

/*class Kibiras1 {
  constructor () {
      this.akmenuKiekis = 0;
  };
  prideti1Akmeni() {
      this.akmenuKiekis += 1;
      return `Pridetas 1 akmuo`
  };
  pridetiDaugAkmenu(num) {
      this.akmenuKiekis += num;
      return `prideta akmenu: ${num}`;
  };
  kiekPririnktaAkmenu() {
      return this.akmenuKiekis
  };
};

const Kibiras = new Kibiras1;
console.log(Kibiras.prideti1Akmeni());
console.log(Kibiras.pridetiDaugAkmenu(5));

console.log('----------');

// 2 Uzduotis

class Pinigine1 {
    constructor () {
        this.popieriniaiPinigai = []
        this.metaliniaiPinigai = []
    }
    ideti(num) {
        if (num > 2) {
            this.popieriniaiPinigai.push(num)
            return `Įdėta: ${num} Pinigu`;
        } else {
            this.metaliniaiPinigai.push(num)
            return `Įdėta: ${num} Pinigu`;
        }    
    }
    monetos(){
        return ` Išviso: ${this.metaliniaiPinigai.length} Monetų`
    }
    kupiuros(){
        return ` Išviso: ${this.popieriniaiPinigai.length} Kupiūrų`
    }
    skaiciuoti() {
        return `Viso pinigu yra: ${this.metaliniaiPinigai.reduce((a,b) => a + b) + this.popieriniaiPinigai.reduce((a,b) => a + b)}`
    }
}

const Pinigine = new Pinigine1;

console.log(Pinigine.ideti(1));
console.log(Pinigine.ideti(1));
console.log(Pinigine.ideti(50));
console.log(Pinigine.ideti(2));
console.log(Pinigine.ideti(20));
console.log(Pinigine.ideti(5));
console.log(Pinigine.ideti(1));
console.log(Pinigine.ideti(10));
console.log(Pinigine.ideti(2));
console.log(Pinigine.kupiuros());
console.log(Pinigine.monetos());
console.log(Pinigine.skaiciuoti());

console.log('----------');

*/