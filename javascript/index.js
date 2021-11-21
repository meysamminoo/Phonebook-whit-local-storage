//Selectors
const titlePhone = document.querySelector('.title-phone');
const numberPhone = document.querySelector('.number-phone');
const btnPhone = document.querySelector('.btn-phone');

//Event listener
btnPhone.addEventListener('click', additem);


//Function
function additem(event){
  event.preventDefault();
  console.log(event)
}