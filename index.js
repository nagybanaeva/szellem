window.onLoad = Prep();
            function Prep()  {
                window_Height = window.innerHeight;
                window_Width = window.innerWidth;
                image_Element = document.getElementById("image");
                image_Height = image_Element.clientHeight;
                image_Width = image_Element.clientWidth;
                
                availSpace_V = window_Height - image_Height;
                availSpace_H = window_Width - image_Width;
                
                var changeInterval = 800; 
                setInterval(moveImage, changeInterval);
            }
            
            function moveImage(){
                var randNum_V = Math.round(Math.random() * availSpace_V);
                var randNum_H = Math.round(Math.random() * availSpace_H);
                
                image_Element.style.top = randNum_V + "px";
                image_Element.style.left = randNum_H + "px";
            }

var ghost = 0;
var ghostSzamlalo = document.querySelector("#ghostCounter");
var Ghost = document.querySelector(".ghost");
function ghostCsinalo () {
    ghost = ghost + 1;
    ghostSzamlalo.innerHTML = ghost;
    console.log(ghost);
}

Ghost.addEventListener("click", ghostCsinalo);
