window.onload = () => {
  topSectionTextAnimation()
  initializeListeners()
  insertEmailAddress()
}

const topSectionTextAnimation = () => {
  const header = document.querySelector('.top-section__header')
  const label = document.querySelector('.top-section__description')
  const arrowCircle = document.querySelector('.top-section__arrowcircle')
  setTimeout(() => (header.style.opacity = 1), 500)
  setTimeout(() => (label.style.opacity = 1), 1000)
  setTimeout(() => (arrowCircle.style.opacity = 1), 1500)
}

const initializeListeners = () => {
  const arrowCircle = document.querySelector('.top-section__arrowcircle')
  const topSection = document.querySelector('.top-section')
  arrowCircle.addEventListener('click', () => {
    const { bottom } = topSection.getBoundingClientRect()
    window.scrollTo({ top: bottom + window.scrollY, behavior: 'smooth' })
  })
}

const insertEmailAddress = () => {
  const address = ['k', 'a', 'n', 'a', 's', '@', 'm', 'u', 'z', 'y', 'k', '.', 'o', 'r', 'g'].join(
    ''
  )
  const elem = document.querySelector('#email')
  setTimeout(() => {
    elem.innerHTML = address
    elem.href = 'mailto:' + address
  }, 100)
}
