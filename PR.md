Para criar a base de dados criei um container docker chamado mongoEW que utiliza a imagem mongo
Copiei o ficheiro contratos.json ja devidamente preparado para o container mongoEW em /tmp
Apos isto, entrei dentro do docker e importei com mongoimport no formato jsonArray o ficheiro no diretorio /tmp/contratos.json para uma base de dados com o nome contratos na coleçao contratos.
Este container tem porta externa 27017.


API:
A rota /contratos?especie=AAAA vai buscar os contratos com entidade_comunicante igual a AAAA e nao o nipc.
Foi desenvolvido como extra que a rota /contratos tambem consegue tratar /contratos?nipc=xxxx para utilizar para a ultima alinea da interface
