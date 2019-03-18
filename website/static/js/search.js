document.addEventListener('DOMContentLoaded', function() {
	
	/** Adds searchbar widget to the header
		 * parses sitemap XML file to search through links
		 * filters links by matching search query input
		*/
	var Searchbar = (function() {
		const pathXMLSitemap = "xml/sitemap.xml";
		const searchbarEntryPoint = document.getElementsByClassName('nav-site nav-site-internal');

		var docsLinks = [];
		var searchbar_input, dropdown_menu;

		/** loads in XML file and parses it 
		 * calls filterXMLForDocLinks method
		*/
		var loadXMLFile = function() {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
						var xmlDoc = this.responseXML;
						filterXMLForDocLinks(xmlDoc);
          }
      };
      xhttp.open("GET", pathXMLSitemap, true);
    	xhttp.send();
		}
		
		/**
		 * filters xml file for 'docs' links
		 * @param {xml} xmlFile Array of Links 
		 */
		var filterXMLForDocLinks = function(xmlFile) {
			var xmlDocLinks = xmlFile.getElementsByTagName("url");
			for (i = 0; i < xmlDocLinks.length; i++) {
					var href = xmlDocLinks[i].childNodes[1].innerHTML;
					// removes everything in front of last '/' occurance
					// removes special characters '-' '_'
					if (href.includes('/docs/')) {
							// keep string after last '/' and make readable
							var title = href.substr(href.lastIndexOf("/") + 1).replace(/#|_|-/g, ' ').replace(/\s\s+/g, ' ');
							// keep string after '/docs/
							href = href.substr(href.lastIndexOf("/docs/") + 1);
							docsLinks.push({
									title: title,
									href: href
							})
					}
			}
		}

		/**
		 * filters docLinks for search query 
		 * calls addLinkToDropdownList for matched links
		 * @param {String} query search query
		 */
		var filterDocsLinksForSearchQuery = function(query) {
			for (i = 0; i < docsLinks.length; i++) {
				if (docsLinks[i].title.includes(query)) {
					addLinkToDropdownList(docsLinks[i], query);
				}
			}
		}

		/** removes all nodes from dropdown list */
		var emptyDropdownList = function() {
			while (dropdown_menu.firstChild) {
					dropdown_menu.removeChild(dropdown_menu.firstChild);
			}
		}

		/**
		 * adds a link to dropdown list
		 * @param {Object} link doc link object
		 * @param {String} query search query
		 */
		var addLinkToDropdownList = function(link, query) {
			dropdown_menu.classList.add('show');
			var a = document.createElement('a');
			// builds path 
			var locationHref = window.location.href + link.href;
			a.setAttribute('href', locationHref);
			// highlights matched query
			a.innerHTML = link.title.replace(query, `<span class="highlight">${query}</span>`);
			a.addEventListener('mousedown', function() {
					event.preventDefault();
			});
			dropdown_menu.appendChild(a);
	 	}

		var bindFunctions = function() {
			searchbar_input.addEventListener('blur', function() {
				dropdown_menu.classList.remove('show');
				searchbar_input.value = '';
			})
		
			searchbar_input.addEventListener('input', function(e) {
					emptyDropdownList();
					filterDocsLinksForSearchQuery(this.value);
			});
		}

		/* Adds searchbar to DOM */
		var addSearchbar = function() {
			var searchbar = `
				<li class="navSearchWrapper reactNavSearchWrapper">
					<span class="algolia-autocomplete">
						<input type="text" id="search_input_react" placeholder="Search" title="Search" class="aa-input">
						<span class="aa-dropdown-menu hide" role="listbox" id="autocomplete-list">
						</span>
					</span>
				</li>`;
			searchbarEntryPoint[0].insertAdjacentHTML('beforeend', searchbar);
			searchbar_input = document.getElementById('search_input_react');
			dropdown_menu = document.getElementById('autocomplete-list');
		}

		var init = function() {
			loadXMLFile();
			addSearchbar();
			bindFunctions();
		}

		return {
			init: init
		}
	})();

	Searchbar.init();
});