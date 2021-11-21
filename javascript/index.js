//Selectors
const titlePhone = document.querySelector('.title-phone');
const numberPhone = document.querySelector('.number-phone');
const btnPhone = document.querySelector('.btn-phone');
const phoneList = document.querySelector('.list-phones');
const selectType = document.querySelector('.select-type')

//Event listener
btnPhone.addEventListener('click', addItem);


//Function
function addItem(event){
  event.preventDefault();
  const divPhone = document.createElement('div');
  divPhone.classList.add('contacts');

  const contact = document.createElement('li');
  contact.classList.add('contact-list');
  const titleContact = document.createElement('span');
  const numberContact = document.createElement('span');
  const typeContact = document.createElement('span');

  titleContact.innerText = titlePhone.value;
  numberContact.innerText = numberPhone.value;
  typeContact.innerText = selectType.options[selectType.selectedIndex].innerText;
  contact.appendChild(titleContact)
  contact.appendChild(numberContact)
  contact.appendChild(typeContact)
  divPhone.appendChild(contact)
  phoneList.appendChild(divPhone);
  
}