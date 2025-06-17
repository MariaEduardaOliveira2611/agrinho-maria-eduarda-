const produtos = [
  {
    nome: 'Boi Nelore 01',
    peso: '540 kg',
    idade: '24 meses',
    preco: 'R$ 6.500',
    imagem: 'https://images.tcdn.com.br/img/img_prod/774746/orpheu_nelore_9037_1_d70235d1149aee252da465b070ba4bef.jpg'
  },
  {
    nome: 'Boi Nelore 02',
    peso: '510 kg',
    idade: '22 meses',
    preco: 'R$ 6.200',
    imagem: 'https://d12ceyx7nhfnql.cloudfront.net/app/public/assets/articles/1906/large/data.?1643939368'
  },
  {
    nome: 'Boi Nelore 03',
    peso: '580 kg',
    idade: '26 meses',
    preco: 'R$ 6.800',
    imagem: 'https://blog.superbid.net/wp-content/uploads/2023/09/rem-caballero-o-boi-mais-caro-ja-vendido-no-brasil.jpg'
  },
  {
    nome: 'Boi Nelore 04',
    peso: '525 kg',
    idade: '23 meses',
    preco: 'R$ 6.300',
    imagem: 'https://i.ytimg.com/vi/WzxBzWO4N5A/maxresdefault.jpg'
  },
  // NOVOS ITENS ADICIONADOS AQUI:
  {
    nome: 'Touro Reprodutor Nelore',
    peso: '850 kg',
    idade: '48 meses',
    preco: 'R$ 18.000',
    imagem: 'https://blog.erural.net/content/images/2022/11/545touro_fzm_646.jpeg' // Imagem de exemplo
  },
  {
    nome: 'Novilha para Corte',
    peso: '400 kg',
    idade: '18 meses',
    preco: 'R$ 4.800',
    imagem: 'https://agroceresmultimix.com.br/blog/wp-content/uploads/2019/07/drtghnrtfgh.jpg' // Imagem de exemplo
  },
  {
    nome: 'Boi Nelore 05',
    peso: '560 kg',
    idade: '25 meses',
    preco: 'R$ 6.600',
    imagem: 'https://www.comprerural.com/wp-content/uploads/2021/08/quarup-da-bonsucesso-touro-nelore-foto-alta-genetics-1.jpg'
  }
];

const medicamentos = [
  {
    nome: 'Ivermectina 1%',
    descricao: 'Antiparasitário injetável para bovinos.',
    preco: 'R$ 150,00',
    imagem: 'https://cdn.awsli.com.br/600x450/508/508309/produto/18828836/a0cd732c3a.jpg'
  },
  {
    nome: 'Vacina contra Brucelose',
    descricao: 'Proteção para bovinos contra brucelose.',
    preco: 'R$ 35,00',
    imagem: 'https://www.msd-saude-animal.com.br/wp-content/uploads/sites/55/2020/07/RB51-25-DOSES_DIAGONAL_COMPLETO_PNG.png?w=690&h=440&crop=1'
  },
  {
    nome: 'Antibiótico Enrofloxacino',
    descricao: 'Tratamento de infecções bacterianas em bovinos.',
    preco: 'R$ 200,00',
    imagem: 'https://agrosolo.fbitsstatic.net/img/p/antibiotico-enrofloxacino-5-dechra-para-caes-e-gatos-injetavel-20ml-81506/274895-2.jpg?w=700&h=700&v=no-value'
  },
  {
    nome: 'Desinfetante para Estábulo',
    descricao: 'Mantém o ambiente limpo e seguro para os animais.',
    preco: 'R$ 75,00',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxmYZu4Xk4GcLC_symTgO_FFuv8Keel-IEdg&s'
  },
  // NOVOS MEDICAMENTOS ADICIONADOS AQUI:
  {
    nome: 'Vermífugo Ourofino',
    descricao: 'Controle e tratamento de verminoses em bovinos.',
    preco: 'R$ 120,00',
    imagem: 'https://www.ourofinosaudeanimal.com/media/uploads/produtos/2023/FR_MasterLP_1L-rb.png'
  },
  {
    nome: 'Suplemento Mineral para Gado',
    descricao: 'Essencial para a saúde e desenvolvimento do rebanho.',
    preco: 'R$ 300,00',
    imagem: 'https://indubras.vet.br/storage/2014/02/COMPLEXO-MINERAL-COMPLETA-2.png'
  },
  {
    nome: 'Pomada Cicatrizante Vetnil',
    descricao: 'Para tratamento de feridas e lesões de pele em animais.',
    preco: 'R$ 60,00',
    imagem: 'https://images.tcdn.com.br/img/img_prod/808976/alantol_pomada_cicatrizante_250g_2751_1_ef1453125e99fa68ba58ade149b4e863.jpg'
  }
];

// --- Refatoração: Gerar Cards de Produtos e Medicamentos ---
function gerarCards(lista, containerId, tipo) {
  const container = document.getElementById(containerId);
  container.innerHTML = ''; // Limpa o container antes de adicionar os cards

  lista.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'produto-card'; // Reutilizamos a classe de estilo para os cards
    let infoEspecifica = '';

    if (tipo === 'produto') {
      infoEspecifica = `
        <p><strong>Peso:</strong> ${item.peso}</p>
        <p><strong>Idade:</strong> ${item.idade}</p>
      `;
    } else if (tipo === 'medicamento') {
      infoEspecifica = `
        <p>${item.descricao}</p>
      `;
    }

    card.innerHTML = `
      <img src="${item.imagem}" alt="${item.nome}">
      <div class="produto-info">
        <h3>${item.nome}</h3>
        ${infoEspecifica}
        <p><strong>Preço:</strong> ${item.preco}</p>
        <button onclick="abrirModal(${index}, '${tipo}')">Comprar</button>
      </div>
    `;
    container.appendChild(card);
  });
}

// Chamar a função para gerar os cards ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  gerarCards(produtos, 'lista-produtos', 'produto');
  gerarCards(medicamentos, 'lista-medicamentos', 'medicamento');
});


// --- Modal de Compra ---
const modal = document.getElementById('modal-compra');
const fecharBtn = document.getElementById('fechar-modal');

const imagemModal = document.getElementById('modal-imagem');
const nomeModal = document.getElementById('modal-nome');
const quantidadeInput = document.getElementById('quantidade');
const compradorInput = document.getElementById('comprador');
const enderecoInput = document.getElementById('endereco');
const pagamentoInput = document.getElementById('pagamento');
const finalizarBtn = document.getElementById('finalizar-compra');

let itemSelecionado = null; // Agora pode ser um boi ou um medicamento

function abrirModal(index, tipo) {
  if (tipo === 'produto') {
    itemSelecionado = produtos[index];
  } else if (tipo === 'medicamento') {
    itemSelecionado = medicamentos[index];
  }

  if (itemSelecionado) {
    imagemModal.src = itemSelecionado.imagem;
    imagemModal.alt = `Imagem de ${itemSelecionado.nome}`; // Melhoria no alt da imagem
    nomeModal.textContent = `${itemSelecionado.nome} - ${itemSelecionado.preco}`;
    quantidadeInput.value = 1;
    compradorInput.value = '';
    enderecoInput.value = '';
    pagamentoInput.value = 'pix';
    modal.style.display = 'flex'; // Usar flexbox para centralizar o modal via CSS
    quantidadeInput.focus(); // Foca no primeiro input para acessibilidade
  }
}

fecharBtn.onclick = () => {
  modal.style.display = 'none';
};

window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
};

finalizarBtn.onclick = () => {
  const nome = compradorInput.value.trim();
  const endereco = enderecoInput.value.trim();
  const quantidade = parseInt(quantidadeInput.value, 10); // Converte para número inteiro

  if (nome && endereco && quantidade > 0 && itemSelecionado) {
    alert(`Compra finalizada com sucesso!\nProduto: ${itemSelecionado.nome}\nQuantidade: ${quantidade}\nPagamento: ${pagamentoInput.value}\nCliente: ${nome}\nEndereço de Entrega: ${endereco}`);
    modal.style.display = 'none';
    // Limpar os campos do formulário do modal
    quantidadeInput.value = 1;
    compradorInput.value = '';
    enderecoInput.value = '';
    pagamentoInput.value = 'pix';
  } else {
    alert('Por favor, preencha todos os campos obrigatórios e verifique a quantidade antes de finalizar a compra.');
  }
};


// --- Formulário de Contato ---
const formContato = document.getElementById('form-contato');
formContato.addEventListener('submit', (e) => {
  e.preventDefault();
  const nomeContato = document.getElementById('nome').value.trim();
  const emailContato = document.getElementById('email').value.trim(); // Novo campo
  const duvidaContato = document.getElementById('duvida').value.trim();

  if (nomeContato && emailContato && duvidaContato) {
    alert("Obrigado por sua mensagem! Responderemos rapidamente.");
    formContato.reset(); // Limpa o formulário após o envio
  } else {
    alert("Por favor, preencha todos os campos obrigatórios do formulário de contato (Nome, E-mail e Dúvida).");
  }
});


// --- Acessibilidade: Alto Contraste e Tamanho da Fonte ---
const toggleContrastBtn = document.getElementById('toggle-contrast');
const increaseFontBtn = document.getElementById('increase-font');
const decreaseFontBtn = document.getElementById('decrease-font');
const body = document.body;

// Alto Contraste
toggleContrastBtn.addEventListener('click', () => {
  body.classList.toggle('high-contrast');
  // Salva a preferência do usuário no localStorage
  if (body.classList.contains('high-contrast')) {
    localStorage.setItem('highContrast', 'enabled');
  } else {
    localStorage.removeItem('highContrast');
  }
});

// Carrega a preferência de alto contraste ao carregar a página
if (localStorage.getItem('highContrast') === 'enabled') {
  body.classList.add('high-contrast');
}

// Tamanho da Fonte
let currentFontSize = parseFloat(getComputedStyle(document.body).fontSize); // Pega o tamanho inicial

increaseFontBtn.addEventListener('click', () => {
  // Limita o aumento da fonte para não quebrar o layout
  if (currentFontSize < 1.3 * parseFloat(getComputedStyle(document.documentElement).fontSize)) {
    currentFontSize += 1.5; // Aumenta em 1.5px (você pode ajustar este valor)
    body.style.fontSize = `${currentFontSize}px`;
    localStorage.setItem('fontSize', currentFontSize);
  }
});

decreaseFontBtn.addEventListener('click', () => {
  // Limita a diminuição da fonte
  if (currentFontSize > 0.8 * parseFloat(getComputedStyle(document.documentElement).fontSize)) {
    currentFontSize -= 1.5; // Diminui em 1.5px (você pode ajustar este valor)
    body.style.fontSize = `${currentFontSize}px`;
    localStorage.setItem('fontSize', currentFontSize);
  }
});

// Carrega a preferência de tamanho de fonte ao carregar a página
if (localStorage.getItem('fontSize')) {
  body.style.fontSize = `${localStorage.getItem('fontSize')}px`;
  currentFontSize = parseFloat(localStorage.getItem('fontSize'));
}


// --- Menu Hamburguer ---
const hamburgerButton = document.querySelector('.hamburger-menu');
const mainNav = document.querySelector('.main-nav');

hamburgerButton.addEventListener('click', () => {
  mainNav.classList.toggle('active'); // Alterna a classe 'active'
  // Altera o atributo aria-expanded para acessibilidade
  const isExpanded = mainNav.classList.contains('active');
  hamburgerButton.setAttribute('aria-expanded', isExpanded);
});

// Fecha o menu ao clicar em um link (para melhorar a UX em mobile)
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (mainNav.classList.contains('active')) {
      mainNav.classList.remove('active');
      hamburgerButton.setAttribute('aria-expanded', 'false');
    }
  });
});