"strict mode"

const notesContainer = document.querySelector('.notes-container');

const createBtn = document.querySelector('.btn');

let notes = document.querySelectorAll('.input-box');

// function to display notes after refreshing browswer
function showNotes() {
  notesContainer.innerHTML = localStorage.getItem('notes');
}
showNotes();

// function to save text to localStorage
function updateStorage() {
  localStorage.setItem('notes', notesContainer.innerHTML)
};

// function to create new notes with delete button
createBtn.addEventListener('click', () => {
  let inputBox = document.createElement('p');
  let img = document.createElement('img');
  inputBox.className = 'input-box';
  inputBox.setAttribute('contenteditable', 'true');
  img.src = 'images/delete.png';
  notesContainer.appendChild(inputBox).appendChild(img);

})

// function to delete notes
notesContainer.addEventListener('click', function (e) {
  if (e.target.tagName === 'IMG') {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === 'P') {
    notes = document.querySelectorAll('.input-box');
    notes.forEach(nt => {
      nt.onkeyup = function () {
        updateStorage();
      }
    })
  }
})
// function when ENTER is pressed a new line will appear on line below
document.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    document.execCommand('insertLineBreak');
    event.preventDefault();
  }
})