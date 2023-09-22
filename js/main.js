var p_m_href = 'mailto:tomasz.krajewski@greenfortune.com';
var p_m = 'tomasz.krajewski@greenfortune.com';
var p_tel_href = '+48695331301';

let wyslijpost = document.getElementById('wyslijpost');
var emaillink = document.createElement('a');
wyslijpost.appendChild(emaillink);
emaillink.setAttribute('id', 'wiadomosc');
var wiadomosc = document.getElementById('wiadomosc');
wiadomosc.innerHTML = p_m;
wiadomosc.setAttribute('href', p_m_href);

let zadzwon = document.getElementById('zadzwon');
var tellink = document.createElement('a');
zadzwon.appendChild(tellink);
tellink.innerHTML = p_tel_href;
tellink.setAttribute('href', 'tel:' + p_tel_href);
tellink.classList.add('contact_link');

  
document.addEventListener('DOMContentLoaded', function() {
    var przycisk = document.getElementById('faq_btn');
  var przycisk_kontakt = document.getElementById('kontakt_btn');
    przycisk.addEventListener('click', function() {
      // Przeniesienie na nową stronę
      window.location.href = 'faq.html';
    });

    przycisk_kontakt.addEventListener('click', function() {
        window.location.href = "kontakt.html";
    })
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