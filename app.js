const livros = require("./script")


const readline = require("readline-sync")

const entrada = readline.question("Voce deseja encontrar um livro por categoria?(S/N)")


if(entrada === "S" || entrada === "s"){
      console.log("Produtividade e estilo de vida / Historia brasileira / Americas / Tecnologia / Estilo de vida")
      const categ = readline.question("Qual categoria voce escolhe?")
      const retorno = livros.filter(livro => livro.categoria === categ )
      console.table(retorno)
}else if(entrada === "N" || entrada === "n"){
  const livrosOrdenados = livros.sort((a,b)=> a.páginas - b.páginas)
    console.table(livrosOrdenados)
}else{
    console.log("Informação invalida")
}