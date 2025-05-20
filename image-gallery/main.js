const current = document.querySelector('#current')
const imgs = document.querySelectorAll('.imgs img')

imgs.forEach(img => {
  img.addEventListener('click', e => {
    imgs.forEach(img => (img.style.opacity = 1))
    current.src = e.target.src
    e.target.style.opacity = 0.4
  })
})
