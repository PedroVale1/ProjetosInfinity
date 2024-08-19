const formulario = document.querySelector("#formulario");
const nomeContato = document.querySelector("#nomeContato");
const numeroContato = document.querySelector("#numero");
const emailContato = document.querySelector("#email");
const resultado = document.querySelector("#resultado");
const cadastrar = document.querySelector("#cadastrar");
const limpar = document.querySelector("#limpar");
const verContatos = document.querySelector("#verContatos");

limpar.addEventListener("click", () => {
    localStorage.clear();
    window.location.reload();
});

const meusContatos = JSON.parse(localStorage.getItem("meusContatos")) || [];
let idContador = meusContatos.length > 0 ? meusContatos[meusContatos.length - 1].id + 1 : 1;

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    if (cadastrar.textContent === "Editar") {
        const listaContatos = JSON.parse(localStorage.getItem("meusContatos")) || [];
        const idEditado = JSON.parse(localStorage.getItem("idEditado"));

        listaContatos.forEach((element) => {
            if (idEditado === element.id) {
                element.nome = nomeContato.value;
                element.numero = numeroContato.value;
                element.email = emailContato.value;

                localStorage.setItem("meusContatos", JSON.stringify(listaContatos));
                window.location.reload();
            }
        });

        cadastrar.textContent = "Cadastrar";
        nomeContato.value = "";
        numeroContato.value = "";
        emailContato.value = "";
        nomeContato.focus();
    } else {
        const objeto = {
            id: idContador,
            nome: nomeContato.value,
            numero: numeroContato.value,
            email: emailContato.value,
        };

        idContador++;

        meusContatos.push(objeto);
        localStorage.setItem("meusContatos", JSON.stringify(meusContatos));

        const nova_div = document.createElement("div");
        nova_div.style.backgroundColor = "gray";

        const novoNome = document.createElement("h2");
        novoNome.textContent = `Nome: ${objeto.nome}`;

        const novoNumero = document.createElement("p");
        novoNumero.textContent = `Número: ${objeto.numero}`;

        const novoEmail = document.createElement("p");
        novoEmail.textContent = `Email: ${objeto.email}`;

        const botaoEditar = document.createElement("button");
        botaoEditar.textContent = "Editar";
        botaoEditar.addEventListener("click", () => {
            nomeContato.value = objeto.nome;
            numeroContato.value = objeto.numero;
            emailContato.value = objeto.email;
            cadastrar.textContent = "Editar";
            localStorage.setItem("idEditado", objeto.id);
        });

        const botaoExcluir = document.createElement("button");
        botaoExcluir.textContent = "Excluir";
        botaoExcluir.addEventListener("click", () => {
            resultado.removeChild(nova_div);
            const index = meusContatos.findIndex(c => c.id === objeto.id);
            meusContatos.splice(index, 1);
            localStorage.setItem("meusContatos", JSON.stringify(meusContatos));
        });

        nova_div.append(novoNome, novoNumero, novoEmail, botaoEditar, botaoExcluir);
        resultado.appendChild(nova_div);

        nomeContato.value = "";
        numeroContato.value = "";
        emailContato.value = "";
        nomeContato.focus();
    }
});

// Flag para controlar se a lista está visível ou não
let listaVisivel = false;

// Função para exibir ou ocultar todos os contatos ao clicar no botão "Ver Contatos"
verContatos.addEventListener("click", () => {
    if (listaVisivel) {
        resultado.innerHTML = ""; // Limpa a tela
        verContatos.textContent = "Ver Contatos"; // Altera o texto do botão
    } else {
        const listaContatos = JSON.parse(localStorage.getItem("meusContatos")) || [];

        resultado.innerHTML = ""; // Limpa a tela antes de listar todos os contatos

        listaContatos.forEach((contato) => {
            const nova_div = document.createElement("div");
            nova_div.style.backgroundColor = "gray";

            const novoNome = document.createElement("h2");
            novoNome.textContent = `Nome: ${contato.nome}`;

            const novoNumero = document.createElement("p");
            novoNumero.textContent = `Número: ${contato.numero}`;

            const novoEmail = document.createElement("p");
            novoEmail.textContent = `Email: ${contato.email}`;

            const botaoEditar = document.createElement("button");
            botaoEditar.textContent = "Editar";
            botaoEditar.addEventListener("click", () => {
                nomeContato.value = contato.nome;
                numeroContato.value = contato.numero;
                emailContato.value = contato.email;
                cadastrar.textContent = "Editar";
                localStorage.setItem("idEditado", contato.id);
            });

            const botaoExcluir = document.createElement("button");
            botaoExcluir.textContent = "Excluir";
            botaoExcluir.addEventListener("click", () => {
                resultado.removeChild(nova_div);
                const index = listaContatos.findIndex(c => c.id === contato.id);
                listaContatos.splice(index, 1);
                localStorage.setItem("meusContatos", JSON.stringify(listaContatos));
            });

            nova_div.append(novoNome, novoNumero, novoEmail, botaoEditar, botaoExcluir);
            resultado.appendChild(nova_div);
        });

        verContatos.textContent = "Ocultar Contatos"; // Altera o texto do botão
    }

    listaVisivel = !listaVisivel; // Alterna o estado da lista
});
