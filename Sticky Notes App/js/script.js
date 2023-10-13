const containerElement = document.getElementById('container');
const btnAdd = document.getElementsByClassName('btnAdd')[0];

function getAppStorage() {
    return JSON.parse(localStorage.getItem('sticky-notes-app') || "[]");
}

getAppStorage().forEach(element => {
    //console.log(element.content);
    const text_element = createTextElement(element.id, element.content);
    containerElement.insertBefore(text_element, btnAdd);
});

function createTextElement(id, content) {
    const textElement = document.createElement('textarea');
    textElement.classList.add('sticky');
    textElement.value = content;
    textElement.placeholder = 'Enter your notes here';
    return textElement;
}

function AddSticky() {
    const notes = getAppStorage();
    const notesObject = {
        id: Math.floor(Math.random()*10000),
        content: ""
    }

    const text_element = createTextElement(notesObject.id, notesObject.content);
    containerElement.insertBefore(text_element, btnAdd);

    notes.push(notesObject);
    saveNotes(notes);
}

btnAdd.addEventListener('click', ()=>AddSticky());


function saveNotes(notes) {
    localStorage.setItem('sticky-notes-app', JSON.stringify(notes));
}


/*
[
    {"id": 1, "content": "Note 1"},
    {"id": 2, "content": "Note 2"},
    {"id": 3, "content": "Note 3"}
]
*/