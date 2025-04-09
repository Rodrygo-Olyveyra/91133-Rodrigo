<?php
// Configuração do banco de dados
$host = "localhost";
$user = "root";
$pass = "Rodrigo2025"; // senha do MySQL (se tiver)
$dbname = "cadastro_produtos";

// Conexão
$conn = new mysqli($host, $user, $pass, $dbname);

// Verifica conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Captura e valida os dados
$produto = trim($_POST['produto'] ?? '');
$preco = floatval(str_replace(',', '.', $_POST['preco'] ?? 0));
$quantidade = intval($_POST['quantidade'] ?? 0);

// Calcula o total no PHP
$total = $preco * $quantidade;

// Prepara a inserção
$stmt = $conn->prepare("INSERT INTO produtos (produto, preco, quantidade, total) VALUES (?, ?, ?, ?)");
$stmt->bind_param("sddi", $produto, $preco, $quantidade, $total);

// Executa
if ($stmt->execute()) {
    echo "<script>alert('Produto cadastrado com sucesso!'); window.location.href='index.html';</script>";
} else {
    echo "Erro ao cadastrar: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
