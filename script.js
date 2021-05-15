'use strict';

// creating variables associated with classes in the html markup
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');


// Creating a function to open the modal when the button is clicked
const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

// Creating a function to close the modal when the close button or the overlay is clicked.
const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

// Looping thru the 3 buttons of the nodelist
for(let i = 0; i < btnsOpenModal.length; i++)

// Adding event listener on buttons click and remove the hidden class from the modal and the overlay using the function
btnsOpenModal[i].addEventListener('click', openModal);

// Adding event listener on the close button / overlayto add the hidden class to hide the modal using the previous function.
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Handling an Escape key keypress event (e being a parameter to stand for event)
document.addEventListener('keydown', function(e) {

    // if the key pressed is escape and check if the modal does not have the hidden class, call the function to close it
    if(e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});