const backBtn = document.getElementById('back-btn')
const nextBtn = document.getElementById('next-btn')
const pages = document.getElementsByClassName('page')
const totalPages = pages.length
let currentPage = 1

nextBtn.addEventListener('click', () => {
  backBtn.classList.remove('hidden')
  pages[currentPage - 1].classList.remove('active')
  currentPage++
  pages[currentPage - 1].classList.add('active')
  if (totalPages === currentPage) nextBtn.classList.add('hidden')
})

backBtn.addEventListener('click', () => {
  nextBtn.classList.remove('hidden')
  pages[currentPage - 1].classList.remove('active')
  currentPage--
  pages[currentPage - 1].classList.add('active')
  if (currentPage === 1) backBtn.classList.add('hidden')
})
