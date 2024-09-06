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
        // Se o campo de pesquisa estiver vazio ou o título incluir o texto da pesquisa, adiciona o resultado
        if (pesquisa === "" || dado.titulo.toLowerCase().includes(pesquisa)) {
            resultados += `
                <div class="item-resultado">
                    <h2><a href="${dado.link}" target="_blank">${dado.titulo}</a></h2>
                    <p><strong>Descrição:</strong> ${dado.descricao}</p>
                    <p><strong>Origem:</strong> ${dado.origem}</p>
                    <p><strong>Características:</strong> ${dado.caracteristicas}</p>
                    <p><strong>Harmonização:</strong> ${dado.harmonizacao}</p>
                    <p><strong>Curiosidades:</strong> ${dado.curiosidades}</p>
                </div>
            `;
        }
    }

    // Se não houver resultados, exibe uma mensagem
    if (resultados === "") {
        resultados = `<p class="mensagem-erro">Nenhum resultado encontrado para "${pesquisa}".</p>`;
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;

    // Remove a classe 'oculto' para mostrar a seção de resultados
    section.classList.remove('oculto');
}

// Adiciona o evento de clique no botão
document.addEventListener('DOMContentLoaded', function() {
    const botaoPesquisar = document.querySelector('button');

    // Inicialmente oculta a caixa de resultados
    const section = document.getElementById("resultados-pesquisa");
    section.classList.add('oculto');

    // Adiciona o evento de clique ao botão de pesquisa
    botaoPesquisar.addEventListener('click', pesquisar);
});



