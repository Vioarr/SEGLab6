// jQuery that will "listen" to the html SEGLab6.html
$(document).ready(function(){

  $('form').on('submit', function(){
      
      // var item = $('form input');
      // console.log(item.serializeArray());

      $.ajax({
        type: 'POST',
        url: '/SEGLab6',
        data: $(this).serializeArray(),
        success: function(data){
          // do something with the data via front-end framework
          // Make the submit button disabled and saying Thank you
          $("#submit-button").prop("disabled", true);
          $("#submit-button").text("Thanks!");
        }
      });
      return false;
  });
  $('form').on('reset', function() {
    $("#submit-button").prop("disabled", false);
    $("#submit-button").text("Submit");
  });
});
