CREATE TABLE usuario(
    cpf_PK VARCHAR(11) PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    cursoOuCargo VARCHAR(50),
    login VARCHAR(50) NOT NULL,
    senha VARCHAR(50) NOT NULL
);

CREATE TABLE livros(
    ISBN_PK VARCHAR(13) PRIMARY KEY,
    titulo VARCHAR(50) NOT NULL,
    autor VARCHAR(50) NOT NULL,
    editora VARCHAR(50),
    ano_publicacao INT,
    quantidade_disponivel INT NOT NULL
);

CREATE TABLE biblioteca(
    endereco_PK VARCHAR(100) PRIMARY KEY,
    horario_abertura TIME NOT NULL,
    funcionarios VARCHAR(100),
    livro_FK VARCHAR(50) NOT NULL,
    clientes_FK VARCHAR(11) NOT NULL,
    FOREIGN KEY (livro_FK) REFERENCES livros (ISBN_PK),
    FOREIGN KEY (clientes_FK) REFERENCES usuario (cpf_PK)
);

CREATE TABLE multa(
    id_PK SERIAL PRIMARY KEY,
    valor DECIMAL(5, 2) NOT NULL,
    pago BOOLEAN NOT NULL,
    data_pago DATE NOT NULL,
    codigo_devolucao_FK VARCHAR(13) NOT NULL,
    FOREIGN KEY (codigo_devolucao_FK) REFERENCES livros (ISBN_PK)
);

CREATE TABLE devolucoes(
    codigo_devolucao_PK VARCHAR(13) PRIMARY KEY,
    data_devolucao_FK DATE NOT NULL,
    multa BOOLEAN NOT NULL,
    FOREIGN KEY (codigo_devolucao_PK) REFERENCES livros (ISBN_PK)
);

CREATE TABLE historico(
    periodo_PK VARCHAR(20) PRIMARY KEY,
    cpf_do_usuario_FK VARCHAR(11) NOT NULL,
    ISBN_FK VARCHAR(13) NOT NULL,
    FOREIGN KEY (cpf_do_usuario_FK) REFERENCES usuario (cpf_PK),
    FOREIGN KEY (ISBN_FK) REFERENCES livros (ISBN_PK)
);

CREATE TABLE reservas(
    codigo_reserva_PK VARCHAR(50) PRIMARY KEY,
    ISBN_FK VARCHAR(13) NOT NULL,
    data_emprestimo DATE NOT NULL,
    data_devolucao DATE NOT NULL,
    cpf_do_usuario_FK VARCHAR(11) NOT NULL,
    FOREIGN KEY (cpf_do_usuario_FK) REFERENCES usuario (cpf_PK),
    FOREIGN KEY (ISBN_FK) REFERENCES livros (ISBN_PK)
);

INSERT INTO usuario (nome, login, senha, cpf_PK) VALUES ('Pedro', 'pedro_hn_silva', 'pedro123', '12345678900'),
('Gabriel', 'gabriel_q_teodoro', 'gabriel123', '12345678901'),
('Vinícius', 'vinicius_s_franca', 'pedro123', '12345678902')

SELECT * FROM usuario