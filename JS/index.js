window.onload = function(){
      var val = localStorage.getItem('value');

      if(val == null)
          val = " ";

     document.getElementById("testinput").value = val;
}

window.onbeforeunload = function(){
    localStorage.setItem('value', document.getElementById("testinput").value);
}