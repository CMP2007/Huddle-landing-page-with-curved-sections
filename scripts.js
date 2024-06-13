const input = document.querySelector(".inputText");
const alertText = document.querySelector(".alert");
const suscribe = document.querySelector(".suscribe");

suscribe.addEventListener("click", (e) => {
    e.preventDefault();
    const emailValue = input.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(emailValue)) {
        alertText.classList.remove("hidden");
        return false;
    } else {
        // Enviar formulario o realizar otra acción
        alertText.classList.add("hidden");
    }
});
