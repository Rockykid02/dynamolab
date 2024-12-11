document.addEventListener('DOMContentLoaded', () => {
  const pages = document.querySelectorAll('.page');
  const nextBtn = document.getElementById('next-btn');
  const prevBtn = document.getElementById('prev-btn');
  let currentPage = 0;

  nextBtn.addEventListener('click', () => {
    currentPage++;
    updatePage();
  });

  prevBtn.addEventListener('click', () => {
    currentPage--;
    updatePage();
  });

  function updatePage() {
    pages.forEach((page, index) => {
      page.classList.remove('active');
      if (index === currentPage) {
        page.classList.add('active');
      }
    });
  }
}); 
