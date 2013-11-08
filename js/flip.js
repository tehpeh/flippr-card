function sendCard() {
  var data = JSON.stringify({
    to:     $('#to').val(),
    name:   $('#name').html(),
    title:  $('#title').html(),
    email:  $('#email').html(),
    cell:   $('#cell').html(),
    work:   $('#work').html(),
    web:    $('#web').html(),
    photo_url: $('#photo_url').html()
  });
  $.ajax({
    url: 'http://www.flipprcard.com/api/1/vcard',
    type: 'POST',
    data: data,
    success: function(response) {
      console.log(response);
      $('#success-notice').removeClass('hidden');
    },
    error: function(response) {
      console.log(response);
      $('#error-notice').removeClass('hidden');
    },
    beforeSend: function() {
      $('#spinner').removeClass('hidden');
      $('#success-notice').addClass('hidden');
      $('#error-notice').addClass('hidden');
    },
    complete: function() {
      $('#spinner').addClass('hidden');
    }
  });
}