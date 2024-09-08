const estados = [
 {
  nome: "Bahia",
  capital: "Salvador",
  curiosidades: "A Bahia é conhecida por seu carnaval, suas praias belíssimas e sua forte cultura afro-brasileira, sendo o berço do samba e do acarajé.",
  lenda: "Uma das principais lendas da Bahia é a do Quibungo, um monstro que persegue crianças rebeldes. O Quibungo é descrito como um bicho peludo, feio e malvado, com uma grande boca cheia de dentes nas costas. Ele persegue crianças que fazem malcriações e que se recusam a dormir, devorando-as assim que as captura.",
  img: ["img/bahia.jpg", "img/forte.jpg", "img/afro.jpg", "img/quibungo.jpg"],
  bandeira: "img/bahia.jpg"
 },
 {
  nome: "Ceará",
  capital: "Fortaleza",
  curiosidades: "O Ceará possui algumas das praias mais bonitas do Brasil, como Jericoacoara e Canoa Quebrada, além de ser famoso por seu artesanato.",
  lenda: "A lenda de Iracema conta a história do colonizador português Martim, que é atingido por uma flecha da índia Iracema durante uma caçada na região serrana do Ceará no século XVII. A relação entre os dois personagens simboliza o surgimento de uma nova nação e de um novo povo.",
  img: ["img/jericoacoara.jpg", "img/canoa.jpg", "img/artesance.jpg", "img/iracema.jpg"],
  bandeira: "img/ceara.jpg"
 },
 {
  nome: "Alagoas",
  capital: "Maceió",
  curiosidades: "Alagoas é conhecida por suas praias de águas cristalinas, como Maragogi, e pelo folclore com o guerreiro e o pastoril.",
  lenda: "A Lenda da Mulher da Capa Preta, Conta-se que a Mulher da Capa Preta era uma mulher muito bonita e elegante, mas que tinha um coração amargo e uma vida cheia de mistérios. Ela andava pelas ruas à noite, vestida com uma capa preta que cobria seu corpo todo, e aparecia frequentemente em lugares desolados e sombrios.",
  img: ["img/maragogi.jpg", "img/folclore.jpg", "img/guerreiro.jpeg", "img/capa.jpg"],
  bandeira: "img/alagoas.jpg"
 },
 {
  nome: "Maranhão",
  capital: "São Luís",
  curiosidades: "O Maranhão é lar dos Lençóis Maranhenses e tem o bumba meu boi como uma das maiores expressões culturais do estado.",
  lenda: "Uma das principais lendas do Maranhão é a da carruagem de Ana Jansen, também conhecida como Donana, Segundo a lenda, Ana Jansen foi condenada a vagar eternamente pelas ruas de São Luís em uma carruagem fantasmagórica.",
  img: ["img/lencois.jpg", "img/bumba.jpg", "img/donana.jpg"],
  bandeira: "img/maranhao.jpg"
 },
 {
  nome: "Paraíba",
  capital: "João Pessoa",
  curiosidades: "A Paraíba é famosa pelo pôr do sol em João Pessoa ao som do Bolero de Ravel, além do São João de Campina Grande.",
  lenda: "A lenda de ‘O Mão-Pelada’ é famosa na Paraíba. Trata-se de um ser mitológico que aparece nas festas juninas para assustar as crianças e adultos desobedientes.",
  img: ["img/porsol.jpg", "img/bolero.jpg", "img/saojoao.jpeg", "img/mao.jpg"],
  bandeira: "img/paraiba.jpg"
 },
 {
  nome: "Pernambuco",
  capital: "Recife",
  curiosidades: "Pernambuco é o berço do frevo e do maracatu, com um dos carnavais mais famosos do Brasil em Recife e Olinda.",
  lenda: "O Recife Assombrado, reza a tradição popular que, nas águas do Rio Capibaribe, habitam muitos fantasmas. Principalmente, almas penadas de suicidas – pessoas que usaram o rio como rota de fuga deste mundo cruel e permanecem no limbo, no purgatório entre o Céu e o Inferno.",
  img: ["img/frevo.jpg", "img/recife.jpg", "img/olinda.jpg", "img/recifesombra.jpg"],
  bandeira: "img/pernambuco.jpg"
 },
 {
  nome: "Piauí",
  capital: "Teresina",
  curiosidades: "Piauí é o único estado nordestino com uma pequena faixa litorânea, famosa por Parnaíba e o Delta do Parnaíba.",
  lenda: "Cabeça de Cuia é um mito da Região Nordeste do Brasil, mais precisamente contado no estado do Piauí, ao longo da bacia do Rio Parnaíba. Ele é conhecido como Lucas Arcanjo, para os mais próximos na época como o Arcanjo renegado. Ha lendas que ele vaga também pelo Rio Paraíba a procura de vítimas e as ataca com a cabeça.",
  img: ["img/faixa.jpg", "img/parnaiba.jpg", "img/delta.jpg", "img/cuia.jpg"],
  bandeira: "img/piaui.jpg"
 },
 {
  nome: "Rio Grande do Norte",
  capital: "Natal",
  curiosidades: "O Rio Grande do Norte é conhecido por suas dunas em Genipabu, suas praias e pela produção de sal marinho.",
  lenda: "A lenda da “Mãe do Ouro” é famosa no Rio Grande do Norte. Ela é uma entidade que protege os tesouros escondidos e aparece para aqueles que têm um coração puro.",
  img: ["img/genipapu.jpg", "img/praias.jpg", "img/sal.jpg", "img/mae.jpg"],
  bandeira: "img/rn.jpg"
 },
 {
  nome: "Sergipe",
  capital: "Aracaju",
  curiosidades: "Sergipe é o menor estado do Brasil, mas abriga o belo Cânion do Xingó e tem um folclore riquíssimo com danças e festas tradicionais.",
  lenda: "O Lobisomem do sertão A lenda ganhou força durante as décadas de 70 e 80, quando foram relatadas pelos moradores aparições de um “cachorro selvagem” muito maior do que qualquer outro jamais avistado e que se movia rapidamente por meio das estradas de terra batida.",
  img: ["img/canion.jpg", "img/danca.jpg", "img/festa.jpg", "img/lobis.jpg"],
  bandeira: "img/sergipe.jpg"
 }
];

const menu = document.getElementById('menu-estados');
const conteudo = document.getElementById('conteudo');
const inputBusca = document.getElementById('input-busca');

// Função para gerar o menu de estados (filtrados ou não)
function gerarMenu(estadosFiltrados) {
 menu.innerHTML = ''; // Limpa o menu antes de exibir
 estadosFiltrados.forEach((estado) => {
  const li = document.createElement('li');

  const a = document.createElement('a');
  a.href = "#";
  a.onclick = () => mostrarCuriosidades(estado); // Passa o estado correto para a função

  const nome = document.createElement('span');
  nome.textContent = estado.nome;

  const imgBandeira = document.createElement('img');
  imgBandeira.src = estado.bandeira;
  imgBandeira.alt = `Bandeira de ${estado.nome}`;
  imgBandeira.style.width = "50px";
  imgBandeira.style.cursor = "pointer";

  a.appendChild(nome);
  a.appendChild(document.createElement('br'));
  a.appendChild(imgBandeira);

  li.appendChild(a);
  menu.appendChild(li);
 });
}

// Função para mostrar as curiosidades do estado selecionado
function mostrarCuriosidades(estado) {
 conteudo.innerHTML = `
    <h2>${estado.nome}</h2>
    <h3>Capital: ${estado.capital}</h3>
    <p>${estado.curiosidades}</p>
    ${estado.lenda ? `<p><strong>Lenda:</strong> ${estado.lenda}</p>` : ''}
    <div id="fotos-capital">
      ${estado.img.map(src => `<img src="${src}" alt="Imagem de ${estado.capital}" style="width: 150px; margin-right: 10px;">`).join('')}
    </div>
  `;
}

// Função de busca de estados por nome ou capital
function buscarEstado() {
 const termoBusca = inputBusca.value.toLowerCase();
 const estadosFiltrados = estados.filter(estado =>
  estado.nome.toLowerCase().includes(termoBusca) ||
  estado.capital.toLowerCase().includes(termoBusca)
 );
 gerarMenu(estadosFiltrados);
}

// Inicializa o menu com todos os estados
gerarMenu(estados);

// Adiciona evento para o input de busca
inputBusca.addEventListener('input', buscarEstado);