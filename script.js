
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
  }
];


const container = document.getElementById('lista-produtos');

produtos.forEach((boi, index) => {
  const card = document.createElement('div');
  card.className = 'produto-card';
  card.innerHTML = `
    <img src="${boi.imagem}" alt="${boi.nome}">
    <div class="produto-info">
      <h3>${boi.nome}</h3>
      <p><strong>Peso:</strong> ${boi.peso}</p>
      <p><strong>Idade:</strong> ${boi.idade}</p>
      <p><strong>Preço:</strong> ${boi.preco}</p>
      <button onclick="abrirModal(${index})">Comprar</button>
    </div>
  `;
  container.appendChild(card);
});


const modal = document.getElementById('modal-compra');
const fecharBtn = document.getElementById('fechar-modal');

const imagemModal = document.getElementById('modal-imagem');
const nomeModal = document.getElementById('modal-nome');
const quantidadeInput = document.getElementById('quantidade');
const compradorInput = document.getElementById('comprador');
const enderecoInput = document.getElementById('endereco');
const pagamentoInput = document.getElementById('pagamento');

let boiSelecionado = null;

function abrirModal(index) {
  boiSelecionado = produtos[index];
  imagemModal.src = boiSelecionado.imagem;
  nomeModal.textContent = `${boiSelecionado.nome} - ${boiSelecionado.preco}`;
  quantidadeInput.value = 1;
  compradorInput.value = '';
  enderecoInput.value = '';
  pagamentoInput.value = 'pix';
  modal.style.display = 'block';
}

fecharBtn.onclick = () => {
  modal.style.display = 'none';
};

window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
};


const finalizarBtn = document.getElementById('finalizar-compra');
finalizarBtn.onclick = () => {
  const nome = compradorInput.value.trim();
  const endereco = enderecoInput.value.trim();
  const quantidade = quantidadeInput.value;

  if (nome && endereco && quantidade > 0) {
    alert(`Compra finalizada com sucesso!\nProduto: ${boiSelecionado.nome}\nQuantidade: ${quantidade}\nPagamento: ${pagamentoInput.value}\nCliente: ${nome}`);
    modal.style.display = 'none';
  } else {
    alert('Preencha todos os campos antes de finalizar a compra.');
  }
};


const formContato = document.getElementById('form-contato');
formContato.addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Obrigado por sua mensagem! Responderemos rapidamente.");
  formContato.reset();
});
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
  }
];
const listaMedicamentos = document.getElementById('lista-medicamentos');


medicamentos.forEach((medicamento, index) => {
  const card = document.createElement('div');
  card.className = 'produto-card';
  card.innerHTML = `
    <img src="${medicamento.imagem}" alt="${medicamento.nome}">
    <div class="produto-info">
      <h3>${medicamento.nome}</h3>
      <p>${medicamento.descricao}</p>
      <p><strong>Preço:</strong> ${medicamento.preco}</p>
      <button onclick="abrirModalMedicamento(${index})">Comprar</button>
    </div>
  `;
  listaMedicamentos.appendChild(card);
});


function abrirModalMedicamento(index) {
  const medicamentoSelecionado = medicamentos[index];
  boiSelecionado = medicamentoSelecionado;  
  imagemModal.src = medicamentoSelecionado.imagem;
  nomeModal.textContent = `${medicamentoSelecionado.nome} - ${medicamentoSelecionado.preco}`;
  quantidadeInput.value = 1;
  compradorInput.value = '';
  enderecoInput.value = '';
  pagamentoInput.value = 'pix';
  modal.style.display = 'block';
}

