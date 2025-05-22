// Get elements
const modal = document.getElementById('simpleModal')
const modalBtn = document.getElementById('modalBtn')
const closeBtn = document.getElementsByClassName('closeBtn')[0]

// Add Listeners
modalBtn.addEventListener('click', () => {
  modal.style.display = 'block'
})
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none'
})
window.addEventListener('click', e => {
  if (e.target === modal) modal.style.display = 'none'
})
