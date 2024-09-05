// Seleciona o botão de pesquisa e o campo de input
const botaoPesquisar = document.querySelector('button');
const campoPesquisa = document.querySelector('input');

// Seleciona a área de resultados
const areaResultados = document.querySelector('.resultados-pesquisa');

// Dados dos estilos de cerveja
const estilosCerveja = {
    "Pilsen": {
        origem: "República Tcheca",
        caracteristicas: "Leve, refrescante, cor dourada clara e sabor amargo sutil.",
        harmonizacao: "Ideal com pratos leves, como saladas, frutos do mar e carnes brancas.",
        curiosidades: "A primeira Pilsen foi criada em 1842 na cidade de Plzeň, e deu nome ao estilo Pilsner."
    },
    "IPA": {
        origem: "Inglaterra",
        caracteristicas: "Amarga, alta concentração de lúpulo, com notas cítricas e florais.",
        harmonizacao: "Combina bem com pratos picantes, queijos fortes e pratos de carne grelhada.",
        curiosidades: "IPA significa 'India Pale Ale' e foi desenvolvida para suportar longas viagens marítimas para a Índia durante o período colonial."
    },
    "Stout": {
        origem: "Irlanda",
        caracteristicas: "Escura, rica em sabor de café e chocolate, com um toque de amargor.",
        harmonizacao: "Perfeita com sobremesas de chocolate, carnes grelhadas e pratos a base de feijão.",
        curiosidades: "A Guinness é uma das stouts mais famosas do mundo e tem uma receita que remonta a 1759."
    },
    "Witbier": {
        origem: "Bélgica",
        caracteristicas: "Clara, com especiarias como coentro e casca de laranja, sabor leve e refrescante.",
        harmonizacao: "Harmoniza com pratos leves, como frutos do mar e saladas, além de ser ótima com comida asiática.",
        curiosidades: "Witbier significa 'cerveja branca' em holandês, e o estilo é conhecido por sua turbidez devido ao uso de trigo não maltado."
    },
    "Saison": {
        origem: "Bélgica",
        caracteristicas: "Temporada, geralmente de cor dourada, sabor frutado e especiado, com uma leve acidez.",
        harmonizacao: "Combina bem com pratos de primavera e verão, como vegetais assados e queijos de cabra.",
        curiosidades: "Originalmente, as saisons eram produzidas em pequenas quantidades para trabalhadores rurais durante a temporada de colheita."
    }
};

// Adiciona o evento de clique no botão de pesquisa
botaoPesquisar.addEventListener('click', function(event) {
    event.preventDefault(); // Evita o recarregamento da página

    const termoPesquisa = campoPesquisa.value.trim().toLowerCase(); // Obtém o valor do campo de pesquisa e transforma em minúsculas
    if (termoPesquisa !== '') {
        mostrarResultados(termoPesquisa); // Chama a função de exibição de resultados
    } else {
        // Se o campo estiver vazio, exibe uma mensagem
        areaResultados.innerHTML = `<p>Por favor, insira um termo de pesquisa.</p>`;
    }
});

// Função para exibir os resultados na página
function mostrarResultados(filtro) {
    // Limpa os resultados anteriores
    areaResultados.innerHTML = '';

    // Filtra os dados com base no termo de pesquisa
    const resultado = estilosCerveja[filtro.charAt(0).toUpperCase() + filtro.slice(1)];

    // Se não houver resultados, exibe uma mensagem
    if (!resultado) {
        areaResultados.innerHTML = `<p>Nenhum estilo de cerveja encontrado com o nome "${filtro}".</p>`;
        return;
    }

    // Cria o elemento HTML para o resultado
    const itemResultado = document.createElement('div');
    itemResultado.classList.add('item-resultado');

    const titulo = document.createElement('h2');
    titulo.textContent = filtro.charAt(0).toUpperCase() + filtro.slice(1); // Capitaliza a primeira letra do estilo

    const descricao = document.createElement('p');
    descricao.classList.add('descricao-meta');
    descricao.innerHTML = `
        <strong>Origem:</strong> ${resultado.origem}<br>
        <strong>Características:</strong> ${resultado.caracteristicas}<br>
        <strong>Harmonização:</strong> ${resultado.harmonizacao}<br>
        <strong>Curiosidades:</strong> ${resultado.curiosidades}
    `;

    itemResultado.appendChild(titulo);
    itemResultado.appendChild(descricao);

    areaResultados.appendChild(itemResultado);
}

       


