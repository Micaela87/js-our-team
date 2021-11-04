/*
Ricreiamo le card del nostro team aggiungendo al layout di base fornito, il nostro javascript in cui:
- Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. (nel nostro file js)
Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.
- Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.
*/

// DOM nodes
const teamContainer = document.querySelector('.team-container');
const addButton = document.getElementById('addMemberButton');
const newMemberName = document.getElementById('name');
const newMemberRole = document.getElementById('role');
const newMemberImage = document.getElementById('image');

const teamMembers = [
    {
        'profilePicture': 'img/wayne-barnett-founder-ceo.jpg',
        'name': 'Wayne Barnett',
        'position': 'Founder & CEO'
    },
    {
        'profilePicture': 'img/angela-caroll-chief-editor.jpg',
        'name': 'Angela Caroll',
        'position': 'Chief Editor'
    },
    {
        'profilePicture': 'img/walter-gordon-office-manager.jpg',
        'name': 'Walter Gordon',
        'position': 'Office Manager'
    },
    {
        'profilePicture': 'img/angela-lopez-social-media-manager.jpg',
        'name': 'Angela Lopez',
        'position': 'Social Media Manager'
    },
    {
        'profilePicture': 'img/scott-estrada-developer.jpg',
        'name': 'Scott Estrada',
        'position': 'Developer'
    },
    {
        'profilePicture': 'img/barbara-ramos-graphic-designer.jpg',
        'name': 'Barbara Ramos',
        'position': 'Graphic Designer'
    }
];

for (let i = 0; i < teamMembers.length; i++) {
    let member = teamMembers[i];

    renderObjData(member);
}

addButton.addEventListener('click', function() {

    const newMember = {
        'name': newMemberName.value,
        'position': newMemberRole.value,
        'profilePicture': newMemberImage.value
    };

    teamMembers.push(newMember);
    
    renderObjData(newMember);

    teamContainer.append(teamCard);
});

// helper function

// renders object data
function renderObjData(object) {

    let teamCard = createNewElement('div', 'team-card');

    let cardImage = createNewElement('div', 'card-image');

    let cardText = createNewElement('div', 'card-text');

    cardImage.innerHTML = `<img src='${object.profilePicture}' alt='${object.name}'/>`;

    cardText.innerHTML = `<h3>${object.name}</h3>
        <p>${object.position}</p>`;

    teamCard.append(cardImage, cardText);

    teamContainer.append(teamCard);
}

// creates new DOM elements
function createNewElement(element, elementClass) {
    let newElement = document.createElement(element);
    newElement.classList.add(elementClass);

    return newElement;
}