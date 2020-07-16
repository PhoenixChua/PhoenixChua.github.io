window.onload = function(){
      var val = localStorage.getItem('value');

      if(val == null)
          val = " ";

     document.getElementById("testinput").value = val;
	 
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
		});
	}
}

window.onbeforeunload = function(){
    localStorage.setItem('value', document.getElementById("testinput").value);
}