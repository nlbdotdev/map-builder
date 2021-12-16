// Eventually allow file upload, even if it's temp / not saved

$(() => {
  $(".draggable").draggable({ containment: "#drag-box", scroll: false });
});





// $('#trigger').click((e) => {
//   console.log(e.target)
//   // openMenu()
// })

$('.trigger').click((e) => {
  openMenu(e.target.classList[1], e.target.classList[2])
})

// allow esc key

$('.close').click(() => {
  closeMenu()
});



function openMenu(type, subtype) {

  // console.log(type, subtype)

  $('.popup-menu').hide()

  $('#overlay').fadeIn(300)


  switch (type) {
    case 'settings':
      console.log("settings")
      $('#settings').show()
      break;
    case 'assets':
      console.log("assets")
      $('#assets').show()
      break;
    case 'node':
      console.log("node")
      $('#node').show()
      break;
  }

}

function closeMenu(){



  $('#overlay').fadeOut(300);
}


// Assets

