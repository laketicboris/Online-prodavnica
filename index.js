'use strict'

function kreirajRed(artikal){
    
    let tr = document.createElement("tr")

    let brojArtikla = document.createElement("td")
    let naziv = document.createElement("td")
    let cena = document.createElement("td")
    let dostupan = document.createElement("td")

    brojArtikla.style.border = '1px solid black'
    naziv.style.border = '1px solid black'
    cena.style.border = '1px solid black'
    dostupan.style.border = '1px solid black'


    brojArtikla.textContent = artikal.brojArtikla
    naziv.textContent = artikal.naziv
    cena.textContent= artikal.cena + "e"
    dostupan.textContent= artikal.dostupan ? "DA" : "NE"


    if(!artikal.dostupan){
        tr.style.backgroundColor = "#f8cccc"
    }
    
    tr.appendChild(brojArtikla)
    tr.appendChild(naziv)
    tr.appendChild(cena)
    tr.appendChild(dostupan)

    return tr
}

function inicijalizujArtikle(artikal){
    let table = document.querySelector("#artikli")
    table.style.borderCollapse = "collapse";
    for(let artikal of artikli){
        let tr= kreirajRed(artikal)
        table.appendChild(tr)
    }

}

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

inicijalizujArtikle(artikli)
