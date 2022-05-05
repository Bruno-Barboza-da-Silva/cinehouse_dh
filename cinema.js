let cinema = "CineHouse"
console.log("Servidor funcionando")
let catalogo = require("./catalogo.json")


function adicionarFilme (codigo, titulo, duracao, atores, anoDelancamento, emCartaz) {
    catalogo.push(
        {
            codigo: codigo,
            titulo: titulo,
            duracao: duracao,
            atores: atores,
            anoDelancamento: anoDelancamento,
            emCartaz: emCartaz
        },
    )
}
adicionarFilme(05, "filme 5", 2, ["ator 9", "ator 10"], 2010, false);

// console.log(catalogo)

function buscarFilme(propriedade,valor){
    if(propriedade == "atores"){
        return catalogo.find(filme => filme[propriedade].find(ator => ator == valor))
    }
    return catalogo.find(filme => filme[propriedade] == valor)
}

// console.log(buscarFilme('atores', "ator 9"))



const listarTodosOsFilmes = () => {
    console.log('Listas de Filmes:')
    for(let i = 0; i < catalogo.length; i++){
        console.log(catalogo[i].titulo)
    }
}


const listarFilmesEmCartaz = () => {
    console.log('Filmes em Cartaz:')
    for(let i = 0; i < catalogo.length; i++){
        if(catalogo[i].emCartaz == true){
            console.log(catalogo[i].titulo)
        }
    }
}

const alterarStatusEmCartaz = () => {
    console.log('Filmes alterados:')
    for(let i = 0; i < catalogo.length; i++){
        if(catalogo[i].emCartaz == false){
            console.log(catalogo[i].titulo)
            catalogo[i].emCartaz = !false
        }
    }
}


const listarFilmesDeLongaDuracao = () => {
    console.log(catalogo.filter((catalogo) => catalogo.duracao == 2))
}

listarFilmesDeLongaDuracao()