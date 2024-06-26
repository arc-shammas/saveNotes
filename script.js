const notesCOntainer = document.querySelector('.notesContainer');
const createBtn = document.querySelector('#btn');
let notes = document.querySelectorAll('.inputBox');

function showNotes(){
    notesCOntainer.innerHTML = localStorage.getItem('notes');
}
showNotes();

function updateStorage(){
    localStorage.setItem('notes', notesCOntainer.innerHTML);
}

createBtn.addEventListener('click', () => {
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className = 'inputBox';
    inputBox.setAttribute('contenteditable', 'true')
    img.src = 'images/delete.svg';
    notesCOntainer.appendChild(inputBox).appendChild(img);
})

notesCOntainer.addEventListener('click', function(e){
    if(e.target.tagName === 'IMG') {
        notes = document.querySelectorAll('.inputBox')
        e.target.parentElement.remove();
        updateStorage();
    } else if(e.target.tagName === 'P') {
        notes = document.querySelectorAll('.inputBox')
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updateStorage();
            }
        })
    }
})

document.addEventListener('keydown', event =>{
    if(event.key === 'Enter'){
        document.execCommand('insertLineBreak');
        event.preventDefault();
    }
})