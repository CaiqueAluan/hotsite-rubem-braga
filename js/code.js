
// var btFechar = document.getElementById('btFechar')
var btFechar = document.querySelector('.popup .fechar')
var oferta = document.getElementById('oferta')
// evento cliquer no elemento fechar
btFechar.addEventListener('click',()=>{
    //alteração do css em tempo real
    oferta.style.display = 'none'
})


/* var num = 12
var raiz = Math.sqrt(num)
console.log(raiz)
console.log(Math.round(raiz))
console.log(Number(raiz.toFixed(2)) + 4) */