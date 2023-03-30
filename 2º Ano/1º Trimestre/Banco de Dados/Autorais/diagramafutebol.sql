CREATE TABLE time(
 elenco VARCHAR (2200) NOT NULL,
 estadio VARCHAR (200) NOT NULL,
 comissao VARCHAR (500) NOT NULL,
 nome VARCHAR (20) NOT NULL,
 identificador_PK INT NOT NULL,
 colocacao INT NOT NULL,
 grade_FK VARCHAR (6000) NOT NULL,
 PRIMARY KEY (identificador_PK),
 FOREIGN KEY (grade_FK) REFERENCES campeonato (grade_PK)
 ),
 
 CREATE TABLE campeonato(
 pontuacao INT NOT NULL,
 jogos VARCHAR (900) NOT NULL,
 preparos VARCHAR (5000) NOT NULL,
 grade_PK VARCHAR (6000) NOT NULL,
 resultado_FK INT NOT NULL,
 PRIMARY KEY (grade_PK),
 FOREIGN KEY (resultado_FK) REFERENCES jogo (resultado_PK)
 ),

 CREATE TABLE jogo(
 resultado_PK INT NOT NULL,
 momentos VARCHAR (900) NOT NULL,
 local_jogo VARCHAR (5000) NOT NULL,
 arbitragem VARCHAR (150) NOT NULL,
 PRIMARY KEY (resultado_PK)
 ),