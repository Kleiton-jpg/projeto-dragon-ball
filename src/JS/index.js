// Seleciona todos os botões e personagens da interface
const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

/**
 * Remove a classe 'selecionado' do botão atualmente selecionado
 */
function desmarcarBotaoSelecionado() {
  const botaoSelecionado = document.querySelector(".botao.selecionado");
  if (botaoSelecionado) {
    botaoSelecionado.classList.remove("selecionado");
  }
}

/**
 * Marca o botão clicado como selecionado
 * @param {Element} botao - O botão que foi clicado
 */
function marcarBotaoSelecionado(botao) {
  botao.classList.add("selecionado");
}

/**
 * Remove a classe 'selecionado' do personagem atualmente selecionado
 */
function desmarcarPersonagemSelecionado() {
  const personagemSelecionado = document.querySelector(".personagem.selecionado");
  if (personagemSelecionado) {
    personagemSelecionado.classList.remove("selecionado");
  }
}

/**
 * Marca o personagem correspondente ao botão clicado
 * @param {number} indice - Índice do personagem a ser exibido
 */
function marcarPersonagemSelecionado(indice) {
  personagens[indice].classList.add("selecionado");
}

/**
 * Função principal que lida com o clique no botão
 * @param {Element} botao - O botão clicado
 * @param {number} indice - O índice do botão/personagem
 */
function aoClicarNoBotao(botao, indice) {
  desmarcarBotaoSelecionado();
  marcarBotaoSelecionado(botao);
  desmarcarPersonagemSelecionado();
  marcarPersonagemSelecionado(indice);
}

// Adiciona o event listener para cada botão
botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => aoClicarNoBotao(botao, indice));
});

