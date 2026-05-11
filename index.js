const botaoInicio = document.getElementById('botaoInicio');
const botaoCadastrar = document.getElementById('botaoCadastrar');
const botaoRemover = document.getElementById('botaoRemover');
const botaoListar = document.getElementById('botaoListar');

const secaoCadastro = document.querySelector('#secaoCadastrar');
const secaoLista = document.querySelector('#secaoListar');
const secaoRemocao = document.querySelector('#secaoRemover');
const secaoHome = document.querySelector('#secaoHome');

const formularioCadastro = document.getElementById('formularioCadastro');
const formularioRemover = document.getElementById("formularioRemover");

const carros = [];

secaoCadastro.style.display = "none";
secaoLista.style.display = "none";
secaoRemocao.style.display = "none";


function esconderSecoes(...idSecoes){
    for(let id of idSecoes){
        const secao = document.getElementById(id);
        if(secao){
            secao.style.display = "none";
        }
    }
}

let proximoId = 1;

function validarEntradaFormulario(marca, modelo, ano, preco){
    if(!marca || !modelo || !ano || !preco){
        alert("Por favor, preencha todos os campos.");
        return false;
    }
    return true;
}

function criarCarro(marca, modelo, ano, preco){
    return {
        id: proximoId++,
        marca: marca,
        modelo: modelo,
        ano: ano,
        preco: preco
    }
}

function remmoverCarro(id){
    const index = carros.findIndex(carro => carro.id === id);
    if(index !== -1){
        carros.splice(index, 1);
        return true;
    }
    return false;

}


formularioCadastro.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const ano = document.getElementById('ano').value;
    const preco = document.getElementById('preco').value;

    if(!validarEntradaFormulario(marca, modelo, ano, preco)){
        return;
    }

    const carro = criarCarro(marca, modelo, ano, preco);
    carros.push(carro);
    alert(`Carro ${marca} ${modelo} cadastrado com sucesso!`);
    formularioCadastro.reset();
})

formularioRemover.addEventListener("submit", (evento) =>{
    evento.preventDefault();
    const id = parseInt(document.getElementById("id").value);
    const removido = remmoverCarro(id);
    if(removido){
        alert(`Carro com ID ${id} removido com sucesso!`);
    }
    else{
        alert(`Carro com ID ${id} não encontrado.`);
    }
})


function criarInfoCarroHTML(chave, texto){
    let p = document.createElement("p")
    let span = document.createElement("span")
    span.textContent = chave
    p.appendChild(span)
    p.appendChild(document.createTextNode(texto))
    return p
}

function criarHTMLCarro(carro){
    let imgCarro = document.createElement("img")
    imgCarro.setAttribute("alt","imagemCarro")
    imgCarro.setAttribute("src", "https://placeholder.com")
    let carroHTML = document.createElement("div")
    let divInfo = document.createElement("div")
    divInfo.setAttribute("class", "carroInfo")
    carroHTML.setAttribute("class", "carro")
    for(let chave in carro){
        let info = criarInfoCarroHTML(chave, carro[chave])
        divInfo.appendChild(info)
    }
    carroHTML.appendChild(imgCarro)
    carroHTML.appendChild(divInfo)
    return carroHTML
}

// const carroTeste = criarCarro("Toyota", "Corolla", 2023, 33000)
// const elementoCarro = criarHTMLCarro(carroTeste)
// document.body.appendChild(elementoCarro)


botaoInicio.addEventListener('click', () => {
    esconderSecoes("secaoCadastrar", "secaoRemover", "secaoListar")
    secaoHome.style.display = "flex";
});
botaoCadastrar.addEventListener('click', () => {{
    esconderSecoes("secaoHome", "secaoRemover", "secaoListar")
    secaoCadastro.style.display = 'flex';

}});
botaoRemover.addEventListener("click", () =>{
    esconderSecoes("secaoCadastrar", "secaoHome", "secaoListar")
    secaoRemocao.style.display = "flex";
})
botaoListar.addEventListener("click", () =>{
    esconderSecoes("secaoCadastrar", "secaoHome", "secaoRemover")
    secaoLista.style.display = "flex";         

});