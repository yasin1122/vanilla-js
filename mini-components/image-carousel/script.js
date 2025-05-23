const img = document.getElementById('carousel-img')
const next = document.getElementById('next')
const prev = document.getElementById('prev')

// Array of nature image URLs (from picsum.photos)
const images = [
  'https://picsum.photos/id/1015/600/400',
  'https://picsum.photos/id/1020/600/400',
  'https://picsum.photos/id/1043/600/400',
  'https://picsum.photos/id/1039/600/400'
]

let index = 0

// Function to update the <img> src
function showImage() {
  img.src = images[index]
}

// Move to next image, loop back at end
next.addEventListener('click', () => {
  index = (index + 1) % images.length
  showImage()
})

// Move to previous image, loop back to end if needed
prev.addEventListener('click', () => {
  index = (index - 1 + images.length) % images.length
  showImage()
})
