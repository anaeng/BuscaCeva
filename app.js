<script>
    // Função de pesquisa
    function pesquisar() {
        // Obtém a seção HTML onde os resultados serão exibidos
        let section = document.getElementById("resultados-pesquisa");

        // Obtém o valor da caixa de pesquisa
        let pesquisa = document.querySelector('input[type="text"]').value.toLowerCase();

        // Dados de exemplo (aqui é onde seus dados reais devem ser carregados)
        let dados = [
            {
                titulo: "Pilsen",
                descricao: "A Pilsen é um estilo de cerveja de origem tcheca, conhecida por seu sabor leve e refrescante. Tem uma cor clara e é feita com lúpulo que dá um leve amargor. Ideal para quem gosta de cervejas suaves e fáceis de beber.",
                origem: "República Tcheca",
                caracteristicas: "Leve, clara, com amargor suave",
                harmonizacao: "Acompanha bem pratos leves como saladas e frutos do mar.",
                curiosidades: "Foi criada na cidade de Pilsen, em 1842, e é uma das cervejas mais consumidas no mundo.",
                link: "https://pt.wikipedia.org/wiki/Cerveja_Pilsen#:~:text=Pilsen%20ou%20Pilsener%20%C3%A9%20um,Checa)%20por%20volta%20de%201840."
            }
            // Adicione mais dados se necessário
        ];

        // Inicializa uma string vazia para armazenar os resultados
        let resultadosHtml = "";

        // Itera sobre cada dado da lista de dados e compara com o valor pesquisado
        for (let dado of dados) {
            if (dado.titulo.toLowerCase().includes(pesquisa)) {
                resultadosHtml += `
                    <div class="item-resultado">
                        <h2>
                            <a href="${dado.link}" target="_blank">${dado.titulo}</a>
                        </h2>
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

        // Se não houver resultados, exibe uma mensagem
        if (resultadosHtml === "") {
            resultadosHtml = `<p class="mensagem-erro">Nenhum resultado encontrado para "${pesquisa}".</p>`;
        }

        // Atribui os resultados gerados à seção HTML
        section.innerHTML = resultadosHtml;

        // Mostra a caixa de resultados
        section.classList.add('mostrar');
    }

    // Adiciona o ouvinte de evento ao botão de pesquisa
    document.querySelector('section button').addEventListener('click', function() {
        pesquisar();
    });
</script>
