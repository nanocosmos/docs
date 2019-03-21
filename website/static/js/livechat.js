(function(w, d, s, u) {
  document.addEventListener('DOMContentLoaded', function() {

    /* Add Live Chat link to nav */
    var headerLinkSupport = `<li class=""><a id="livechatHandle">Live Support</a></li>`;
    const searchbarEntryPoint = document.getElementsByClassName('nav-site nav-site-internal');
    searchbarEntryPoint[0].insertAdjacentHTML('beforeend', headerLinkSupport);
    var livechatHandle = document.getElementById('livechatHandle');

    livechatHandle.addEventListener('click', function() {
      var rocketchatWidget = document.getElementsByClassName('rocketchat-widget')[0];
      rocketchatWidget.style = "position: fixed; width: 320px; height: 350px; border-top-left-radius: 5px; border-top-right-radius: 5px; bottom: 0px; right: 50px; z-index: 12345; left: auto;"
    })
    

    w.RocketChat = function(c) { w.RocketChat._.push(c) }; w.RocketChat._ = []; w.RocketChat.url = u;
    var h = d.getElementsByTagName(s)[0], j = d.createElement(s);
    j.async = true; 
    j.src = '/js/rocketchat-livechat.min.js';
    h.parentNode.insertBefore(j, h);
  })
})(window, document, 'script', 'http://192.168.178.193:3000/livechat');