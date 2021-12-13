// Eventually allow file upload, even if it's temp / not saved

$(function () {


  $(".draggable").draggable({ containment: "#drag-box", scroll: false });


});





$('#trigger').click(function () {
  $('#overlay').fadeIn(300);
});
$('#close').click(function () {
  $('#overlay').fadeOut(300);
});

// Popups
// - Settings
// - Assets (upload, do saving later)
// - Node
