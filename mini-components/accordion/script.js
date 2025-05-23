const buttons = document.querySelectorAll('.accordion-btn')
const panels = document.querySelectorAll('.accordion-panel')

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    panels[index].hidden = !panels[index].hidden
  })
})
