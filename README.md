# my-hxeneo-app
HXENEO (HANA Express Edition, Node.js, Express.js e openUI5) stack sample APP

# Objetivo
Desenvolver uma API em Node.js, acessando uma base de dados SAP HANA, Express Edition na nuvem (Google Cloud Plantform) que seja consumida por um aplicativo Web, utilizando o SAP openUI5 como framework de desenvolvimento do APP, contemplando toda a ação CRUD (Create, Retrieve, Update and Delete) sobre o modelo de dados exposto mediante serviços criados sobre rotas, utilizando o Node.js.

# Estrutura do Projeto
O projeto está estruturado em uma única solução que contempla duas aplicações. A primeira aplicação refere-se ao Back-End, ou seja, a API que disponibiliza dos dados que serão consumidos por um aplicativo. A segunda aplicação refere-se ao Front-End, ou seja, a interface de interação com o usuário, onde os métodos implementados na API serão requisitados para consumo.

my-hxeneo-app

- api
  - repositories
  - controllers
  - routes
  - apiRouter.js
- config
  - app_config.js
- db
  - client
  - inserts
  - tables
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
- db: Arquivos referentes a criaçao de objetos e manipulação de dados do SAP HANA, Express Edition
- client: Arquivo de conexão com a base de dados e execução de comandos SQL do SAP HANA, Express Edition
- inserts: Arquivos de carga de dados das tabelas da solução para SAP HANA, Express Edition
- tables: Arquivos de criação de objetos de dados (tabelas) referentes ao SAP HANA, Express Edition
- ui5: Arquivos do framework openUI5 referentes APP Web (View/Dispositivo)
- webapp: Arquivos do APP Web (View/Dispositivo)
- ui5Router.js: Arquivo de retorno de Rotas Definidas no APP Web (View/Dispositivo)
- app.js: Arquivo principal do APP (Solução)
- package.json: Arquivo inicial de configuração do APP (Solução)

# Criação, configurações e acessos ao ambiente SAP HANA, Expres Edition na Nuvem
Dando início na criação da solução proposta, este tópico, tem como principal objetivo, disponibilizar links fundamentais para a criação e configuração do ambiente na nuvem do SAP HANA, Express Edition. Assim como a demostração de acesso ao ambiente recem implementado virtualmente na nuvem pelo Google Cloud Platform, em uma licença SUSE Linux. Este acesso é possibilitado mediante a criação de um usuário de desenvolvimento, para manipulação dos dados e criação de novos objetos do banco de dados SAP HANA, Express Edition. 
Alguns passos apenas serão apontados para links que contém uma documentação passo a passo oficial, que por si só, garante a execução com sucesso pela ótima qualidade apresentada.

- Criação do ambiente SAP HANA, Express Edition na nuvem no Google Cloud Platform

https://www.sap.com/developer/tutorials/hxe-gcp-getting-started-launcher-xsa.html

https://www.sap.com/developer/tutorials/hxe-gcp-getting-started-launcher.html

- Preparação do ambiente SAP HANA, Express Edition na nuvem no Google Cloud Platform

https://www.sap.com/developer/tutorials/hxe-howto-tutorialprep.html

- Ferramenta de acesso remoto a base de dados na nuvem - Eclipse plugin

https://tools.hana.ondemand.com/#hanatools

https://www.sap.com/developer/tutorials/hxe-howto-eclipse.html

- Execução da máquina virtual na nuvem no Google Cloud Platform

Se a máquina virtual não estiver inicializada após a criação do ambiente na nuvem, inicialize-a e deixe ativa para a configuração de acesso. 
Nota: É recomendado que se o ambiente virtual na nuvem não esteja em utilização deixe-o pausado ou inativo para que não consuma os créditos gratuítos do ambiente por estar ativo sem utilização. Ao utilizá-lo basta ativá-lo novamente em inicializar.

![16-instance-google-cloud-platform-access-by-eclipse](https://user-images.githubusercontent.com/22205133/37316094-e8d9664a-263b-11e8-852a-cb5d6213ae9b.JPG)



- Configurações de acesso remoto a base de dados na nuvem - Eclipse plugin

1-) Execute o Eclipse

![09-eclipse-acesso-hxe-cloud](https://user-images.githubusercontent.com/22205133/37315341-f046f6d0-2637-11e8-913e-70dbfd29596c.JPG)



2-) Visualize a perspectiva SAP HANA Administrative Console

![sap hana administrative console](https://user-images.githubusercontent.com/22205133/37315451-9025b592-2638-11e8-9983-bcf988763ce6.png)



3-) Em System, click em Add System...

![10-eclipse-acesso-hxe-add-system](https://user-images.githubusercontent.com/22205133/37315490-c511a20c-2638-11e8-8de3-ddfd82eead06.JPG)



4-) A janela Specify System com os dados de acesso a serem solicitados será apresentada

![11-eclipse-acesso-hxe-enter-system-data](https://user-images.githubusercontent.com/22205133/37315535-f4c531ee-2638-11e8-9e1f-370f6c55df24.JPG)



5-) Em Host Name, entre com HXEHOST

![12-eclipse-acesso-hxe-enter-hxe-data](https://user-images.githubusercontent.com/22205133/37316846-36ae4102-2640-11e8-8c57-c1a1af65f34f.JPG)



6-) Em Instance Number, entre com 90. Mode: Selecione as opções Multiple containers e System database. Em Description informe "SAP HANA, Express Edition"

![13-eclipse-acesso-hxe-enter-hxe-data](https://user-images.githubusercontent.com/22205133/37315698-bf927364-2639-11e8-9812-e0385daf763f.JPG)



7-) Na tela seguinte, Connection Properties é apresentada. Na opção pré-selecionada Authentication by database current operating system user, informe em User Name o usuário de desenvolvimeto criado e em Password a senha atribuída na criação do usuário desenvolvedor. Deixe a opção Enable SAP start service connection checada.

![14-eclipse-acesso-hxe-enter-user-data](https://user-images.githubusercontent.com/22205133/37315852-88800e6c-263a-11e8-99a8-f87570b2352a.JPG)



8-) Se os passos anteriores estiverem corretos a seguinte tela com a conexão com sucesso será apresentada.

![15-eclipse-acesso-hxe-conneted](https://user-images.githubusercontent.com/22205133/37315878-b424c7c4-263a-11e8-94cb-cf74bc7296d0.JPG)



![17-eclipse-ddl-hxe-create-object](https://user-images.githubusercontent.com/22205133/37316111-024142ba-263c-11e8-9249-d0189badb830.JPG)



- Criações de objetos (tabelas) a base de dados na nuvem e carga de dados- Eclipse plugin

Após ter acesso ao ambiente HANA, crie os objetos e estruturas necessárias para a manipulação dos dados.
Execute os scripts contidos nos seguintes repositorios do projeto na seguinte ordem:

1-) https://github.com/ucruzle/my-hxeneo-app/tree/master/db/tables

Criação da Tabela de Categorias:

![18-eclipse-ddl-hxe-create-categorias](https://user-images.githubusercontent.com/22205133/37316257-cbb09b3c-263c-11e8-986b-a7fc8e15048f.JPG)



Criação da Tabela de Fornecedores:

![20-eclipse-ddl-hxe-create-fornecedores](https://user-images.githubusercontent.com/22205133/37316320-1551b0fa-263d-11e8-9e37-c8c8e439beab.JPG)



Criação da Tabela de Produtos:

![22-eclipse-ddl-hxe-create-produtos](https://user-images.githubusercontent.com/22205133/37316345-3b86e0e2-263d-11e8-808b-c27ada383fe1.JPG)



Objetos Criados:

![24-eclipse-hxe-refresh-objects](https://user-images.githubusercontent.com/22205133/37316451-eaa8b71c-263d-11e8-8ebc-a0df5c31779c.JPG)



![25-eclipse-hxe-treeview-objects](https://user-images.githubusercontent.com/22205133/37316456-f38936b8-263d-11e8-810b-bc40d5a8bffa.JPG)



2-) https://github.com/ucruzle/my-hxeneo-app/tree/master/db/inserts

Carga de dados na Tabela de Categorias:

![19-eclipse-ddl-hxe-insert-categorias](https://user-images.githubusercontent.com/22205133/37316404-a0798252-263d-11e8-9ac0-2afb778ae0eb.JPG)



![26-eclipse-hxe-view-content-table-categorias](https://user-images.githubusercontent.com/22205133/37316475-1ca51c42-263e-11e8-939a-5a5ac2bd02e8.JPG)



Carga de dados na Tabela de Fornecedores:

![21-eclipse-ddl-hxe-insert-fornecedores](https://user-images.githubusercontent.com/22205133/37316409-ad741864-263d-11e8-97e9-45de6a7310c9.JPG)



![27-eclipse-hxe-view-content-table-fornecedores](https://user-images.githubusercontent.com/22205133/37316480-2a08dff4-263e-11e8-94fb-f56f465d224e.JPG)



Carga de dados na Tabela de Produtos:

![23-eclipse-ddl-hxe-insert-produtos](https://user-images.githubusercontent.com/22205133/37316423-c4164a1a-263d-11e8-95c7-f1e61dbe2c27.JPG)



![27-eclipse-hxe-view-content-table-produtos](https://user-images.githubusercontent.com/22205133/37316496-39bed89a-263e-11e8-8384-5c01798603f4.JPG)



# Instalações e Importações de bibliotecas do App
Para contemplar a funcionalidade do projeto, é necessário a execução de comandos no prompt de comandos do sistema operacional para a importação e instalações de alguns pacotes e bilbiotecas do Node.js e do middleware MVC express, são elas:

- Comando: Init Node.js Exemplo: C:\workspaces\NodeJS\my-hxeneo-app> npm init

![01-npm-init](https://user-images.githubusercontent.com/22205133/36427572-594e5590-162c-11e8-8a86-03fea0c11343.JPG)


![02-dir-command](https://user-images.githubusercontent.com/22205133/36427595-6b610e44-162c-11e8-8114-1f5c9f0642d6.JPG)


- Comando: Install Node.js - Instalação do express middleware de MVC da aplicação Exemplo: C:\workspaces\NodeJS\my-hxeneo-app> npm install express --save

![03-npm-install-express](https://user-images.githubusercontent.com/22205133/36427612-791de372-162c-11e8-96e0-e72ee0de9131.JPG)


- Comando: Install Node.js - Instalação do pacote de formatação dos dados para JSON Exemplo: C:\workspaces\NodeJS\my-hxeneo-app> npm install body-parser --save

![04-npm-install-body-parser](https://user-images.githubusercontent.com/22205133/36427637-856992de-162c-11e8-9ae3-dfc04053d047.JPG)


- Comando: Install Node.js - Serviço local e global na máquina de desenvolvimento que roda a aplicação Exemplo: C:\workspaces\NodeJS\my-hxeneo-app> npm install -g nodemon

![05-npm-install-nodemon](https://user-images.githubusercontent.com/22205133/36427659-913f7966-162c-11e8-8de6-4e2ffaa171f9.JPG)


- Comando: Install Node.js - Instalação do pacote de componentes do SAP HANA para acesso e atualização dos dados no ambiente SAP HANA: C:\workspaces\NodeJS\my-hxeneo-app> npm install hdb

![28-npm-install-hdb-command-prompt](https://user-images.githubusercontent.com/22205133/37316613-dc76082e-263e-11e8-8eb1-db302a1e2087.JPG)


- Comando: Install Node.js - Instalação do pacote de componentes do HTTP Status CODE, para retorno de status com sucesso, erro dentre outros na execução dos serviços da API: C:\workspaces\NodeJS\my-hxeneo-app> npm install http-status-codes --save

![29-npm-install-http-status-codes-command-prompt](https://user-images.githubusercontent.com/22205133/37443331-2ed5825a-27ea-11e8-8e34-7b9e80d103f3.JPG)


# Testes

- Conforme demostrado no exemplo, execute o seguinte comando no prompt de comando do sistema operacional, 
  para inciar a aplicação local C:\workspaces\NodeJS\my-hxeneo-app> nodemon

![08-nodemon-inicializacao-do-projeto](https://user-images.githubusercontent.com/22205133/36430616-5b9ed1be-1634-11e8-90ac-8379577bb836.JPG)  


- Teste Inicial do APP

![07-testeinicialport7000](https://user-images.githubusercontent.com/22205133/36430603-4fef7274-1634-11e8-9329-8c69d85911b2.JPG)

- Testes referentes aos serviços da API: Execução pela ferramenta postman, para chamada dos serviços a serem consumidos pela API, garantindo a consistência da funcionalidade com os testes integrados entre os componentes (Rotas, Controle e Repositórios).

Postman

https://www.getpostman.com/

Serviço referente aos dados do Catálogo de Produtos por Categorias

GET - http://localhost:7000/api/catalogo/retornaCatalogoDeProdutosPorCategorias

![44-teste-api-retorna-catalogo-de-produtos-por-categorias](https://user-images.githubusercontent.com/22205133/37691785-fcf6e212-2c92-11e8-867a-7d07dc28f0b0.JPG)



Serviços referentes aos dados da Categoria de Produtos

GET - http://localhost:7000/api/categorias/retornaCategorias

![30-teste-api-retorna-categorias](https://user-images.githubusercontent.com/22205133/37443610-ec9b5656-27eb-11e8-82ee-670f9fae1bb4.JPG)



GET - http://localhost:7000/api/categorias/retornaCategoria/1

![31-teste-api-retorna-categoria](https://user-images.githubusercontent.com/22205133/37443619-fd53ec6a-27eb-11e8-8566-25916cf31a9d.JPG)



POST - http://localhost:7000/api/categorias/adicionaCategoria

![36-teste-api-adiciona-categoria](https://user-images.githubusercontent.com/22205133/37443633-0cc391aa-27ec-11e8-88c9-6c77508f9d78.JPG)



PUT - http://localhost:7000/api/categorias/alteraCategoria

![37-teste-api-altera-categoria](https://user-images.githubusercontent.com/22205133/37443645-183b57de-27ec-11e8-9652-7b014aefd5dc.JPG)



DELETE - http://localhost:7000/api/categorias/eliminaCategoria

![38-teste-api-elimina-categoria](https://user-images.githubusercontent.com/22205133/37443650-22db7c46-27ec-11e8-9556-9517318dbc42.JPG)



Serviços referentes aos dados dos Fornecedores de Produtos

GET - http://localhost:7000/api/fornecedores/retornaFornecedores

![32-teste-api-retorna-fornecedores](https://user-images.githubusercontent.com/22205133/37443672-387ecd6e-27ec-11e8-9f73-95e79f848625.JPG)



GET - http://localhost:7000/api/fornecedores/retornaFornecedor/1

![33-teste-api-retorna-fornecedor](https://user-images.githubusercontent.com/22205133/37443676-42b38932-27ec-11e8-82ed-431253bd902d.JPG)



POST - http://localhost:7000/api/fornecedores/adicionaFornecedor

![39-teste-api-adiciona-fornecedor](https://user-images.githubusercontent.com/22205133/37443684-4e5a82cc-27ec-11e8-8086-d8cd5a6aaa57.JPG)



PUT - http://localhost:7000/api/fornecedores/alteraFornecedor

![39-teste-api-altera-fornecedor](https://user-images.githubusercontent.com/22205133/37443688-58c1ce32-27ec-11e8-802a-c48fca8a2ae3.JPG)



DELETE - http://localhost:7000/api/fornecedores/eliminaFornecedor

![40-teste-api-elimina-fornecedor](https://user-images.githubusercontent.com/22205133/37443693-6557c160-27ec-11e8-9aec-0e988c8a605d.JPG)



Serviços referentes aos dados dos Produtos

GET - http://localhost:7000/api/produtos/retornaProdutos

![34-teste-api-retorna-produtos](https://user-images.githubusercontent.com/22205133/37443711-80f9edb2-27ec-11e8-8078-5fc33f211944.JPG)



GET - http://localhost:7000/api/produtos/retornaProduto/1

![35-teste-api-retorna-produto](https://user-images.githubusercontent.com/22205133/37443721-8e7ec7f0-27ec-11e8-8214-8e57772fb8a9.JPG)



POST - http://localhost:7000/api/produtos/adicionarProduto

![41-teste-api-adiciona-produto](https://user-images.githubusercontent.com/22205133/37443730-9c7b0a58-27ec-11e8-8bde-26b84a39042a.JPG)



PUT - http://localhost:7000/api/produtos/alteraProduto

![42-teste-api-altera-produto](https://user-images.githubusercontent.com/22205133/37443736-a6936472-27ec-11e8-86b2-5f17ea7f9508.JPG)



DELETE - http://localhost:7000/api/produtos/eliminaProduto

![43-teste-api-elimina-produto](https://user-images.githubusercontent.com/22205133/37443743-b2b259ac-27ec-11e8-978f-5518ff84cd6d.JPG)


- Teste da solução proposta App HXENEO Demo Stack: Execução do Web Aplicativo proposto. Solução desenvolvida no framework JavaScript SAP openUI5, para interfaces com o usuário em Desktop, Tablets e Celulares.

Tela Principal - Exibição de todos os produtos cadastrados por categorias na base de dados do HXE.

App HXENEO Demo Stack: http://localhost:7000/ui5/

![45-teste-app-retorna-catalogo-de-produtos-por-categorias](https://user-images.githubusercontent.com/22205133/37691517-51c07d0a-2c91-11e8-9764-f3aa383041c3.JPG)


