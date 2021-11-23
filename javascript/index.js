//* Selectors
const titleContact = document.querySelector('.title-contact');
const numberContact = document.querySelector('.phonenumber-contact');
const btnAddContact = document.querySelector('.btn-phonenumber');
const listContact = document.querySelector('.list-contacts');
const selectTypePhonenumber = document.querySelector('.select-type-phonenumber');
const filter = document.querySelector('.filter');
const filterContact = document.querySelector('.contacts-filter');

//* Event listener
btnAddContact.addEventListener('click', addItem);
listContact.addEventListener('click', deleteItem);
filterContact.addEventListener('click', filterContacts);
document.addEventListener('DOMContentLoaded', getContact);

//* Function
function addItem(event){
  // todo: remove default action
  event.preventDefault();
  // todo: build box  for contact
  const boxContact = document.createElement('div');
  boxContact.classList.add('contacts');
  boxContact.classList.add(selectTypePhonenumber.options[selectTypePhonenumber.selectedIndex].value);
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

  // todo: save to local storege
  saveLocalStorage({
    name: titleContact.value,
    phoneNumber: numberContact.value,
    type: selectTypePhonenumber.options[selectTypePhonenumber.selectedIndex].innerText
  });
  //todo: empty inputs
  titleContact.value = '';
  numberContact.value = '';
  filter.style.display = 'block';
}
// todo: remove items method
function deleteItem(event){
  const item = event.target;
  if (item.classList[0] === 'trash-button'){
    const parentItem = item.parentElement;
    parentItem.classList.add('effect-delete');
    setTimeout(()=>{
      parentItem.remove();
    },1000);
    // todo: remove item in local storage
    removeLocalStorage(parentItem);
  }
}
// todo: filter contact with type phone number
function filterContacts(event){
  const contactAll = listContact.childNodes;
  contactAll.forEach(function(contact){
    switch (event.target.value) {
      case "2":
        contact.style.display = 'flex';
        break;
      case "1":
        if (contact.classList.contains("1")){
          contact.style.display = 'flex';
        } else {
          contact.style.display = 'none';
        }
        break;
      case "0":
        if (contact.classList.contains("0")){
          contact.style.display = 'flex';
        } else {
          contact.style.display = 'none';
        }
        break;
    
      default:
        break;
    }
  })
}
// todo: save data to local storage
function saveLocalStorage(contact){
  let contacts;
  if(localStorage.getItem('contacts') === null){
    contacts = [];
  } else {
    contacts = JSON.parse(localStorage.getItem('contacts'));
  }
  contacts.push(contact);
  localStorage.setItem('contacts', JSON.stringify(contacts));
}
// todo:  remove data in local storage
function removeLocalStorage (contact){
  let contacts;
  if(localStorage.getItem('contacts') === null){
    contacts = [];
  } else {
    contacts = JSON.parse(localStorage.getItem('contacts'));
  }
  const result = contact.children[0].innerHTML.split('</span');
  const number = result[1].match(/\d/g).join("");

  // todo: find index for remove in local storage
  const index = contacts.findIndex(item => item.number === number);

  contacts.splice(index,1);
  localStorage.setItem('contacts', JSON.stringify(contacts));
}

// todo: get data as local storage
function getContact(){
  let contacts;
  if(localStorage.getItem('contacts') === null){
    contacts = [];
  } else {
    contacts = JSON.parse(localStorage.getItem('contacts'));
  }
  contacts.forEach(function(item){
  // todo: build box  for contact
  const boxContact = document.createElement('div');
  boxContact.classList.add('contacts');
  boxContact.classList.add(selectTypePhonenumber.options[selectTypePhonenumber.selectedIndex].value);
  const contact = document.createElement('li');
  contact.classList.add('contact-list');
  const titleForContact = document.createElement('span');
  const numberForContact = document.createElement('span');
  const typePhoneContact = document.createElement('span');

  titleForContact.innerText = item.name;
  numberForContact.innerText = item.phoneNumber;
  typePhoneContact.innerText = item.type;

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
  filter.style.display = 'block';
  })
}