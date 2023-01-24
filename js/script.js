// Identificar qual dos ratings foi clicado
const r1 = document.querySelector('li#rating-1')
const r2 = document.querySelector('li#rating-2')
const r3 = document.querySelector('li#rating-3')
const r4 = document.querySelector('li#rating-4')
const r5 = document.querySelector('li#rating-5')


function changeActiveRating(nClicked) {
console.log(nClicked)
// Remove active rating and aroundRating
switch (nClicked) {
    case 1:
        r1.classList.toggle('activeRating')
        break
    case 2:

        break
    case 3:

        break
    case 4:

        break
    case 5:

        break
}
}

function processRating() {

}