const nameInput = document.querySelector("#nome");
const emailInput = document.querySelector("#email");
const submitButton = document.querySelector("#submit-button");
const items = document.querySelector("#items");
const msg = document.querySelector("#message");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();

  function showMessageError(message) {
    msg.innerText = message;

    setTimeout(() => {
      msg.innerText = "";
    }, 3000);
  }

  if (!nameValue || !emailValue) {
    showMessageError("Preencha todos os campos");
    return;
  }

  if (!emailInput.checkValidity()) {
    showMessageError("Email inválido");
    return;
  }

  const li = document.createElement("li");
  li.innerText = `Nome: ${nameValue} | Email: ${emailValue}`;
  
  li.className =
    "bg-zinc-600 mt-4 p-4 shadow-md shadow-white w-full rounded-lg break-words";

  items.appendChild(li);

  nameInput.value = "";
  emailInput.value = "";
});