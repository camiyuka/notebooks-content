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

        function flipPage() {
            const book = document.querySelector('.item');
            book.classList.toggle('flipped');
          }
          
  
        items[currentItem].scrollIntoView({
          inline: "center",
          behavior: 'smooth',
          block: "nearest",
        });
  
        items[currentItem].classList.add('current-item');
      });
    });
  });
  