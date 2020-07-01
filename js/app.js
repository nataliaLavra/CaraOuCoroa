element("botaoJogar").onclick = () => {
    const jogadorCara = element("jogadorCara").value;
    const jogadorCoroa = element("jogadorCoroa").value;
    
    if (jogadorCara == "" || jogadorCoroa == ""){
        return alert("Digite os nomes!!")
    }
    
    const valor = Math.random();

    let imagem = "";
    let nomeVencedor = "";

    if(valor > 0.5){
        imagem = "coroa";
        nomeVencedor = jogadorCoroa;
    } else{
        imagem = "cara";
        nomeVencedor = jogadorCara;
    }

    const caminhoImagem = `assets/images/${imagem}.jpg`
    element("imagemMoeda").src = caminhoImagem;
    alert(nomeVencedor);
}

function element(id){
    return document.getElementById(id);
}