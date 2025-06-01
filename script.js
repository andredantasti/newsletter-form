
  const btnEnviar = document.getElementById("btnEnviar");
  const btnVoltar = document.getElementById("btn-voltar");
  const emailInput = document.getElementById("email");
  const mensagemErro = document.getElementById("mensagemErro");
  const mensagemSucesso = document.getElementById("mensagem-sucess");
  const container = document.getElementById("container");

  function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  btnEnviar.addEventListener("click", function (e) {
    e.preventDefault(); // Impede envio do formulário

    const email = emailInput.value.trim();

    if (!validarEmail(email)) {
      emailInput.classList.add("erro");
      mensagemErro.textContent = "Valid email required"; // ✅ aqui está corrigido
    } else {
      emailInput.classList.remove("erro");
      mensagemErro.textContent = "";
      container.style.display = "none";
      mensagemSucesso.style.display = "block"; 
    }
  });

  emailInput.addEventListener("input", () => {
    if (validarEmail(emailInput.value.trim())) {
      emailInput.classList.remove("erro");
      mensagemErro.textContent = "";
    }
  });

  btnVoltar.addEventListener("click", function(){
    container.style.display = "flex";
    mensagemSucesso.style.display = "none";
    emailInput.value = "" 
  })

