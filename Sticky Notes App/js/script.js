const containerElement = document.getElementById('container');
const btnAdd = document.querySelector('.btnAdd'); // Use querySelector to get the first matching element

function getAppStorage() {
    return JSON.parse(localStorage.getItem('sticky-notes-app')) || [];
}

getAppStorage().forEach(element => {
    const text_element = createTextElement(element.id, element.content);
    containerElement.insertBefore(text_element, btnAdd);
});

function createTextElement(id, content) {
    const textElement = document.createElement('textarea');
    textElement.classList.add('sticky');
    textElement.value = content;
    textElement.placeholder = 'Enter your notes here';

    textElement.addEventListener('input', () => {
        updateNotes(id, textElement.value);
    });

    textElement.addEventListener('dblclick', () => {
        const check = confirm('Are you sure to delete?');
        if (check) {
            deleteNotes(id, textElement);
        }
    });

    return textElement;
}

function AddSticky() {
    const notes = getAppStorage();
    const notesObject = {
        id: Math.floor(Math.random() * 10000),
        content: ""
    };

    const text_element = createTextElement(notesObject.id, notesObject.content);
    containerElement.insertBefore(text_element, btnAdd);

    notes.push(notesObject);
    saveNotes(notes);
}

btnAdd.addEventListener('click', AddSticky); // Removed the unnecessary arrow function

function saveNotes(notes) {
    localStorage.setItem('sticky-notes-app', JSON.stringify(notes));
}

function updateNotes(id, content) {
    const notes = getAppStorage();
    const updateElement = notes.find((note) => note.id === id);
    if (updateElement) {
        updateElement.content = content;
        saveNotes(notes);
    }
}

function deleteNotes(id, content) {
    const notes = getAppStorage().filter((note) => note.id !== id);
    saveNotes(notes);

    containerElement.removeChild(content);
}

/*
[
    {"id": 1, "content": "Note 1"},
    {"id": 2, "content": "Note 2"},
    {"id": 3, "content": "Note 3"}
]
*/