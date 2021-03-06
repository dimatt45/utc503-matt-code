class ZooAnimal6 {
    // Attributs
    nom : string;  // ajout de private pour éviter modification extérieur (intégrite)
    age: number;
    poids: number;
    quantiteNourritureTotale: number;
    bienNourri: boolean;
    // Constructeur
    constructor (nom: string, age: number, poids: number) {
        this.nom = nom;
        this.age = age ;
        this.poids = poids ;
        this.quantiteNourritureTotale = 0 ;
        this.bienNourri = false ;
    }

    // Méthodes
    nouvelleJournee () {
        this.quantiteNourritureTotale = 0 ;
        this.bienNourri = false ;
    }
    recoitNourriture (quantite: number) {
        this.quantiteNourritureTotale += quantite;
        if (this.quantiteNourritureTotale > (this.poids /5)) {
            this.bienNourri = true ;
        } else {
            this.bienNourri = false ;
        }
    }
    etatAlimentation() {
        let etat = this.nom + ", " + this.age + " ans, a reçu " + this.quantiteNourritureTotale + "Kg de nourriture. "
        if (this.bienNourri) {
            etat += " " + this.nom + " est bien nourri." ;
        }
       return etat ;
    }
    
}

class ZooDauphin6 extends ZooAnimal6 {
    poissonPrefere: string ;

    constructor(nom: string, age: number, poids: number, poissonPrefere: string){
        super(nom, age, poids);
        this.poissonPrefere = poissonPrefere;
    }
    etatAlimentation() {
        let etat = this.nom + ", " + this.age + " ans, a reçu " + this.quantiteNourritureTotale + "Kg de nourriture. "
        if (this.bienNourri) {
            etat += " " + this.nom + " est bien nourri." ;
        }
        etat += " Son poisson préféré est " + this.poissonPrefere + "." ;
       return etat ;
    }
}
class ZooPanda6 extends ZooAnimal6 {
    plantePrefere: string ;

    constructor(nom: string, age: number, poids: number, plantePrefere: string){
        super(nom, age, poids);
        this.plantePrefere = plantePrefere;
    }
    etatAlimentation() {
        let etat = this.nom + ", " + this.age + " ans, a reçu " + this.quantiteNourritureTotale + "Kg de nourriture. "
        if (this.bienNourri) {
            etat += " " + this.nom + " est bien nourri." ;
        }
        etat += " Sa plante préféré est " + this.plantePrefere + "." ;
       return etat ;
    }
}

let flipper6 = new ZooDauphin6("Flipper", 30, 150, "hareng");
let oum6 = new ZooDauphin6("Oum", 20, 100, "sardine");
let pandi6 = new ZooPanda6("Pandi", 10, 80, "bambou");

flipper6.nouvelleJournee() ;
pandi6.nouvelleJournee() ;
oum6.nouvelleJournee()
flipper6.recoitNourriture(10) ;
pandi6.recoitNourriture(10) ;
flipper6.recoitNourriture(25) ;
oum6.recoitNourriture(30) ;

console.log(flipper6.etatAlimentation());
console.log(oum6.etatAlimentation());
console.log(pandi6.etatAlimentation());
