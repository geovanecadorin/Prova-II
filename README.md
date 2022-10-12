# Primeira API 
Primeiro exemplo de api para o curso

## Instalação do yarn

Instalar o gerenciador de pacote YARN se o node for >= 16.10

```bash
corepack enable
```

Instalar o gerenciador de pacote YARN se o node for < 16.10

```bash
npm i -g corepack
```
## Criação do package.json

Entrar na pasta de criação e digitar o código:

```bash
yarn init -y
```

Neste novo arquivo gerado `package.json` poderemos colocar os controles, as referências, as bibliotecas, etc... do projeto

## Inserindo o Express no projeto

É necessário instalar a dependência express no projeto:

```bash
yarn add express
```

> Nota: Caso for persistir no GIT crie um arquivo `.gitignore` para não fazer upload de todos os modulos.

Logo após será adicionado o seguinte código no `package.json`

```json
"dependencies": {
    "express": "^4.18.1"
  }
```

## Crindo o arquivo index.js

Com as dependências criadas, vamos criar o arquivo principal da nossa API `index.js`

Dentro do arquivos vamos aos códigos: 

```JavaScript
//chamar a biblioteca express
const express = require('express');

//armazenar na váriavel server a biblioteca express()
const server = express();

//chamar a função listen para "escutar a porta em que vamos utilizar"
server.listen(3500);
```

É hora de tentar acessar a primeira rota! Precisa-se criar uma pequena rota de exemplo:

```JavaScript
//Criando a ROTA get para testar a API
server.get('/teste', () => {
  console.log('Deu certooooo!!!!')
})
```

O teste é chamado por:

```bash
node index.js
```

E acessando:

[localhost:3500/teste](http://localhost:3500/teste)

Mas testar em CMD é feio né!? Vamos testar em HTML? 

```JavaScript
// Vamos criar dois parâmetros REQ -> representa os dados da aplicação e RES 
// -> representa os dados que vai para o frontend
server.get('/teste', (req, res) => {
  return res.send('Hello World');
})

```

Podemos testar em JSON também! 

```JavaScript
// Teste com JSON
server.get('/teste', (req, res) => {
  return res.json({teste: 'Deu certo!'});
})

```

# ROUTE PARAMS QUERY PARAMS

Entendendo o sistema de Query e Route com parametros.

Os query params são os valores que passamos na frente da rota, exemplo
= ?escola = FATEC

Os route params são os valores que passamos na rota, exemplo
= /escola/1

E por fim temos o Request body no qual são os valores que estão no corpo da requisição, exemplo:
= {escola: ‘FATEC’, tipo: ‘Backend’}

## Testando o query params
```JavaScript
// Testando o query params
server.get('/teste', (req, res) => {
  const escola = req.query.escola;
  return res.json({teste: `Estamos estudando na ${ escola }`});
})
```

## Testando o route params
```JavaScript
// Testando o route params
server.get('/teste/:id', (req, res) => {
  const id = req.params.id;
  return res.json({teste: `Id da escola: ${ id }`});
})
```

## Criando um Array e chama-lo pelo index

Vamos criar uma vetor e testar no APP do Insomnia

```JavaScript
// criando o vetor
const nomes = ['Clark', 'Lois', 'Bruce', 'Harley', 'Jason', 'Hal'];
```

Vamos atualizar novamente nosso código para a amostragem dos nossos componentes em json.

# Live Reload

Biblioteca de auto realod para o backend.

```bash
yarn nodemon -D
```
o -D é somente para a parte de desenvolvimento

Para rodar o servidor sem problemas, é necessário chamar o index.js no terminal e para isso usamos:

```bash
nodemon index.js
```

Porém, é muito chato toda hora escrever esse código. E por isso vamos criar um script dentro do nosso pacote de dependências.

```json
"scripts": {
    "dev": "nodemon index.js"
  },
```
Feito isso! Basta colocarmos o código no terminal:

```bash
yarn dev
```

# CRUD

//Criando um CRUD Create, Read, Update e Delete

//Retornar todos os nomes
server.get("/nomes", (req, res) => {

  return res.json(nomes)

});

//Retornar um único nome
server.get("/nomes/:index", (req, res) => {
  const { index } = req.params;
  return res.json(nomes[index]);
});

//Criar um novo nome
server.post("/nomes",(req, res) => {
  const { name } = req.body ;
  nomes.push(name);

  return res.json(nomes)
});

//Alterando um nome
server.put("/nomes/:index", (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  nomes[index] = name;

  return res.json(nomes);
});

//Excluido algum nome
server.delete("/nomes/:index", (req, res) => {
  const { index } = req.params;

  nomes.splice(index, 1);
  return res.json(nomes);
});


