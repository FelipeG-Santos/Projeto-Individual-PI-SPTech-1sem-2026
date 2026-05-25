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
data_avaliacao date default (current_date),
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
