document.addEventListener("DOMContentLoaded", function() {
  console.log("JavaScript carregado.");

  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const formData = {
        email: document.getElementById("emailAddress").value,
        mensagem: document.getElementById("mensagem").value,
      };

      console.log("Dados:", formData);

      fetch("http://localhost:3333/cadastro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          alert("Mensagem enviada!");
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Ocorreu um erro ao enviar mensagem.");
        });
    });
});
