// ///Start off with a copy and then optimize

const $contactInput = $('.contact-input'),
      $addContactBtn = $('.add-contact-btn'),
      $contactList = $('.contact-list'),
      $contact = $('.contact');

$contactInput.on('keypress', function(ev) {
    const returnKey = 13;

    if (ev.which === returnKey) {
        addContactToList();
        clearTextInput();
    }
});

$addContactBtn.on('click', function() {
    addContactToList();
    clearTextInput();
});


   function addContactToList() {
      const memberIcon = 'user-icon fa fa-user-circle';
      const contactText = $contactInput.val();
      const deleteButtonIcon = '<button class="delete-contact-btn fa fa-minus-square-o"></button>';
       
      let newContactEntry = `<li class="contact ${memberIcon}">${contactText}${deleteButtonIcon}</li>`;

      if (contactText.length > 0) {
        $contactList.append(newContactEntry);
            
      }
        return $contactList;
        
    };


    function clearTextInput() {
        $contactInput.val('');
    }



        //Not targeting new delete buttons (only if hard coded in html)
    var $deleteContactBtn = $('.delete-contact-btn');

    $deleteContactBtn.on('click', function(ev){
        console.log(ev);
    });




    // let addressBook = {
    //     contacts: [],
    //     addContacts: function 
       

    // }












