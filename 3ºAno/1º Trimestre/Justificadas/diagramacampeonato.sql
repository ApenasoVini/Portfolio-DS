CREATE TABLE campeonato ( 
grade_pk VARCHAR(10000),  
premiacao VARCHAR(50), 
organizacao VARCHAR(1000) NOT NULL, 
rebaixados VARCHAR(50), 
PRIMARY KEY (grade_pk) 
);

CREATE TABLE jogos ( 
informacoes_pk VARCHAR(50) NOT NULL, 
organizacao VARCHAR(1000), 
clubes VARCHAR(50) NOT NULL, 
torcida VARCHAR(60), 
grade_fk VARCHAR(1000), 
PRIMARY KEY (informacoes_pk), 
FOREIGN KEY (grade_fk) REFERENCES campeonato (grade_pk) 
); 

CREATE TABLE clube ( 
nome_clube_pk VARCHAR(20) NOT NULL, 
informacoes_jogos_fk VARCHAR(50) NOT NULL, 
campeonato atual VARCHAR(40) NOT NULL, 
colocacao INT, 
diretoria VARCHAR(1000) NOT NULL, 
jogadores VARCHAR(200) NOT NULL, 
PRIMARY KEY (nome_clube_pk), 
FOREIGN KEY (informacoes_jogos_fk) REFERENCES jogos (informacoes_pk) 
);

CREATE TABLE jogador ( 
cpf_pk VARCHAR(14) NOT NULL, 
nome VARCHAR(40) NOT NULL, 
nome_clube_fk VARCHAR(50) NOT NULL, 
salario INT NOT NULL, 
camisa INT NOT NULL, 
posicao VARCHAR(15) NOT NULL, 
PRIMARY KEY (cpf_pk), 
FOREIGN KEY (nome_clube_fk) REFERENCES clube (nome_clube_pk) 
)

INSERT INTO campeonato (grade_pk, premiacao, organizacao, rebaixados) 
VALUES ('', '','reavaliada',''), 
('sendo avaliada', 'sendo organizada', 'em consulta','4') 

INSERT INTO jogos (informacoes_pk, organizacao, clubes, torcida, grade_fk) 
VALUES ('em breve','','20 times','',''), 
('começo: dia 20','', '20 times','','sendo avaliada') 

INSERT INTO clube (nome_clube_pk, informacoes_jogos_fk, campeonato_atual, colocacao, diretoria, jogadores) 
VALUES ('Avaí', 'em breve','série B', 12,'disponível','24'), 
('Figueirense', 'começo: dia 20','série C', 15, 'disponível', '19') 

INSERT INTO jogador (cpf_pk, nome, nome_clube_fk, salario, camisa, posicao) 
VALUES ('xxx.xxx.xxx-xx', 'Messi', 'Avaí', 41000000, 30,'ponta'), 
('yyy.yyy.yyy-yy', 'Cristiano Ronaldo', 'Figueirense', 62000000, 7, 'ponta') 

SELECT * FROM campeonato 
SELECT * FROM jogos 
SELECT * FROM clube 
SELECT * FROM jogador 
