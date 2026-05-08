create database DiarioDeUmBanana;
use DiarioDeUmBanana;

create table usuario (
id_usuario int primary key auto_increment,
nome varchar(45),
email varchar(45) unique,
senha varchar(45));

create table endereco (
id_endereco int primary key auto_increment,
estado char(2),
cidade varchar(45),
bairro varchar(45),
fk_usuario int,
constraint ctfk_usuario foreign key (fk_usuario)
references usuario (id_usuario)
);

create table avaliacao_livros (
id_avaliacao_livros int primary key auto_increment,
nome_livro varchar(45),
nota_livro decimal(4,2),
descricao varchar(100),
fk_usuario int,
constraint ctnota check(nota_livro between 1 and 5),
constraint ctfk_usuario_avaliacao foreign key (fk_usuario)
references usuario (id_usuario)
);

select * from usuario;
select * from endereco;
select * from avaliacao_livros;

select 
u.nome as 'nome do usuario',
e.cidade as 'cidade',
a.nome_livro as 'livro',
a.descricao as 'descricao'
from usuario u 
left join endereco e
on u.id_usuario = e.fk_usuario
left join avaliacao_livros a
on u.id_usuario = a.fk_usuario;

insert into usuario (nome, email, senha) values
('Felipe', 'felipe@gmail.com', '222222'),
('Caio', 'caio@gmail.com', '333333'),
('Guilherme', 'guilherme@gmail.com', '444444'),
('Ana', 'ana@gmail.com', '555555'),
('Gustavo', 'gustavo@gmail.com', '666666'),
('Arthur', 'arthur@gmail.com', '777777'),
('Marcus', 'marcus@gmail.com', '888888');

insert into endereco (estado, cidade, bairro, fk_usuario) values
('SP', 'São Paulo', 'Rua A', 3),
('SP', 'Cotia', 'Rua B', 4),
('SP', 'Cotia', 'Rua B', 5),
('BA', 'Salvador', 'Rua C', 6),
('BA', 'Noronha', 'Rua D', 7),
('RJ', 'Rio de Janeiro', 'Rua E', 8),
('RJ', 'Rio de Janeiro', 'Rua E', 9);

insert into avaliacao_livros (nome_livro, nota_livro, descricao, fk_usuario) values
('Diário de um Banana 1', 2.5, 'Achei o primeiro fraco', 3), 
('Diário de um Banana 3', 3.5, 'Mediano', 3), 
('Diário de um Banana 3', 4.5, 'Gostei muito da parte da viagem', 4), 
('Diário de um Banana 4', 5, 'Muito bom', 4), 
('Diário de um Banana 3', 1.5, 'Esse é péssimo', 5), 
('Diário de um Banana 3', 2, 'Não gostei', 6), 
('Diário de um Banana 10', 2.8, 'Não é o meu favorito', 6),
('Diário de um Banana 8', 3.4, 'O irmão é muito engraçado', 6),
('Diário de um Banana 8', 4.1, 'Achei que foi um dos mais legais', 7),
('Diário de um Banana 4', 3.3, 'Achei muito bom esse', 7),
('Diário de um Banana 10', 3.5, 'Mais ou menos', 8),
('Diário de um Banana 11', 5, 'Cara, esse é o melhor de todos', 8),
('Diário de um Banana 12', 4.5, 'Muito divertido', 8),
('Diário de um Banana 12', 1.5, 'Me deu sono', 9),
('Diário de um Banana 8', 5, 'Simplesmente cinema', 9),
('Diário de um Banana 10', 4.8, 'Só não dou 10 por causa do pai chato', 9);


-- inserts sem os insert de testes iniciais:
insert into endereco (estado, cidade, bairro, fk_usuario) values
('SP', 'São Paulo', 'Rua A', 1),
('SP', 'Cotia', 'Rua B', 2),
('SP', 'Cotia', 'Rua B', 3),
('BA', 'Salvador', 'Rua C', 4),
('BA', 'Noronha', 'Rua D', 5),
('RJ', 'Rio de Janeiro', 'Rua E', 6),
('RJ', 'Rio de Janeiro', 'Rua E', 7);

insert into avaliacao_livros (nome_livro, nota_livro, descricao, fk_usuario) values
('Diário de um Banana 1', 2.5, 'Achei o primeiro fraco', 1), 
('Diário de um Banana 3', 3.5, 'Mediano', 1), 
('Diário de um Banana 3', 4.5, 'Gostei muito da parte da viagem', 2), 
('Diário de um Banana 4', 5, 'Muito bom', 2), 
('Diário de um Banana 3', 1.5, 'Esse é péssimo', 3), 
('Diário de um Banana 3', 2, 'Não gostei', 4), 
('Diário de um Banana 10', 2.8, 'Não é o meu favorito', 4),
('Diário de um Banana 8', 3.4, 'O irmão é muito engraçado', 4),
('Diário de um Banana 8', 4.1, 'Achei que foi um dos mais legais', 5),
('Diário de um Banana 4', 3.3, 'Achei muito bom esse', 5),
('Diário de um Banana 10', 3.5, 'Mais ou menos', 6),
('Diário de um Banana 11', 5, 'Cara, esse é o melhor de todos', 6),
('Diário de um Banana 12', 4.5, 'Muito divertido', 6),
('Diário de um Banana 12', 1.5, 'Me deu sono', 7),
('Diário de um Banana 8', 5, 'Simplesmente cinema', 7),
('Diário de um Banana 10', 4.8, 'Só não dou 10 por causa do pai chato', 7);


-- selects para gerar os gráficos:


select 
nome_livro as livro,
nota_livro as nota
from avaliacao_livros 
order by ...

-- inserts para teste: aquatech
insert into medida (dht11_umidade, dht11_temperatura, momento, fk_aquario) values
(10, 25, '2026-05-07 10:00:00', 1),
(12, 25, '2026-05-07 11:00:00', 1),
(12, 27, '2026-05-07 12:00:00', 1),
(13, 35, '2026-05-07 13:00:00', 1),
(13, 29, '2026-05-07 14:00:00', 1),
(10, 25, '2026-05-07 15:00:00', 1),
(11, 25, '2026-05-07 16:00:00', 1),

(10, 25, '2026-05-07 10:00:00', 2),
(12, 25, '2026-05-07 11:00:00', 2),
(12, 27, '2026-05-07 12:00:00', 2),
(13, 35, '2026-05-07 13:00:00', 2),
(13, 29, '2026-05-07 14:00:00', 2),
(10, 25, '2026-05-07 15:00:00', 2),
(11, 25, '2026-05-07 16:00:00', 2);





