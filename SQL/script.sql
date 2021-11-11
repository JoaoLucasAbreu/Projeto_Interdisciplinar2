-- Esse script vale para o MySQL 8.x. Se seu MySQL for 5.x, precisa executar essa linha comentada:
-- CREATE DATABASE IF NOT EXISTS agenda;
CREATE DATABASE IF NOT EXISTS GALLERY DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_0900_ai_ci;

USE gallery;

CREATE TABLE usuario (
  id int NOT NULL AUTO_INCREMENT,
  nome varchar(50) NOT NULL,
  sobrenome varchar(50) NOT NULL,
  apelido varchar(50) NOT NULL,
  email varchar(50) NOT NULL,
  senha varchar(50) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY apelido_UN (apelido),
  UNIQUE KEY email_UN (email)
);
