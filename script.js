const imoveis = [
  {
    tipo: "Geminado",
    bairro: "Aventureiro",
    imagem: "https://via.placeholder.com/300x200?text=Geminado+Aventureiro",
    titulo: "Geminado no Aventureiro",
  },
  {
    tipo: "Casa",
    bairro: "Floresta",
    imagem: "https://via.placeholder.com/300x200?text=Casa+Floresta",
    titulo: "Casa com 3 quartos na Floresta",
  },
  {
    tipo: "Apartamento",
    bairro: "Costa e Silva",
    imagem: "https://via.placeholder.com/300x200?text=Apto+Costa+e+Silva",
    titulo: "Apartamento Costa e Silva",
  },
  {
    tipo: "Casa",
    bairro: "Costa e Silva",
    imagem: "https://via.placeholder.com/300x200?text=Casa+Costa+e+Silva",
    titulo: "Casa ampla com suíte",
  },
  {
    tipo: "Apartamento",
    bairro: "Aventureiro",
    imagem: "https://via.placeholder.com/300x200?text=Apto+Aventureiro",
    titulo: "Apartamento no Aventureiro",
  },
];

const tipoFiltro = document.getElementById("tipoFiltro");
const bairroFiltro = document.getElementById("bairroFiltro");
const listaImoveis = document.getElementById("listaImoveis");

function renderizarImoveis() {
  const tipoSelecionado = tipoFiltro.value;
  const bairroSelecionado = bairroFiltro.value;

  const filtrados = imoveis.filter((item) => {
    return (
      (tipoSelecionado === "" || item.tipo === tipoSelecionado) &&
      (bairroSelecionado === "" || item.bairro === bairroSelecionado)
    );
  });

  listaImoveis.innerHTML = "";

  if (filtrados.length === 0) {
    listaImoveis.innerHTML = "<p>Nenhum imóvel encontrado.</p>";
    return;
  }

  filtrados.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${item.imagem}" alt="${item.titulo}" />
      <div class="card-body">
        <h3>${item.titulo}</h3>
        <p>Bairro: ${item.bairro} | Tipo: ${item.tipo}</p>
        <button>Ver mais</button>
      </div>
    `;
    listaImoveis.appendChild(card);
  });
}

tipoFiltro.addEventListener("change", renderizarImoveis);
bairroFiltro.addEventListener("change", renderizarImoveis);

// Inicializar
renderizarImoveis();
