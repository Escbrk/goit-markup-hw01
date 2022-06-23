const buttons = document.querySelectorAll('.nav-category-btn');
const pages = document.querySelectorAll('.category-item');

buttons.forEach(button => {
  button.addEventListener("click", e => {
    buttons.forEach(button => {
      button.classList.remove("active-button");
    })
    e.target.classList.add("active-button");
    pages.forEach(project => {
      let type = project.querySelector('.category-text').innerText;
      if (type == e.target.innerText || e.target.innerText == 'Все') {
        project.classList.remove('visually-hidden');
      } else {
        project.classList.add('visually-hidden');
      }
    });
  })
})