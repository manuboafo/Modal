const showmodal = document.querySelector('.show-modal');
const modal = document.querySelector('.modal-section');
const closeModal = document.querySelector('.close-button');


function show(){
    modal.style.display = 'block';
}

function close(){
    modal.style.display ='none';
}


showmodal.addEventListener('click',show);
closeModal.addEventListener('click', close);