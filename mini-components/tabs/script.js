const buttons = document.querySelectorAll('.tab-btn');
const panels  = document.querySelectorAll('.tab-panel');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {

    // Remove active from all buttons and panels
    buttons.forEach(btn => btn.classList.remove('active'));
    panels.forEach(panel => panel.classList.remove('active'));

    // Activate the clicked button and matching panel
    button.classList.add('active');
    panels[index].classList.add('active');
  });
});
