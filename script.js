document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(button => {
        button.addEventListener('click', () => {
            const item = button.parentElement;
            const body = item.querySelector('.accordion-body');

            // Fecha os outros itens abertos (opcional)
            document.querySelectorAll('.accordion-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.accordion-body').style.maxHeight = null;
                }
            });

            // Alterna o estado do item clicado
            item.classList.toggle('active');

            if (item.classList.contains('active')) {
                body.style.maxHeight = body.scrollHeight + "px";
            } else {
                body.style.maxHeight = null;
            }
        });
    });
});

// Lógica para Expandir/Recolher Artigos
function toggleArtigo(btn) {
    const artigo = btn.parentElement;
    const content = artigo.querySelector('.artigo-full-content');
    
    if (content.classList.contains('open')) {
        content.style.maxHeight = null;
        content.classList.remove('open');
        btn.textContent = 'Ler Artigo Completo';
    } else {
        content.classList.add('open');
        content.style.maxHeight = content.scrollHeight + "px";
        btn.textContent = 'Recolher Artigo';
    }
}
// Simulador de Banco de Dados de Processos
const bancoProcessos = [
    {
        numero: "0001234-56.2026.8.19.0001",
        cliente: "P. G. S. C.",
        vara: "2ª Vara Criminal da Capital - RJ",
        status: "Em Andamento",
        ultimaAtualizacao: "28/10/2026",
        movimentacoes: [
            { data: "28/10/2026", desc: "Petição de Defesa Prévia protocolada com sucesso." },
            { data: "15/10/2026", desc: "Juntada de procuração e habilitação nos autos." },
            { data: "02/10/2026", desc: "Instauração de Ação Penal." }
        ]
    },
    {
        numero: "0098765-43.2025.8.19.0001",
        cliente: "M. A. R.",
        vara: "1ª Vara de Crimes Financeiros - RJ",
        status: "Aguardando Decisão",
        ultimaAtualizacao: "19/10/2026",
        movimentacoes: [
            { data: "19/10/2026", desc: "Conclusos para o Juiz para apreciação de pedido de liberdade." },
            { data: "05/10/2026", desc: "Realização de Audiência de Custódia." }
        ]
    }
];

// Simulação de Autenticação na Área do Cliente
function autenticarCliente(event) {
    event.preventDefault();
    
    const cpfCnpj = document.getElementById('cpf-cnpj').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const divMensagem = document.getElementById('mensagem-login');

    // Simulação simples de login para demonstração
    if (cpfCnpj !== "" && senha !== "") {
        divMensagem.innerHTML = `
            <div style="background-color: #dcfce7; color: #166534; padding: 15px; border-radius: 6px; text-align: center; font-size: 0.95rem;">
                ✔ Autenticado com sucesso! Redirecionando para o seu painel privativo...
            </div>
        `;
        
        // Simula o direcionamento para o Painel/Dashboard após 1.5s
        setTimeout(() => {
            window.location.href = "painel-cliente.html";
        }, 1500);
    }
}
// Simulação de Envio do Formulário de Contato com Sigilo Garantido
function enviarMensagemContato(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const assunto = document.getElementById('assunto').value;
    const divRetorno = document.getElementById('mensagem-retorno');

    if (nome && telefone && assunto) {
        divRetorno.innerHTML = `
            <div style="background-color: #dcfce7; color: #166534; padding: 15px; border-radius: 6px; text-align: center; font-size: 0.95rem;">
                ✔ Mensagem recebida com sigilo absoluto! Nossa equipe entrará em contato com urgência pelo número informado.
            </div>
        `;

        // Limpa o formulário após o envio
        document.getElementById('form-contato').reset();

        // Remove a mensagem de sucesso após 6 segundos
        setTimeout(() => {
            divRetorno.innerHTML = "";
        }, 6000);
    }
}
// Funcionalidade do Menu Hambúrguer Responsivo
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            mainNav.classList.toggle('active');
        });

        // Fecha o menu automaticamente ao clicar em qualquer link (opcional, melhora a experiência)
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                mainNav.classList.remove('active');
            });
        });
    }
});