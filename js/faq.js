document.addEventListener('DOMContentLoaded', function() {
    var accordionHeaders = document.querySelectorAll('.accordion-header');
  
    accordionHeaders.forEach(function(header) {
      header.addEventListener('click', function() {
        var content = this.nextElementSibling;
  
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
          content.classList.remove('active');
        } else {
          accordionHeaders.forEach(function(otherHeader) {
            var otherContent = otherHeader.nextElementSibling;
            otherContent.style.maxHeight = null;
            otherContent.classList.remove('active');
          });
  
          content.style.maxHeight = content.scrollHeight + 'px';
          content.classList.add('active');
        }
      });
    });
  
    // Dodajemy obsługę zdarzenia resize, aby po zmianie rozmiaru strony ponownie ustawić max-height
    window.addEventListener('resize', function() {
      var activeContent = document.querySelector('.accordion-content.active');
  
      if (activeContent) {
        activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
      }
    });
  });
  
  


  document.addEventListener("DOMContentLoaded", function() {
    var menuToggle = document.querySelector(".menu-toggle a");
    var menu = document.querySelector(".progress-mobile");

    menuToggle.addEventListener("click", function(event) {
        event.preventDefault();
        if (menu.style.maxHeight) {
            menu.style.maxHeight = null;
        } else {
            menu.style.maxHeight = menu.scrollHeight + "px";
        }
    });
});


  