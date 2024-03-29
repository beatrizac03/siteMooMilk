// VALIDAÇÃO LOGIN

document.addEventListener('DOMContentLoaded', function(){
    let btnEntrar = document.querySelector('.btnEntrar')

    btnEntrar.addEventListener('click', function() {
        let userLogin = document.querySelector('.userLogin').value
        let senhaLogin = document.querySelector('.senhaLogin').value
        let respLogin = document.querySelector('.respostaLogin') 
        let loginEfetuado = userLogin === 'candidato' && senhaLogin === 'sim'
    
        if(userLogin === '' || senhaLogin === ''){
            respLogin.innerHTML = 'Preencha todos os campos!'
        } else {
            if (loginEfetuado){
                window.location.href = 'portalcandidato.html'
            }
            else {
                respLogin.innerHTML = 'Senha ou usuário incorretos. Tente novamente'
            }
        }
    })
})

// FUNÇÃO ESCONDER E MOSTRAR
function esconderItens() {
    itensVaga.forEach(function(item) {
        item.classList.add('hidden');
    });
}

function mostrarItens() {
    itensVaga.forEach(function(item) {
        item.classList.remove('hidden');
    });
}

function adicionaHiddenClass(item){
    item.classList.add('hidden')
}

function removeHiddenClass(item){
    item.classList.remove('hidden')
}


// FILTRO DE VAGAS

const opcaoComercial = document.querySelector('#vaga-comercial')
const opcaoMarketing = document.querySelector('#vaga-marketing')
const opcaoProduc = document.querySelector('#vaga-producao')
const opcaoContab = document.querySelector('#vaga-contab')
const opcaoLogist = document.querySelector('#vaga-logistica')
const opcaoRH = document.querySelector('#vaga-rh')
const opcaoExibirTd = document.querySelector('.showallbtn')

const itensVaga = document.querySelectorAll('.itens-vagas')

const itemComercial = document.querySelectorAll('.comercialItem')
const itemMarketing = document.querySelectorAll('.marketingItem')
const itemContab= document.querySelectorAll('.contabItem')
const itemProduc = document.querySelectorAll('.producItem')
const itemLogist = document.querySelectorAll('.logistItem')
const itemRH = document.querySelectorAll('.rhItem')

const listItem = document.querySelectorAll('.list-item')

const btnCandidatar = document.querySelector('.botaoCandidatar')

const telaVaga = document.querySelector('.detalhes-vaga')
const btnFechar = document.querySelector('.btnFechar')



btnCandidatar.addEventListener('click', function(){
    telaVaga.classList.remove('hidden')
})

btnFechar.addEventListener('click', function(){
    telaVaga.classList.add('hidden')
    document.querySelector('body').style.opacity = '100%'
})

opcaoExibirTd.addEventListener('click', function(){
    mostrarItens()
})

opcaoComercial.addEventListener('click', function(){
    esconderItens()
    itemComercial.forEach(function(item) {
        item.classList.remove('hidden');
    });
})

opcaoMarketing.addEventListener('click', function(){
    esconderItens()
    itemMarketing.forEach(function(item) {
        item.classList.remove('hidden');
    });
})

opcaoContab.addEventListener('click', function(){
    esconderItens()
    itemContab.forEach(function(item) {
        item.classList.remove('hidden');
    });
})

opcaoProduc.addEventListener('click', function(){
    esconderItens()
    itemProduc.forEach(function(item) {
        item.classList.remove('hidden');
    });
})

opcaoLogist.addEventListener('click', function(){
    esconderItens()
    itemLogist.forEach(function(item) {
        item.classList.remove('hidden');
    });
})

opcaoRH.addEventListener('click', function(){
    esconderItens()
    itemRH.forEach(function(item) {
        item.classList.remove('hidden');
    });
})

    // sino de notificações

    let sinoNotif = document.querySelector('.sino-notif')
    let caixaNotific = document.querySelector('.msg-notif')
    let msgNotif = document.querySelector('.msg-notif--1')

    sinoNotif.addEventListener('click', function(){
        
        caixaNotific.classList.toggle('hidden')

        let numNotif = Math.trunc(Math.random() * 40) + 1
        msgNotif.innerHTML = `<b>Você possui ${numNotif} notificações</b>`
        msgNotif.style.fontSize = '1.2rem'
    })

/*  MEU PERFIL */

let btnPerfil = document.querySelector('.foto-perfil')
let sectionPerfil = document.querySelector('.descricao-perfil')
let sectionFiltroVagas = document.querySelector('.main-cont')
let opcaoCandidaturas = document.querySelector('.opcao-candidaturas');
let opcaoCurriculo = document.querySelector('.opcao-curriculo');
let curriculoDesc = document.querySelector('.curriculo-desc');
let candidaturasDesc = document.querySelector('.candidaturas-desc')
let btnVoltar = document.querySelector('.opcao-voltar')

btnVoltar.addEventListener('click', function(){
    adicionaHiddenClass(sectionPerfil)
    removeHiddenClass(sectionFiltroVagas)
})

btnPerfil.addEventListener('click', function () {
    adicionaHiddenClass(sectionFiltroVagas)
    removeHiddenClass(sectionPerfil)

    opcaoCandidaturas.classList.add('opcao-selecionada');
    opcaoCurriculo.classList.remove('opcao-selecionada');

    adicionaHiddenClass(curriculoDesc)
});

opcaoCandidaturas.addEventListener('click', function () {
    opcaoCandidaturas.classList.add('opcao-selecionada');
    opcaoCurriculo.classList.remove('opcao-selecionada');

    removeHiddenClass(candidaturasDesc)
    adicionaHiddenClass(curriculoDesc)
});

opcaoCurriculo.addEventListener('click', function () {
    opcaoCurriculo.classList.add('opcao-selecionada');
    opcaoCandidaturas.classList.remove('opcao-selecionada');

    removeHiddenClass(curriculoDesc)
    adicionaHiddenClass(candidaturasDesc)
});



