<?php
// Configuração do banco de dados
$host = "localhost";
$user = "root";
$pass = ""; //senha do MySql(alterar se necessario)
$dbname = "cadastro_produtos";

// conexão com o banco
$conn = new mysqli($host,$user,$pass,$dbname);

// verifica a conexão
if($conn->connect_error){
    die("Conexão falhou:". $conn->connect_error);
};

echo("Conectado!");
?>