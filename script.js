
function padrao() {
  const botao = document.getElementById('botao')
  botao.style.borderRadius = '20px'





}

function animation(event) {
  event.preventDefault();
  const target = event.target;
  const secao = document.querySelector(target.getAttribute('href'));

  secao.scrollIntoView({
    behavior: 'smooth'
  });
};


function voltaaonormal() {
  const botao = document.getElementById('botao')
  botao.style.borderRadius = '10px'
}

