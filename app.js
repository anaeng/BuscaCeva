// Função de pesquisa
function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    // Inicializa uma string vazia para armazenar os resultados
    let resultadosHtml = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        if (dado.titulo.toLowerCase().includes(pesquisa)) {
            resultadosHtml += `
                <div class="item-resultado">
                    <h2><a href="${dado.link}" target="_blank">${dado.titulo}</a></h2>
                    <p><strong>Descrição:</strong> ${dado.descricao}</p>
                    <p><strong>Origem:</strong> ${dado.origem}</p>
                    <p><strong>Características:</strong> ${dado.caracteristicas}</p>
                    <p><strong>Harmonização:</strong> ${dado.harmonizacao}</p>
                    <p><strong>Curiosidades:</strong> ${dado.curiosidades}</p>
                    <a href="${dado.link}" target="_blank">Mais informações</a>
                </div>
            `;
        }
    }

    if (resultadosHtml === "") {
        resultadosHtml = `<p class="mensagem-erro">Nenhum resultado encontrado para "${pesquisa}".</p>`;
    }

    section.innerHTML = resultadosHtml;
    section.classList.add('mostrar');
}
