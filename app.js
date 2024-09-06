// Função de pesquisa
function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o valor da caixa de pesquisa
    let pesquisa = document.querySelector('input[type="text"]').value.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        // Verifica se o título do dado contém o texto de pesquisa
        if (dado.titulo.toLowerCase().includes(pesquisa)) {
            // Cria um novo elemento HTML para cada resultado
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="${dado.link}" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank">Mais informações</a>
                </div>
            `;
        }
    }

    // Se não houver resultados, exibe uma mensagem
    if (resultados === "") {
        resultados = `<p class="mensagem-erro">Nenhum resultado encontrado para "${pesquisa}".</p>`;
    }

    // Atribui os resultados gerados à seção HTML e exibe a seção
    section.innerHTML = resultados;
    section.style.display = "block"; // Mostra a seção de resultados
}

// Vincula a função de pesquisa ao botão "Pesquisar"
document.getElementById("pesquisar-btn").addEventListener("click", pesquisar);

// Opcional: Permite a pesquisa ao pressionar a tecla "Enter"
document.getElementById("pesquisa-input").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        pesquisar();
    }
});

