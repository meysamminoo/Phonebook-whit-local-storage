//*Selectors
const titleContact = document.querySelector('.title-contact');
const numberContact = document.querySelector('.phonenumber-contact');
const btnAddContact = document.querySelector('.btn-phonenumber');
const listContact = document.querySelector('.list-contacts');
const selectTypePhonenumber = document.querySelector('.select-type-phonenumber');

//*Event listener
btnAddContact.addEventListener('click', addItem);
listContact.addEventListener('click', deleteItem);

//*Function
function addItem(event){
  event.preventDefault();
  const boxContact = document.createElement('div');
  boxContact.classList.add('contacts');

  const contact = document.createElement('li');
  contact.classList.add('contact-list');
  const titleForContact = document.createElement('span');
  const numberForContact = document.createElement('span');
  const typePhoneContact = document.createElement('span');

  titleForContact.innerText = titleContact.value;
  numberForContact.innerText = numberContact.value;
  typePhoneContact.innerText = selectTypePhonenumber.options[selectTypePhonenumber.selectedIndex].innerText;
  contact.appendChild(titleForContact);
  contact.appendChild(numberForContact);
  contact.appendChild(typePhoneContact);
  boxContact.appendChild(contact);

  // todo: add trash buttton
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add('trash-button');
  boxContact.appendChild(trashButton);

  //todo: add div to ul
  listContact.appendChild(boxContact);
  //todo: empty inputs
  titleContact.value = '';
  numberContact.value = '';
}

function deleteItem(event){
  const item = event.target;
  if (item.classList[0] === 'trash-button'){
    const parentItem = item.parentElement;
    parentItem.classList.add('effect-delete');
    setTimeout(()=>{
      parentItem.remove();
    },1000);
  }
}