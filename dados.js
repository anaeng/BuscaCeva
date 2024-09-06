let dados = [
    // Estilos de Cervejas
    {
        titulo: "Pilsen",
        descricao: "A Pilsen é um estilo de cerveja de origem tcheca, conhecida por seu sabor leve e refrescante. Tem uma cor clara e é feita com lúpulo que dá um leve amargor. Ideal para quem gosta de cervejas suaves e fáceis de beber.",
        origem: "República Tcheca",
        caracteristicas: "Leve, clara, com amargor suave",
        harmonizacao: "Acompanha bem pratos leves como saladas e frutos do mar.",
        curiosidades: "Foi criada na cidade de Pilsen, em 1842, e é uma das cervejas mais consumidas no mundo.",
        link: "https://pt.wikipedia.org/wiki/Cerveja_Pilsen#:~:text=Pilsen%20ou%20Pilsener%20%C3%A9%20um,Checa)%20por%20volta%20de%201840."
    },
    {
        titulo: "IPA (India Pale Ale)",
        descricao: "A IPA é um estilo de cerveja originário da Inglaterra, caracterizado pelo seu alto teor de lúpulo, que confere um sabor marcante e aromas intensos de frutas e especiarias. Geralmente possui um amargor mais forte e um teor alcoólico mais elevado.",
        origem: "Inglaterra",
        caracteristicas: "Amarga, com notas frutadas e especiarias",
        harmonizacao: "Combina com pratos picantes, carnes grelhadas e queijos fortes.",
        curiosidades: "Foi desenvolvida no século XIX para suportar a longa viagem até a Índia, daí o nome 'India Pale Ale'.",
        link: "https://centralbrew.com.br/blog/serie-estilos-de-cerveja-conheca-a-india-pale-ale-ipa/"
    },
    {
        titulo: "Stout",
        descricao: "A Stout é um estilo de cerveja escura e encorpada, com notas de café, chocolate e toffee. Originária da Inglaterra, é conhecida pelo seu sabor robusto e complexidade. Ideal para quem gosta de cervejas com sabores intensos.",
        origem: "Inglaterra",
        caracteristicas: "Escura, com notas de café e chocolate",
        harmonizacao: "Ótima com sobremesas, especialmente chocolate, e pratos à base de carne.",
        curiosidades: "O estilo Stout foi popularizado por Arthur Guinness, fundador da cervejaria Guinness, no século XVIII.",
        link: "https://gastronomiacarioca.zonasul.com.br/stout-cerveja/#:~:text=Caracter%C3%ADsticas%20de%20uma%20Stout,sabores%20de%20cacau%20e%20caf%C3%A9."
    },
     {
        titulo: "Imperial Stout",
        descricao: "A Imperial Stout é uma versão mais intensa e robusta da Stout tradicional. Originária da Inglaterra, é conhecida pelo seu corpo cheio, notas intensas de café, chocolate amargo e toffee, e teor alcoólico mais alto. Ideal para quem aprecia cervejas complexas e encorpadas.",
        origem: "Inglaterra",
        caracteristicas: "Escura, encorpada, com notas intensas de café, chocolate amargo e toffee",
        harmonizacao: "Ótima com sobremesas ricas como tortas de chocolate e queijos fortes. Também combina bem com pratos de carne mais robustos.",
        curiosidades: "A Imperial Stout foi desenvolvida no século XVIII para exportação para a Rússia, com um teor alcoólico mais alto para suportar o transporte e o clima frio.",
        link: "https://cervejaemalte.com.br/blog/imperial-stout-um-estudo-completo-sobre-o-estilo/"
    },
    {
        titulo: "Weissbier",
        descricao: "A Weissbier, também conhecida como cerveja de trigo, é um estilo de cerveja de origem alemã. É turva e tem um sabor frutado, com notas de banana e cravo devido ao uso de leveduras especiais. É refrescante e leve, ideal para o verão.",
        origem: "Alemanha",
        caracteristicas: "Turva, com notas de banana e cravo",
        harmonizacao: "Combina bem com pratos de peixe e pratos da cozinha alemã, como salsichas.",
        curiosidades: "É uma das cervejas mais antigas da Alemanha, com uma tradição que remonta ao século XVI.",
        link: "https://pt.wikipedia.org/wiki/Weizenbier"
    },
    {
        titulo: "Saison",
        descricao: "A Saison é uma cerveja de origem belga, conhecida por suas características frutadas e picantes. Feita com leveduras de fermentação selvagem, tem um sabor complexo e é frequentemente condimentada com especiarias.",
        origem: "Bélgica",
        caracteristicas: "Frutada, picante, com notas especiadas",
        harmonizacao: "Acompanha pratos com especiarias, pratos de legumes e queijos curados.",
        curiosidades: "Originalmente, era feita para ser consumida durante o verão e distribuída para os trabalhadores das fazendas na Bélgica.",
        link: "https://centralbrew.com.br/blog/serie-estilos-de-cerveja-conheca-a-saison/"
    },
    {
        titulo: "Amber Ale",
        descricao: "A Amber Ale é uma cerveja de cor âmbar a cobre, com um equilíbrio entre malte e lúpulo. Possui um sabor suave de caramelo e um leve amargor.",
        origem: "Estados Unidos",
        caracteristicas: "Maltada, com notas de caramelo e leve amargor",
        harmonizacao: "Combina bem com hambúrgueres, pratos de frango e queijos semi-curados.",
        curiosidades: "É um estilo popular na cena de cervejas artesanais dos EUA, conhecido por seu equilíbrio e versatilidade.",
        link: "https://pt.wikipedia.org/wiki/Amber_Ale"
    },
    {
        titulo: "Brown Ale",
        descricao: "A Brown Ale é uma cerveja escura e maltada, com notas de nozes e chocolate. Originária da Inglaterra, é conhecida pelo seu sabor robusto e suave.",
        origem: "Inglaterra",
        caracteristicas: "Maltada, com notas de nozes e chocolate",
        harmonizacao: "Acompanha bem pratos de carne assada e pratos de inverno.",
        curiosidades: "O estilo foi popularizado por cervejarias inglesas no século XVIII e é conhecido por sua complexidade de sabor.",
        link: "https://www.clubedomalte.com.br/mybeerclass/brown-ale"
    },
    {
        titulo: "Gose",
        descricao: "A Gose é uma cerveja ácida e levemente salgada, originária da Alemanha. Tem notas de coriandro e sal, e é frequentemente fermentada com lactobacilos.",
        origem: "Alemanha",
        caracteristicas: "Ácida, salgada, com notas de coriandro",
        harmonizacao: "Acompanha bem pratos de peixe e comidas picantes.",
        curiosidades: "É um estilo de cerveja antiga que foi redescoberto recentemente na cena das cervejas artesanais.",
        link: "https://cervejar.com/cerveja-salgada-existe-conheca-o-estilo-gose/"
    },
    {
        titulo: "Barleywine",
        descricao: "A Barleywine é uma cerveja de alta graduação alcoólica, com um sabor intenso e maltado. Pode ser encontrada em versões mais doces ou mais amargas.",
        origem: "Inglaterra",
        caracteristicas: "Intensa, maltada, com alta graduação alcoólica",
        harmonizacao: "Combina bem com sobremesas e queijos fortes.",
        curiosidades: "Foi desenvolvida na Inglaterra no século XVIII e é conhecida por seu perfil de sabor complexo e robusto.",
        link: "https://www.clubedomalte.com.br/mybeerclass/barley-wine"
    },
    {
        titulo: "Lambic",
        descricao: "O Lambic é uma cerveja belga fermentada espontaneamente, conhecida por suas características ácidas e complexas. Muitas vezes é envelhecida e pode ser misturada com frutas.",
        origem: "Bélgica",
        caracteristicas: "Ácida, complexa, frequentemente com frutas",
        harmonizacao: "Acompanha bem queijos azuis e sobremesas de frutas.",
        curiosidades: "É fermentada com leveduras selvagens e bactérias presentes no ambiente, o que dá ao estilo seu caráter único.",
        link: "https://cervejaemalte.com.br/blog/as-principais-caracteristicas-da-lambic/"
    },
    {
        titulo: "Kölsch",
        descricao: "A Kölsch é uma cerveja de origem alemã, leve e refrescante, com um perfil de sabor limpo e levemente frutado. É fermentada com leveduras de alta fermentação.",
        origem: "Alemanha",
        caracteristicas: "Leve, refrescante, com notas frutadas",
        harmonizacao: "Combina bem com pratos leves e saladas.",
        curiosidades: "É uma cerveja tradicional da cidade de Colônia e é servida em copos estreitos e altos.",
        link: "https://ocaneco.com.br/historia-da-cerveja-kolsch/"
    },
    {
        titulo: "Cream Ale",
        descricao: "A Cream Ale é uma cerveja americana que combina características de ales e lagers, resultando em uma bebida leve e suave com um toque cremoso.",
        origem: "Estados Unidos",
        caracteristicas: "Leve, suave, com toque cremoso",
        harmonizacao: "Combina bem com pratos leves e aperitivos.",
        curiosidades: "Foi desenvolvida para oferecer uma opção refrescante e fácil de beber, ideal para climas quentes.",
        link: "https://www.cervejamarimbondo.com/post/cream-ale#google_vignette"
    },
    {
        titulo: "Doppelbock",
        descricao: "A Doppelbock é uma versão mais forte da Bock, uma cerveja tradicional alemã. Tem um sabor encorpado e maltado, com notas de caramelo, chocolate e frutas secas. Geralmente possui uma coloração de âmbar escuro a marrom e um teor alcoólico mais elevado.",
        origem: "Alemanha",
        caracteristicas: "Encorpada, maltada, com notas de caramelo e frutas secas",
        harmonizacao: "Combina bem com carnes assadas, queijos fortes e sobremesas à base de chocolate.",
        curiosidades: "Originalmente criada por monges na Alemanha para ser consumida durante o jejum, a Doppelbock é conhecida como 'pão líquido'.",
        link: "https://pt.wikipedia.org/wiki/Doppelbock"
    } 
    {    
        titulo: "Tripel",
        descricao: "A Tripel é uma cerveja belga clara e complexa, com notas frutadas e picantes. Geralmente possui um teor alcoólico elevado e é conhecida por sua leveza e drinkability, apesar de sua força.",
        origem: "Bélgica",
        caracteristicas: "Frutada, picante, com teor alcoólico elevado",
        harmonizacao: "Acompanha bem frutos do mar, queijos suaves e pratos levemente apimentados.",
        curiosidades: "O nome 'Tripel' vem do fato de que a cerveja é tradicionalmente feita com três vezes mais malte, resultando em uma bebida mais forte.",
        link: "https://centralbrew.com.br/blog/serie-estilos-de-cerveja-conheca-a-tripel"
    },
    {
        titulo: "Vienna Lager",
        descricao: "A Vienna Lager é uma cerveja de coloração âmbar, com um perfil maltado e levemente tostado. Originária da Áustria, possui um sabor equilibrado com notas suaves de caramelo e um final seco.",
        origem: "Áustria",
        caracteristicas: "Maltada, com notas de caramelo e leve tostado",
        harmonizacao: "Combina com pratos de carne assada, salsichas e pretzels.",
        curiosidades: "Foi desenvolvida em Viena por Anton Dreher no século XIX e inspirou o estilo Lager mexicano, popularizado por cervejarias como a Dos Equis.",
        link: "https://www.clubedomalte.com.br/mybeerclass/vienna-lager"
    }
];

