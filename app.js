document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.getElementById("search-button");
    const searchInput = document.getElementById("search-input");
    const resultadosPesquisa = document.querySelector(".resultados-pesquisa");

    // Importa os dados
    let dados = [
        {
            titulo: "Pilsen",
            descricao: "A Pilsen é um estilo de cerveja de origem tcheca, conhecida por seu sabor leve e refrescante. Tem uma cor clara e é feita com lúpulo que dá um leve amargor. Ideal para quem gosta de cervejas suaves e fáceis de beber.",
            origem: "República Tcheca",
            caracteristicas: "Leve, clara, com amargor suave",
            harmonizacao: "Acompanha bem pratos leves como saladas e frutos do mar.",
            curiosidades: "Foi criada na cidade de Pilsen, em 1842, e é uma das cervejas mais consumidas no mundo.",
            link: "https://pt.wikipedia.org/wiki/Cerveja_Pilsner"
        },
        {
            titulo: "IPA (India Pale Ale)",
            descricao: "A IPA é um estilo de cerveja originário da Inglaterra, caracterizado pelo seu alto teor de lúpulo, que confere um sabor marcante e aromas intensos de frutas e especiarias. Geralmente possui um amargor mais forte e um teor alcoólico mais elevado.",
            origem: "Inglaterra",
            caracteristicas: "Amarga, com notas frutadas e especiarias",
            harmonizacao: "Combina com pratos picantes, carnes grelhadas e queijos fortes.",
            curiosidades: "Foi desenvolvida no século XIX para suportar a longa viagem até a Índia, daí o nome 'India Pale Ale'.",
            link: "https://pt.wikipedia.org/wiki/India_Pale_Ale"
        },
        {
            titulo: "Stout",
            descricao: "A Stout é um estilo de cerveja escura e encorpada, com notas de café, chocolate e toffee. Originária da Inglaterra, é conhecida pelo seu sabor robusto e complexidade. Ideal para quem gosta de cervejas com sabores intensos.",
            origem: "Inglaterra",
            caracteristicas: "Escura, com notas de café e chocolate",
            harmonizacao: "Ótima com sobremesas, especialmente chocolate, e pratos à base de carne.",
            curiosidades: "O estilo Stout foi popularizado por Arthur Guinness, fundador da cervejaria Guinness, no século XVIII.",
            link: "https://pt.wikipedia.org/wiki/Stout"
        },
        {
            titulo: "Weissbier",
            descricao: "A Weissbier, também conhecida como cerveja de trigo, é um estilo de cerveja de origem alemã. É turva e tem um sabor frutado, com notas de banana e cravo devido ao uso de leveduras especiais. É refrescante e leve, ideal para o verão.",
            origem: "Alemanha",
            caracteristicas: "Turva, com notas de banana e cravo",
            harmonizacao: "Combina bem com pratos de peixe e pratos da cozinha alemã, como salsichas.",
            curiosidades: "É uma das cervejas mais antigas da Alemanha, com uma tradição que remonta ao século XVI.",
            link: "https://pt.wikipedia.org/wiki/Weissbier"
        },
        {
            titulo: "Saison",
            descricao: "A Saison é uma cerveja de origem belga, conhecida por suas características frutadas e picantes. Feita com leveduras de fermentação selvagem, tem um sabor complexo e é frequentemente condimentada com especiarias.",
            origem: "Bélgica",
            caracteristicas: "Frutada, picante, com notas especiadas",
            harmonizacao: "Acompanha pratos com especiarias, pratos de legumes e queijos curados.",
            curiosidades: "Originalmente, era feita para ser consumida durante o verão e distribuída para os trabalhadores das fazendas na Bélgica.",
            link: "https://pt.wikipedia.org/wiki/Saison"
        }
    ];

    searchButton.addEventListener("click", function() {
        const query = searchInput.value.trim().toLowerCase();

        // Limpe os resultados existentes
        resultadosPesquisa.innerHTML = "";

        if (query) {
            // Filtra os dados com base na consulta
            const resultados = dados.filter(dado => dado.titulo.toLowerCase().includes(query));

            if (resultados.length > 0) {
                // Construa o HTML para os resultados
                resultados.forEach(dado => {
                    const resultadoHTML = `
                        <div class="item-resultado">
                            <img src="${dado.titulo.toLowerCase().replace(/\s+/g, '-')}.jpg" alt="${dado.titulo}" style="width: 100px; height: auto;">
                            <div class="descricao-resultado">
                                <h2>${dado.titulo}</h2>
                                <p>${dado.descricao}</p>
                                <p><strong>Origem:</strong> ${dado.origem}</p>
                                <p><strong>Características:</strong> ${dado.caracteristicas}</p>
                                <p><strong>Harmonização:</strong> ${dado.harmonizacao}</p>
                                <p><strong>Curiosidades:</strong> ${dado.curiosidades}</p>
                                <a href="${dado.link}" target="_blank">Mais informações</a>
                            </div>
                        </div>
                    `;
                    resultadosPesquisa.innerHTML += resultadoHTML;
                });

                // Exibe a seção de resultados
                resultadosPesquisa.style.display = "block";
            } else {
                // Se não houver resultados, exiba uma mensagem ou mantenha a área oculta
                resultadosPesquisa.innerHTML = "<p>Nenhum resultado encontrado.</p>";
                resultadosPesquisa.style.display = "block";
            }
        } else {
            // Se a pesquisa estiver vazia, oculte a seção de resultados
            resultadosPesquisa.style.display = "none";
        }
    });
});


