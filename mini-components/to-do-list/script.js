const input = document.getElementById('todo-input')
const addBtn = document.getElementById('add-btn')
const list = document.getElementById('todo-list')

addBtn.addEventListener('click', () => {
  const text = input.value.trim()
  if (!text) return
  
  const li = document.createElement('li')
  li.textContent = text
  
  const del = document.createElement('button')
  del.textContent = 'X'
  del.addEventListener('click', () => li.remove())
  
  li.appendChild(del)
  list.appendChild(li)
  input.value = ''
})

input.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    e.preventDefault()
    addBtn.click()
  }
})