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
filterContact.addEventListener('click', filterContacts)

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