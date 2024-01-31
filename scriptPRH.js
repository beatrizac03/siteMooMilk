/* LOGIN RH */

document.addEventListener('DOMContentLoaded', function(){
    let btnEntrar = document.querySelector('.btnEntrar')

    btnEntrar.addEventListener('click', function() {
        let userLogin = document.querySelector('.userLogin').value
        let idLogin = document.querySelector('.idLogin').value
        let senhaLogin = document.querySelector('.senhaLogin').value
        let respLogin = document.querySelector('.respostaLogin') 
        let loginEfetuado = userLogin === 'rh' && senhaLogin === 'moomilk' && idLogin === '123456'
    
        if(userLogin === '' || senhaLogin === '' || idLogin === ''){
            respLogin.innerHTML = 'Preencha todos os campos!'
        } else {
            if (loginEfetuado){
                window.location.href = 'portalRH.html'
            }
            else {
                respLogin.innerHTML = 'Senha ou usuário incorretos. Tente novamente'
            }
        }
    })
})



/*  MEU PERFIL */

let btnPerfil = document.querySelector('.foto-perfil')
let contPag = document.querySelector('.cont-pag--1')

btnPerfil.addEventListener('click', function() {
    contPag.classList.add('hidden')
})

let opcaoCandidaturas = document.querySelector('.opcao-candidaturas')
let opcaoCurriculo = document.querySelector('.opcao-curriculo')

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


// ADICIONANDO NOVA VAGA

let btnCadastrarVaga = document.querySelector('.adcvagas-pag')
let telaNovaVaga = document.querySelector('.novavaga-cadastro')

btnCadastrarVaga.addEventListener('click', function(){
    telaNovaVaga.classList.remove('hidden')
})

let btnRegistrarVaga = document.querySelector('.btnRegistrarVaga')



btnRegistrarVaga.addEventListener('click', function(){
    let inputSetorVaga = document.querySelector('.inputsetor').value
    let inputCargoVaga = document.querySelector('.inputcargo').value
    let inputSalarioVaga = document.querySelector('.inputsalario').value
    let inputDescricaoVaga = document.querySelector('.inputdesc').value
    let conteudoVagas = document.querySelector('.vagas-pag')
    let novaVaga = document.createElement('div');
    novaVaga.classList.add('vaga-item');

    let descNovaVaga = document.createElement('div')
    descNovaVaga.classList.add('desc-NovaVaga')

    let spanDiv = document.createElement('div');
    spanDiv.classList.add('spanDiv');

    spanDiv.innerHTML = 
    `<span><b>Setor: ${inputSetorVaga}</b></span>
    <span>Cargo: ${inputCargoVaga}</span>
    <span>Salario: R$ ${inputSalarioVaga}</span>
    <span>Descrição: ${inputDescricaoVaga}</span>`

    descNovaVaga.appendChild(spanDiv);

    telaNovaVaga.classList.add('hidden')
    
    document.querySelector('.inputsetor').value = '';
    document.querySelector('.inputcargo').value = '';
    document.querySelector('.inputsalario').value = '';
    document.querySelector('.inputdesc').value = '';

    spanDiv.style.display = 'flex'
    spanDiv.style.flexDirection = 'column'
    spanDiv.style.fontSize = '1.5rem'

    conteudoVagas.style.display = 'flex'
    conteudoVagas.style.flexDirection = 'column'
    conteudoVagas.style.gap = '2rem'

    let botoesDetalheVaga = document.createElement('div')
    botoesDetalheVaga.classList.add('botoes-detalheVaga')

    let botaoRemoverVaga = document.createElement('div')
    botaoRemoverVaga.classList.add('remover-vaga')
    botaoRemoverVaga.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
    botaoRemoverVaga.innerHTML += '<span>Remover vaga</span>'

    let botaoGerenciarCandidaturas = document.createElement('div')
    botaoGerenciarCandidaturas.classList.add('gerenciar-candidaturas')
    botaoGerenciarCandidaturas.innerHTML = '<i class="fa-solid fa-clipboard-list"></i>'
    botaoGerenciarCandidaturas.innerHTML += '<span>Gerenciar candidaturas</span>'

    botoesDetalheVaga.style.width = '20%'
    botoesDetalheVaga.style.height = '60%'

    botoesDetalheVaga.appendChild(botaoRemoverVaga)
    botoesDetalheVaga.appendChild(botaoGerenciarCandidaturas)

    descNovaVaga.appendChild(botoesDetalheVaga);
    conteudoVagas.appendChild(descNovaVaga);

    descNovaVaga.style.display = 'flex'
    descNovaVaga.style.justifyContent = 'space-between'

    botoesDetalheVaga.style.display = 'flex'
    botoesDetalheVaga.style.flexDirection = 'column'
    botoesDetalheVaga.style.gap = '1rem'
    botoesDetalheVaga.style.fontSize = '1.5rem'

    botaoRemoverVaga.style.display = 'flex'
    botaoRemoverVaga.style.alignItems = 'center'
    botaoRemoverVaga.style.gap = '1rem'

    botaoGerenciarCandidaturas.style.display = 'flex'
    botaoGerenciarCandidaturas.style.alignItems = 'center'
    botaoGerenciarCandidaturas.style.gap = '1rem'

    botaoGerenciarCandidaturas.style.backgroundColor = '#2490e8'
    botaoGerenciarCandidaturas.style.borderRadius = '1.3rem'
    botaoGerenciarCandidaturas.style.padding = '0.5rem'

    botaoRemoverVaga.style.backgroundColor = '#2490e8'
    botaoRemoverVaga.style.borderRadius = '1.3rem'
    botaoRemoverVaga.style.padding = '0.5rem'
})

let btnFecharCadastro = document.querySelector('.fecharCadastro')

btnFecharCadastro.addEventListener('click', function(){
    telaNovaVaga.classList.add('hidden')
})









