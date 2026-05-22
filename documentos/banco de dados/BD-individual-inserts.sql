-- Inserts:
insert into usuario (nome, email, senha) values
('Felipe', 'felipe@gmail.com', '222222'),
('Caio', 'caio@gmail.com', '333333'),
('Guilherme', 'guilherme@gmail.com', '444444'),
('Ana', 'ana@gmail.com', '555555'),
('Gustavo', 'gustavo@gmail.com', '666666'),
('Arthur', 'arthur@gmail.com', '777777'),
('Marcus', 'marcus@gmail.com', '888888');

-- inserts iniciais:
insert into endereco (estado, cidade, bairro, fk_usuario) values
('SP', 'São Paulo', 'Rua A', 1),
('SP', 'Cotia', 'Rua B', 2),
('SP', 'Cotia', 'Rua B', 3),
('BA', 'Salvador', 'Rua C', 4),
('BA', 'Noronha', 'Rua D', 5),
('RJ', 'Rio de Janeiro', 'Rua E', 6),
('RJ', 'Rio de Janeiro', 'Rua E', 7);

insert into avaliacao_livros (fk_livro, nota_livro, descricao, fk_usuario) values
(1, 2.5, 'Achei o primeiro fraco', 1), 
(3, 3.5, 'Mediano', 1), 
(3, 4.5, 'Gostei muito da parte da viagem', 2), 
(4, 5, 'Muito bom', 2), 
(3, 1.5, 'Esse é péssimo', 3), 
(3, 2, 'Não gostei', 4), 
(10, 2.8, 'Não é o meu favorito', 4),
(8, 3.4, 'O irmão é muito engraçado', 4),
(8, 4.1, 'Achei que foi um dos mais legais', 5),
(4, 3.3, 'Achei muito bom esse', 5),
(10, 3.5, 'Mais ou menos', 6),
(11, 5, 'Cara, esse é o melhor de todos', 6),
(12, 4.5, 'Muito divertido', 6),
(12, 1.5, 'Me deu sono', 7),
(8, 5, 'Simplesmente cinema', 7),
(10, 4.8, 'Só não dou 10 por causa do pai chato', 7);

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