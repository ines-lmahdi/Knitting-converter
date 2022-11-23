const { response } = require("express");

fetch('http://localhost:3000/api/products/')
.then(response=> {
    if (response.ok){
        return response.json();
    }
    throw new Error('Impossible de charger les produits');
})
.then(data =>{
    for(const product of data){
    let woolSelector = document.getElementById('wool');
    let newOption = document.createElement('option');
    const allWool = productData.matiere;

    for(let element of allWool){
        let newWool = new Option(element);
        newOption.setAttribute('value',element);
        const select = document.querySelector('select');
        select.add(newWool,undefined);
    };

    /*let Selector = document.getElementById('wool');

    for(let element of allWool){
        let newWool = new Option(element);
        newOption.setAttribute('value',element);
        const select = document.querySelector('select');
        select.add(newWool,undefined);
    };*/
}})

/* Lorsque la matière est selectionnée, afficher dans les sections 2 tous les laines de la matiere en question*/

/* Créer une focntion qui calcule:
    10 /productData.di