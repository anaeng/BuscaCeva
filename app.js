// Função de pesquisa
function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let pesquisa = document.getElementById('pesquisa-input').value.toLowerCase();

    let dados = [
        {
            titulo: "Pilsen",
            descricao: "A Pilsen é um estilo de cerveja de origem tcheca, conhecida por seu sabor leve e refrescante. Tem uma cor clara e é feita com lúpulo que dá um leve amargor.",
            origem: "República Tcheca",
            caracteristicas: "Leve, clara, com amargor suave",
            harmonizacao: "Acompanha bem pratos leves como saladas e frutos do mar.",
            curiosidades: "Foi criada na cidade de Pilsen, em 1842.",
            link: "https://pt.wikipedia.org/wiki/Cerveja_Pilsen"
        }
        // Adicione mais estilos de cerveja conforme necessário
    ];

    let resultadosHtml = "";

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
