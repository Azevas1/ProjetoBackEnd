let livros = [
    {
        id:1,
        nome: "Padrões Js",
        autor: "Stoyan Stefanov",
        categoria: "Tecnologia",
        páginas: 231,
        recomenda: true,
        leu: true 
    },
    {   
        id:2,
        nome: "Difital Minimalism",
        autor: "Cal Newport",
        categoria: "Produtividade e estilo de vida",
        páginas: 254,
        recomenda: false,
        leu: false
    },
    {   
        id:3,
        nome: "O Genocídio do negro brasileiro",
        autor: "Abdias do Nascimento",
        categoria: "Historia brasileira",
        páginas: 254,
        recomenda: false,
        leu: false
    },
    {   
        id:4,
        nome: "As veias abertas da américa latina",
        autor: "Eduardo Galeano",
        categoria: "Americas",
        páginas: 400,
        recomenda: false,
        leu: false
    },
    {
        id: 5,
        nome: "Algoritmos para viver",
        autor: "Brian Christian",
        categoria: "Tecnologia",
        páginas: 412,
        recomenda: true,
        leu: true
    },
    {
        id: 6,
        nome: "Thinking, fast and slow",
        autor: "Daniel kahneman",
        categoria: "Estilo de vida",
        páginas: 418,
        recomenda: true,
        leu: true
    }
]

module.exports = livros

// let resp = console.log("Você deseja encontrar um livro por categoria?(S/N)")

// if(resp === "S"){
//    console.log("Produtividade e estilo de vida / História brasileira / Américas / Tecnologia / Estilo de vida")
// let categ  = console.log("Qual categoria você escolhe?")
//     if(categ == "Tecnologia"){
//         console.log(livros[0])
//     }
// }