var altura = 0
var largura = 0
var vidas = 1
var tempo = 30
var criamosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel=== 'normal'){
    criamosquitoTempo = 2800
}else if(nivel === 'dificil'){
    criamosquitoTempo= 1000
}else if (nivel ==='chucknorris'){
    criamosquitoTempo = 700
}


function ajustaTamanhoPalcoJogo() {

    altura = innerHeight
    largura = innerWidth

    console.log(altura, largura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){
    tempo -= 1 
    if(tempo<0){
        clearInterval(cronometro)
        clearInterval(criamosquito)
        window.location.href = 'vitoria.html'
    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

function posicaoRandomica() {

    //remover mosquito anterior, caso ele exista

    if(document.getElementById('mosquito')){
        document.getElementById("mosquito").remove()
if(vidas>3){
     location.href='fim.html'   
 }else{
        document.getElementById('v'+vidas).src = 'imagens/coracao_vazio.png'
        vidas++
    }

    
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.ceil(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX,posicaoY)
    // condicação ? expressão1 : expressão2

    // Criar o elemento mosquito
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id="mosquito"
    mosquito.onclick= function(){this.remove()}
    document.body.appendChild(mosquito)
    console.log(ladoAleatorio())

}

var criamosquito= setInterval(function(){
    posicaoRandomica()

},criamosquitoTempo)

posicaoRandomica()

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)
    
    switch (classe) {
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}
