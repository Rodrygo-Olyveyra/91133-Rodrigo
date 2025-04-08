const form = document.querySelector("form");
const valorInput = document.getElementById("valor");
const quantidadeInput = document.getElementById("quantidade");
const totalInput = document.getElementById("total");

function calcularTotal() {
    const valor = parseFloat(valorInput.value) || 0;
    const quantidade = parseInt(quantidadeInput.value) || 0;
    const total = valor * quantidade;
    totalInput.value = total.toFixed(2); 
}

valorInput.addEventListener("input", calcularTotal);
quantidadeInput.addEventListener("input", calcularTotal);

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("username").value.trim();
    const valor = parseFloat(valorInput.value);
    const quantidade = parseInt(quantidadeInput.value);
    const total = parseFloat(totalInput.value);

    if (!nome || isNaN(valor) || isNaN(quantidade)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    const produto = {
        nome,
        valor,
        quantidade,
        total
    };

    let listaProdutos = JSON.parse(localStorage.getItem("produtos")) || [];
    listaProdutos.push(produto);
    localStorage.setItem("produtos", JSON.stringify(listaProdutos));

    alert("Produto cadastrado com sucesso!");

    form.reset();
    totalInput.value = "";
});
