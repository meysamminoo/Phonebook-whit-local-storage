//Selectors
const titlePhone = document.querySelector('.title-phone');
const numberPhone = document.querySelector('.number-phone');
const btnPhone = document.querySelector('.btn-phone');
const phoneList = document.querySelector('.list-phones');
const selectType = document.querySelector('.select-type');

//Event listener
btnPhone.addEventListener('click', addItem);
phoneList.addEventListener('click', deleteItem);


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
  contact.appendChild(titleContact);
  contact.appendChild(numberContact);
  contact.appendChild(typeContact);
  divPhone.appendChild(contact);

  // todo: add trash buttton
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add('trash-button');
  divPhone.appendChild(trashButton);

  //todo: add div to ul
  phoneList.appendChild(divPhone);

  titlePhone.value = '';
  numberPhone.value = '';
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