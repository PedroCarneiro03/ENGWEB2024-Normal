Para criar a base de dados criei um container docker chamado mongoEW que utiliza a imagem mongo
Copiei o ficheiro contratos.json ja devidamente preparado para o container mongoEW em /tmp
Apos isto, entrei dentro do docker e importei com mongoimport no formato jsonArray o ficheiro no diretorio /tmp/contratos.json para uma base de dados com o nome contratos na coleçao contratos.
Este container tem porta externa 27017.


Posteriormente foi criado uma orquesta de containers para nao haver a necessidade deste setup a mão, fazendo assim apenas docker-compose up e docker-compose down e conseguimos os 3 serviços a funcionar. Para isto é necessario usar a dockerfile de API e a dockerfile de Interface para criar as suas respetivas imagens:
    API= $ sudo docker build -t api-dados .
    Interface= $ sudo docker build -t interface .

Para esta orquesta funcionar o pedido das rotas quer no axios quer para conectar para a db, passaram a ser em função dos containers criados respetivamente.

API:
A rota /contratos?especie=AAAA vai buscar os contratos com entidade_comunicante igual a AAAA e nao o nipc.
Foi desenvolvido como extra que a rota /contratos tambem consegue tratar /contratos?nipc=xxxx para utilizar para a ultima alinea da interface


Tudo o resto foi desenvolvido dentro das expectativas conforme a normalidade