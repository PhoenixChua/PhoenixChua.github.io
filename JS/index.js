window.onload = function(){
    var val = localStorage.getItem('value');

    if(val == null)
        val = " ";

    document.getElementById("testinput").value = val;
	 
	var contentDivs = document.getElementsByClassName("SiteContent")[0].children;
	for (var i = 1; i < contentDivs.length; i++) 
	{
		contentDivs[i].style.visibility = "hidden";
		contentDivs[i].style.opacity = 0;
	}
	contentDivs[0].style.transition = "all 1.5s";
	contentDivs[0].style.MozTransition = "all 1.5s";
	 
	// Navigation bar link highlighting.
	var links = document.getElementsByClassName("link");	 
	for (var i = 0; i < links.length; i++) 
	{
		links[i].addEventListener("click", 
		function() 
		{				
			var current = document.getElementsByClassName("linkactive");
			current[0].className = current[0].className.replace(" linkactive", "");
			this.className += " linkactive";
			
			// Hide all other divs.
			var contentDivs = document.getElementsByClassName("SiteContent")[0].children;
			for (var i = 0; i < contentDivs.length; i++) 
			{
				contentDivs[i].style.visibility = "hidden";
				contentDivs[i].style.opacity = 0;
			}
			
			
			// Fade in the relevant content.
			var showString = this.innerHTML;
			showString = showString.replace(/\s+/g, "") + "Content";
			
			// Get the current div.
			var currentDiv = document.getElementsByClassName(showString);
			currentDiv[0].parentNode.prepend(currentDiv[0]);
			currentDiv[0].style.visibility = "visible";
			
			// Smoothly fade in.
			setTimeout(function()
			{
			currentDiv[0].style.transition = "all 1.5s";
			currentDiv[0].style.MozTransition = "all 1.5s";			
			currentDiv[0].style.opacity = 1;
			}, 1);
		});
	}
}

window.onbeforeunload = function(){
    localStorage.setItem('value', document.getElementById("testinput").value);
}