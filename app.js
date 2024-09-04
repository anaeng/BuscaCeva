// Seleciona o botão de pesquisa e o campo de input
const botaoPesquisar = document.querySelector('button');
const campoPesquisa = document.querySelector('input');

// Seleciona a área de resultados
const areaResultados = document.querySelector('.resultados-pesquisa');

// Função para exibir os resultados na página
function mostrarResultados(filtro) {
    // Limpa os resultados anteriores
    areaResultados.innerHTML = '';

    // Filtra os dados com base no termo de pesquisa
    const resultadosFiltrados = dados.filter(item =>
        item.titulo.toLowerCase().includes(filtro.toLowerCase())
    );

    // Se não houver resultados, exibe uma mensagem
    if (resultadosFiltrados.length === 0) {
        areaResultados.innerHTML = `<p>Nenhum resultado encontrado.</p>`;
        return;
    }

    // Percorre os resultados filtrados e cria os elementos HTML para cada item
    resultadosFiltrados.forEach(item => {
        const itemResultado = document.createElement('div');
        itemResultado.classList.add('item-resultado');

        const titulo = document.createElement('h2');
        const link = document.createElement('a');
        link.href = item.link;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = item.titulo;

        titulo.appendChild(link);

        const descricao = document.createElement('p');
        descricao.classList.add('descricao-meta');
        descricao.textContent = item.descricao;

        const linkMaisInfo = document.createElement('a');
        linkMaisInfo.href = item.link;
        linkMaisInfo.target = '_blank';
        linkMaisInfo.rel = 'noopener noreferrer';
        linkMaisInfo.textContent = 'Mais informações';

        itemResultado.appendChild(titulo);
        itemResultado.appendChild(descricao);
        itemResultado.appendChild(linkMaisInfo);

        areaResultados.appendChild(itemResultado);
    });
}

// Adiciona o evento de clique no botão de pesquisa
botaoPesquisar.addEventListener('click', function(event) {
    event.preventDefault(); // Evita o recarregamento da página

    const termoPesquisa = campoPesquisa.value.trim(); // Obtém o valor do campo de pesquisa
    if (termoPesquisa !== '') {
        mostrarResultados(termoPesquisa); // Chama a função de exibição de resultados
    } else {
        // Se o campo estiver vazio, exibe todos os resultados
        mostrarResultados('');
    }
});

// Exibe todos os resultados ao carregar a página
mostrarResultados('');

