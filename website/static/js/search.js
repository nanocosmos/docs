document.addEventListener('DOMContentLoaded', function () {

	/** Adds searchbar widget to the header
		 * parses sitemap XML file to search through links
		 * filters links by matching search query input
		*/
    var Searchbar = (function () {
        const pathJSONSearchIndex = "/searchindex.json";
        const searchbarEntryPoint = document.getElementsByClassName('nav-site nav-site-internal');

        var docsLinks;
        var searchbar_input, dropdown_menu;

		/** loads in XML file and parses it 
		 * calls filterXMLForDocLinks method
		*/

        var loadJSONFile = function () {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    docsLinks = JSON.parse(this.response);
                }
            };
            xhttp.open("GET", pathJSONSearchIndex, true);
            xhttp.send();
        }

		/**
		 * filters docLinks for search query 
		 * calls addLinkToDropdownList for matched links
		 * @param {String} query search query
		 */
        var filterDocsLinksForSearchQuery = function (query) {
            if(!docsLinks) {
              addLinkToDropdownList("search not available");
              return -1;
            }
            for (i = 0; i < docsLinks.length; i++) {
                const title = docsLinks[i].title.toLowerCase()
                if (title.includes(query.toLowerCase())) {
		    //console.log(title.search(query.toLowerCase()))
                    addLinkToDropdownList(docsLinks[i], query);
                }
            }
        }

        /** removes all nodes from dropdown list */
        var emptyDropdownList = function () {
            while (dropdown_menu.firstChild) {
                dropdown_menu.removeChild(dropdown_menu.firstChild);
            }
        }

		/**
		 * adds a link to dropdown list
		 * @param {Object} link doc link object
		 * @param {String} query search query
		 */
        var addLinkToDropdownList = function (link, query) {
            dropdown_menu.classList.add('show');
            var a = document.createElement('a');
            // builds path 
            var locationHref = link.url;
            a.setAttribute('href', locationHref);
            if(!query) return;
            // highlights matched query
	    var index = link.title.toLowerCase().indexOf(query.toLowerCase());
	    var offset = (index + query.length)
	    var substr = link.title.substring(index, offset);
	    a.innerHTML = link.title.substring(0, index) + `<span class="highlight">${substr}</span>` + link.title.substring(offset)

            a.addEventListener('mousedown', function () {
                event.preventDefault();
            });
            dropdown_menu.appendChild(a);
        }

        var bindFunctions = function () {
            searchbar_input.addEventListener('blur', function () {
                dropdown_menu.classList.remove('show');
                searchbar_input.value = '';
                searchbar_input.classList.remove('searchbar_active');
            })

            searchbar_input.addEventListener('input', function (e) {
                emptyDropdownList();
                filterDocsLinksForSearchQuery(this.value);
            });

            searchbar_input.addEventListener('focus', function (e) {
                searchbar_input.classList.add('searchbar_active');
            });
        }

        /* Adds searchbar to DOM */
        var addSearchbar = function () {
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

        var init = function () {
            loadJSONFile();
            addSearchbar();
            bindFunctions();
        }

        return {
            init: init
        }
    })();

    Searchbar.init();
});
