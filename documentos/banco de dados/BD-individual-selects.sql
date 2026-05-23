-- selects teste e selects dos gráficos e KPIs:
select * from usuario;
select * from endereco;
select * from avaliacao_livros;
select * from livros;



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
    l.nome_livro AS titulo,
    TRUNCATE(AVG(a.nota_livro), 2) AS media,
    COUNT(*) AS quantidade_avaliacoes,
    ROUND(
    ((COUNT(*) / (COUNT(*) + 5.0)) * AVG(a.nota_livro) +
            (5.0 / (COUNT(*) + 5.0)) *
            (SELECT AVG(a.nota_livro) FROM avaliacao_livros a)
        ), 2) AS score
FROM avaliacao_livros a
JOIN livros l
ON a.fk_livro = l.id_livro
GROUP BY l.nome_livro
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


-- KPIs:
-- Livro mais avaliado:
select 
l.nome_livro as titulo,
l.imagem_livro as imagem
from livros l
join avaliacao_livros a
on l.id_livro = a.fk_livro
group by a.fk_livro
order by count(a.fk_livro) desc limit 1;

-- Livro com a maior média de notas:
SELECT 
    l.nome_livro AS titulo,
    l.imagem_livro AS imagem,
    ROUND(
    ((COUNT(*) / (COUNT(*) + 5.0)) * AVG(a.nota_livro) +
            (5.0 / (COUNT(*) + 5.0)) *
            (SELECT AVG(a.nota_livro) FROM avaliacao_livros a)
        ), 2) AS score
FROM avaliacao_livros a
JOIN livros l
ON a.fk_livro = l.id_livro
GROUP BY l.nome_livro, l.imagem_livro
ORDER BY score DESC LIMIT 1;



-- Livro com a menor média de notas:
SELECT 
    l.nome_livro AS titulo,
    l.imagem_livro AS imagem,
    ROUND(
    ((COUNT(*) / (COUNT(*) + 5.0)) * AVG(a.nota_livro) +
            (5.0 / (COUNT(*) + 5.0)) *
            (SELECT AVG(a.nota_livro) FROM avaliacao_livros a)
        ), 2) AS score
FROM avaliacao_livros a
JOIN livros l
ON a.fk_livro = l.id_livro
GROUP BY l.nome_livro, l.imagem_livro
ORDER BY score LIMIT 1;

-- Sua classificação para completar a série:
-- com base no valor recebido de qtd fazer um if else para exibir uma mensagem 
-- dizendo a distancia do usuario para completar a serie e uma mensagem do tipo:
-- ainda falta muito seu banana...
select
u.nome as usuario,
count(a.fk_usuario) as qtd_lidos
from usuario u
join avaliacao_livros a
on u.id_usuario = a.fk_usuario
where u.id_usuario = "colocar o id pego no login através do sessionstorage"
group by a.fk_usuario;

-- Usuarios que completaram a série:
-- pesquisar formas de retornar a qtd de usuarios junto com os que completaram a serie
-- ou fazer outra rota puxando somente a qtd de usuarios no site e tirar a porcentagem no js
select
count(u.nome) as usuario_que_completaram,
count(a.fk_usuario) as qtd_lidos
from usuario u
join avaliacao_livros a
on u.id_usuario = a.fk_usuario
group by a.fk_usuario, u.nome
having count(a.fk_usuario) = 2;


-- livro mais avaliado na última semana:
update livros set imagem_livro = '../assets/imgs/diario-3.jpg' where id_livro = 3;
update livros set imagem_livro = '../assets/imgs/diario-1.jpg' where id_livro = 1;
update livros set imagem_livro = '../assets/imgs/diario-2.jpg' where id_livro = 2;
update livros set imagem_livro = '../assets/imgs/diario-4.jpg' where id_livro = 4;
update livros set imagem_livro = '../assets/imgs/diario-5.jpg' where id_livro = 5;
update livros set imagem_livro = '../assets/imgs/diario-6.jpg' where id_livro = 6;
update livros set imagem_livro = '../assets/imgs/diario-7.jpg' where id_livro = 7;
update livros set imagem_livro = '../assets/imgs/diario-8.jpg' where id_livro = 8;
update livros set imagem_livro = '../assets/imgs/diario-9.jpg' where id_livro = 9;
update livros set imagem_livro = '../assets/imgs/diario-10.jpg' where id_livro = 10;
update livros set imagem_livro = '../assets/imgs/diario-11.jpg' where id_livro = 11;
update livros set imagem_livro = '../assets/imgs/diario-12.jpg' where id_livro = 12;
update livros set imagem_livro = '../assets/imgs/diario-13.jpg' where id_livro = 13;
update livros set imagem_livro = '../assets/imgs/diario-14.jpg' where id_livro = 14;
update livros set imagem_livro = '../assets/imgs/diario-15.jpg' where id_livro = 15;
update livros set imagem_livro = '../assets/imgs/diario-16.jpg' where id_livro = 16;
update livros set imagem_livro = '../assets/imgs/diario-17.jpg' where id_livro = 17;
update livros set imagem_livro = '../assets/imgs/diario-18.jpg' where id_livro = 18;
update livros set imagem_livro = '../assets/imgs/diario-19.jpg' where id_livro = 19;
update livros set imagem_livro = '../assets/imgs/diario-20.jpg' where id_livro = 20;
