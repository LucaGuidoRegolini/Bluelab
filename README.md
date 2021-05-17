# Registro de cliente Blue Lab

Website capaz de armazenar dados cadastrados de clientes em seu banco de dados, seu frontend foi feito em **ReactJS**, uma biblioteca JavaScript de código aberto mantida pelo Facebook, e seu backend foi feito em **NodeJs**, um software de código aberto, multiplataforma, que executa códigos JavaScript.

## Fases do desafio concluída

- Desenvolvimento do front-end em ReactJS 100%
- Desenvolvimento do back-end em NodeJs 100%
- Site online https://cadastrobluelab.netlify.app/
- Api Rest https://blulab-api.herokuapp.com/

## Modo de usar

Pelo Prompt de comando, no diretório da aplicação executar os seguintes comandos para iniciar o **backend**.

> é necessário ter o NodeJs instalado.

```cmd
cd backend
npm install
npm start
```

> A instância ira iniciar em **http://localhost:3333/**

Pelo Prompt de comando, no diretório da aplicação executar os seguintes comandos para iniciar o **frontend**.

> é necessário ter o NodeJs instalado.

```cmd
cd frontend
npm install
npm dev
```

> A instância ira iniciar em **http://localhost:3000/**

## Documentação API

#### Listando clientes

Deve-se usar o método **GET**, para listar todos os clientes no banco de dados.

```http
https://blulab-api.herokuapp.com/
```

através de **Querys** podemos dividir a lista em paginas.
com **total** definiremos o total de itens por pagina.

e com **page** definiremos a pagina que queremos acessar.

> No exemplo abaixo foi definido o total de itens como **2** e a pagina como **2**, caso o total de clientes não seja maior que 2 a resposta vira com **"clientes"** vazio, mas com **"sucess"** como **true**.

```http
https://blulab-api.herokuapp.com/?page=2&total=2
```

#### Selecionando cliente

também com o método **GET** podemos selecionar um cliente em especial, basta colocar seu **CPF** como um **Route Params**, basta coloca-ló na frente da URL.

> Lembre-se de não colocar outros parâmetros na URL.

```http
https://blulab-api.herokuapp.com/18572747257
```

#### Criando cliente

Agora será necessário usar o método **POST**, a URL deve ser a mesma usada até agora, sem nenhum parâmetro na frente.

> Navegadores como o Google Chrome por padrão usam apenas o método **GET**
> recomenda-se o uso de outro aplicativo, como **Insomnia** para as rota a seguir.

```http
https://blulab-api.herokuapp.com
```

> **padrão para a criação do registro**

```json
{
  "cpf": "cpf do cliente",
  "nome": "nome do cliente",
  "sobrenome": "sobrenome do cliente",
  "telefone": "telefone do cliente"
}
```

> O formato do telefone deve ser (99)99999999 para telefones
> e (99)999999999 para celulares
> o formato para o CPF é 99999999999, sem nenhuma pontuação
> todos os valores devem ser passados dentro de aspas
> para que sejam mandados em **String**.

#### Editando cliente

deve-se usar o método **PUT**, a URL deve ser as mesma, porem com o **CPF** do cliente sendo passado como um **Route Params**.

> Lembre-se de usar um aplicativo como **Insomnia** que nem a rota anterior

```http
https://blulab-api.herokuapp.com/18572747257
```

> **padrão para a alteração do registro**

```json
{
  "nome": "nome do cliente",
  "sobrenome": "sobrenome do cliente",
  "telefone": "telefone do cliente"
}
```

> O formato do telefone deve ser (99)99999999 para telefones
> e (99)999999999 para celulares
> o formato para o CPF é 99999999999, sem nenhuma pontuação,
> todos os valores devem ser passados dentro de aspas
> para que sejam mandados em **String**.

#### Deletando cliente

**Cuidado, ao deletar um registro o mesmo não poderá ser restaurado**

Será necessário usar o método **DELETE**, a URL deve ser a mesma usada até agora, scom o **CPF** do cliente sendo passado como um **Route Params**.

> Essa rota também não será executada no navegador
> deve-se usar um um aplicativo como **Insomnia** .

```http
https://blulab-api.herokuapp.com/18572747257
```

## Aviso

> A api está alocada na hospedagem gratuita do Heroku, por isso pode demorar um pouco para responder, ou seja não é por falta de habilidade do programador, mas sim por falta de dinheiro.
