document.addEventListener('DOMContentLoaded', function() {
  const controls = document.querySelectorAll('.control');
  let currentItem = 0;
  const items = document.querySelectorAll('.item');
  const maxItem = items.length;

  controls.forEach(control => {
    control.addEventListener('click', () => {
      const isLeft = control.classList.contains('arrow-left');

      if (isLeft) {
        currentItem -= 2;
      } else {
        currentItem += 2;
      }

      if (currentItem >= maxItem) {
        currentItem = 0;
      }

      if (currentItem < 0) {
        currentItem = maxItem - 1;
      }

      items.forEach(item => item.classList.remove('current-item'));
      items[currentItem].scrollIntoView({
        inline: "center",
        behavior:'smooth',
        block: "nearest",
      });

      items[currentItem].classList.add('current-item');
    });
  });

  function bookCenter(event) {
    var item = event.currentTarget; // Usar currentTarget em vez de target
    var anchor = item.closest('a'); // Encontra o elemento âncora mais próximo

    item.classList.add('center');
    item.style.opacity = '1'; // Ajusta a opacidade para um valor desejado
    item.scrollIntoView='smooth';
      
    setTimeout(function() {
      window.location.href = anchor.href;
    }, 900); 
    event.preventDefault();
  }

  items.forEach(item => {
    item.addEventListener('click', bookCenter);

  });

  item.forEach(item => {
    item.addEventListener('click', zoomIn);
  })
});
