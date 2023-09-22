

  document.addEventListener('DOMContentLoaded', function() {
    var odnosnik1 = document.getElementById('wall_1');
  var stalagmit = document.getElementById('stalagmit');
  var kolumna = document.getElementById('kolumna');
  var hydro = document.getElementById('hydro');
  var sznur = document.getElementById('sznur');



    odnosnik1.addEventListener('click', function() {
      // Przeniesienie na nową stronę
      window.location.href = 'wall.html';
    });
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

