// Créer la table en DOM...
// Create the table in DOM...

const body = document.body;
const header = document.createElement('header');
const section = document.createElement('section');
const table = document.createElement('table');
const caption = document.createElement('caption');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
const addButton = document.getElementById('create_Table');
const addButtonColor = document.getElementById('changeCaseColor');
const inCaptionTable = document.getElementById('nomTable');
const inNbrLignes = document.getElementById('nbrLignes');
const inNbrCollones = document.getElementById('nbrColonnes');
const choixM = document.getElementById('choixM');
const inText = document.getElementById('inText');
const colorP = document.getElementById('pickColor');
const colorPolice = document.getElementById('pickColorPolice');
const caseIn = document.getElementsByClassName('caseInput');
const InputCase = document.querySelector('#numInCase');

body.appendChild(header);
body.appendChild(section);
section.appendChild(table);
table.appendChild(caption);

table.appendChild(thead);
table.appendChild(tbody);

// Conception de la table ...
// Table design...
const createTable = (container, onPart, nbrLignes, nbrCollones) => {

    for (let i = 0; i < nbrLignes; i++) {
        const tr1 = document.createElement('tr');
        container.appendChild(tr1);
        for (let j = 0; j < nbrCollones; j++) {
            const td1 = document.createElement('td');
            td1.id = 'case' + onPart + i + 'line' + j;
            tr1.appendChild(td1);
        }
    }


}

// Event Listener sur le Bouton de création de table...
// Event Listener on the Create Table Button...

addButton.addEventListener('click', () => {
    if (inNbrLignes.value != null) {
        caption.innerHTML = inCaptionTable.value;
        createTable(thead, 1, 1, inNbrCollones.value);
        createTable(tbody, 2, inNbrLignes.value - 1, inNbrCollones.value);
    }


    inCaptionTable.value = '';
    inNbrLignes.value = '';
    inNbrCollones.value = '';

});

// Event Listener sur la création de l'input pour l'entrez du texte... 
// Event Listener on the creation of the input to enter the text...

table.addEventListener('click', (event) => {
    const inputInCase = document.createElement('input');
    if (event && !event.ctrlKey) {
        if (event.target.id != 'click') {
            InputCase.value = event.target.id;

            inputInCase.id = "inputInCase";
            table.querySelector('#' + InputCase.value).appendChild(inputInCase);
        }

    }


});

// Event Listener sur confirmation du texte à entrez...
// Event Listener on confirmation of the text to enter...

table.addEventListener('keyup', (event) => {
    if (event.key == 'Enter') {
        const inTextCase = table.querySelector('#inputInCase');
        const placeValue = event.target.parentElement;
        placeValue.innerText = inTextCase.value;
    }


});

// Event Listener sur le changement de couleur de case et de l'écriture...
// Event Listener on changing box color and writing...

addButtonColor.addEventListener('click', () => {
    const placeIn = table.querySelector('#' + InputCase.value);
    placeIn.style.backgroundColor = colorP.value;
    placeIn.style.color = colorPolice.value;
})