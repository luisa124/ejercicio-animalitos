var img = document.getElementsByClassName("animal");

var select = document.getElementById("select");
select.onchange = function(){
    var color = select.value;
    if(color == "original"){
        for(var i = 0; i<img.length; i++){
            img[i].classList.remove("blanco-negro");
            img[i].classList.remove("invertir-colores");
            img[i].classList.remove("sepia");
        }
    }
    if(color == "blanco-negro"){
        for(var i = 0; i<img.length; i++){
            img[i].classList.add("blanco-negro");
            img[i].classList.remove("invertir-colores");
            img[i].classList.remove("sepia");
        }
    }
    if(color == "sepia"){
        for(var i = 0; i<img.length; i++){
            img[i].classList.add("sepia");
            img[i].classList.remove("invertir-colores");
            img[i].classList.remove("blanco-negro");
        }
    }
    if(color == "invertir-colores"){
        for(var i = 0; i<img.length; i++){
            img[i].classList.add("invertir-colores");
            img[i].classList.remove("blanco-negro");
            img[i].classList.remove("sepia");
        }
    }
}