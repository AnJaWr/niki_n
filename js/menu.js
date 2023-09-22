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


document.addEventListener('DOMContentLoaded', function() {
    var odnosnik1 = document.getElementById('wall_1');
  var odnosnik2 = document.getElementById('module');
  var stalagmit = document.getElementById('stalagmit');
  var kolumna = document.getElementById('kolumna');
  var hydro = document.getElementById('hydro');
  var sznur = document.getElementById('sznur');



    odnosnik1.addEventListener('click', function() {
      // Przeniesienie na nową stronę
      window.location.href = 'wall.html';
    });

    odnosnik2.addEventListener('click', function() {
        window.location.href = "module.html";
    })
    stalagmit.addEventListener('click', function() {
      window.location.href = "stalagmit.html";});

      kolumna.addEventListener('click', function() {
        window.location.href = "kolumna.html";
    })
    hydro.addEventListener('click', function() {
      window.location.href = "hydro.html";
  })
  sznur.addEventListener('click', function() {
    window.location.href = "sznur.html";
})
  })