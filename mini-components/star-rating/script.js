const starContainer = document.getElementById('stars')
const stars = starContainer.querySelectorAll('span')
const resultOutput = document.getElementById('result')

function paintStars() {
  stars.forEach((star, index) => {
    star.classList.toggle('filled', index < current)
  })
  resultOutput.textContent = `Your rating: ${current}`
}

stars.forEach(star => {
  star.addEventListener('click', () => {
    current = Number(star.dataset.value)
    paintStars()
  })
})