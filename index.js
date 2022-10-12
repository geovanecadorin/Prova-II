const express = require('express');

const server = express();

server.use(express.json())

const funcionarios = [{

  id: 0,
  nome: 'Lucas',
  funcao: 'Entregador',
  salario: '2000.00'
},

{
  id: 1,
  nome: 'Leoncio',
  funcao: 'Fazendeiro',
  salario: '5000.00'
},

{
  id: 2,
  nome: 'Goku',
  funcao: 'Lutador',
  salario: '500.00'
},

];

server.get("/funcionarios", (req, res) => {

  let empregados = "";
  funcionarios.forEach((value, index) => {
    empregados += `<tr>
      <td>${index}</td>
      <td>${value.nome}</td>
      <td>${value.funcao}</td>
      <td>${value.salario}</td>
    </tr>`;
  });

  return res.send(`<!DOCTYPE html>
  <html>
    <body style="text-align: center">
      <h1 >Trabalho_Full_Stack</h1>
      
      <table class="tabela-funcionarios">
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Função</th>
          <th>Salário</th>
        </tr>
        ${empregados}
      </table>
      <style>
        .tabela-funcionarios {
          font-family: arial, sans-serif;
          border-collapse: collapse;
          width: 100%;
        }
        .tabela-funcionarios td, .tabela-funcionarios th {
          border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;
        }
        .tabela-funcionarios tr:nth-child(even) {
          background-color: #dddddd;
        }
       </style>
      </body>
  </html> `);

});

server.get("/funcionarios/:index", (req, res) => {
  const { index } = req.params;
  return res.json(funcionarios[index]);
});

server.post("/funcionarios", (req, res) => {
  const novo = req.body;
  funcionarios.push(novo);

  return res.json(funcionarios)
});

server.put("/funcionarios/:index", (req, res) => {
  const { index } = req.params;
  const novo = req.body;

  funcionarios[index] = novo;

  return res.json(funcionarios);
});

server.delete("/funcionarios/:index", (req, res) => {
  const { index } = req.params;

  funcionarios.splice(index, 1);
  return res.json(funcionarios);
});

server.listen(process.env.PORT);