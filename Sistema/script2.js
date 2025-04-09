const precoInput = document.getElementById("preco");
const quantidadeInput = document.getElementById("quantidade");
const totalInput = document.getElementById("total");

function calcularTotal() {
    const preco = parseFloat(precoInput.value.replace(",", ".")) || 0;
    const quantidade = parseInt(quantidadeInput.value) || 0;
    const total = preco * quantidade;
    totalInput.value = total.toFixed(2);
}

precoInput.addEventListener("input", calcularTotal);
quantidadeInput.addEventListener("input", calcularTotal);