CREATE TABLE campeonato( 
regulamento VARCHAR(1000) NOT NULL, times VARCHAR(600) NOT NULL, 
rebaixados VARCHAR(400) NOT NULL, 
mata_mata VARCHAR(2000) NOT NULL, pontuacao INT NOT NULL, 
grade_PK VARCHAR(4000) NOT NULL, PRIMARY KEY (grade_PK) 
) 
CREATE TABLE time( 
torcida VARCHAR(1000) NOT NULL, 
transporte VARCHAR(600) NOT NULL, 
comissao VARCHAR(400) NOT NULL, 
elenco VARCHAR(2000) NOT NULL, 
nome_PK VARCHAR(10) NOT NULL, 
PRIMARY KEY (nome_PK) 
) 
CREATE TABLE local_de_realizacao( 
pais_PK VARCHAR(20) NOT NULL, 
estadios VARCHAR(600) NOT NULL, 
custos INT NOT NULL, 
comissao VARCHAR(2000) NOT NULL, PRIMARY KEY (pais_PK) 
) 
CREATE TABLE jogos( 
horarios INT NOT NULL, 
divulgacao VARCHAR(600) NOT NULL, 
organizacao VARCHAR(2000) NOT NULL, 
resultados_PK INT NOT NULL, 
grade_FK VARCHAR(4000) NOT NULL, 
PRIMARY KEY (resultados_PK), 
FOREIGN KEY (grade_FK) REFERENCES campeonato (grade_PK) 
) 
CREATE TABLE premio( 
horarios INT NOT NULL, 
comemoracao VARCHAR(600) NOT NULL, 
premios_individuais VARCHAR(2000) NOT NULL, 
registro INT NOT NULL, 
id_PK INT NOT NULL, 
resultados_FK INT NOT NULL, 
PRIMARY KEY (id_PK), 
FOREIGN KEY (resultados_FK) REFERENCES jogos (resultados_PK) 
) 
