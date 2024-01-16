const cardList = document.querySelectorAll('.card')
const dropzoneList = document.querySelectorAll('.dropzone')

// Card event listener.

cardList.forEach(card => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
})

// Card functions.

function dragstart(){
    dropzoneList.forEach(dropzone => dropzone.classList.add('highlight'))

    this.classList.add('is-dragging')
}

function drag(){

}

function dragend(){
    dropzoneList.forEach(dropzone => dropzone.classList.remove('highlight'))

    this.classList.remove('is-dragging')
}

// Dropzone event listener.

dropzoneList.forEach(dropzone => {
    dropzone.addEventListener("dragenter", dragenter)
    dropzone.addEventListener("dragover", dragover)
    dropzone.addEventListener("dragleave", dragleave)
    dropzone.addEventListener("drop", drop)
})

// Dropzone functions.

function dragenter(){

}

function dragover(){
    this.classList.add('highlight-over')

    const cardDragged = document.querySelector('.is-dragging')

    this.appendChild(cardDragged)
}

function dragleave(){
    this.classList.remove('highlight-over')
}

function drop(){
    this.classList.remove('highlight-over')
}