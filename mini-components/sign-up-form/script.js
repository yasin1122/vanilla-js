const form = document.getElementById('signup')
const password = document.getElementById('password')
const confirm = document.getElementById('confirm')

form.addEventListener('submit', e => {
  if (password.value !== confirm.value) {
    e.preventDefault() // stop the form
    alert('Passwords do not match')
  }
})