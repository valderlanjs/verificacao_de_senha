const passwordInput = document.querySelector(".pass-field input");
const eyeIcon = document.querySelector(".pass-field i");
const requirementList = document.querySelectorAll(".requirement-list li");

//uma matriz de senha exigida com correspondente
//expressão regular e índice do item da lista de requisitos

const requirements = [
  { regex: /.{8,}/, index: 0 }, //Mínimo de 8 caracteres
  { regex: /[0-9]/, index: 1 }, // Ao menos um número
  { regex: /[a-z]/, index: 2 }, // ao menos uma letra minúscula
  { regex: /[^A-Za-z0-9]/, index: 3 }, // Ao menos um simbolo especial
  { regex: /[A-Z]/, index: 4 }, // ao menos uma letra maiúscula
];

passwordInput.addEventListener("keyup", (e) => {
  requirements.forEach((item) => {
    // verifique se a senha corresponde ao regex de requisito
    const isValid = item.regex.test(e.target.value);
    const requirementItem = requirementList[item.index];

    //atualizando o item de requisito de classe e ícone se o requisito corresponder ou não
    if (isValid) {
      requirementItem.classList.add("valid");
      requirementItem.firstElementChild.className = "fa-solid fa-check";
    } else {
      requirementItem.classList.remove("valid");
      requirementItem.firstElementChild.className = "fa-solid fa-circle";
    }
  });
});

eyeIcon.addEventListener("click", () => {
  // Alterne o tipo de entrada de senha entre "senha" e "texto"
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";

  //atualize a classe de ícone de olho com base no tipo de entrada de senha
  eyeIcon.className = `fa-solid fa-eye${
    passwordInput.type === "password" ? "" : "-slash"
  }`;
});
