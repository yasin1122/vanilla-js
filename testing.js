const input = document.getElementById('input')
const add = document.getElementById('add')
const list = document.getElementById('todos')

add.addEventListener('click', () => {
  const text = input.value.trim()
  if (!text) return
  const li = document.createElement('li')
  li.textContent = text
  const del = document.createElement('button')
  del.textContent = 'X'
  del.addEventListener('click', () => li.remove())
  list.appendChild(li)
  li.appendChild(del)
  input.value = ''
})
input.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    e.preventDefault()
    add.click()
  }
})
