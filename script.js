function verificar(){
    let ninicial = document.querySelector('input#ninicial') //utilizamos let pois esta variável sera utilizada somente neste escopo (não é global)
    let nfinal = document.querySelector('input#nfinal') //recebe os dados dos "inputs"
    let npasso = document.querySelector('input#npasso')     
    let res = document.querySelector('div#res')  //recebe os dados da div nomeada como res
    
    if (ninicial.value == 0 || nfinal.value == 0 || npasso.value == 0){  //validação: caso algum dos números seja igual a 0 não será permitida a contagem
        res.innerHTML = 'Números inválidos!'
    } 
    else {
        res.innerHTML = 'Contando: <br>' //caso a validação seja aprovada se dá início ao script
        let i = Number(ninicial.value)
        let f = Number(nfinal.value)  //cada variável recebe o valor inserido nos inputs declarados no início, e são convertidas de string p/ número.
        let p = Number(npasso.value)

        if (i < f){ //se o número inicial for maior que o final...
            for(let c = i; c <= f; c += p){
                res.innerHTML += `\n${c} \u{1F3C7}` //emoji
            }
        }
        else { //senão...
            for(let c = i; c >= f; c-= p){ 
                res.innerHTML += `\n${c} \u{1F3C7}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }                                                            
}