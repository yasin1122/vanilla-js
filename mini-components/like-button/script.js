const btn   = document.getElementById('like-btn');
const heart = document.getElementById('heart');
const likeText = document.getElementById('like-text');

let isLiked  = false;
let message  = 'Like';

btn.addEventListener('click', () => {
  isLiked = !isLiked;

  isLiked ? (message = 'Liked') : (message = 'Like')

  likeText.textContent = message;         
  btn.classList.toggle('liked', isLiked); 
  heart.textContent = isLiked ? '♥' : '♡'; 
});
