CREATE DATABASE IF NOT EXISTS estoque;

USE estoque;

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(50) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL
);

-- Insere o usuário admin com senha "admin123"
-- (a senha será armazenada com hash usando a função PASSWORD() do MySQL para exemplo simples)
INSERT INTO usuarios (usuario, senha)
VALUES ('admin', PASSWORD('admin123'));