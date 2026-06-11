-- selects teste e selects dos gráficos e KPIs:
select * from usuario;
select * from endereco;
select * from avaliacao_livros;
select * from livros;

drop table usuario;
drop table endereco;
drop table avaliacao_livros;

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
SELECT 
    l.nome_livro AS titulo,
    ROUND(
    (((select avg(nota_livro) 
    from avaliacao_livros) * 5) + 
    (avg(a.nota_livro) * count(*)))/ 
    (5 + count(*)), 2) AS score
FROM avaliacao_livros a
JOIN livros l
ON a.fk_livro = l.id_livro
GROUP BY l.nome_livro, l.id_livro
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
    (((select avg(nota_livro) 
    from avaliacao_livros) * 5) + 
    (avg(a.nota_livro) * count(*)))/
    (5 + count(*)), 2) AS score
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
    (((select avg(nota_livro) 
    from avaliacao_livros) * 5) + 
    (avg(a.nota_livro) * count(*)))/
    (5 + count(*)),  2) AS score
FROM avaliacao_livros a
JOIN livros l
ON a.fk_livro = l.id_livro
GROUP BY l.nome_livro, l.imagem_livro
ORDER BY score LIMIT 1;

-- Sua classificação para completar a série:
select
u.nome as usuario,
count(a.fk_usuario) as qtd_lidos
from usuario u
join avaliacao_livros a
on u.id_usuario = a.fk_usuario
where u.id_usuario = 1
group by a.fk_usuario;

-- Usuarios que completaram a série:
SELECT(
SELECT COUNT(*)
FROM usuario) AS total_usuarios,
COUNT(*) AS usuarios_completaram
FROM (
SELECT fk_usuario
FROM avaliacao_livros
GROUP BY fk_usuario
HAVING COUNT(fk_livro) = 20
) AS usuarios_completos;


-- livro mais avaliado na última semana:
select 
l.nome_livro as titulo,
l.imagem_livro as imagem
from livros l
join avaliacao_livros a
on l.id_livro = a.fk_livro
where a.data_avaliacao >= curdate() - interval 7 day
group by a.fk_livro, l.nome_livro, l.imagem_livro
order by count(a.fk_livro) desc
limit 1;

-- select para o pesquisar da página meus livros:
select
l.nome_livro as titulo,
l.imagem_livro as imagem,
u.nome as usuario,
a.nota_livro as nota,
a.descricao as descricao,
a.data_avaliacao
from livros l
join avaliacao_livros a
on l.id_livro = a.fk_livro
join usuario u
on a.fk_usuario = u.id_usuario
where l.nome_livro = 'Diário de um Banana 1'
order by a.data_avaliacao desc limit 3;


-- emails iguais:
select email
from usuario;

