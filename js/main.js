$(function() {
  $('.flip-icon').click(function() {
    $('#card').toggleClass('flip');
  });

  $('#send-button').click(function() {
    sendCard();
  });
});