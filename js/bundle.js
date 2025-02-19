
const header = document.querySelector('header');

if (header) {
  const toggleScrolledClass = () => {
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', toggleScrolledClass);
}


const blocks = document.querySelectorAll('.animate-block');

if (blocks.length > 0) {
  function checkVisibility() {
    blocks.forEach(block => {
      const rect = block.getBoundingClientRect();
    const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

    if (isVisible && !block.classList.contains('animated')) {
      const delay = block.dataset.delay || 100;
      setTimeout(() => {
        block.classList.add('animated');
    }, delay);
    }
  });
  }

  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('load', checkVisibility);
  checkVisibility();
}

document.addEventListener('DOMContentLoaded', function() {
  const accordionItems = document.querySelectorAll('.accordion-item');

  if (accordionItems) {
    accordionItems.forEach(item => {
      const trigger = item.querySelector('.accordion-item-header');
    const content = item.querySelector('.accordion-item-content');

    trigger.addEventListener('click', function() {
      const parent = this.parentNode;

      if (parent.classList.contains('active')) {
        parent.classList.remove('active');
        content.style.height = '0';
      } else {
        document.querySelectorAll('.accordion-item').forEach(child => {
          child.classList.remove('active');
        child.querySelector('.accordion-item-content').style.height = '0';
      });
        parent.classList.add('active');
        content.style.height = content.scrollHeight + 'px';
      }
    });
  });
  }
});