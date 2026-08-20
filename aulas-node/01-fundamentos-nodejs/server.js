import http from "http";


//cabeçalhos (Requisição/Resposta) => Metadados

const users = []

const server = http.createServer((req, res) => {
  // ROTAS HTTP: método e url da requisição
  const { method, url } = req;

  if (method === "GET" && url === "/users") {
    return res
    .setHeader('Content-type', 'application/json')
    .end(JSON.stringify(users))
  }

  if (method == "POST" && url === "/users") {
    users.push({
      id: 1,
      name: "John Wick",
      email: "jwmoovies@gmail.com",
    });

    return res.end("Criação de usuários");
  }

  return res.end("Nemhum dos dois");
});

server.listen(3333);

//GET, POST. PUT. PATCH, DELETE
//são os mais importantes
//Get == pegar, pedir, chamar dados
//post == criar coisas
//put == editar, atualizar, mudar (objetos inteiros)
//patch == atualizar informação específica de um recurso no backend
//ex: rota específica que chama quando o usuário quer mudar apenas o nome do cadastro
//delete == apagar
// http :3333
//pra testar requisições

// GET /users => Buscando usuários no backend
// POST /users => criando usuário no backend

//duas urls com métodos dife

//para atualização automática a cada alteração
// node --watch aulas-node/01-fundamentos-nodejs/server.js

//statefull - stateless
// statefull depende de memoria
