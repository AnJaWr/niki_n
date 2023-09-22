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

  