
// creates a div and an id called lightbox, basically creates the lightbox so that we can edit it in css and iterate on it in js
const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

//Selecting all images in our html file and checking that if we click it
const images = document.querySelectorAll('img')
images.forEach(image => {
  image.addEventListener('click', e => {
      //when we click an image it turns on our lightbox which displays that image
    lightbox.classList.add('active')
    const img = document.createElement('img')
    img.src = image.src
    //this keeps more than one image from appearing, so we only view one image at a time
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
  })
})
// This is so we can click out of our lightbox
lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return
  lightbox.classList.remove('active')
})