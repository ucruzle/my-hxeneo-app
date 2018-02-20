# my-hxeneo-app
HXENEO (HANA Express Edition, Node.js, Express.js e openUI5) stack sample APP

# Objetivo
Desenvolver uma API em Node.js, acessando uma base de dados SAP HANA, Express Edition na nuvem (Google Cloud Plantform) que seja consumida por um aplicativo Web,utilizando o SAP openUI5 como framework de desenvolvimento do APP, contemplando toda a ação CRUD (Create, Retriave, Update and Delete) sobre o modelo de dados exposto mediante serviços criados sobre rotas, utilizando o Node.js.

# Estrutura do Projeto
O projeto está estruturado em uma única solução que contempla duas aplicações. A primeira aplicação refere-se ao Back-End, ou seja, a API que disponibiliza dos dados que serão consumidos por um aplicativo. A segunda aplicação refere-se ao Front-End, oud seja, a interface de interação com o usuário, onde os métodos implementados na API serão requisitados para consumo.

my-hxeneo-app

- api
  - repositories
  - controllers
  - routes
  - apiRouter.js
- config
  - app_config.js
- ui5
  - webapp
  - ui5Router.js
- app.js
- package.json

# DIRETÓRIO / ARQUIVO
- api: Arquivos da API
- repositories: Arquivos referentes as regras de persitência de dados
- controllers: Arquivos de orquestração de processos da API
- routes: Arquivos de definição de Rotas
- apiRouter.js: Arquivo de retorno de Rotas Definidas na API
- config: Arquivos de configurações globais do APP (Solução)
- app_config.js: Arquivo global de configuração do APP (Solução)
- ui5: Arquivos do framework openUI5 referentes APP Web (View/Dispositivo)
- webapp: Arquivos do APP Web (View/Dispositivo)
- ui5Router.js: Arquivo de retorno de Rotas Definidas no APP Web (View/Dispositivo)
- app.js: Arquivo principal do APP (Solução)
- package.json: Arquivo inicial de configuração do APP (Solução)

# Instalações e Importações de bibliotecas
Para contemplar a funcionalidade do projeto, é necessário a execução de comandos no prompt de comandos do sistema operacional para a importação e instalações de alguns pacotes e bilbiotecas do Node.js e do middleware MVC express, são elas:

- Comando: Init Node.js Exemplo: C:\workspaces\NodeJS\my-hxeneo-app> npm init
![01-npm-init](https://user-images.githubusercontent.com/22205133/36427572-594e5590-162c-11e8-8a86-03fea0c11343.JPG)

![02-dir-command](https://user-images.githubusercontent.com/22205133/36427595-6b610e44-162c-11e8-8114-1f5c9f0642d6.JPG)

- Comando: Install Node.js - Instalação do express middleware de MVC da aplicação Exemplo: C:\workspaces\NodeJS\my-hxeneo-app> npm install express --save
![03-npm-install-express](https://user-images.githubusercontent.com/22205133/36427612-791de372-162c-11e8-96e0-e72ee0de9131.JPG)

- Comando: Install Node.js - Instalação o pacote de formatação dos dados para JSON Exemplo: C:\workspaces\NodeJS\my-hxeneo-app> npm install body-parser --save
![04-npm-install-body-parser](https://user-images.githubusercontent.com/22205133/36427637-856992de-162c-11e8-9ae3-dfc04053d047.JPG)

- Comando: Install Node.js - Serviço local e global na máquina de desenvolvimento que roda a aplicação Exemplo: C:\workspaces\NodeJS\my-hxeneo-app> npm install -g nodemon
![05-npm-install-nodemon](https://user-images.githubusercontent.com/22205133/36427659-913f7966-162c-11e8-8de6-4e2ffaa171f9.JPG)

# Testes

- Conforme demostrado no exemplo, execute o seguinte comando no prompt de comando do sistema operacional, 
  para inciar a aplicação local C:\workspaces\NodeJS\my-hxeneo-app> nodemon

![08-nodemon-inicializacao-do-projeto](https://user-images.githubusercontent.com/22205133/36430616-5b9ed1be-1634-11e8-90ac-8379577bb836.JPG)  

- Teste Inicial do APP

![07-testeinicialport7000](https://user-images.githubusercontent.com/22205133/36430603-4fef7274-1634-11e8-9329-8c69d85911b2.JPG)
