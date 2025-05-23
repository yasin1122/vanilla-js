const bar = document.getElementById('bar')
const label = document.getElementById('label')
const progress = document.getElementById('progress')

const advance = document.getElementById('advance')
const decrease = document.getElementById('decrease')
const reset = document.getElementById('reset')

let value = 0

/* Shared function: update bar visuals + ARIA */
function updateProgress() {
  bar.style.width = value + '%'
  label.textContent = value + ' %'
  progress.setAttribute('aria-valuenow', value)
}

/* Advance 10% */
advance.addEventListener('click', () => {
  value = Math.min(value + 10, 100)
  updateProgress()
})

/* Decrease 10% */
decrease.addEventListener('click', () => {
  value = Math.max(value - 10, 0)
  updateProgress()
})

/* Reset to 0% */
reset.addEventListener('click', () => {
  value = 0
  updateProgress()
})
