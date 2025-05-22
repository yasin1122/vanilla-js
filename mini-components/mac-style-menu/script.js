const buttons = document.querySelectorAll('.menu-btn');
const lists = document.querySelectorAll('.menu-list');

buttons.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    const list = lists[i]
    const opened = !list.hidden
    
    // close everything initially
    lists.forEach(list => list.hidden = true)
    buttons.forEach(button => button.classList.remove('active'))
    
    if (!opened) {
      list.hidden = false
      btn.classList.add('active')
    }
  })
})

document.addEventListener('click', (e) => {
  if (!e.target.matches('.menu-btn')) {
    lists.forEach(list => list.hidden = true);
    buttons.forEach(button => button.classList.remove('active'));
  }
})