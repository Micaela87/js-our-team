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

    let teamCard = document.createElement('div');
    teamCard.classList.add('team-card');

    let cardImage = document.createElement('div');
    cardImage.classList.add('card-image');
    cardImage.innerHTML = `<img class='card-image' src='${member.profilePicture}' alt='${member.name}'/>`;

    let cardText = document.createElement('div');
    cardText.classList.add('card-text');
    cardText.innerHTML = `<h3>${member.name}</h3><p>${member.position}</p>`;

    teamCard.append(cardImage, cardText);

    teamContainer.append(teamCard);
}

addButton.addEventListener('click', function() {

    const newMember = {
        'name': newMemberName.value,
        'position': newMemberRole.value,
        'profilePicture': newMemberImage.value
    };

    teamMembers.push(newMember);
});