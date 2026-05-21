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
fk_livro int,
nota_livro decimal(2,1) not null,
descricao varchar(100),
fk_usuario int,
constraint ctnota check(nota_livro between 1 and 5),
constraint ctfk_usuario_avaliacao foreign key (fk_usuario)
references usuario (id_usuario),
constraint ctfk_livro foreign key (fk_livro)
references livros (id_livro)
);




create table livros (
id_livro int primary key auto_increment,
nome_livro varchar(50),
imagem_livro varchar(200)
);

select * from usuario;
select * from endereco;
select * from avaliacao_livros;
select * from livros;
desc avaliacao_livros;


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

-- inserts imagens 
insert into livros (nome_livro, imagem_livro) values
('Diário de um Banana 1', 'assets/imgs/diario-1.jpg'),
('Diário de um Banana 2: Rodrick é o Cara', 'assets/imgs/diario-2.jpg'),
('Diário de um Banana 3: A Gota D’Água', 'assets/imgs/diario-3.jpg'),
('Diário de um Banana 4: Dias de Cão', 'assets/imgs/diario-4.jpg'),
('Diário de um Banana 5: A Verdade Nua e Crua', 'assets/imgs/diario-5.jpg'),
('Diário de um Banana 6: Casa dos Horrores', 'assets/imgs/diario-6.jpg'),
('Diário de um Banana 7: Segurando Vela', 'assets/imgs/diario-7.jpg'),
('Diário de um Banana 8: Maré de Azar', 'assets/imgs/diario-8.jpg'),
('Diário de um Banana 9: Caindo na Estrada', 'assets/imgs/diario-9.jpg'),
('Diário de um Banana 10: Bons Tempos', 'assets/imgs/diario-10.jpg'),
('Diário de um Banana 11: Vai ou Racha', 'assets/imgs/diario-11.jpg'),
('Diário de um Banana 12: Apertem os Cintos', 'assets/imgs/diario-12.jpg'),
('Diário de um Banana 13: Batalha Neval', 'assets/imgs/diario-13.jpg'),
('Diário de um Banana 14: Quebra Tudo', 'assets/imgs/diario-14.jpg'),
('Diário de um Banana 15: Vai Fundo', 'assets/imgs/diario-15.jpg'),
('Diário de um Banana 16: Bola Fora', 'assets/imgs/diario-16.jpg'),
('Diário de um Banana 17: Fräwda Megaxeia', 'assets/imgs/diario-17.jpg'),
('Diário de um Banana 18: Cabeça Oca', 'assets/imgs/diario-18.jpg'),
('Diário de um Banana 19: Baita Lambança', 'assets/imgs/diario-19.jpg'),
('Diário de um Banana 20: Festa Insana', 'assets/imgs/diario-20.jpg');







-- selects para gerar os gráficos:

-- gráfico: quantidade de avaliações por livro:
select
l.nome_livro,
count(a.id_avaliacao_livros) as qtd_avaliacoes
from livros l
join avaliacao_livros a
on l.id_livro = a.fk_livro
group by l.nome_livro
order by qtd_avaliacoes desc;

-- gráfico: ranking de livros mais bem avaliados:
select 
nome_livro as 'livro',
truncate(media_livro, 2) as 'media_avaliacoes'
from (
select 
nome_livro,
AVG(nota_livro) as media_livro
from avaliacao_livros
group by nome_livro
) as medias
order by media_livro desc;

-- gráfico: ranking de livros mais bem avaliados utilizando score:
-- 5.0 = m: qtd minima de avaliações necessárias para o livro se tornar confiável
SELECT 
    nome_livro,
    truncate(AVG(nota_livro), 2) AS media,
    COUNT(*) AS quantidade_avaliacoes,
    ROUND(
    ((COUNT(*) / (COUNT(*) + 5.0)) * AVG(nota_livro) +
            (5.0 / (COUNT(*) + 5.0)) *
            (SELECT AVG(nota_livro) FROM avaliacao_livros)
        ), 2) AS score
FROM avaliacao_livros
GROUP BY nome_livro
ORDER BY score DESC LIMIT 5;

-- gráfico: quantidade de usuários que leram certa quantidade de livros da série:
select
count(qtd_livros_lidos_por_usuario) as qtd_de_usuarios,
qtd_livros_lidos_por_usuario as qtd_livros_lidos
from (
select
count(fk_usuario) as qtd_livros_lidos_por_usuario
from avaliacao_livros
group by fk_usuario
) as quantidade_por_usuario
group by qtd_livros_lidos_por_usuario;






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





