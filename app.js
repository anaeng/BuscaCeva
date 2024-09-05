function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    const section = document.getElementById("resultados-pesquisa");
    
    // Obtém o valor do campo de pesquisa usando o ID correto
    const input = document.getElementById('busca');
    const busca = input.value.trim().toLowerCase();

    // Adiciona um log para depuração
    console.log('Valor da busca:', busca);
    
    // Filtra os dados com base na busca
    const resultados = dados.filter(dado => dado.titulo.toLowerCase().includes(busca));

    // Adiciona um log para depuração
    console.log('Resultados encontrados:', resultados);
    
    // Inicializa uma string vazia para armazenar os resultados
    let resultadosHtml = "";

    // Itera sobre cada dado filtrado
    for (let dado of resultados) {
        resultadosHtml += `
            <div class="item-resultado">
                <h2>
                    <a href="${dado.link}" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
        `;
    }

    // Se não houver resultados, mostra uma mensagem de erro
    if (resultados.length === 0) {
        resultadosHtml = '<p class="mensagem-erro">Nenhum estilo encontrado.</p>';
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultadosHtml;
}

