# Diário De Um Banana
<p align="center">
  <img src="public/assets/imgs/banner-readme.png" width="800">
   </p>
Projeto Individual desenvolvido na matéria de Pesquisa e Inovação do curso de Ciência da Computação da Faculdade SPTECH - São Paulo Tech School - 1° semestre de 2026.
<hr>

# Funcionalidades
 **Página inicial com apresentação do site**
 <p align="center">
  <img src="public/assets/imgs/pagina-home.png" width="800">
   </p>
<hr>

**Cadastro e autenticação de usuários**
<p align="center">
  <img src="public/assets/imgs/pagina-cadastro.png" width="800">
   </p>
   <p align="center">
  <img src="public/assets/imgs/pagina-login.png" width="800">
   </p>
   <hr>
   
 **Avaliação e consulta de avaliações de livros**
 <p align="center">
  <img src="public/assets/imgs/avaliacao-livros.png" width="800">
   </p>
   <p align="center">
  <img src="public/assets/imgs/visualizar-avaliacoes.png" width="800">
   </p>
   <hr>
   
**Dashboard para visualização de dados**
<p align="center">
  <img src="public/assets/imgs/dashboard-kpis.png" width="800">
   </p>
   <p align="center">
  <img src="public/assets/imgs/dashboard-graficos.png" width="800">
   </p>
  <hr>

  # Tecnologias utilizadas
  <p align="left">
<img width="40" height="40" alt="image" src="https://github.com/user-attachments/assets/ed1bd537-50be-48b8-96dd-77b05c925c95" />
  &nbsp;&nbsp;&nbsp;
<img width="40" height="40" alt="image" src="https://github.com/user-attachments/assets/308c6db8-040f-427a-956b-695156c0acf1" />
  &nbsp;&nbsp;&nbsp;
<img width="40" height="40" alt="image" src="https://github.com/user-attachments/assets/d5f3b664-5d07-4395-bc91-369636eeeee0" />
</p>
<hr>

  # Como Executar o Projeto
  
  ## 1. Clone o repositório
```bash
git clone https://github.com/FelipeG-Santos/Projeto-Individual-PI-SPTech-1sem-2026.git
```
<hr>

## 2. Instale as dependências
```bash
 npm i
```
<hr>

## 3. Configure as variáveis de ambiente

Crie um arquivo `.env` e `.env.dev`:

```env
DB_HOST= localhost
DB_USER= root
DB_PASSWORD= sua senha
DB_DATABASE= nome do banco
DB_PORT=3306

APP_PORT=3333
APP_HOST=localhost
```

<hr>

## 4. Configure o ambiente

No arquivo `app.js` habilite o "Produção" caso esteja utilizando o arquivo .env
```js
var ambiente_processo = 'producao';
```

No arquivo `app.js` habilite o "Desenvolvimento" caso esteja utilizando o arquivo .env.dev
```js
var ambiente_processo = 'desenvolvimento';
```
<hr>

## 5. Inicie o projeto

```bash
npm start
