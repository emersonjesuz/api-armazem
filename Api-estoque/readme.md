# API gerenciamento de estoque

as permições sera determinadas entre a empresa e o funcionario!

- funcionario (F)
- empresa (E)

cada endpoint so pode ser ussada pelo cliente com a permição!

## cadastrar empresa !

### POST /empresa/cadastrar

esse endpoint você pode cadastrar sua empresa !

envio no bady da requisição

- nome_empresa
- email
- telefone
- senha

resposta

- error ou sucesso

## login empresa !

### POST /empresa/login

esse endpoint é responsavel pelo login na conta da empresa.

### Atenção !!

você vai precisar do token para acessar outros endpoint da empresa

envio no bady da requisição

- email
- senha

resposta

- token
- dados da empresa
  - nome_empresa
  - email
  - telefone
- error

## cadastro de funcionarios !

### POST /empresa/funcionario/cadastro

### (E)

envio no bady da requisição.
o token precisa ser informando no header da requisição como bearer token

esse endpoint é responsavel por cadastrar o funcionario na empresa!

- token
- nomeFuncionario
- email
- telefone
- imagemPerfil
- numeroRg

resposta

- error ou sucesso

## lista de funcionarios !

### GET /empresa/funcionarios

### (E)

envio no bady da requisição.
o token precisa ser informando no header da requisição como bearer token

esse endpoint é responsavel por listar todos os funcionario na empresa!

envio

- token

resposta

- lista de funcionarios

## registro / historico de ações no produto !

### GET /empresa/registros

### (E)

envio no bady da requisição.
o token precisa ser informando no header da requisição como bearer token

esse endpoint é responsavel por listar todos os registros (adicionar, editar, deletar) na empresa!

envio

- token

resposta

- lista de registros

## autenticar funcionario !

### POST /funcionario/autenticar

### (F)

esse endpoint é responsavel por autenticar um funcionario ja cadastrado pela empresa!

envio

- nomeFuncionario
- email
- numeroRg
- senha

resposta

- error ou sucesso

## login funcionario !

### POST /funcionario/login

### (F)

esse endpoint é responsavel pelo login na conta do funcionario.

### Atenção !!

você vai precisar do token para acessar outros endpoint do funcionario

envio

- email
- senha

resposta

- token
- funcionario

  - nomeFuncionario
  - email
  - numeroRg
  - senha

- error

## lista de produtos !

### GET /empresa/produtos

### (F) (E)

esse endpoint é responsavel pela listagem de todos os produtos da empresa.

envie a 'pagina 'pela a query da requisição!

envio

- pagina
- token

resposta

- lista de produtos
- error

## exibir produto !

### GET /empresa/produtos/:id

### (F) (E)

esse endpoint é responsavel por exibir um produto.

envie a ' id ' pela paramentro da requisição!

envio

- id do produto
- token

resposta

- produto
- error

## adicionar produto !

### POST /empresa/produtos/adicionar

### (F)

esse endpoint é responsavel por adicionar um produto.

envio

- token
- nomeProduto
- descricao
- unidades
- imagem

resposta

- error ou sucesso

## vender produto !

### POST /empresa/produtos/vender/:id

### (F)

esse endpoint é responsavel por vender um produto.

envie a ' id ' pela paramentro da requisição!

envio

- id do produto
- token
- unidades

resposta

- error ou sucesso

## editar produto !

### PATCH /empresa/produtos/editar/:id

### (F)

esse endpoint é responsavel por editar um produto.

envie a ' id ' pela paramentro da requisição!

envio

- id do produto
- token
- nomeProduto
- descricao
- unidades
- imagem

resposta

- error ou sucesso

## deletar produto !

### DELETE /empresa/produtos/deletar/:id

### (F)

esse endpoint é responsavel por deletar um produto que esteja com a unidade zerada.

envie a ' id ' pela paramentro da requisição!

envio

- id do produto
- token

resposta

- error ou sucesso
