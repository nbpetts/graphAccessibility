/* JavaScript polyfill to fix a few browsers */
	/* that do not support the details element yet. */

	if (window.addEventListener) {
		window.addEventListener("load", function () {

			function handleSummaryKeyUp(e) {
				if (e.keyCode == 13 || e.keyCode == 32) {
					toggleOpen(this.parentElement);
					e.preventDefault();
					e.stopPropagation();
				}
			}

			function handleSummaryClicked(e) {

				toggleOpen(this.parentElement);
				e.preventDefault();
				e.stopPropagation();
			}

			function toggleOpen(el) {
				if (el.hasAttribute("open")) {
					el.removeAttribute("open");
				} else {
					el.setAttribute("open", "");
				}
			}

			var summaryElements = document.getElementsByTagName("summary");
			for (var i=0, c=summaryElements.length; i<c; i++) {
				var el = summaryElements[i];

				/* If the element's "open" property is undefined,
				   the browser does not support the details interface.
				   Retrofit the functionality with mouse and key events. */
				if (typeof el.parentElement.open === "undefined") {
					el.addEventListener("click", handleSummaryClicked);
					el.addEventListener("keyup", handleSummaryKeyUp);
				}
			}

		});
	}
