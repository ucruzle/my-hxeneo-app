var categoriasRepository   = require('../repositories/categorias')
  , fornecedoresRepository = require('../repositories/fornecedores')
  , produtosRepository     = require('../repositories/produtos')
  , Catalogo               = []
  , categorias             = []
  , fornecedores           = []
  , produtos               = []
  , err                    = {}
  ;
      
exports.retornaCatalogoDeProdutosPorCategorias = function(callback) {

    categoriasRepository.retornaCategorias(function(err, categorias) {

        if (err) {
            callback(err, null);
        } else {

            fornecedoresRepository.retornaFornecedores(function(err, fornecedores) {

                if (err) {
                    callback(err, null);
                } else {

                    produtosRepository.retornaProdutos(function(err, produtos) {

                        if (err) {
                            callback(err, null);
                        } else {

                            var Categoria = {};

                            for (var i = 0; i < categorias.length; i++) {

                                Categoria                   = new Object(); // Inicia os dados no Catálogo com uma nova Categoria
                                Categoria.CODIGODACATEGORIA = categorias[i].CODIGODACATEGORIA;
                                Categoria.NOMEDACATEGORIA   = categorias[i].NOMEDACATEGORIA;
                                Categoria.DESCRICAO         = categorias[i].DESCRICAO;
                                Categoria.Produtos          = []; // Para cada categoria é atribuído todos os produtos vinculados

                                // Busca todos os produtos por Categoria
                                var produtosPorCategoria = produtos.filter(function(obj) { return obj.CODIGODACATEGORIA === categorias[i].CODIGODACATEGORIA });
                                var Produto              = {};

                                for (var j = 0; j < produtosPorCategoria.length; j++) {

                                    Produto                      = new Object(); // Cria um novo Objeto Produto
                                    Produto.CODIGODOPRODUTO      = produtosPorCategoria[j].CODIGODOPRODUTO;
                                    Produto.NOMEDOPRODUTO        = produtosPorCategoria[j].NOMEDACATEGORIA;
                                    Produto.CODIGODOFORNECEDOR   = produtosPorCategoria[j].CODIGODOFORNECEDOR;
                                    Produto.CODIGODACATEGORIA    = produtosPorCategoria[j].CODIGODACATEGORIA;
                                    Produto.QUANTIDADEPORUNIDADE = produtosPorCategoria[j].QUANTIDADEPORUNIDADE;
                                    Produto.PRECOUNITARIO        = Number(produtosPorCategoria[j].PRECOUNITARIO);
                                    Produto.UNIDADESEMESTOQUE    = Number(produtosPorCategoria[j].UNIDADESEMESTOQUE);
                                    Produto.UNIDADESPEDIDAS      = Number(produtosPorCategoria[j].UNIDADESPEDIDAS);
                                    Produto.NIVELDEREPOSICAO     = Number(produtosPorCategoria[j].NIVELDEREPOSICAO);
                                    Produto.DESCONTINUADO        = produtosPorCategoria[j].DESCONTINUADO;
                                    Produto.Fornecedor           = new Object(); // Para cada Produto é localizado o Fornecedor vinculado

                                    // Localiza o Fornecedor vinculado a Categoria
                                    var fornecedorDoProduto = {};

                                    fornecedorDoProduto = fornecedores.find(function(obj) { return obj.CODIGODOFORNECEDOR === produtosPorCategoria[j].CODIGODOFORNECEDOR });

                                    if (fornecedorDoProduto != null) {

                                        Produto.Fornecedor.CODIGODOFORNECEDOR = fornecedorDoProduto.CODIGODOFORNECEDOR;
                                        Produto.Fornecedor.NOMEDAEMPRESA      = fornecedorDoProduto.NOMEDAEMPRESA;
                                        Produto.Fornecedor.NOMEDOCONTATO      = fornecedorDoProduto.NOMEDOCONTATO;
                                        Produto.Fornecedor.CargoDoContato     = fornecedorDoProduto.CargoDoContato;
                                        Produto.Fornecedor.ENDERECO           = fornecedorDoProduto.ENDERECO;
                                        Produto.Fornecedor.CIDADE             = fornecedorDoProduto.CIDADE;
                                        Produto.Fornecedor.REGIAO             = fornecedorDoProduto.REGIAO;
                                        Produto.Fornecedor.CEP                = fornecedorDoProduto.CEP;
                                        Produto.Fornecedor.PAIS               = fornecedorDoProduto.PAIS;
                                        Produto.Fornecedor.TELEFONE           = fornecedorDoProduto.TELEFONE;
                                        Produto.Fornecedor.FAX                = fornecedorDoProduto.FAX;
                                        Produto.Fornecedor.HOMEPAGE           = fornecedorDoProduto.HOMEPAGE;

                                    } 

                                    Categoria.Produtos.push(Produto); // Adiciona o novo produto localizado a categoria

                                };

                                Catalogo.push(Categoria); // Adiciona a nova Categoria ao Catálogo de Produtos

                            };

                            callback(null, Catalogo); // Retorna no callback o Catálogo de Produtos

                        } // Fim IF..ELSE retorno de produtos

                    }); // Fim da função de execução do retorno de produtos

                } // Fim IF..ELSE retorno de fornecedores

            }); // Fim da função de execução do retorno de fornecedores

        } // Fim IF..ELSE retorno de categorias

    }); // Fim da função de execução do retorno de categorias

}    