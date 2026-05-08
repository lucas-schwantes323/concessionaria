const botaoInicio = document.getElementById('botaoInicio');
const botaoCadastrar = document.getElementById('botaoCadastrar');
const botaoRemover = document.getElementById('botaoRemover');
const botaoListar = document.getElementById('botaoListar');

const secaoCadastro = document.querySelector('#secaoCadastrar');
const secaoLista = document.querySelector('#secaoListar');
const secaoRemocao = document.querySelector('#secaoRemover');
const secaoHome = document.querySelector('#secaoHome');

const formularioCadastro = document.getElementById('formularioCadastro');


const carros = [];


function esconderSecoes(...idSecoes){
    for(let id of idSecoes){
        const secao = document.getElementById(id);
        if(secao){
            secao.style.display = "none";
        }
    }
}

function criarCarro(marca, modelo, ano, preco){
    return {
        id: Date.now(),
        marca: marca,
        modelo: modelo,
        ano: ano,
        preco: preco
    }
}

function validarEntradaFormulario(marca, modelo, ano, preco){
    if(!marca || !modelo || !ano || !preco){
        alert("Por favor, preencha todos os campos.");
        return false;
    }
    return true;
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

    formularioCadastro.reset();
})




botaoInicio.addEventListener('click', () => {
    esconderSecoes("secaoCadastrar", "secaoRemover", "secaoListar")
    secaoHome.style.display = "block";
});
botaoCadastrar.addEventListener('click', () => {{
    esconderSecoes("secaoHome", "secaoRemover", "secaoListar")
    secaoCadastro.style.display = 'block';

}});
botaoRemover.addEventListener("click", () =>{
    esconderSecoes("secaoCadastrar", "secaoHome", "secaoListar")
    secaoRemocao.style.display = "block";
})
botaoListar.addEventListener("click", () =>{
    esconderSecoes("secaoCadastrar", "secaoHome", "secaoRemover")
    secaoLista.style.display = "block";         

});