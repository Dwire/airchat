(function() {
  const newMessage = _.template(`
    <div class="message <%= classNames %>">
      <%= text %>
    </div>
  `);

  $(document).ready(function() {
    const $chatWindow = $('.chat-window'),
          $chatInput = $('.chat-input'),
          $sendButton = $('.send-message');

    $sendButton.on('click', function() {
      sendMessage();
      clearTextInput();
    });

    $chatInput.on('keypress', function(ev) {
      const returnKeyCode = 13;

      if (ev.which === returnKeyCode) {
        sendMessage();
        clearTextInput();
      }
    });

    function sendMessage() {
      const messageText = $chatInput.val(),
            messageHtml = newMessage({text: messageText, classNames: 'message-own'});

      $chatWindow.append(messageHtml);
    };

    function clearTextInput() {
      $chatInput.val('');
    };
  });
})();
