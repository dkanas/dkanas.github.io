window.onload = () => {
  const overlay = document.querySelector('.overlay')
  const text = document.querySelector('.overlay__text')
  setTimeout(() => overlay.style.backgroundColor = 'rgba(0, 0, 0, 1)', 300)
  setTimeout(() => text.style.opacity = 1, 1700)
}
