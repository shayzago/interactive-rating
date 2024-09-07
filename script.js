const ratings = document.querySelectorAll('.card__rating__number');
const button = document.querySelector('.card__btn');
const cardMain = document.querySelector('.card--main');
const cardThank = document.querySelector('.card--thank-you');
const resultRating = document.querySelector('.card__result');
let lastSelected;

    ratings.forEach((rating) => {
        rating.addEventListener('click', () => {
            if (lastSelected) {
                lastSelected.classList.remove('active');
            }

            rating.classList.add('active');

            lastSelected = rating;

            resultRating.textContent = `You selected ${rating.textContent} out of 5`;
        })
    })

    button.addEventListener('click', () => {
        if (lastSelected) {
            cardMain.classList.add('hide');
            cardThank.classList.remove('hide');
        } else {
            alert('Please select a rating');
        }
    })




