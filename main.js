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

$('.close').click(() => {
  closeMenu()
});



function openMenu(type, subtype) {

  // console.log(type, subtype)

  $('#overlay').fadeIn(300)


  switch (type) {
    case 'settings':
      console.log("settings")
      break;
    case 'assets':
      console.log("assets")
      break;
    case 'node':
      console.log("node")
      break;
  }

}

function closeMenu(){

  $('#overlay').fadeOut(300);
}