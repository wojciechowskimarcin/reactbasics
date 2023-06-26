//klasy
class Product { // deklaracja klasy

}

const phone = new Product(); // utworzenie obiektu (inaczej instancji, egzemplarza klasy)

//wywołując klasy wywołujemy jej konstruktor (constructor)
class Produkt { // deklaracja klasy

    constructor(name, describe, producent){
        this.name = name;
        this.describe = describe;
        this.producent = producent;
    }
}

const computer = new Produkt("GL65 Leopard", "Laptop MSI GL Leopard z procesorem i9", "MSI");
console.log(computer);

class produkt { // deklaracja klasy

    constructor(name, describe, producent="Bakoma"){
        this.name = name;
        this.describe = describe;
        this.producent = producent;
        this.showDescribe = () => {console.log(this.describe);};
    }
    showDescribe = () =>{console.log("To jest opis:",this.describe); return -1;}; // zwracanie 'undefined' jest standardową rzeczą w Chrome, Firefox
    showDescribeConsturctor = this.showDescribe;
    
}

const joghurt = new produkt("Jogurt naturalny", "Jogurt naturalny 300g 0.5%", "Bacoma");
joghurt.showDescribe();
joghurt.showDescribeConsturctor();


class jogurt extends produkt {   // Dziedziczenie 
    constructor(name="", describe="", producent="", ingredients=[] ){//wartość domyślna
        super(name, describe, producent); // wywołanie klasy nadrzędnej
        this.ingredients = ingredients;
    }
    showIngredients = () => console.log(`Skład jogurtu '${this.name}': ${this.ingredients}`); // dajemy osobno metodę a nie w konstruktorze bo podczas tworzenia obiektu zawierałby tą metodę 
}

const joghurtKrasnystaw = new jogurt(
                            "Krasnystaw Jogurt naturalny 175 g",
                            "Opis",
                            "Krasnystaw",
                            ["mleko", "mleko w proszku", "białka mleka", "wapń", "Lactobacillus acidophilus LA-5 i Bifidobacterium BB-12"]
                            );
joghurtKrasnystaw.showIngredients();

// this - zależne jest od kontekstu wywołania

const flower =  {
    name:  "Róża francuska",
    describe: "opis róży", 
    producent: "Flower Inc.",
    latinName: "Rosa rugosa",

    shownameflower(){console.log(this.latinName);}, //undefined
    showNameflower(){console.log(this.latinName);}, //potrzeba bindowania
    showNameFlower: () => {console.log(this.latinName);}  // brak potrzeby bindowania przy ()=>
};

flower.showNameFlower(); // undefined
const flowerLatinName=flower.showNameflower.bind(flower);
flowerLatinName();
flower.shownameflower();
