const readMore = () => {
  const toggler = document.querySelector('#toggler');
  const paragraph = document.querySelector('#box');

  if (paragraph.style.display === 'block') {
    paragraph.style.display = 'none';
    toggler.innerHTML = 'Подробнее';
  } else {
    paragraph.style.display = 'block';
    toggler.innerHTML = 'Свернуть';
  }
};

export {readMore};
