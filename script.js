const cardList = document.querySelectorAll('.card')

// Card event listener.

cardList.forEach(card => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
})

// Card functions.

function dragstart(){

}

function drag(){

}

function dragend(){

}