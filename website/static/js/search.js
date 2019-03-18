document.addEventListener('DOMContentLoaded', function () {

  function loadSitemap() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            parseXML(this)
        }
    };
    xhttp.open("GET", "../sitemap.xml", true);
    xhttp.send();
  }

  // parses XML and returns sitemap hrefs
  function parseXML(xml) {
    var xmlDoc = xml.responseXML;
    var sitemapLinks = xmlDoc.getElementsByTagName("url");
    filterDocsLinks(sitemapLinks)
  }

  // filters sitemap links for 'docs' links 
  function filterDocsLinks(sitemapLinks) {
    for (i = 0; i < sitemapLinks.length; i++) {
      var href = sitemapLinks[i].childNodes[1].innerHTML;
      if (href.includes('/docs/')) {
        var title = href.substr(href.lastIndexOf("/") + 1).replace(/#|_|-/g,' ').replace(/\s\s+/g, ' ')
        docsLinks.push({
          title: title,
          href: href
        })
     }
    }
  }

  // filters docLinks for query and calls addResultsToDropdownList for matched links
  function filterDocsLinksForSearchQuery(query) {
    for (i = 0; i < docsLinks.length; i++) {
      if (docsLinks[i].title.includes(query)) addResultsToDropdownList(docsLinks[i], query);
    }
  }

  function addResultsToDropdownList(link, query) {
    dropdown_menu.classList.add('show');
    var a = document.createElement('a');
    a.setAttribute('href', link.href);
    a.innerHTML = link.title.replace(query, `<span class="highlight">${query}</span>`);      
    a.addEventListener('mousedown', function() {
      event.preventDefault();
    });
    dropdown_menu.appendChild(a);
  }

  function emptyDropdownList() {
    while (dropdown_menu.firstChild) {
      dropdown_menu.removeChild(dropdown_menu.firstChild);
    }
  }

  loadSitemap();
  let docsLinks = [];
   
  // add searchbar to header
  var nav = document.getElementsByClassName('nav-site nav-site-internal');
  var searchbar = `
  <li class="navSearchWrapper reactNavSearchWrapper">
    <span class="algolia-autocomplete" style="position: relative; display: inline-block; direction: ltr;">
      <input type="text" id="search_input_react" placeholder="Search" title="Search" class="aa-input" autocomplete="off" spellcheck="false" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-labelledby="search_input_react" aria-owns="algolia-autocomplete-listbox-0" dir="auto" style="position: relative; vertical-align: top;">
      <pre aria-hidden="true" style="position: absolute; visibility: hidden; white-space: pre; font-family: system-ui; font-size: 14px; font-style: normal; font-variant: normal; font-weight: 300; word-spacing: 0px; letter-spacing: normal; text-indent: 0px; text-rendering: auto; text-transform: none;"></pre>
      <span class="aa-dropdown-menu hide" role="listbox" id="autocomplete-list" style="width: 100%;overflow-y: auto; max-height: 500px;position: absolute; top: 100%; z-index: 100; left: 0px; right: auto;">
      </span>
    </span>
  </li>`;
  nav[0].insertAdjacentHTML('beforeend', searchbar);
  
  var searchbar_input = document.getElementById('search_input_react');
  var dropdown_menu = document.getElementById('autocomplete-list');

  searchbar_input.addEventListener('blur', function() {
    dropdown_menu.classList.remove('show');
    searchbar_input.value = '';
  })
  
  searchbar_input.addEventListener('input', function(e) {
    emptyDropdownList();
    filterDocsLinksForSearchQuery(this.value);
  });
});