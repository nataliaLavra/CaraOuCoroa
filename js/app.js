// let nomeAlunos = ["Lucas", "João","Pedro"]

// for(let i = 0; i < nomeAlunos.length; i++){
//     console.log("Nome do aluno(a): " + nomeAlunos[i]);
// }

document.getElementById("botaoJogar").onclick = () => {
    let valor = Math.random();
    let imagem = "";
    if(valor > 0.5){
        imagem = "coroa";
    } else{
        imagem = "cara";
    }
    let caminhoImagem = `assets/images/${imagem}.jpg`
    document.getElementById("imagemMoeda").src = caminhoImagem;
}