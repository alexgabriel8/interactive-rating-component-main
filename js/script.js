const r1 = document.querySelector('label#label-r1')
const r2 = document.querySelector('label#label-r2')
const r3 = document.querySelector('label#label-r3')
const r4 = document.querySelector('label#label-r4')
const r5 = document.querySelector('label#label-r5')
var ratings = [r1, r2, r3, r4, r5]
var selectedRating = 3

function changeActiveRating(nClicked) {
for (var c = 0; c <= 4; c++) {
    ratings[c].classList.remove('activeRating')
    ratings[c].classList.remove('aroundActiveRating')
}
switch (nClicked) {
    case 1:
        ratings[0].classList.add('activeRating')
        selectedRating = 1
        ratings[1].classList.add('aroundActiveRating')
        break
    case 2:
        ratings[1].classList.add('activeRating')
        selectedRating = 2
        ratings[0].classList.add('aroundActiveRating')
        ratings[2].classList.add('aroundActiveRating')
        break
    case 3:
        ratings[2].classList.add('activeRating')
        selectedRating = 3
        ratings[1].classList.add('aroundActiveRating')
        ratings[3].classList.add('aroundActiveRating')
        break
    case 4:
        ratings[3].classList.add('activeRating')
        selectedRating = 4
        ratings[2].classList.add('aroundActiveRating')
        ratings[4].classList.add('aroundActiveRating')
        break
    case 5:
        ratings[4].classList.add('activeRating')
        selectedRating = 5
        ratings[3].classList.add('aroundActiveRating')
        break
}

}

function processRating() {
    document.querySelector('p#paragraph-with-rating').innerHTML = `You selected ${selectedRating} out of 5`
    document.querySelector('section#rating-area').style.display = 'none'
    document.querySelector('section#processed-rating').style.display = 'flex'
}