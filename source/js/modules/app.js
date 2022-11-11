const moveToForm = () => {
  const buttonToForm = document.querySelector('.main-page__container > a');
  const form = document.querySelector('form');

  buttonToForm.addEventListener('click', function (event) {
    event.preventDefault();
    form.scrollIntoView({
      block: 'nearest',
      behavior: 'smooth',
    });
  });
};


export {moveToForm};
