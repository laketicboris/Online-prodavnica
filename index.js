'use strict'

class Artikal{
    constructor(brojArtikla, naziv, cena, dostupan){
        this.brojArtikla= brojArtikla
        this.naziv= naziv
        this.cena=cena
        this.dostupan=dostupan
    }
}

const prviArtikal = new Artikal(1, "Monitor", 165, true)
const drugiArtikal = new Artikal(2, "TV", 650, false)
const treciArtikal = new Artikal(3, "Mis", 20, true)

const artikli = [prviArtikal, drugiArtikal, treciArtikal]

let table = document.querySelector("#artikli")

for (let artikal of artikli){
    let tr = document.createElement("tr")
    tr.style.border = '1px solid black'
}