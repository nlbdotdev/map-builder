// --- MODES ---


// load in nodes
$('#modes-play').click(() => {
  changeMode('play')
  updateNodes()
})


function updateNodes() {
  // for each mapNodes array, select node-id

  for (const node of MapNodes) {

    let id = node.id

    console.log(node.id)

     $(`#node-${id} > .title`)[0].innerHTML = node.name

    console.log(node.icon)

     $(`#node-${id} > .icon > img`)[0].src = node.icon



    console.log(node.name)

  }
}



$('#modes-edit').click(() => {
  changeMode('edit')
})

function changeMode(mode) {
  if (mode === 'play') {
    $('#editor').hide()
    $('#map').show()
  } else if (mode === 'edit') {
    $('#editor').show()
    $('#map').hide()
  }
}

// --- EDITOR ---

// live update icon image
// create / update object on SAVE
// make play / edit toggle work
// doodle css for editor?
// https://www.reddit.com/r/Frontend/comments/rgz6d7/doodle_css_a_simple_hand_drawn_htmlcss_theme/

function MapNode(id, icon, bg, music, url, name, lore) {
  this.id = id
  this.icon = getIconPath(icon)
  this.bg = bg
  this.music = music
  this.url = url
  this.name = name
  this.lore = lore
  this.x = 0
  this.y = 0
}

const MapNodes = []

$('.block-save').click((e) => {

  console.log(e.target)

  const id = e.target.classList[1].split("-")[1]
  const icon = $(`.block-${id} .block-icon-select`)[0].value
  const bg = ''
  const music = ''
  const url = ''
  const name = $(`.block-${id} .block-name-input`)[0].value
  const lore = ''
  const node = new MapNode(id, icon, bg, music, url, name, lore)


  // current dupes
  MapNodes.push(node)
})

// push x to nodes array...




$('.block-icon-select').on('change', (e) => {
  // alert('Value change to ' + e.target.value)
  changeBlockIcon(1, e.target.value)
})



function changeBlockIcon(id, image) {
  // Select proper block
  let img = $(`.block-${id} > .block-icon > .block-icon-thumbnail`)[0]
  img.src = `./images/icons/${image}.png`;

  console.log(image)

}




function getIconPath(icon) {
  return `./images/icons/${icon}.png`
}









// --- MAP ---

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

function closeMenu() {



  $('#overlay').fadeOut(300);
}


// Assets

