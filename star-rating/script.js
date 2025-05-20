const stars = document.querySelectorAll('.star')
let rating = 0

stars.forEach(star => {
  star.addEventListener('mouseover', () => {
    const val = parseInt(star.getAttribute('data-value'))
    highlightStars(val)
  })

  star.addEventListener('mouseout', () => {
    highlightStars(rating)
  })

  star.addEventListener('click', () => {
    rating = parseInt(star.getAttribute('data-value'))
    highlightStars(rating)
  })
})

function highlightStars(ratingValue) {
  stars.forEach(star => {
    const val = parseInt(star.getAttribute('data-value'))
    star.classList.toggle('selected', val <= ratingValue)
    star.classList.toggle('hover', val <= ratingValue)
  })
}
