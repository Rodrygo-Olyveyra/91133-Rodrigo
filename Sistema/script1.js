document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
        alert("Por favor preencha todos os campos");
        return;
    }

    if (password.length < 8) {
        alert("A senha deve ter pelo menos 8 caracteres.");
        return;
    }

    localStorage.setItem("username", username);

    alert("Login bem sucedido!");
    window.location.href = "cadastro.html";
});
