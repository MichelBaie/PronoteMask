var fait
window.setInterval( function(){
    if(fait !== true) {
        var element = document.getElementById("GInterface.Instances[0].Instances[0]");
        if(element !== "null") {
            element.parentNode.removeChild(element);
            document.title = 'Pronote'; // New title :)
            fait = true
        }
    }
  },10)