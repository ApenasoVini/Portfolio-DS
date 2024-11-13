CREATE TABLE marca (
    cod_marca SERIAL PRIMARY KEY,
    nome_marca VARCHAR(100) NOT NULL
);

CREATE TABLE produto (
    cod_prod SERIAL PRIMARY KEY,
    nome_produto VARCHAR(100) NOT NULL,
    cod_marca INT REFERENCES marca(cod_marca),
    preco NUMERIC(10, 2) NOT NULL
);

CREATE TABLE estoque (
    cod_estoque SERIAL PRIMARY KEY,
    cod_prod INT REFERENCES produto(cod_prod),
    qtd_est INT NOT NULL
);