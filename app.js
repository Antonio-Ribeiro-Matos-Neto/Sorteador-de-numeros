let quantidade = '';
let de = '';
let ate = '';

function sortear() {
    quantidade = parseInt(document.getElementById('quantidade').value);
    de = parseInt(document.getElementById('de').value);
    ate = parseInt(document.getElementById('ate').value);
    let numero = fazerSorteio(quantidade, de, ate);
    document.getElementById('resultado').querySelector('label').innerHTML = `Números sorteados: ${numero.join(' , ')}`;
    let verificarValores = de >= ate ? reiniciar(alert('O valor do número deve ser menor que o valor de até o número') ) : fazerSorteio();    
}

function fazerSorteio(quantidade, de, ate) {
    let sorteados = [];
    for(let i = 0; i < quantidade; i++) {
        let numeroSorteado;
        do {
            numeroSorteado = Math.floor(Math.random() * (ate - de + 1) + de);
        } while (sorteados.includes(numeroSorteado));
 
        sorteados.push(numeroSorteado);
        trocarStatusDoBotao();   
    }
    return sorteados;
}

function trocarStatusDoBotao(){
    let botao = document.getElementById('btn-reiniciar');
    
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').querySelector('label').innerHTML = 'Números sorteados:  nenhum até agora';
    trocarStatusDoBotao();
}
