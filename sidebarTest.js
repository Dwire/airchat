    let addressBook = {
        contacts: [],
        addContact: function(contactText) {
            // if (contactText.length > 0) {
              this.contacts.push({
                contactText: contactText
              });
            // }
        }, 
        deleteContact: function(index) {
            this.contacts.splice(index, 1);
        }  
    
    };


    let handlers = {
        
        addContact: function() {
            let contactTextInput = document.getElementById('contact-input');
            addressBook.addContact(contactTextInput.value);
            contactTextInput.value = '';
            view.displayContacts();
        },
        deleteContact: function(position) {
            addressBook.deleteContact(position);
            view.displayContacts();
        }
    };

    
    let view = {
        displayContacts: function() {
            let contactUl = document.querySelector('ul');
            contactUl.innerHTML = '';

            if (addressBook.contacts.length === 0) {
                contactUl.innerHTML = 'Make some friends dog'
            }
            addressBook.contacts.forEach(function(item, index) {
                let contactLi = document.createElement('li');
                    fullContact = item.contactText;
                

                contactLi.id = index;
                contactLi.className = 'contact user-icon fa fa-user-circle';
                contactLi.textContent = fullContact;
                contactLi.appendChild(this.createDeleteBtn());
                contactUl.appendChild(contactLi);

            }, this); 
        },
        createDeleteBtn: function() {
            let deleteBtn = document.createElement('button');
                deleteBtn.className = 'fa fa-minus-square-o';
            return deleteBtn;

        },
        setUpEventListeners: function() {
            let $contactInputBar = $('#contact-input');
                $contactInputBar.on('keypress', function(ev) {
                    const returnKey = 13;
                    if (ev.which === returnKey) {
                        handlers.addContact();
                    }
                });
            let contactsUl = document.querySelector('ul');
                contactsUl.addEventListener('click', function(event){
            let elementClicked = event.target;
                if (elementClicked.className === 'fa fa-minus-square-o') {
                    handlers.deleteContact(parseInt(elementClicked.parentNode.id));
                }
                });
        }
    };

    view.setUpEventListeners();