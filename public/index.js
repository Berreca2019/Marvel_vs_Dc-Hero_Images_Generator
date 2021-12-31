/* guardar o botão "Beleza" e container do pop-up*/
var pop = document.querySelector(".popupContainer");
var beleza = document.querySelector(".btnBeleza");

pop.addEventListener("click", esconde);
beleza.addEventListener("click", esconde);

function esconde(){
    pop.style.display = "none";
}

/* guarda o botão que apresenta o popUp*/
var aper = document.querySelector(".catContainer")

aper.addEventListener("click", function(){
    pop.style.display = "flex";
})

/* guardar os elementos do input radio button (happy face) em constantes*/
const mouth = document.querySelector(".mouth");
const leftEye = document.querySelector(".eye1");
const rightEye = document.querySelector(".eye2");
const switchBtn = document.querySelector(".switchBtn");
const tongue = document.querySelector(".tongue");



/* guardar os elementos de formação do formMarvel em constantes*/
const bodyMarvel = document.querySelector(".body");
const marvelSelector = document.querySelector(".marvelHeroes");
const bgForm = document.querySelector(".formBgContainer");
const dcSelector = document.querySelector(".dcHeroes");
const marvelElements = [bodyMarvel, marvelSelector, bgForm, dcSelector];



/*  guardar todos os elementos dentro de uma única costante do tipo array*/
const allElements = [mouth, leftEye, rightEye, switchBtn, tongue];

/* a function faz com que cada elemento receba a alteração pela class "happy"*/
switchBtn.addEventListener("click",happyFace)
function happyFace() {
        allElements.forEach(element =>{
        element.classList.toggle("marvel")});
        marvelElements.forEach(element =>{element.classList.toggle("formMarvel")});
}

/* guarda os elementos do contador em constantes*/
const incremento = document.querySelector(".add");
const decremento = document.querySelector(".remove");

var resultado = document.querySelector(".result");

incremento.addEventListener("click", add);
decremento.addEventListener("click", remove);

function add(){
    resultado.innerHTML++;
}

function remove(){
    resultado.innerHTML--;
}

var count = 0;

function mostrarImg(){
    var dcSelect = document.getElementById("dcSelect")
    var dcOption = dcSelect.options[dcSelect.selectedIndex].value
    var marvelSelect = document.getElementById("selectMarvel")
    var marvelOption = marvelSelect.options[marvelSelect.selectedIndex].value
    var container =  document.getElementById('image')
    count = resultado.innerHTML;

    for(var i=1; i<= count; i++){
        if(switchBtn.checked){
                if(marvelOption == "miranha"){
                container.innerHTML+="<img class='fotoresul' src='img/marvel/homem-aranha.jpg'>";
                }

                else if(marvelOption == "ferro"){
                container.innerHTML+="<img class='fotoresul' src='img/marvel/homem-ferro.jpg'>";
                }

                else if(marvelOption == "capitao"){
                    container.innerHTML+="<img class='fotoresul' src='img/marvel/captain.jpg'>";
                    }

                else if(marvelOption == "thor"){
                    container.innerHTML+="<img class='fotoresul' src='img/marvel/thor.png'>";
                    }

                else if(marvelOption == "strange"){
                    container.innerHTML+="<img class='fotoresul' src='img/marvel/dr-estranho.jpg'>";
                    }

                else if(marvelOption == "pantera"){
                    container.innerHTML+="<img class='fotoresul' src='img/marvel/pantera-negra.jpg'>";
                    }

                else if(marvelOption == "viuva"){
                    container.innerHTML+="<img class='fotoresul' src='img/marvel/viuva-negra.jpg'>";
                    }

                else if(marvelOption == "hulk"){
                    container.innerHTML+="<img class='fotoresul' src='img/marvel/hulk.jpg'>";
                    }

                else if(marvelOption == "feiticeira"){
                    container.innerHTML+="<img class='fotoresul' src='img/marvel/feiticeira-escarlate.jpg'>";
                    }

                else if(marvelOption == "visao"){
                    container.innerHTML+="<img class='fotoresul' src='img/marvel/visao.jpeg'>";
                    }
        }
        else{
            if(dcOption == "batman"){

                container.innerHTML+="<img class='fotoresul' src='img/dc/batman.jpg'>";
            }

            else if(dcOption == "ww"){

                container.innerHTML+="<img class='fotoresul' src='img/dc/ww.jpg'>";
            }

            else if(dcOption == "superman"){

                container.innerHTML+="<img class='fotoresul' src='img/dc/superman.jpg'>";
            }

            else if(dcOption == "flash"){

                container.innerHTML+="<img class='fotoresul' src='img/dc/flash.jpg'>";
            }

            else if(dcOption == "arqueiro"){

                container.innerHTML+="<img class='fotoresul' src='img/dc/arqueiro.jpg'>";
            }

            else if(dcOption == "robin"){

                container.innerHTML+="<img class='fotoresul' src='img/dc/robin.jpg'>";
            }

            else if(dcOption == "canario"){

                container.innerHTML+="<img class='fotoresul' src='img/dc/canario.jpg'>";
            }

            else if(dcOption == "lanterna"){

                container.innerHTML+="<img class='fotoresul' src='img/dc/lanterna.jpg'>";
            }

            else if(dcOption == "marte"){

                container.innerHTML+="<img class='fotoresul' src='img/dc/marte.jpg'>";
            }

            else if(dcOption == "batgirl"){

                container.innerHTML+="<img class='fotoresul' src='img/dc/batgirl.jpg'>";
            }
        }  

        var foot = document.querySelector(".foot")
        foot.style.display = "block"
    }

  resultado.innerHTML = 0;
}


   var botao = document.getElementById("btnMostrar")

   botao.addEventListener("click", mostrarImg)    