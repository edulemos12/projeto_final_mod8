const form = document.getElementById('form-contatos');
let linhas = '';

const nomes = [];
const numeros = [];



form.addEventListener('submit', function(e){
    
    e.preventDefault();

    const nome = document.getElementById('nome')
    const numero = document.getElementById('numero')

    alert(`Nome: ${nome.value} Numero: ${numero.value}`)
    adicionaLinha();
    atualizaTabela()
})

function adicionaLinha(){
    const nome = document.getElementById('nome');
    const numero = document.getElementById('numero');

    if(numeros.includes(numero.value)){
        alert(`O Numero: ${numero.value} já foi inserido.`);
    }

    else{
        nomes.push(nome.value);
        numeros.push(numero.value);
        
        print(`${nomes} + ${numeros}`)

        let linha = '<tr>';
        linha += `<td> ${nome.value}</td>`;
        linha += `<td> ${numero.value}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }

    nome.value = '';
    numeros.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}



