CREATE TABLE usuario( peso INT NOT NULL, 
rotina VARCHAR (50) NOT NULL, 
metas VARCHAR (100) NOT NULL, imc INT NOT NULL, 
cpf_PK VARCHAR(14) NOT NULL, PRIMARY KEY (cpf_PK) 
); 
CREATE TABLE app_para_perda_de_peso( 
horarios INT NOT NULL, 
dados_sobre_o_usuario VARCHAR (30) NOT NULL, exercicios VARCHAR (200) NOT NULL, 
configuracoes VARCHAR (150) NOT NULL, 
identificador_PK VARCHAR(50) NOT NULL, 
cpf_FK VARCHAR(14) NOT NULL, 
PRIMARY KEY (identificador_PK), 
FOREIGN KEY (cpf_FK) REFERENCES usuario (cpf_PK) 
); 
CREATE TABLE peso( 
quantidade_de_gordura INT NOT NULL, 
musculos INT NOT NULL, 
nutrientes VARCHAR (150) NOT NULL, 
treino_realizado_PK VARCHAR(50) NOT NULL, 
PRIMARY KEY (treino_realizado_PK) 
); 
CREATE TABLE exercicios( 
intensidade VARCHAR (30) NOT NULL, 
equipamentos_necessarios VARCHAR (200) NOT NULL, 
tempo_de_realizacao INT NOT NULL, 
tipo_PK VARCHAR(50) NOT NULL, 
treino_realizado_FK VARCHAR(50) NOT NULL, 
PRIMARY KEY (tipo_PK), 
FOREIGN KEY (treino_realizado_FK) REFERENCES peso (treino_realizado_PK) 
) 
